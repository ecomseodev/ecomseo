"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
    posthog?: typeof posthog;
  }
}

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;

/* Init at module scope, not in an effect. React runs child effects before
 * parent effects, so PageViewTracker's capture() would fire before a parent
 * effect could init() and the first pageview would be dropped on the floor. */
if (typeof window !== "undefined" && POSTHOG_KEY && !posthog.__loaded) {
  posthog.init(POSTHOG_KEY, {
    // Same-origin proxy (see `/ingest` rewrites in next.config.ts) so ad
    // blockers don't drop ~20% of events.
    api_host: "/ingest",
    // Toolbar + "view in app" links still need the real host.
    ui_host: "https://eu.posthog.com",
    // Anonymous visitors stay anonymous — no person profile until identify().
    person_profiles: "identified_only",
    capture_pageview: false,
  });
  // The script-tag install exposes this automatically; the npm module does
  // not. Needed for the PostHog toolbar, GTM tags and console debugging.
  window.posthog = posthog;
}

/* App Router does not fire a page load between route changes, so autocapture's
 * built-in pageview never fires after the first paint. Capture manually. */
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!POSTHOG_KEY) return;
    const query = searchParams.toString();
    posthog.capture("$pageview", {
      $current_url: window.origin + pathname + (query ? `?${query}` : ""),
    });
  }, [pathname, searchParams]);

  return null;
}

export default function PostHogAnalytics() {
  // Tag the Clarity session with the PostHog distinct id so a session found in
  // one tool can be looked up in the other. Clarity's inline loader and this
  // effect race, so wait for its queue stub to exist (bounded, ~10s).
  useEffect(() => {
    if (!POSTHOG_KEY) return;
    let tries = 0;
    const timer = setInterval(() => {
      if (window.clarity) {
        window.clarity("set", "posthog_distinct_id", posthog.get_distinct_id());
        clearInterval(timer);
      } else if (++tries > 20) {
        clearInterval(timer);
      }
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <Suspense fallback={null}>
      <PageViewTracker />
    </Suspense>
  );
}

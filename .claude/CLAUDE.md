# EcomSEO website (ecomseo.co)

Marketing + content site for EcomSEO, the premium eCom SEO agency. Big programmatic-SEO site: service pages, industry/platform pages, academy + blog content, case studies, location pages, and a free SEO audit tool used as the lead-gen funnel.

## Stack
- Next.js 15 (App Router) · React 18 · TypeScript
- Tailwind CSS · Framer Motion · DM Sans (@fontsource-variable)
- Playwright + html-to-image (SVG diagram / tool-preview capture scripts)
- Deployed on Vercel. GitHub: `ecomseodev/ecomseo` (public). Default branch `main`.
- No database. Content is code (TS files).
- One env var: `NEXT_PUBLIC_POSTHOG_KEY` (PostHog EU project token). Set it in the
  Vercel dashboard for Production/Preview/Development, and in `.env.local` for
  local dev. If unset, PostHog silently no-ops — nothing else in `src/` reads env.

## Analytics
Three tools, all loaded from `src/app/layout.tsx`:
- **GTM** (`GTM-PWFC4VSN`) — inline snippet, `afterInteractive`.
- **Microsoft Clarity** (`xxgvsjy2zs`) — inline snippet, gated on the
  `CLARITY_PROJECT_ID` const at the top of `layout.tsx`. Blank it to disable.
- **PostHog** (EU cloud) — `src/components/analytics/PostHogAnalytics.tsx`.

PostHog notes, in case any of this looks odd later:
- `posthog.init()` runs at **module scope**, not in a `useEffect`. React fires
  child effects before parent effects, so an effect-based init loses the first
  `$pageview` — the child's `capture()` runs first and is dropped.
- Traffic is proxied through **`/ingest`** via `beforeFiles` rewrites in
  `next.config.ts`, so ad blockers don't eat events. Those rewrites MUST stay
  above the catch-all locale rewrite, and `ingest` is in its negative lookahead.
  `skipTrailingSlashRedirect: true` is required or ingest POSTs get 308'd away.
- `capture_pageview: false` — App Router has no page load between routes, so
  pageviews are captured manually in `PageViewTracker` (needs the `Suspense`
  wrapper because it reads `useSearchParams`).
- `person_profiles: "identified_only"` — anonymous visitors don't create person
  profiles, which keeps billing sane on a high-traffic pSEO site.
- Clarity sessions are tagged with the PostHog `distinct_id` (custom tag
  `posthog_distinct_id`) so a session in one tool can be found in the other.
- **posthog-js drops all events when it detects a bot** (`navigator.webdriver`,
  headless UA, `userAgentData` brands). Playwright/Lighthouse will look like
  they aren't tracking. That's correct behaviour, not a bug.

## Commands
- `npm run dev` — local dev (localhost:3000)
- `npm run build` — production build (verifies the whole site compiles)
- `npm run lint`
- Build ignores TS + ESLint errors (`next.config.ts`), so they will NOT fail the build. Lint manually.

## Routing & i18n
- Locale-prefixed: `src/app/[locale]/...`. Locales: `en, de, fr, es, it, nl` (default `en`, BASE_URL https://ecomseo.co).
- i18n config in `src/lib/i18n/` (config, dictionaries, translations, slugs, getDictionary). Slugs are localized per locale (e.g. blog = ratgeber/articulos/articles/articoli/kennisbank).
- Heavy middleware + `next.config.ts` rewrites/redirects handle locale routing, UK location pages (no locale prefix, e.g. `/seo-agency-london`), and legacy URL → funnel redirects. Edit redirects in `next.config.ts`.

## Layout
- `src/app/[locale]/` — pages: money pages (`ecommerce-seo`, `-services`, `-platforms`, `-industries`, `link-building`, `content-writing`, `keyword-research`), platform pages (`amazon-seo`, `adobe-commerce-seo`, `bigcommerce-seo`...), industry pages (`beauty-seo`, `fashion-seo`, `consumables-seo`), `academy/[slug]`, `blog/[slug]` + author, `cases/[slug]`, `location/[slug]`, `demo` (audit tool), `contact`, `faq`, `team`, `client-dashboard`.
- `src/app/api/` — ~22 SEO audit API routes powering the `/demo` tool (core-web-vitals, schema-validate, sitemap-extract, shopify-audit, etc.).
- `src/components/` — `sections`, `service`, `tools`, `academy`, `cases`, `location`, `guides`, `ui`, `JsonLd.tsx`.
- `src/lib/` — `blog/` (articles + types), `academy/` (topics + index), `i18n/`, `navigation/`, `sitemap/`, `tools/`, `seo-utils.ts`, `jsonLd.ts`, `pixel-width.ts`, `parseInlineLinks.tsx`, `export-utils.ts`.
- `src/data/` — `caseStudies.ts`, `faqData.ts`, `locations.ts`, `locationMaps.ts`.
- `scripts/` — Playwright capture scripts (tool previews, CWV debugging) + `regen-location-maps.py`.

## Content model
- Blog: 31 articles in `src/lib/blog/articles/` (TS). Academy: 10 topic clusters in `src/lib/academy/topics/`.
- Guides were merged into Academy — old `/guides/*` URLs 301 to `/academy/*` (see redirects).

## Conventions
- SEO is the product: every page sets metadata + JSON-LD (`src/lib/jsonLd.ts`, `JsonLd.tsx`). Maintain hreflang/canonical correctness when adding pages or locales.
- 700+ inline SVG diagrams across content — recent history is overflow-fixing passes. There are scripted tools for this; don't hand-fix at scale.
- Sitemaps are split + dynamic (`/sitemap-*.xml`). Add new section types to `src/lib/sitemap/`.

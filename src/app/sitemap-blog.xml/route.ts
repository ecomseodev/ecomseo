import {
  type UrlEntry,
  wrapUrlset,
  sitemapResponse,
} from "@/lib/sitemap/helpers";
import { allArticles } from "@/lib/blog/articles";
import { blogCanonicalOverrides } from "@/lib/blog/canonicalOverrides";
import { locales, publicLocalizedUrl } from "@/lib/i18n/config";

export const revalidate = 3600;

/**
 * sitemap-blog.xml
 * Blog index, all articles (with real publish dates), and author pages.
 */

export async function GET() {
  const entries: UrlEntry[] = [];

  // Blog index page
  for (const locale of locales) {
    entries.push({
      loc: publicLocalizedUrl(locale, "/blog"),
      lastmod: "2026-03-24T00:00:00.000Z",
      changefreq: "weekly",
      priority: "0.7",
    });
  }

  // Individual blog articles — use their real publishDate
  for (const article of allArticles) {
    // Posts canonicalised to another page are not listed.
    if (blogCanonicalOverrides[article.slug]) continue;
    const lastmod = `${article.publishDate}T00:00:00.000Z`;
    for (const locale of locales) {
      entries.push({
        loc: publicLocalizedUrl(locale, `/blog/${article.slug}`),
        lastmod,
        changefreq: "monthly",
        priority: "0.7",
      });
    }
  }

  // Author pages are noindex, so they are not listed.

  return sitemapResponse(wrapUrlset(entries));
}

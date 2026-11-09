// Blog posts that cannibalize a stronger destination → canonical points at it.
// Keys are the internal English slug (the page renders fine in every locale,
// but Google is told to consolidate ranking signal on the destination).
//
// Note on cannibalization audit (GSC export 2026-05-15): most of the 45
// flagged groups are *stale* — they snapshot impressions from before the
// existing redirects/canonicals took effect (UK location pages, /[locale]/tools/X
// → /[locale]/[localized-tools]/X, /es/woocommerce-seo → /es/seo-woocommerce,
// etc., all 301 correctly today). Those groups will consolidate as Google
// recrawls. The two real remaining problems are below.
export const blogCanonicalOverrides: Record<string, string> = {
  // Blog vs academy lessons that cover the same ground
  "ecommerce-homepage-seo": "/academy/homepage-seo-for-ecommerce",
  "ecommerce-seo-migration": "/academy/platform-migration-seo",
  // Blog post about Magento/Adobe Commerce SEO was outranking the dedicated
  // academy guide for "magento seo optimierung" (DE) and "seo para adobe
  // commerce" (ES). Academy is the canonical learning resource.
  "magento-ecommerce-seo": "/academy/magento-seo-guide",
  // Blog about packaging/pricing was splitting "ecommerce seo packages"
  // signal with the actual /pricing page. /pricing is the transactional
  // intent match and should consolidate the ranking signal.
  "ecommerce-seo-packages": "/pricing",
};

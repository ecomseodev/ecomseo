/**
 * Which de/fr/es/it pages Google may index.
 *
 * English and Dutch are the priority markets and are always indexable.
 * For German, French, Spanish and Italian only pages that earned at least
 * 1 click or 100 impressions in Search Console (3 months to 2026-11-12) stay
 * indexable, plus each locale's homepage. Every other page in those locales
 * gets `X-Robots-Tag: noindex, follow` and is left out of sitemaps and
 * hreflang. Google had crawled and declined most of them.
 *
 * To bring a page back: add its public path here.
 */

const NOINDEX_LOCALES = ["de", "fr", "es", "it"];

export const INDEXABLE_LOCALE_PATHS = new Set<string>([
  "/de",
  "/de/academy/fashion-apparel-seo",
  "/de/ratgeber/ecommerce-homepage-seo-leitfaden",
  "/de/ratgeber/ecommerce-seo-checkliste",
  "/de/ratgeber/ecommerce-seo-fehler",
  "/de/ratgeber/ecommerce-seo-schluesselwoerter",
  "/de/ratgeber/magento-ecommerce-seo-leitfaden",
  "/de/ratgeber/mode-ecommerce-seo",
  "/de/seo-agentur-braunschweig",
  "/de/seo-agentur-dresden",
  "/de/seo-agentur-koeln",
  "/de/seo-agentur-niederoesterreich",
  "/de/seo-agentur-salzburg",
  "/de/seo-akademie/haus-garten-seo",
  "/de/seo-akademie/magento-seo-leitfaden",
  "/de/seo-akademie/mode-bekleidung-seo",
  "/de/seo-akademie/produktseiten-seo",
  "/de/seo-akademie/seo-ab-testing",
  "/de/seo-akademie/wettbewerber-keyword-analyse",
  "/de/seo-akademie/wie-google-online-shops-findet",
  "/de/seo-tools/canonical-checker",
  "/de/seo-tools/core-web-vitals",
  "/de/seo-tools/duplicate-content",
  "/de/seo-tools/heading-checker",
  "/de/seo-tools/interne-links-analyse",
  "/de/seo-tools/redirect-checker",
  "/de/seo-tools/robots-txt-analyse",
  "/de/seo-tools/serp-simulator",
  "/de/seo-tools/shopping-feed-validator",
  "/de/seo-tools/sitemap-extractor",
  "/de/spielzeug-seo",
  "/de/unser-team/dimitar-georgiev",
  "/es",
  "/es/academia-seo/analisis-backlinks-competencia",
  "/es/academia-seo/arquitectura-sitio-ecommerce",
  "/es/academia-seo/articulos-invitados-ecommerce",
  "/es/academia-seo/automatizacion-seo-ecommerce",
  "/es/academia-seo/autoridad-tematica-ecommerce",
  "/es/academia-seo/calculo-roi-seo",
  "/es/academia-seo/datos-estructurados-productos",
  "/es/academia-seo/difusion-email-enlaces",
  "/es/academia-seo/intencion-busqueda-ecommerce",
  "/es/academia-seo/planificacion-tareas-seo",
  "/es/academia-seo/rastreo-indexacion-paginas-producto",
  "/es/academia-seo/seguimiento-posiciones-ecommerce",
  "/es/agencia-seo-alicante",
  "/es/agencia-seo-logrono",
  "/es/agencia-seo-mallorca",
  "/es/agencia-seo-tenerife",
  "/es/agencia-seo-valladolid",
  "/es/agencia-seo-vigo",
  "/es/agencia-seo-zaragoza",
  "/es/articulos/agencias-seo-ecommerce",
  "/es/articulos/como-hacer-auditoria-seo-ecommerce",
  "/es/articulos/errores-seo-ecommerce",
  "/es/articulos/por-que-seo-importante-ecommerce",
  "/es/articulos/seo-ecommerce-magento",
  "/es/articulos/seo-ecommerce-shopify",
  "/es/herramientas-seo/analizador-enlaces-internos",
  "/es/herramientas-seo/analizador-robots-txt",
  "/es/herramientas-seo/auditor-imagenes",
  "/es/herramientas-seo/clasificador-tipo-pagina",
  "/es/herramientas-seo/comparacion-sitemap",
  "/es/herramientas-seo/comparacion-velocidad-sitio",
  "/es/herramientas-seo/contenido-duplicado",
  "/es/herramientas-seo/extractor-sitemap",
  "/es/herramientas-seo/validador-feed-shopping",
  "/es/herramientas-seo/validador-schema",
  "/es/herramientas-seo/verificador-encabezados",
  "/es/herramientas-seo/verificador-indexabilidad",
  "/es/link-building-seo",
  "/es/magento-seo",
  "/es/seo-juguetes",
  "/es/seo-woocommerce",
  "/fr",
  "/fr/academie-seo/analyse-backlinks-concurrents",
  "/fr/academie-seo/architecture-site-ecommerce",
  "/fr/academie-seo/balises-canonical-ecommerce",
  "/fr/academie-seo/comment-google-trouve-boutiques-en-ligne",
  "/fr/academie-seo/fondamentaux-backlinks-ecommerce",
  "/fr/academie-seo/mots-cles-produit-vs-categorie",
  "/fr/academie-seo/recherche-mots-cles-ecommerce",
  "/fr/academie-seo/rp-digital-ecommerce",
  "/fr/academie-seo/seo-mode-vetements",
  "/fr/academie-seo/seo-page-accueil-ecommerce",
  "/fr/academie-seo/tendances-mots-cles-saisonnieres",
  "/fr/agence-seo-auvergne-rhone-alpes",
  "/fr/agence-seo-besancon",
  "/fr/agence-seo-bordeaux",
  "/fr/agence-seo-cannes",
  "/fr/agence-seo-clermont-ferrand",
  "/fr/agence-seo-ile-de-france",
  "/fr/agence-seo-lille",
  "/fr/agence-seo-nice",
  "/fr/agence-seo-paris",
  "/fr/articles/comment-faire-audit-seo-ecommerce",
  "/fr/articles/consultant-seo-ecommerce",
  "/fr/articles/contenu-seo-ecommerce",
  "/fr/articles/forfaits-seo-ecommerce",
  "/fr/articles/outils-seo-ecommerce",
  "/fr/articles/seo-ecommerce-b2b",
  "/fr/articles/seo-ecommerce-inde",
  "/fr/articles/seo-ecommerce-mode",
  "/fr/articles/seo-off-page-ecommerce",
  "/fr/articles/seo-pages-categories-ecommerce",
  "/fr/articles/strategie-seo-ecommerce",
  "/fr/articles/tarifs-seo-ecommerce",
  "/fr/equipe",
  "/fr/netlinking",
  "/fr/outils-seo/audit-seo-ecommerce",
  "/fr/outils-seo/audit-seo-shopify",
  "/fr/outils-seo/contenu-duplique",
  "/fr/outils-seo/simulateur-serp",
  "/fr/outils-seo/validateur-flux-shopping",
  "/fr/outils-seo/verificateur-indexabilite",
  "/fr/outils-seo/verificateur-redirection",
  "/fr/outils-seo/verificateur-titres",
  "/fr/seo-beaute",
  "/fr/seo-bigcommerce",
  "/fr/seo-magento",
  "/fr/seo-mode",
  "/fr/seo-woocommerce",
  "/it",
  "/it/accademia-seo/digital-pr-ecommerce",
  "/it/accademia-seo/guida-seo-magento",
  "/it/accademia-seo/link-building-link-rotti",
  "/it/accademia-seo/navigazione-filtrata-seo",
  "/it/articoli/agenzie-seo-ecommerce",
  "/it/articoli/prezzi-seo-ecommerce",
  "/it/articoli/seo-ecommerce-india",
  "/it/articoli/seo-pagine-categoria-ecommerce",
  "/it/servizi-seo-ecommerce",
  "/it/strumenti-seo/analisi-link-interni",
  "/it/strumenti-seo/analisi-robots-txt",
  "/it/strumenti-seo/audit-seo-ecommerce",
  "/it/strumenti-seo/confronto-velocita-sito",
  "/it/strumenti-seo/estrattore-sitemap",
  "/it/strumenti-seo/validatore-feed-shopping",
  "/it/strumenti-seo/verifica-canonical",
  "/it/strumenti-seo/verifica-indicizzabilita",
  "/it/strumenti-seo/verifica-og",
]);

/**
 * City pages taken out of the index on 2026-11-12. UK and Dutch cities with
 * no Search Console impressions (3 months) and little demand. Kept: NL
 * leeuwarden, apeldoorn, groningen, almere, zwolle, enschede, utrecht,
 * noord-holland, amsterdam, rotterdam; UK london, manchester, birmingham,
 * bristol, leeds (UK review at week 8, 2027-01-04).
 */
export const NOINDEX_CITY_PATHS = new Set<string>([
  ...["eindhoven", "den-haag", "breda", "tilburg", "arnhem", "nijmegen",
    "haarlem", "amersfoort", "den-bosch", "leiden", "maastricht", "deventer",
    "dordrecht", "delft", "hilversum", "roosendaal", "zoetermeer",
    "zuid-holland", "nederland"].map((c) => `/nl/locaties/seo-bureau-${c}`),
  ...["edinburgh", "essex", "newcastle", "surrey", "hertfordshire", "oxford",
    "sheffield", "liverpool", "nottingham"].map((c) => `/seo-agency-${c}`),
]);

function normalise(pathname: string): string {
  const p = pathname.split("?")[0].split("#")[0];
  return p.length > 1 ? p.replace(/\/+$/, "") : p;
}

/** True when a public URL path must not be indexed. */
export function isNoindexPath(pathname: string): boolean {
  const p = normalise(pathname);
  if (/(^|\/)client-dashboard(\/|$)/.test(p)) return true;
  if (NOINDEX_CITY_PATHS.has(p)) return true;
  const locale = p.split("/")[1];
  if (!NOINDEX_LOCALES.includes(locale)) return false;
  return !INDEXABLE_LOCALE_PATHS.has(p);
}

/** Same check for a full URL (sitemaps, hreflang). */
export function isNoindexUrl(url: string): boolean {
  try {
    return isNoindexPath(new URL(url).pathname);
  } catch {
    return false;
  }
}

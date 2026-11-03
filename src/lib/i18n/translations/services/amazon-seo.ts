import type { Locale } from "../../config";
import type { ServicePageProps } from "@/components/service/ServicePageTemplate";

export const amazonSeoData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "Amazon SEO",
      heading: "Amazon SEO services built to sell",
      subtitle:
        "More relevant searches, a better product page and a measurable route to purchase. We build the campaign around your ASINs, then connect the work to sales and contribution.",
      ctaText: "Get a free ROI opportunity audit",
    },
    trustBar: "Trusted by 20+ 7 to 9-figure ecommerce brands",
    trustBarLogos: [
      { src: "/images/clients/heyshape.png", alt: "HEYSHAPE", noFilter: true },
      { src: "/images/clients/hike.svg", alt: "Hike Footwear" },
      { src: "/images/clients/me-logo.png", alt: "Mother's Earth" },
      { src: "/images/clients/tobios-logo.png", alt: "Tobio's Kits" },
    ],
    trustBarMoreBrands: "+ 20 more 7 to 9-figure DTC brands",
    sections: [
      {
        type: "benefits",
        badge: "The commercial objective",
        heading: "Win the searches that matter. Then earn the order.",
        subtitle: "Success means orders and contribution. Keyword positions explain the progress.",
        benefits: [
          {
            title: "Relevant visibility",
            description:
              "We match your product to the buying queries it deserves to appear for, instead of chasing every high-volume term.",
          },
          {
            title: "Listing conversion",
            description:
              "We give shoppers the evidence they need to choose your product: clear copy, complete attributes and images that answer the real objections.",
          },
          {
            title: "Profitable acquisition",
            description:
              "We send qualified external traffic to your ASINs and measure what happens after the click, down to orders and contribution.",
          },
        ],
      },
      {
        type: "stats",
        badge: "Proven on ecommerce brands",
        heading: "The same team. Real search results, before Amazon.",
        subtitle:
          "Case study: Tobio's. The same discipline we bring to Amazon - a query-level baseline, shipped pages, then a measured result.",
        stats: [
          { value: "+399%", label: "Organic traffic (9,318 to 46,471)" },
          { value: "+153%", label: "Ranking keywords (2,012 to 5,087)" },
          { value: "+380%", label: "Top 3 rankings (117 to 562)" },
          { value: "+188%", label: "Organic impressions (466K to 1.34M)" },
        ],
      },
      {
        type: "process",
        badge: "Scope at a glance",
        heading: "One campaign. Clear deliverables.",
        subtitle: "Four workstreams, each with a defined output and a defined check.",
        process: [
          {
            number: "01",
            title: "Research and baseline",
            description:
              "ASIN audit, keyword clusters and a prioritised query-to-product map. Checked by: approved priority ASINs and a recorded baseline.",
          },
          {
            number: "02",
            title: "On-page Amazon SEO",
            description:
              "Listing copy, backend term recommendations, attribute fixes and creative briefs. Checked by: approved changes, live checks and query monitoring.",
          },
          {
            number: "03",
            title: "Off-page acquisition",
            description:
              "Comparison content, relevant publisher coverage and Amazon-linked landing pages. Checked by: live URLs, working tracking and traffic quality.",
          },
          {
            number: "04",
            title: "Measurement and iteration",
            description:
              "Rank tracking, attribution reports and a dated test and change log. Checked by: a monthly decision to improve, expand or stop.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Research",
        heading: "Choose the right keyword battles",
        subtitle: "Intent comes first. We map shopper language to a specific ASIN rather than chase every high-volume term.",
        richTextBlocks: [
          {
            heading: "Four query clusters, four different decisions",
            body: "Core product terms like \"travel backpack\" get assessed on relevance, current rank and competition. Specific-need queries like \"carry-on backpack with laptop pocket\" get matched to the product features that answer them. Comparison queries like \"best travel backpack\" get a useful external comparison page with a tracked CTA. Brand demand like \"[brand] travel backpack\" gets checked for discoverability and the correct destination.",
          },
          {
            heading: "Competitor keyword gaps, filtered hard",
            body: "We compare relevant competitor ASINs, then filter for terms that actually fit your product and buying intent. A gap only counts if you can win the sale. The deliverable is a ranked opportunity map with target ASIN, keyword cluster, current visibility and proposed action.",
            href: "/keyword-research",
            hrefLabel: "How we run keyword research",
          },
        ],
      },
      {
        type: "benefits",
        badge: "On-page Amazon SEO",
        heading: "Make the listing easier to find. And easier to buy.",
        subtitle: "For every ASIN in scope we deliver a gallery audit, shot list, image copy and an A+ module brief, then validate claims, mobile readability and the live content after approval.",
        benefits: [
          {
            title: "Title",
            description:
              "Lead with the product identity and relevant primary terms. Keep it readable and compliant.",
          },
          {
            title: "Bullets and description",
            description:
              "Answer buying objections with verified benefits, specifications and use cases.",
          },
          {
            title: "Backend terms",
            description:
              "Add relevant synonyms and missed terms. Remove duplication, unrelated words and prohibited brand names.",
          },
          {
            title: "Catalog attributes",
            description:
              "Complete accurate product type, size, material and other category attributes. Review variation accuracy.",
          },
          {
            title: "Main image and gallery",
            description:
              "A recognisable product on a compliant background, then size, use, contents and substantiated benefits across the gallery.",
          },
          {
            title: "A+ Content",
            description:
              "Comparison, brand context and answers to buying questions. New photography is scoped separately if you need it.",
          },
        ],
      },
      {
        type: "tips",
        badge: "How we run it",
        heading: "7 rules we run every Amazon campaign on",
        subtitle: "Most Amazon SEO goes wrong in the measurement, not the copy. These keep us honest.",
        tips: [
          {
            number: "01",
            title: "Test a hypothesis, not a hunch",
            body: "Use the live listing as the control. Version B answers one specific buying objection more clearly - in the title, an image, the bullets or A+ content. Define the metric first, review the complete result and approve before publishing. Where eligible we use Amazon's randomised experiments, with settings recorded and auto-publish off unless you approve it.",
          },
          {
            number: "02",
            title: "Find the leak before adding traffic",
            body: "Say a brand wins 12% of impressions but only 7% of clicks and 5% of purchases. Sending more traffic just pours it through the same leak. We inspect the title, main image and offer first, then scale external acquisition.",
          },
          {
            number: "03",
            title: "Track organic and sponsored separately",
            body: "Paid placements can make organic progress look better or worse than it is. We tag by ASIN and keyword cluster, track competitors, and annotate every listing, price, ad and stock change so you can see what actually moved.",
          },
          {
            number: "04",
            title: "A keyword rank isn't a category rank",
            body: "A product can sit at position 2 for one query and 35 for a close variant. Best Sellers Rank doesn't replace query-level tracking. We investigate the weak terms one by one instead of hiding them in an average.",
          },
          {
            number: "05",
            title: "Annotate changes, don't claim causation",
            body: "A rank jump the week after a listing update might be the update. It might also be a competitor going out of stock, a price change or a new ad campaign. We record ads, price, stock and competitor moves next to every listing change and read the context before crediting anything.",
          },
          {
            number: "06",
            title: "Tag every external asset",
            body: "One tracked link per meaningful page or placement, pointing at the correct marketplace and ASIN, tested before launch. For Brand Registry accounts, Amazon Attribution shows clicks, add-to-carts and sales per link, and the Brand Referral Bonus pays back around 10% of attributed sales. We confirm which applies to your account before launch.",
          },
          {
            number: "07",
            title: "Revenue is nice. Contribution matters.",
            body: "1,000 tracked visits at an 8% purchase rate and a $40 average order is $3,200 in sales. Take off 70% for product, fees, fulfilment and returns, then $700 of campaign cost, and $260 is left toward overhead and profit. Break-even is $2,333 in sales at a 30% contribution margin. We report that math, not just top-line revenue.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Off-page acquisition",
        heading: "Catch demand outside Amazon. Send buyers in.",
        subtitle: "Shoppers research on Google and AI assistants before they open Amazon. We meet them there with useful content and a tracked, ASIN-specific route to the listing.",
        richTextBlocks: [
          {
            heading: "Comparison content that earns the click",
            body: "We build query-led comparison pages and buying guides on approved domains or relevant publications, around real buying questions like which travel backpack fits a carry-on limit. Every page gets original content, fair criteria, disclosed commercial relationships, a mobile check and a working destination for every CTA.",
            href: "/content-writing",
            hrefLabel: "Our content writing service",
          },
          {
            heading: "Relevant sites, not bulk links",
            body: "Amazon's own domain is strong, but domain authority and page authority are different things. We build page-level authority with relevant placements, checked for topical fit, real traffic, spam signals and disclosure. Every asset goes into a register with URL, audience, cost, owner, destination and tracking tag.",
            href: "/link-building",
            hrefLabel: "How we approach link building",
          },
          {
            heading: "Scale deliberately",
            body: "Each external brief is matched to a relevant product and shopper need, measured on qualified outbound clicks and attributed orders. We start with close product-fit terms and only add broader themes once the traffic proves useful. We keep product facts and attributes consistent so Amazon's AI shopping assistant answers buying questions correctly. Direct listing-link tests only run after a policy review and a defined hypothesis.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Amazon vs Google",
        heading: "Amazon SEO vs Google SEO: where they differ and where they meet",
        subtitle: "Two different ranking systems. One commercial goal.",
        richTextBlocks: [
          {
            heading: "On Amazon, relevance and sales decide",
            body: "Inside Amazon, rankings come down to whether the listing matches the query and whether the shopper buys. Titles, bullets, backend terms, attributes, images, price, reviews and stock all feed that. Long-form content and technical crawl fixes don't apply inside a listing's character limits.",
          },
          {
            heading: "Off Amazon, Google discipline still pays",
            body: "The research that sends a shopper to Amazon often starts on Google or an AI assistant. That's where classic SEO - comparison content, relevant authority and query-level tracking - catches demand your competitors miss. We keep Google visibility and Amazon ranks as separate metrics, so neither gets credit for the other's work.",
            href: "/blog/ecommerce-seo-keywords",
            hrefLabel: "Ecommerce SEO keywords across platforms",
          },
        ],
      },
      {
        type: "process",
        badge: "Launch plan",
        heading: "The first 90 days. Built around evidence.",
        process: [
          {
            number: "01",
            title: "Days 1-30: audit and launch",
            description:
              "Baseline priority ASINs, map queries, approve listing edits and the first external content plan. Output: baseline, approved changes and tracking QA.",
          },
          {
            number: "02",
            title: "Days 31-60: publish and learn",
            description:
              "Publish approved assets, monitor indexing and clicks, run eligible listing tests and review Amazon data. Output: live asset register and performance review.",
          },
          {
            number: "03",
            title: "Days 61-90: improve and decide",
            description:
              "Refresh weak pages and claims, review mature attribution and decide which themes merit further investment. Output: optimisation log and next-period plan.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Scope of work",
        heading: "You see the work that ships. Every cycle.",
        subtitle: "Clear approvals, better execution, no surprises. Account control stays with you.",
        deliverables: [
          { title: "At setup", description: "ASIN audit, query map, baseline, approved production plan and an access and tracking register. Checked: ASINs, owners and priorities confirmed." },
          { title: "Per in-scope ASIN", description: "Listing recommendations, approved copy and creative briefs, and post-change QA. Checked: approval recorded and live content verified." },
          { title: "Per external asset", description: "Approved brief, published URL, destination, tracking and disclosure record. Checked: mobile, links and analytics." },
          { title: "Weekly and monthly", description: "Weekly progress update, then monthly results, cost review and the next delivery plan, with open decisions and next actions named." },
          { title: "What we own", description: "Research and production. We prepare the campaign, produce the agreed assets and report what shipped and what happened." },
          { title: "What you provide", description: "Access and product truth: product evidence, brand assets, account permissions, margins and a named approver." },
          { title: "Before launch", description: "A brand-specific scope covering ASIN count, asset quantities, revisions, ownership, fees, working budget and access." },
          { title: "Kept separate", description: "Listing and ad changes are coordinated with your account team. Paid media, account-health operations and new photography are scoped separately." },
        ],
      },
      {
        type: "team",
        badge: "The team",
        heading: "Who does the work",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategy & Innovation",
          bio: "Fabian leads Amazon SEO strategy. He has worked across multiple marketplaces for 8+ years and runs every Amazon engagement on the same rule: the work is judged on orders and contribution, not on keyword positions alone.",
          image: "/images/framer/fabian-van-til-new.jpeg",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technical & On-Page SEO",
            bio: "Dimitar builds the data systems and tracking infrastructure for Amazon campaigns. He handles ranking analysis, keyword research automation, on-page listing optimization, and performance monitoring.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://bg.linkedin.com/in/dimitar-georgiev-seo-expert",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Martinijan runs external traffic strategies and digital PR to boost Amazon listing authority. He builds the external signals that complement organic Amazon rankings.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Content, Link Building & PR",
            bio: "Gjorgi writes the Amazon listing copy and A+ content, and runs link building and PR campaigns for Amazon brands. He handles keyword mapping, bullet point optimization, backend search term strategy, and outreach to earn external links.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "How is Amazon SEO different from Google SEO?",
          answer:
            "Inside Amazon, rankings come down to query relevance and whether shoppers buy, so the work is listing copy, backend terms, attributes and creative. Google SEO still matters for the research shoppers do before they reach Amazon, which is where our comparison content and external acquisition come in. Read more about [ecommerce SEO keywords](/blog/ecommerce-seo-keywords) and how they differ across platforms.",
        },
        {
          question: "How long until we see results on Amazon?",
          answer:
            "The first 30 days cover the audit, baseline, approved listing edits and tracking. Days 31-60 are about publishing and early data, and by days 61-90 attribution has matured enough to decide which themes deserve more investment. Our [keyword research for ecommerce](/academy/keyword-research-for-ecommerce) guide explains the research behind it.",
        },
        {
          question: "How do you prove the campaign made money?",
          answer:
            "Every external asset gets its own tracked link to the correct marketplace and ASIN. For Brand Registry accounts, Amazon Attribution reports clicks, add-to-carts and sales per link, and the Brand Referral Bonus pays back around 10% of attributed sales. We then report contribution after product, Amazon and campaign costs, not just revenue.",
        },
        {
          question: "Do you manage Amazon PPC as well?",
          answer:
            "No. Paid media is scoped separately. We coordinate listing changes with your ad team and track organic and sponsored rankings separately, so you can see which one actually moved.",
        },
        {
          question: "Do backlinks matter for Amazon listings?",
          answer:
            "Amazon's domain is strong, but page-level authority is a different thing. We build relevant placements and comparison content that rank on Google and send qualified buyers to your ASINs. No link-farm volume, and direct listing-link tests only run after a policy review.",
        },
        {
          question: "What do you need from us?",
          answer:
            "Product evidence, brand assets, account permissions, margins and a named approver. Account control stays with you. We agree ASIN count, asset quantities, revisions, fees and working budget in a brand-specific scope before launch.",
        },
        {
          question: "Can you help with A+ Content and images?",
          answer:
            "Yes. For each ASIN in scope we deliver a gallery audit, shot list, image copy and A+ module brief, and validate the live content after approval. New photography is scoped separately. Our [content writing team](/content-writing) writes the copy.",
        },
        {
          question: "What Amazon marketplaces do you support?",
          answer:
            "All major Amazon marketplaces, including US, UK, DE, FR, IT, ES and NL. Our [keyword research](/keyword-research) is localised for each marketplace.",
        },
      ],
      miniCta: {
        heading: "Start with a free ROI opportunity audit",
        subtitle:
          "We assess the potential uplift across your priority ASINs before you commit to anything.",
      },
    },
  },
  de: {
    hero: {
      badge: "Amazon SEO",
      heading: "Amazon SEO, das verkauft",
      subtitle:
        "Mehr relevante Suchanfragen, eine bessere Produktseite und ein messbarer Weg zum Kauf. Wir bauen die Kampagne um Ihre ASINs und verknüpfen die Arbeit direkt mit Umsatz und Deckungsbeitrag.",
      ctaText: "Kostenloses ROI-Potenzial-Audit anfordern",
    },
    trustBar: "Mehr als 20 E-Commerce-Marken mit 7- bis 9-stelligem Umsatz vertrauen uns",
    trustBarLogos: [
      { src: "/images/clients/heyshape.png", alt: "HEYSHAPE", noFilter: true },
      { src: "/images/clients/hike.svg", alt: "Hike Footwear" },
      { src: "/images/clients/me-logo.png", alt: "Mother's Earth" },
      { src: "/images/clients/tobios-logo.png", alt: "Tobio's Kits" },
    ],
    trustBarMoreBrands: "+ 20 weitere DTC-Marken mit 7- bis 9-stelligem Umsatz",
    sections: [
      {
        type: "benefits",
        badge: "Das kommerzielle Ziel",
        heading: "Die Suchen gewinnen, die zählen. Dann die Bestellung holen.",
        subtitle: "Erfolg heißt Bestellungen und Deckungsbeitrag. Keyword-Positionen erklären nur den Fortschritt.",
        benefits: [
          {
            title: "Relevante Sichtbarkeit",
            description:
              "Wir ordnen Ihr Produkt den Kaufanfragen zu, für die es wirklich erscheinen sollte, statt jedem Begriff mit hohem Suchvolumen hinterherzulaufen.",
          },
          {
            title: "Listing-Konversion",
            description:
              "Wir geben Käufern die Belege, die sie für die Entscheidung brauchen: klare Texte, vollständige Attribute und Bilder, die die echten Einwände beantworten.",
          },
          {
            title: "Profitable Kundengewinnung",
            description:
              "Wir lenken qualifizierten externen Traffic auf Ihre ASINs und messen, was nach dem Klick passiert, bis hin zu Bestellungen und Deckungsbeitrag.",
          },
        ],
      },
      {
        type: "stats",
        badge: "Bewährt bei E-Commerce-Marken",
        heading: "Dasselbe Team. Echte Suchergebnisse, schon vor Amazon.",
        subtitle:
          "Fallstudie: Tobio's. Dieselbe Disziplin, die wir auf Amazon mitbringen - eine Ausgangsbasis auf Query-Ebene, umgesetzte Seiten, dann ein gemessenes Ergebnis.",
        stats: [
          { value: "+399 %", label: "Organischer Traffic (9.318 auf 46.471)" },
          { value: "+153 %", label: "Rankende Keywords (2.012 auf 5.087)" },
          { value: "+380 %", label: "Top-3-Rankings (117 auf 562)" },
          { value: "+188 %", label: "Organische Impressionen (466.000 auf 1,34 Mio.)" },
        ],
      },
      {
        type: "process",
        badge: "Leistungsumfang im Überblick",
        heading: "Eine Kampagne. Klare Ergebnisse.",
        subtitle: "Vier Arbeitsbereiche, jeder mit einem definierten Ergebnis und einer definierten Prüfung.",
        process: [
          {
            number: "01",
            title: "Recherche und Ausgangsbasis",
            description:
              "ASIN-Audit, Keyword-Cluster und eine priorisierte Zuordnung von Suchanfragen zu Produkten. Geprüft durch: freigegebene Prioritäts-ASINs und eine dokumentierte Ausgangsbasis.",
          },
          {
            number: "02",
            title: "On-Page Amazon SEO",
            description:
              "Listing-Texte, Empfehlungen für Backend-Suchbegriffe, Attribut-Korrekturen und Creative Briefs. Geprüft durch: freigegebene Änderungen, Live-Checks und Query-Monitoring.",
          },
          {
            number: "03",
            title: "Off-Page-Kundengewinnung",
            description:
              "Vergleichsinhalte, relevante Publisher-Platzierungen und Landingpages mit Link zu Amazon. Geprüft durch: Live-URLs, funktionierendes Tracking und Traffic-Qualität.",
          },
          {
            number: "04",
            title: "Messung und Iteration",
            description:
              "Ranking-Tracking, Attributionsberichte und ein datiertes Test- und Änderungsprotokoll. Geprüft durch: eine monatliche Entscheidung, zu verbessern, auszubauen oder zu stoppen.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Recherche",
        heading: "Die richtigen Keyword-Schlachten wählen",
        subtitle: "Die Suchabsicht kommt zuerst. Wir ordnen die Sprache der Käufer einer konkreten ASIN zu, statt jedem Begriff mit hohem Suchvolumen hinterherzulaufen.",
        richTextBlocks: [
          {
            heading: "Vier Query-Cluster, vier verschiedene Entscheidungen",
            body: "Kern-Produktbegriffe wie „Reiserucksack“ bewerten wir nach Relevanz, aktuellem Ranking und Wettbewerb. Bedarfsspezifische Anfragen wie „Handgepäck-Rucksack mit Laptopfach“ ordnen wir den Produktmerkmalen zu, die sie beantworten. Vergleichsanfragen wie „bester Reiserucksack“ bekommen eine hilfreiche externe Vergleichsseite mit getracktem CTA. Markennachfrage wie „[Marke] Reiserucksack“ prüfen wir auf Auffindbarkeit und das richtige Ziel.",
          },
          {
            heading: "Keyword-Lücken der Wettbewerber, streng gefiltert",
            body: "Wir vergleichen relevante Wettbewerber-ASINs und filtern dann nach Begriffen, die wirklich zu Ihrem Produkt und zur Kaufabsicht passen. Eine Lücke zählt nur, wenn Sie den Verkauf gewinnen können. Das Ergebnis ist eine priorisierte Chancen-Map mit Ziel-ASIN, Keyword-Cluster, aktueller Sichtbarkeit und vorgeschlagener Maßnahme.",
            href: "/keyword-research",
            hrefLabel: "So läuft unsere Keyword-Recherche",
          },
        ],
      },
      {
        type: "benefits",
        badge: "On-Page Amazon SEO",
        heading: "Das Listing leichter auffindbar machen. Und leichter kaufbar.",
        subtitle: "Für jede ASIN im Umfang liefern wir ein Galerie-Audit, eine Shotlist, Bildtexte und ein Briefing für die A+-Module und prüfen nach der Freigabe Aussagen, mobile Lesbarkeit und den Live-Content.",
        benefits: [
          {
            title: "Titel",
            description:
              "Mit der Produktidentität und den relevanten Hauptbegriffen beginnen. Lesbar und richtlinienkonform bleiben.",
          },
          {
            title: "Bullet Points und Beschreibung",
            description:
              "Kaufeinwände mit belegten Vorteilen, Spezifikationen und Anwendungsfällen beantworten.",
          },
          {
            title: "Backend-Suchbegriffe",
            description:
              "Relevante Synonyme und fehlende Begriffe ergänzen. Dopplungen, themenfremde Wörter und unzulässige Markennamen entfernen.",
          },
          {
            title: "Katalogattribute",
            description:
              "Produkttyp, Größe, Material und weitere Kategorieattribute korrekt und vollständig pflegen. Variationen auf Richtigkeit prüfen.",
          },
          {
            title: "Hauptbild und Galerie",
            description:
              "Ein klar erkennbares Produkt auf richtlinienkonformem Hintergrund, danach Größe, Anwendung, Lieferumfang und belegte Vorteile in der Galerie.",
          },
          {
            title: "A+ Content",
            description:
              "Vergleiche, Markenkontext und Antworten auf Kauffragen. Neue Fotografie wird bei Bedarf separat kalkuliert.",
          },
        ],
      },
      {
        type: "tips",
        badge: "So arbeiten wir",
        heading: "7 Regeln, nach denen wir jede Amazon-Kampagne führen",
        subtitle: "Die meisten Amazon-SEO-Projekte scheitern an der Messung, nicht an den Texten. Diese Regeln halten uns ehrlich.",
        tips: [
          {
            number: "01",
            title: "Eine Hypothese testen, kein Bauchgefühl",
            body: "Das Live-Listing dient als Kontrollversion. Version B beantwortet einen konkreten Kaufeinwand klarer - im Titel, in einem Bild, in den Bullet Points oder im A+ Content. Zuerst die Kennzahl definieren, dann das vollständige Ergebnis auswerten und vor der Veröffentlichung freigeben. Wo möglich nutzen wir Amazons randomisierte Experimente, mit dokumentierten Einstellungen und deaktivierter automatischer Veröffentlichung, sofern Sie diese nicht freigeben.",
          },
          {
            number: "02",
            title: "Erst das Leck finden, dann Traffic zuführen",
            body: "Angenommen, eine Marke gewinnt 12 % der Impressionen, aber nur 7 % der Klicks und 5 % der Käufe. Mehr Traffic fließt dann einfach durch dasselbe Leck. Wir prüfen zuerst Titel, Hauptbild und Angebot und skalieren erst danach die externe Kundengewinnung.",
          },
          {
            number: "03",
            title: "Organisch und Sponsored getrennt tracken",
            body: "Bezahlte Platzierungen können organischen Fortschritt besser oder schlechter aussehen lassen, als er ist. Wir taggen nach ASIN und Keyword-Cluster, tracken Wettbewerber und dokumentieren jede Änderung an Listing, Preis, Anzeigen und Bestand, damit Sie sehen, was sich tatsächlich bewegt hat.",
          },
          {
            number: "04",
            title: "Ein Keyword-Ranking ist kein Kategorie-Ranking",
            body: "Ein Produkt kann für eine Suchanfrage auf Position 2 stehen und für eine nahe Variante auf Position 35. Der Bestseller-Rang ersetzt kein Tracking auf Query-Ebene. Wir untersuchen die schwachen Begriffe einzeln, statt sie in einem Durchschnitt zu verstecken.",
          },
          {
            number: "05",
            title: "Änderungen dokumentieren, keine Kausalität behaupten",
            body: "Ein Ranking-Sprung in der Woche nach einem Listing-Update kann am Update liegen. Er kann aber auch daran liegen, dass ein Wettbewerber ausverkauft ist, sich ein Preis geändert hat oder eine neue Werbekampagne läuft. Wir dokumentieren Anzeigen, Preis, Bestand und Wettbewerberbewegungen neben jeder Listing-Änderung und lesen den Kontext, bevor wir etwas als Erfolg verbuchen.",
          },
          {
            number: "06",
            title: "Jedes externe Asset taggen",
            body: "Ein getrackter Link pro relevanter Seite oder Platzierung, der auf den richtigen Marktplatz und die richtige ASIN zeigt und vor dem Start getestet wird. Für Brand-Registry-Konten zeigt Amazon Attribution Klicks, Warenkorb-Hinzufügungen und Verkäufe pro Link, und der Brand Referral Bonus erstattet rund 10 % der zugeordneten Umsätze. Vor dem Start klären wir, was für Ihr Konto gilt.",
          },
          {
            number: "07",
            title: "Umsatz ist schön. Deckungsbeitrag zählt.",
            body: "1.000 getrackte Besuche bei 8 % Kaufrate und 40 $ durchschnittlichem Bestellwert ergeben 3.200 $ Umsatz. Ziehen Sie 70 % für Produkt, Gebühren, Fulfillment und Retouren ab, dann 700 $ Kampagnenkosten, und es bleiben 260 $ für Fixkosten und Gewinn. Der Break-even liegt bei 2.333 $ Umsatz und 30 % Deckungsbeitragsmarge. Genau diese Rechnung berichten wir, nicht nur den Bruttoumsatz.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Off-Page-Kundengewinnung",
        heading: "Nachfrage außerhalb von Amazon abholen. Käufer hineinschicken.",
        subtitle: "Käufer recherchieren bei Google und KI-Assistenten, bevor sie Amazon öffnen. Dort holen wir sie mit hilfreichen Inhalten und einem getrackten, ASIN-spezifischen Weg zum Listing ab.",
        richTextBlocks: [
          {
            heading: "Vergleichsinhalte, die sich den Klick verdienen",
            body: "Wir erstellen suchanfragengetriebene Vergleichsseiten und Kaufratgeber auf freigegebenen Domains oder in relevanten Publikationen, rund um echte Kauffragen, etwa welcher Reiserucksack in die Handgepäckgrenze passt. Jede Seite bekommt eigenständige Inhalte, faire Kriterien, offengelegte kommerzielle Beziehungen, einen Mobile-Check und ein funktionierendes Ziel für jeden CTA.",
            href: "/content-writing",
            hrefLabel: "Unser Content-Writing-Service",
          },
          {
            heading: "Relevante Seiten statt Masse an Links",
            body: "Amazons eigene Domain ist stark, aber Domain-Autorität und Seiten-Autorität sind zwei verschiedene Dinge. Wir bauen Autorität auf Seitenebene mit relevanten Platzierungen auf, geprüft auf thematische Passung, echten Traffic, Spam-Signale und Offenlegung. Jedes Asset landet in einem Register mit URL, Zielgruppe, Kosten, Verantwortlichem, Ziel und Tracking-Tag.",
            href: "/link-building",
            hrefLabel: "So gehen wir Linkaufbau an",
          },
          {
            heading: "Bewusst skalieren",
            body: "Jedes externe Briefing ist einem relevanten Produkt und einem Käuferbedürfnis zugeordnet und wird an qualifizierten ausgehenden Klicks und zugeordneten Bestellungen gemessen. Wir starten mit Begriffen, die eng zum Produkt passen, und nehmen breitere Themen erst dazu, wenn sich der Traffic als wertvoll erweist. Produktfakten und Attribute halten wir konsistent, damit Amazons KI-Shopping-Assistent Kauffragen korrekt beantwortet. Tests mit direkten Listing-Links laufen erst nach einer Richtlinienprüfung und mit klar definierter Hypothese.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Amazon vs Google",
        heading: "Amazon SEO vs Google SEO: wo sie sich unterscheiden und wo sie sich treffen",
        subtitle: "Zwei verschiedene Ranking-Systeme. Ein kommerzielles Ziel.",
        richTextBlocks: [
          {
            heading: "Auf Amazon entscheiden Relevanz und Verkäufe",
            body: "Innerhalb von Amazon hängen Rankings davon ab, ob das Listing zur Suchanfrage passt und ob der Käufer kauft. Titel, Bullet Points, Backend-Suchbegriffe, Attribute, Bilder, Preis, Bewertungen und Bestand fließen alle ein. Langform-Content und technische Crawl-Fixes greifen innerhalb der Zeichenlimits eines Listings nicht.",
          },
          {
            heading: "Außerhalb von Amazon zahlt sich Google-Disziplin weiter aus",
            body: "Die Recherche, die einen Käufer zu Amazon führt, beginnt oft bei Google oder einem KI-Assistenten. Genau dort fängt klassisches SEO - Vergleichsinhalte, relevante Autorität und Tracking auf Query-Ebene - Nachfrage ab, die Ihre Wettbewerber verpassen. Google-Sichtbarkeit und Amazon-Rankings führen wir als getrennte Kennzahlen, damit keine die Arbeit der anderen für sich verbucht.",
            href: "/blog/ecommerce-seo-keywords",
            hrefLabel: "E-Commerce-SEO-Keywords über Plattformen hinweg",
          },
        ],
      },
      {
        type: "process",
        badge: "Startplan",
        heading: "Die ersten 90 Tage. Auf Belegen aufgebaut.",
        process: [
          {
            number: "01",
            title: "Tag 1-30: Audit und Start",
            description:
              "Ausgangsbasis für Prioritäts-ASINs erfassen, Suchanfragen zuordnen, Listing-Änderungen und den ersten externen Content-Plan freigeben. Ergebnis: Ausgangsbasis, freigegebene Änderungen und Tracking-QA.",
          },
          {
            number: "02",
            title: "Tag 31-60: veröffentlichen und lernen",
            description:
              "Freigegebene Assets veröffentlichen, Indexierung und Klicks beobachten, mögliche Listing-Tests durchführen und Amazon-Daten auswerten. Ergebnis: Live-Asset-Register und Performance-Review.",
          },
          {
            number: "03",
            title: "Tag 61-90: verbessern und entscheiden",
            description:
              "Schwache Seiten und Aussagen überarbeiten, die ausgereifte Attribution auswerten und entscheiden, welche Themen weitere Investitionen verdienen. Ergebnis: Optimierungsprotokoll und Plan für die nächste Periode.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Leistungsumfang",
        heading: "Sie sehen, was umgesetzt wird. In jedem Zyklus.",
        subtitle: "Klare Freigaben, bessere Umsetzung, keine Überraschungen. Die Kontrolle über Ihr Konto bleibt bei Ihnen.",
        deliverables: [
          { title: "Beim Setup", description: "ASIN-Audit, Query-Map, Ausgangsbasis, freigegebener Produktionsplan sowie ein Zugangs- und Tracking-Register. Geprüft: ASINs, Verantwortliche und Prioritäten bestätigt." },
          { title: "Pro ASIN im Umfang", description: "Listing-Empfehlungen, freigegebene Texte und Creative Briefs sowie QA nach der Änderung. Geprüft: Freigabe dokumentiert und Live-Content verifiziert." },
          { title: "Pro externem Asset", description: "Freigegebenes Briefing, veröffentlichte URL, Ziel, Tracking und Offenlegungsnachweis. Geprüft: Mobile, Links und Analytics." },
          { title: "Wöchentlich und monatlich", description: "Wöchentliches Fortschritts-Update, dann monatliche Ergebnisse, Kostenreview und der nächste Umsetzungsplan, mit benannten offenen Entscheidungen und nächsten Schritten." },
          { title: "Was wir übernehmen", description: "Recherche und Produktion. Wir bereiten die Kampagne vor, erstellen die vereinbarten Assets und berichten, was umgesetzt wurde und was passiert ist." },
          { title: "Was Sie liefern", description: "Zugänge und Produktwahrheit: Produktbelege, Marken-Assets, Kontoberechtigungen, Margen und eine benannte Person für Freigaben." },
          { title: "Vor dem Start", description: "Ein markenspezifischer Leistungsumfang zu ASIN-Anzahl, Asset-Mengen, Korrekturschleifen, Verantwortlichkeiten, Honoraren, Arbeitsbudget und Zugängen." },
          { title: "Separat geregelt", description: "Listing- und Anzeigenänderungen werden mit Ihrem Account-Team abgestimmt. Paid Media, Account-Health-Betreuung und neue Fotografie werden separat kalkuliert." },
        ],
      },
      {
        type: "team",
        badge: "Das Team",
        heading: "Wer die Arbeit macht",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategie & Innovation",
          bio: "Fabian verantwortet die Amazon-SEO-Strategie. Er arbeitet seit über 8 Jahren auf mehreren Marktplätzen und führt jedes Amazon-Projekt nach derselben Regel: Die Arbeit wird an Bestellungen und Deckungsbeitrag gemessen, nicht allein an Keyword-Positionen.",
          image: "/images/framer/fabian-van-til-new.jpeg",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technisches & On-Page SEO",
            bio: "Entwickelt die Datensysteme und Tracking-Infrastruktur f\u00fcr Amazon SEO-Kampagnen. Spezialisiert auf Ranking-Analyse, On-Page-Listing-Optimierung, Keyword-Recherche-Automatisierung und Performance-Monitoring.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://bg.linkedin.com/in/dimitar-georgiev-seo-expert",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Linkaufbau",
            bio: "Martinijan entwickelt externe Traffic-Strategien und digitale PR, die die Autorit\u00e4t von Amazon-Listings st\u00e4rken. Er baut externe Signale auf, die organische Amazon-Rankings erg\u00e4nzen.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Content, Linkaufbau & PR",
            bio: "Erstellt Amazon-Listing-Texte und A+-Content-Strategien, die ranken und konvertieren, sowie Linkaufbau und PR für Amazon-Marken. Spezialisiert auf Keyword-Mapping, Bullet-Point-Optimierung, Backend-Suchbegriff-Strategie und Outreach-Kampagnen.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Wie unterscheidet sich Amazon SEO von Google SEO?",
          answer:
            "Innerhalb von Amazon hängen Rankings von der Relevanz für die Suchanfrage ab und davon, ob Käufer kaufen. Die Arbeit dreht sich also um Listing-Texte, Backend-Suchbegriffe, Attribute und Creatives. Google SEO bleibt wichtig für die Recherche, die Käufer betreiben, bevor sie Amazon erreichen. Genau dort setzen unsere Vergleichsinhalte und die externe Kundengewinnung an. Lesen Sie mehr über [E-Commerce-SEO-Keywords](/blog/ecommerce-seo-keywords) und wie sie sich zwischen Plattformen unterscheiden.",
        },
        {
          question: "Wie lange dauert es, bis wir Ergebnisse auf Amazon sehen?",
          answer:
            "Die ersten 30 Tage umfassen Audit, Ausgangsbasis, freigegebene Listing-Änderungen und Tracking. Tag 31-60 stehen für Veröffentlichung und erste Daten, und bis Tag 61-90 ist die Attribution weit genug, um zu entscheiden, welche Themen mehr Investition verdienen. Unser Leitfaden zur [Keyword-Recherche für E-Commerce](/academy/keyword-research-for-ecommerce) erklärt die Recherche dahinter.",
        },
        {
          question: "Wie belegen Sie, dass die Kampagne Geld verdient hat?",
          answer:
            "Jedes externe Asset bekommt einen eigenen getrackten Link zum richtigen Marktplatz und zur richtigen ASIN. Für Brand-Registry-Konten meldet Amazon Attribution Klicks, Warenkorb-Hinzufügungen und Verkäufe pro Link, und der Brand Referral Bonus erstattet rund 10 % der zugeordneten Umsätze. Wir berichten anschließend den Deckungsbeitrag nach Produkt-, Amazon- und Kampagnenkosten, nicht nur den Umsatz.",
        },
        {
          question: "Verwalten Sie auch Amazon PPC?",
          answer:
            "Nein. Paid Media wird separat kalkuliert. Wir stimmen Listing-Änderungen mit Ihrem Werbeteam ab und tracken organische und gesponserte Rankings getrennt, damit Sie sehen, was sich tatsächlich bewegt hat.",
        },
        {
          question: "Spielen Backlinks für Amazon-Listings eine Rolle?",
          answer:
            "Amazons Domain ist stark, aber Autorität auf Seitenebene ist etwas anderes. Wir bauen relevante Platzierungen und Vergleichsinhalte auf, die bei Google ranken und qualifizierte Käufer zu Ihren ASINs schicken. Keine Linkfarm-Masse, und Tests mit direkten Listing-Links laufen erst nach einer Richtlinienprüfung.",
        },
        {
          question: "Was brauchen Sie von uns?",
          answer:
            "Produktbelege, Marken-Assets, Kontoberechtigungen, Margen und eine benannte Person für Freigaben. Die Kontrolle über Ihr Konto bleibt bei Ihnen. ASIN-Anzahl, Asset-Mengen, Korrekturschleifen, Honorare und Arbeitsbudget legen wir vor dem Start in einem markenspezifischen Leistungsumfang fest.",
        },
        {
          question: "Können Sie bei A+ Content und Bildern helfen?",
          answer:
            "Ja. Für jede ASIN im Umfang liefern wir ein Galerie-Audit, eine Shotlist, Bildtexte und ein Briefing für die A+-Module und prüfen den Live-Content nach der Freigabe. Neue Fotografie wird separat kalkuliert. Die Texte schreibt unser [Content-Writing-Team](/content-writing).",
        },
        {
          question: "Welche Amazon-Marktplätze unterstützen Sie?",
          answer:
            "Alle großen Amazon-Marktplätze, darunter US, UK, DE, FR, IT, ES und NL. Unsere [Keyword-Recherche](/keyword-research) ist für jeden Marktplatz lokalisiert.",
        },
      ],
      miniCta: {
        heading: "Starten Sie mit einem kostenlosen ROI-Potenzial-Audit",
        subtitle:
          "Wir bewerten das mögliche Wachstum Ihrer Prioritäts-ASINs, bevor Sie sich zu irgendetwas verpflichten.",
      },
    },
  },
  fr: {
    hero: {
      badge: "SEO Amazon",
      heading: "Des services SEO Amazon conçus pour vendre",
      subtitle:
        "Plus de recherches pertinentes, une meilleure fiche produit et un parcours d’achat mesurable. Nous construisons la campagne autour de vos ASIN, puis relions le travail aux ventes et à la marge de contribution.",
      ctaText: "Obtenir un audit d’opportunités ROI gratuit",
    },
    trustBar: "Plus de 20 marques e-commerce de 7 à 9 chiffres nous font confiance",
    trustBarLogos: [
      { src: "/images/clients/heyshape.png", alt: "HEYSHAPE", noFilter: true },
      { src: "/images/clients/hike.svg", alt: "Hike Footwear" },
      { src: "/images/clients/me-logo.png", alt: "Mother's Earth" },
      { src: "/images/clients/tobios-logo.png", alt: "Tobio's Kits" },
    ],
    trustBarMoreBrands: "+ 20 autres marques DTC de 7 à 9 chiffres",
    sections: [
      {
        type: "benefits",
        badge: "L’objectif commercial",
        heading: "Gagnez les recherches qui comptent. Puis méritez la commande.",
        subtitle: "Le succès se mesure en commandes et en contribution. Les positions sur les mots-clés expliquent la progression.",
        benefits: [
          {
            title: "Une visibilité pertinente",
            description:
              "Nous associons votre produit aux requêtes d’achat sur lesquelles il mérite d’apparaître, au lieu de courir après chaque terme à fort volume.",
          },
          {
            title: "La conversion de la fiche",
            description:
              "Nous donnons aux acheteurs les preuves dont ils ont besoin pour choisir votre produit : un texte clair, des attributs complets et des images qui répondent aux vraies objections.",
          },
          {
            title: "Une acquisition rentable",
            description:
              "Nous envoyons du trafic externe qualifié vers vos ASIN et mesurons ce qui se passe après le clic, jusqu’aux commandes et à la contribution.",
          },
        ],
      },
      {
        type: "stats",
        badge: "Éprouvé sur des marques e-commerce",
        heading: "La même équipe. De vrais résultats en recherche, avant Amazon.",
        subtitle:
          "Étude de cas : Tobio's. La même rigueur que nous appliquons sur Amazon - une base de référence au niveau de chaque requête, des pages livrées, puis un résultat mesuré.",
        stats: [
          { value: "+399 %", label: "Trafic organique (de 9 318 à 46 471)" },
          { value: "+153 %", label: "Mots-clés positionnés (de 2 012 à 5 087)" },
          { value: "+380 %", label: "Positions dans le top 3 (de 117 à 562)" },
          { value: "+188 %", label: "Impressions organiques (de 466 K à 1,34 M)" },
        ],
      },
      {
        type: "process",
        badge: "Le périmètre en un coup d’œil",
        heading: "Une campagne. Des livrables clairs.",
        subtitle: "Quatre chantiers, chacun avec un livrable défini et un contrôle défini.",
        process: [
          {
            number: "01",
            title: "Recherche et base de référence",
            description:
              "Audit des ASIN, clusters de mots-clés et une cartographie priorisée requête-produit. Contrôle : ASIN prioritaires validés et base de référence enregistrée.",
          },
          {
            number: "02",
            title: "SEO Amazon on-page",
            description:
              "Textes des fiches, recommandations de termes backend, corrections d’attributs et briefs créatifs. Contrôle : modifications validées, vérifications en ligne et suivi des requêtes.",
          },
          {
            number: "03",
            title: "Acquisition off-page",
            description:
              "Contenus comparatifs, couverture par des éditeurs pertinents et landing pages reliées à Amazon. Contrôle : URL en ligne, tracking fonctionnel et qualité du trafic.",
          },
          {
            number: "04",
            title: "Mesure et itération",
            description:
              "Suivi des positions, rapports d’attribution et un journal daté des tests et modifications. Contrôle : une décision mensuelle d’améliorer, d’étendre ou d’arrêter.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Recherche",
        heading: "Choisissez les bonnes batailles de mots-clés",
        subtitle: "L’intention d’abord. Nous relions le langage des acheteurs à un ASIN précis plutôt que de courir après chaque terme à fort volume.",
        richTextBlocks: [
          {
            heading: "Quatre clusters de requêtes, quatre décisions différentes",
            body: "Les termes produit principaux comme \"sac à dos de voyage\" sont évalués selon la pertinence, la position actuelle et la concurrence. Les requêtes de besoin précis comme \"sac à dos cabine avec poche ordinateur\" sont associées aux caractéristiques produit qui y répondent. Les requêtes comparatives comme \"meilleur sac à dos de voyage\" reçoivent une page comparative externe utile avec un CTA suivi. La demande de marque comme \"sac à dos de voyage [marque]\" est vérifiée pour la découvrabilité et la bonne destination.",
          },
          {
            heading: "Les écarts de mots-clés concurrents, filtrés sans pitié",
            body: "Nous comparons les ASIN concurrents pertinents, puis ne retenons que les termes qui correspondent vraiment à votre produit et à l’intention d’achat. Un écart ne compte que si vous pouvez remporter la vente. Le livrable est une cartographie d’opportunités classée avec ASIN cible, cluster de mots-clés, visibilité actuelle et action proposée.",
            href: "/keyword-research",
            hrefLabel: "Notre méthode de recherche de mots-clés",
          },
        ],
      },
      {
        type: "benefits",
        badge: "SEO Amazon on-page",
        heading: "Rendez la fiche plus facile à trouver. Et plus facile à acheter.",
        subtitle: "Pour chaque ASIN du périmètre, nous livrons un audit de la galerie, une liste de prises de vue, les textes des images et un brief de modules A+, puis validons les allégations, la lisibilité mobile et le contenu en ligne après approbation.",
        benefits: [
          {
            title: "Titre",
            description:
              "Commencez par l’identité du produit et les termes principaux pertinents. Restez lisible et conforme.",
          },
          {
            title: "Puces et description",
            description:
              "Répondez aux objections d’achat avec des bénéfices vérifiés, des caractéristiques techniques et des cas d’usage.",
          },
          {
            title: "Termes backend",
            description:
              "Ajoutez les synonymes pertinents et les termes manquants. Supprimez les doublons, les mots sans rapport et les noms de marque interdits.",
          },
          {
            title: "Attributs du catalogue",
            description:
              "Complétez avec précision le type de produit, la taille, la matière et les autres attributs de catégorie. Vérifiez l’exactitude des variations.",
          },
          {
            title: "Image principale et galerie",
            description:
              "Un produit reconnaissable sur un fond conforme, puis la taille, l’usage, le contenu et des bénéfices étayés tout au long de la galerie.",
          },
          {
            title: "Contenu A+",
            description:
              "Comparaison, contexte de marque et réponses aux questions d’achat. Les nouvelles prises de vue sont chiffrées à part si vous en avez besoin.",
          },
        ],
      },
      {
        type: "tips",
        badge: "Notre façon de travailler",
        heading: "7 règles qui guident chaque campagne Amazon",
        subtitle: "Le SEO Amazon dérape le plus souvent dans la mesure, pas dans le texte. Ces règles nous gardent honnêtes.",
        tips: [
          {
            number: "01",
            title: "Testez une hypothèse, pas une intuition",
            body: "La fiche en ligne sert de version de contrôle. La version B répond plus clairement à une objection d’achat précise - dans le titre, une image, les puces ou le contenu A+. Définissez d’abord l’indicateur, examinez le résultat complet et validez avant de publier. Lorsque c’est possible, nous utilisons les expériences randomisées d’Amazon, avec des paramètres documentés et la publication automatique désactivée sauf accord de votre part.",
          },
          {
            number: "02",
            title: "Trouvez la fuite avant d’ajouter du trafic",
            body: "Imaginons une marque qui obtient 12 % des impressions mais seulement 7 % des clics et 5 % des achats. Envoyer plus de trafic revient à le faire passer par la même fuite. Nous examinons d’abord le titre, l’image principale et l’offre, puis nous développons l’acquisition externe.",
          },
          {
            number: "03",
            title: "Suivez l’organique et le sponsorisé séparément",
            body: "Les placements payants peuvent faire paraître la progression organique meilleure ou pire qu’elle ne l’est. Nous taguons par ASIN et par cluster de mots-clés, suivons les concurrents et annotons chaque modification de fiche, de prix, de publicité et de stock pour que vous voyiez ce qui a réellement bougé.",
          },
          {
            number: "04",
            title: "Une position sur un mot-clé n’est pas un classement de catégorie",
            body: "Un produit peut être en position 2 sur une requête et en position 35 sur une variante proche. Le Best Sellers Rank ne remplace pas le suivi au niveau de chaque requête. Nous analysons les termes faibles un par un au lieu de les noyer dans une moyenne.",
          },
          {
            number: "05",
            title: "Annotez les changements, ne revendiquez pas la causalité",
            body: "Un bond de position la semaine qui suit une mise à jour de fiche peut venir de cette mise à jour. Il peut aussi venir d’un concurrent en rupture de stock, d’un changement de prix ou d’une nouvelle campagne publicitaire. Nous consignons les publicités, les prix, les stocks et les mouvements concurrents à côté de chaque modification de fiche, et lisons le contexte avant d’attribuer quoi que ce soit.",
          },
          {
            number: "06",
            title: "Taguez chaque asset externe",
            body: "Un lien suivi par page ou placement significatif, pointant vers la bonne marketplace et le bon ASIN, testé avant le lancement. Pour les comptes Brand Registry, Amazon Attribution affiche les clics, les ajouts au panier et les ventes par lien, et le Brand Referral Bonus reverse environ 10 % des ventes attribuées. Nous confirmons ce qui s’applique à votre compte avant le lancement.",
          },
          {
            number: "07",
            title: "Le chiffre d’affaires, c’est bien. La contribution, c’est ce qui compte.",
            body: "1 000 visites suivies avec un taux d’achat de 8 % et un panier moyen de 40 $ donnent 3 200 $ de ventes. Retirez 70 % pour le produit, les frais, la logistique et les retours, puis 700 $ de coût de campagne, et il reste 260 $ pour les frais fixes et le bénéfice. Le point mort se situe à 2 333 $ de ventes avec une marge de contribution de 30 %. C’est ce calcul que nous présentons, pas seulement le chiffre d’affaires brut.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Acquisition off-page",
        heading: "Captez la demande hors d’Amazon. Envoyez les acheteurs vers vos fiches.",
        subtitle: "Les acheteurs se renseignent sur Google et les assistants IA avant d’ouvrir Amazon. Nous les y rejoignons avec du contenu utile et un parcours suivi, propre à chaque ASIN, vers la fiche.",
        richTextBlocks: [
          {
            heading: "Des contenus comparatifs qui méritent le clic",
            body: "Nous créons des pages comparatives et des guides d’achat construits autour des requêtes, sur des domaines validés ou des publications pertinentes, autour de vraies questions d’achat comme le sac à dos de voyage qui respecte les dimensions cabine. Chaque page bénéficie d’un contenu original, de critères équitables, de relations commerciales déclarées, d’une vérification mobile et d’une destination fonctionnelle pour chaque CTA.",
            href: "/content-writing",
            hrefLabel: "Notre service de rédaction de contenu",
          },
          {
            heading: "Des sites pertinents, pas des liens en masse",
            body: "Le domaine d’Amazon est puissant, mais l’autorité d’un domaine et celle d’une page sont deux choses différentes. Nous construisons l’autorité au niveau de la page avec des placements pertinents, vérifiés pour la cohérence thématique, le trafic réel, les signaux de spam et la transparence. Chaque asset est consigné dans un registre avec URL, audience, coût, responsable, destination et tag de suivi.",
            href: "/link-building",
            hrefLabel: "Notre approche du netlinking",
          },
          {
            heading: "Montez en puissance avec méthode",
            body: "Chaque brief externe est associé à un produit pertinent et à un besoin acheteur, et mesuré sur les clics sortants qualifiés et les commandes attribuées. Nous commençons par les termes les plus proches du produit et n’ajoutons des thèmes plus larges qu’une fois le trafic jugé utile. Nous gardons les informations et attributs produit cohérents pour que l’assistant d’achat IA d’Amazon réponde correctement aux questions d’achat. Les tests de liens directs vers les fiches n’ont lieu qu’après une revue des règles et une hypothèse définie.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Amazon vs Google",
        heading: "SEO Amazon vs SEO Google : ce qui les distingue et ce qui les rapproche",
        subtitle: "Deux systèmes de classement différents. Un seul objectif commercial.",
        richTextBlocks: [
          {
            heading: "Sur Amazon, la pertinence et les ventes décident",
            body: "Sur Amazon, le classement dépend de deux choses : la fiche correspond-elle à la requête, et l’acheteur achète-t-il ? Titres, puces, termes backend, attributs, images, prix, avis et stock alimentent tous ce calcul. Le contenu long et les correctifs techniques d’exploration ne s’appliquent pas dans les limites de caractères d’une fiche.",
          },
          {
            heading: "Hors d’Amazon, la rigueur Google reste payante",
            body: "La recherche qui mène un acheteur vers Amazon commence souvent sur Google ou un assistant IA. C’est là que le SEO classique - contenus comparatifs, autorité pertinente et suivi au niveau de chaque requête - capte la demande que vos concurrents laissent passer. Nous gardons la visibilité Google et les positions Amazon comme des indicateurs distincts, pour qu’aucun ne s’attribue le travail de l’autre.",
            href: "/blog/ecommerce-seo-keywords",
            hrefLabel: "Les mots-clés SEO e-commerce selon les plateformes",
          },
        ],
      },
      {
        type: "process",
        badge: "Plan de lancement",
        heading: "Les 90 premiers jours. Fondés sur des preuves.",
        process: [
          {
            number: "01",
            title: "Jours 1-30 : audit et lancement",
            description:
              "Base de référence des ASIN prioritaires, cartographie des requêtes, validation des modifications de fiches et du premier plan de contenu externe. Livrable : base de référence, modifications validées et contrôle qualité du tracking.",
          },
          {
            number: "02",
            title: "Jours 31-60 : publier et apprendre",
            description:
              "Publication des assets validés, suivi de l’indexation et des clics, tests de fiches éligibles et analyse des données Amazon. Livrable : registre des assets en ligne et revue des performances.",
          },
          {
            number: "03",
            title: "Jours 61-90 : améliorer et décider",
            description:
              "Actualisation des pages et allégations faibles, analyse de l’attribution consolidée et choix des thèmes qui méritent davantage d’investissement. Livrable : journal d’optimisation et plan pour la période suivante.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Périmètre de la mission",
        heading: "Vous voyez le travail livré. À chaque cycle.",
        subtitle: "Des validations claires, une meilleure exécution, aucune surprise. Vous gardez le contrôle de votre compte.",
        deliverables: [
          { title: "Au démarrage", description: "Audit des ASIN, cartographie des requêtes, base de référence, plan de production validé et registre des accès et du tracking. Contrôle : ASIN, responsables et priorités confirmés." },
          { title: "Par ASIN du périmètre", description: "Recommandations pour la fiche, textes et briefs créatifs validés, et contrôle qualité après modification. Contrôle : validation enregistrée et contenu en ligne vérifié." },
          { title: "Par asset externe", description: "Brief validé, URL publiée, destination, tracking et registre de transparence. Contrôle : mobile, liens et analytics." },
          { title: "Chaque semaine et chaque mois", description: "Un point d’avancement hebdomadaire, puis les résultats mensuels, une revue des coûts et le plan de livraison suivant, avec les décisions en suspens et les prochaines actions identifiées." },
          { title: "Ce que nous prenons en charge", description: "La recherche et la production. Nous préparons la campagne, produisons les assets convenus et rendons compte de ce qui a été livré et de ce qui s’est passé." },
          { title: "Ce que vous fournissez", description: "Les accès et la vérité produit : preuves produit, assets de marque, autorisations de compte, marges et un validateur désigné." },
          { title: "Avant le lancement", description: "Un périmètre propre à votre marque couvrant le nombre d’ASIN, les quantités d’assets, les révisions, la propriété, les honoraires, le budget opérationnel et les accès." },
          { title: "Traité à part", description: "Les modifications de fiches et de publicités sont coordonnées avec votre équipe compte. Le paid media, la gestion de la santé du compte et les nouvelles prises de vue sont chiffrés séparément." },
        ],
      },
      {
        type: "team",
        badge: "L’équipe",
        heading: "Qui fait le travail",
        teamLead: {
          name: "Fabian van Til",
          role: "Stratégie & innovation",
          bio: "Fabian pilote la stratégie SEO Amazon. Il travaille sur plusieurs marketplaces depuis plus de 8 ans et mène chaque mission Amazon selon la même règle : le travail est jugé sur les commandes et la contribution, pas seulement sur les positions des mots-clés.",
          image: "/images/framer/fabian-van-til-new.jpeg",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "SEO technique & On-Page",
            bio: "Con\u00e7oit les syst\u00e8mes de donn\u00e9es et l\u2019infrastructure de suivi pour les campagnes SEO Amazon. Sp\u00e9cialis\u00e9 dans l\u2019analyse des classements, l\u2019optimisation on-page des fiches, l\u2019automatisation de la recherche de mots-cl\u00e9s et le monitoring de performance.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://bg.linkedin.com/in/dimitar-georgiev-seo-expert",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Netlinking",
            bio: "Ma\u00eetrise les strat\u00e9gies de trafic externe et les RP digitales qui renforcent l\u2019autorit\u00e9 des fiches Amazon. Construit des signaux externes qui compl\u00e8tent les classements organiques Amazon.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Contenu, Link Building & PR",
            bio: "\u00c9labore les textes de fiches Amazon et les strat\u00e9gies de contenu A+ qui se positionnent et convertissent. Sp\u00e9cialis\u00e9 dans le mapping de mots-cl\u00e9s, l\u2019optimisation des puces et la strat\u00e9gie de termes backend et les campagnes de link building et PR.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "En quoi le SEO Amazon diffère-t-il du SEO Google ?",
          answer:
            "Sur Amazon, le classement dépend de la pertinence par rapport à la requête et du fait que les acheteurs achètent. Le travail porte donc sur les textes des fiches, les termes backend, les attributs et les visuels. Le SEO Google reste important pour la recherche que font les acheteurs avant d’arriver sur Amazon, et c’est là qu’interviennent nos contenus comparatifs et notre acquisition externe. Découvrez-en plus sur les [mots-clés SEO e-commerce](/blog/ecommerce-seo-keywords) et leurs différences selon les plateformes.",
        },
        {
          question: "Combien de temps avant de voir des résultats sur Amazon ?",
          answer:
            "Les 30 premiers jours couvrent l’audit, la base de référence, les modifications de fiches validées et le tracking. Les jours 31 à 60 sont consacrés à la publication et aux premières données, et entre les jours 61 et 90 l’attribution est assez mûre pour décider quels thèmes méritent plus d’investissement. Notre guide sur la [recherche de mots-clés pour l’e-commerce](/academy/keyword-research-for-ecommerce) explique la recherche qui sous-tend ce travail.",
        },
        {
          question: "Comment prouvez-vous que la campagne a rapporté de l’argent ?",
          answer:
            "Chaque asset externe reçoit son propre lien suivi vers la bonne marketplace et le bon ASIN. Pour les comptes Brand Registry, Amazon Attribution rapporte les clics, les ajouts au panier et les ventes par lien, et le Brand Referral Bonus reverse environ 10 % des ventes attribuées. Nous présentons ensuite la contribution après les coûts produit, Amazon et campagne, pas seulement le chiffre d’affaires.",
        },
        {
          question: "Gérez-vous aussi le PPC Amazon ?",
          answer:
            "Non. Le paid media est chiffré séparément. Nous coordonnons les modifications de fiches avec votre équipe publicité et suivons séparément les positions organiques et sponsorisées, pour que vous voyiez laquelle a réellement bougé.",
        },
        {
          question: "Les backlinks comptent-ils pour les fiches Amazon ?",
          answer:
            "Le domaine d’Amazon est puissant, mais l’autorité au niveau de la page est une autre affaire. Nous créons des placements pertinents et des contenus comparatifs qui se positionnent sur Google et envoient des acheteurs qualifiés vers vos ASIN. Pas de volume de fermes de liens, et les tests de liens directs vers les fiches n’ont lieu qu’après une revue des règles.",
        },
        {
          question: "De quoi avez-vous besoin de notre part ?",
          answer:
            "Des preuves produit, des assets de marque, des autorisations de compte, vos marges et un validateur désigné. Vous gardez le contrôle du compte. Nous convenons du nombre d’ASIN, des quantités d’assets, des révisions, des honoraires et du budget opérationnel dans un périmètre propre à votre marque avant le lancement.",
        },
        {
          question: "Pouvez-vous nous aider avec le contenu A+ et les images ?",
          answer:
            "Oui. Pour chaque ASIN du périmètre, nous livrons un audit de la galerie, une liste de prises de vue, les textes des images et un brief de modules A+, puis validons le contenu en ligne après approbation. Les nouvelles prises de vue sont chiffrées séparément. Notre [équipe de rédaction](/content-writing) écrit les textes.",
        },
        {
          question: "Quelles marketplaces Amazon prenez-vous en charge ?",
          answer:
            "Toutes les principales marketplaces Amazon, dont les États-Unis, le Royaume-Uni, l’Allemagne, la France, l’Italie, l’Espagne et les Pays-Bas. Notre [recherche de mots-clés](/keyword-research) est localisée pour chaque marketplace.",
        },
      ],
      miniCta: {
        heading: "Commencez par un audit d’opportunités ROI gratuit",
        subtitle:
          "Nous évaluons le potentiel de croissance sur vos ASIN prioritaires avant tout engagement de votre part.",
      },
    },
  },
  es: {
    hero: {
      badge: "SEO Amazon",
      heading: "Servicios de SEO Amazon pensados para vender",
      subtitle:
        "Más búsquedas relevantes, una mejor ficha de producto y un camino medible hasta la compra. Construimos la campaña en torno a tus ASIN y conectamos el trabajo con las ventas y el margen de contribución.",
      ctaText: "Solicita una auditoría gratuita de oportunidades de ROI",
    },
    trustBar: "Más de 20 marcas de ecommerce de 7 a 9 cifras confían en nosotros",
    trustBarLogos: [
      { src: "/images/clients/heyshape.png", alt: "HEYSHAPE", noFilter: true },
      { src: "/images/clients/hike.svg", alt: "Hike Footwear" },
      { src: "/images/clients/me-logo.png", alt: "Mother's Earth" },
      { src: "/images/clients/tobios-logo.png", alt: "Tobio's Kits" },
    ],
    trustBarMoreBrands: "+ 20 marcas DTC más de 7 a 9 cifras",
    sections: [
      {
        type: "benefits",
        badge: "El objetivo comercial",
        heading: "Gana las búsquedas que importan. Y después, el pedido.",
        subtitle: "El éxito se mide en pedidos y margen de contribución. Las posiciones de keywords explican el progreso.",
        benefits: [
          {
            title: "Visibilidad relevante",
            description:
              "Conectamos tu producto con las búsquedas de compra en las que merece aparecer, en lugar de perseguir cada término de alto volumen.",
          },
          {
            title: "Conversión del listing",
            description:
              "Damos al comprador las pruebas que necesita para elegir tu producto: textos claros, atributos completos e imágenes que responden a las objeciones reales.",
          },
          {
            title: "Captación rentable",
            description:
              "Llevamos tráfico externo cualificado a tus ASIN y medimos qué pasa después del clic, hasta los pedidos y el margen de contribución.",
          },
        ],
      },
      {
        type: "stats",
        badge: "Probado con marcas de ecommerce",
        heading: "El mismo equipo. Resultados reales en búsqueda, antes de Amazon.",
        subtitle:
          "Caso de estudio: Tobio's. La misma disciplina que aplicamos en Amazon - una línea base por búsqueda, páginas publicadas y un resultado medido.",
        stats: [
          { value: "+399%", label: "Tráfico orgánico (de 9.318 a 46.471)" },
          { value: "+153%", label: "Keywords posicionadas (de 2.012 a 5.087)" },
          { value: "+380%", label: "Posiciones en el top 3 (de 117 a 562)" },
          { value: "+188%", label: "Impresiones orgánicas (de 466K a 1,34M)" },
        ],
      },
      {
        type: "process",
        badge: "El alcance en un vistazo",
        heading: "Una campaña. Entregables claros.",
        subtitle: "Cuatro líneas de trabajo, cada una con un resultado definido y una verificación definida.",
        process: [
          {
            number: "01",
            title: "Investigación y línea base",
            description:
              "Auditoría de ASIN, clusters de keywords y un mapa priorizado de búsquedas por producto. Verificación: ASIN prioritarios aprobados y una línea base registrada.",
          },
          {
            number: "02",
            title: "SEO Amazon on-page",
            description:
              "Textos del listing, recomendaciones de términos backend, corrección de atributos y briefs creativos. Verificación: cambios aprobados, revisiones en vivo y seguimiento de búsquedas.",
          },
          {
            number: "03",
            title: "Captación off-page",
            description:
              "Contenido comparativo, cobertura en medios relevantes y landing pages enlazadas a Amazon. Verificación: URL en vivo, tracking funcionando y calidad del tráfico.",
          },
          {
            number: "04",
            title: "Medición e iteración",
            description:
              "Seguimiento de rankings, informes de atribución y un registro fechado de tests y cambios. Verificación: una decisión mensual de mejorar, ampliar o parar.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Investigación",
        heading: "Elige bien qué keywords pelear",
        subtitle: "La intención va primero. Asignamos el lenguaje del comprador a un ASIN concreto en lugar de perseguir cada término de alto volumen.",
        richTextBlocks: [
          {
            heading: "Cuatro clusters de búsqueda, cuatro decisiones distintas",
            body: "Los términos de producto como \"mochila de viaje\" se evalúan por relevancia, ranking actual y competencia. Las búsquedas de necesidad concreta como \"mochila de cabina con bolsillo para portátil\" se emparejan con las características del producto que las resuelven. Las búsquedas comparativas como \"mejor mochila de viaje\" reciben una página comparativa externa útil con un CTA medido. La demanda de marca como \"mochila de viaje [marca]\" se revisa para comprobar que se encuentra y que lleva al destino correcto.",
          },
          {
            heading: "Huecos de keywords frente a la competencia, con filtro duro",
            body: "Comparamos los ASIN relevantes de la competencia y filtramos los términos que de verdad encajan con tu producto y con la intención de compra. Un hueco solo cuenta si puedes ganar la venta. El entregable es un mapa de oportunidades ordenado con ASIN objetivo, cluster de keywords, visibilidad actual y acción propuesta.",
            href: "/keyword-research",
            hrefLabel: "Cómo hacemos la investigación de keywords",
          },
        ],
      },
      {
        type: "benefits",
        badge: "SEO Amazon on-page",
        heading: "Haz que el listing sea más fácil de encontrar. Y de comprar.",
        subtitle: "Para cada ASIN incluido entregamos una auditoría de la galería, un shot list, textos para las imágenes y un brief de módulos A+, y después validamos las afirmaciones, la legibilidad en móvil y el contenido en vivo tras la aprobación.",
        benefits: [
          {
            title: "Título",
            description:
              "Empieza por la identidad del producto y los términos principales relevantes. Que sea legible y cumpla las normas.",
          },
          {
            title: "Viñetas y descripción",
            description:
              "Responde a las objeciones de compra con beneficios verificados, especificaciones y casos de uso.",
          },
          {
            title: "Términos backend",
            description:
              "Añade sinónimos relevantes y términos que faltan. Elimina duplicados, palabras sin relación y nombres de marca prohibidos.",
          },
          {
            title: "Atributos del catálogo",
            description:
              "Completa con precisión el tipo de producto, la talla, el material y el resto de atributos de la categoría. Revisa que las variaciones sean correctas.",
          },
          {
            title: "Imagen principal y galería",
            description:
              "Un producto reconocible sobre un fondo conforme a las normas y, en la galería, tamaño, uso, contenido y beneficios demostrables.",
          },
          {
            title: "Contenido A+",
            description:
              "Comparativas, contexto de marca y respuestas a las preguntas de compra. Si necesitas fotografía nueva, se presupuesta aparte.",
          },
        ],
      },
      {
        type: "tips",
        badge: "Cómo trabajamos",
        heading: "7 reglas que aplicamos en cada campaña de Amazon",
        subtitle: "La mayoría del SEO Amazon falla en la medición, no en los textos. Estas reglas nos mantienen honestos.",
        tips: [
          {
            number: "01",
            title: "Prueba una hipótesis, no una corazonada",
            body: "El listing en vivo es el control. La versión B responde con más claridad a una objeción de compra concreta - en el título, una imagen, las viñetas o el contenido A+. Primero se define la métrica, se revisa el resultado completo y se aprueba antes de publicar. Cuando es posible usamos los experimentos aleatorizados de Amazon, con la configuración registrada y la publicación automática desactivada salvo que tú la apruebes.",
          },
          {
            number: "02",
            title: "Encuentra la fuga antes de meter más tráfico",
            body: "Imagina una marca que gana el 12% de las impresiones pero solo el 7% de los clics y el 5% de las compras. Enviar más tráfico solo lo hace pasar por la misma fuga. Primero revisamos el título, la imagen principal y la oferta, y después escalamos la captación externa.",
          },
          {
            number: "03",
            title: "Mide lo orgánico y lo patrocinado por separado",
            body: "Las posiciones de pago pueden hacer que el progreso orgánico parezca mejor o peor de lo que es. Etiquetamos por ASIN y cluster de keywords, seguimos a la competencia y anotamos cada cambio de listing, precio, anuncios y stock para que veas qué se movió de verdad.",
          },
          {
            number: "04",
            title: "Un ranking de keyword no es un ranking de categoría",
            body: "Un producto puede estar en la posición 2 para una búsqueda y en la 35 para una variante cercana. El Best Sellers Rank no sustituye al seguimiento por búsqueda. Investigamos los términos débiles uno a uno en lugar de esconderlos en una media.",
          },
          {
            number: "05",
            title: "Anota los cambios, no atribuyas causas",
            body: "Una subida de ranking la semana después de actualizar un listing puede deberse a la actualización. También puede ser que un competidor se haya quedado sin stock, un cambio de precio o una nueva campaña de anuncios. Registramos anuncios, precio, stock y movimientos de la competencia junto a cada cambio de listing y leemos el contexto antes de atribuir nada.",
          },
          {
            number: "06",
            title: "Etiqueta cada activo externo",
            body: "Un enlace con tracking por cada página o ubicación relevante, apuntando al marketplace y al ASIN correctos, probado antes del lanzamiento. En las cuentas con Brand Registry, Amazon Attribution muestra clics, añadidos al carrito y ventas por enlace, y el Brand Referral Bonus devuelve alrededor del 10% de las ventas atribuidas. Antes del lanzamiento confirmamos qué aplica a tu cuenta.",
          },
          {
            number: "07",
            title: "Los ingresos están bien. La contribución es lo que cuenta.",
            body: "1.000 visitas medidas con una tasa de compra del 8% y un pedido medio de $40 son $3.200 en ventas. Resta un 70% de producto, comisiones, logística y devoluciones, y después $700 de coste de campaña: quedan $260 para gastos generales y beneficio. El punto de equilibrio está en $2.333 en ventas con un margen de contribución del 30%. Reportamos esas cuentas, no solo la facturación.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Captación off-page",
        heading: "Capta la demanda fuera de Amazon. Envía compradores dentro.",
        subtitle: "Los compradores investigan en Google y en asistentes de IA antes de abrir Amazon. Les salimos al paso con contenido útil y un camino medido y específico por ASIN hasta el listing.",
        richTextBlocks: [
          {
            heading: "Contenido comparativo que se gana el clic",
            body: "Creamos páginas comparativas y guías de compra basadas en búsquedas, en dominios aprobados o en medios relevantes, en torno a preguntas de compra reales como qué mochila de viaje cumple el límite de equipaje de cabina. Cada página lleva contenido original, criterios justos, relaciones comerciales declaradas, una revisión en móvil y un destino que funciona para cada CTA.",
            href: "/content-writing",
            hrefLabel: "Nuestro servicio de redacción de contenidos",
          },
          {
            heading: "Sitios relevantes, no enlaces al por mayor",
            body: "El dominio de Amazon es fuerte, pero la autoridad de dominio y la autoridad de página no son lo mismo. Construimos autoridad a nivel de página con ubicaciones relevantes, revisadas por afinidad temática, tráfico real, señales de spam y transparencia. Cada activo entra en un registro con URL, audiencia, coste, responsable, destino y etiqueta de tracking.",
            href: "/link-building",
            hrefLabel: "Cómo trabajamos el link building",
          },
          {
            heading: "Escala con criterio",
            body: "Cada brief externo se asigna a un producto y a una necesidad del comprador concretos, y se mide por clics salientes cualificados y pedidos atribuidos. Empezamos con términos muy ligados al producto y solo añadimos temas más amplios cuando el tráfico demuestra ser útil. Mantenemos coherentes los datos y atributos del producto para que el asistente de compras con IA de Amazon responda bien a las preguntas de compra. Los tests con enlaces directos al listing solo se hacen tras una revisión de políticas y con una hipótesis definida.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Amazon vs Google",
        heading: "SEO Amazon vs SEO Google: en qué se diferencian y dónde se cruzan",
        subtitle: "Dos sistemas de ranking distintos. Un mismo objetivo comercial.",
        richTextBlocks: [
          {
            heading: "En Amazon deciden la relevancia y las ventas",
            body: "Dentro de Amazon, el ranking depende de si el listing encaja con la búsqueda y de si el comprador compra. Títulos, viñetas, términos backend, atributos, imágenes, precio, reseñas y stock alimentan esa decisión. El contenido extenso y las correcciones técnicas de rastreo no aplican dentro de los límites de caracteres de un listing.",
          },
          {
            heading: "Fuera de Amazon, la disciplina de Google sigue rindiendo",
            body: "La investigación que lleva a un comprador hasta Amazon suele empezar en Google o en un asistente de IA. Ahí es donde el SEO clásico - contenido comparativo, autoridad relevante y seguimiento por búsqueda - capta la demanda que tu competencia deja escapar. Medimos la visibilidad en Google y los rankings en Amazon como métricas separadas, para que ninguna se lleve el mérito del trabajo de la otra.",
            href: "/blog/ecommerce-seo-keywords",
            hrefLabel: "Keywords SEO para ecommerce en cada plataforma",
          },
        ],
      },
      {
        type: "process",
        badge: "Plan de lanzamiento",
        heading: "Los primeros 90 días. Construidos sobre evidencias.",
        process: [
          {
            number: "01",
            title: "Días 1-30: auditoría y lanzamiento",
            description:
              "Línea base de los ASIN prioritarios, mapa de búsquedas, aprobación de cambios en los listings y del primer plan de contenido externo. Resultado: línea base, cambios aprobados y QA del tracking.",
          },
          {
            number: "02",
            title: "Días 31-60: publicar y aprender",
            description:
              "Publicamos los activos aprobados, vigilamos la indexación y los clics, hacemos los tests de listing posibles y revisamos los datos de Amazon. Resultado: registro de activos en vivo y revisión de rendimiento.",
          },
          {
            number: "03",
            title: "Días 61-90: mejorar y decidir",
            description:
              "Actualizamos las páginas y afirmaciones débiles, revisamos la atribución ya madura y decidimos qué temas merecen más inversión. Resultado: registro de optimización y plan para el siguiente periodo.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Alcance del trabajo",
        heading: "Ves el trabajo que se entrega. En cada ciclo.",
        subtitle: "Aprobaciones claras, mejor ejecución, sin sorpresas. El control de la cuenta sigue siendo tuyo.",
        deliverables: [
          { title: "En el arranque", description: "Auditoría de ASIN, mapa de búsquedas, línea base, plan de producción aprobado y un registro de accesos y tracking. Verificado: ASIN, responsables y prioridades confirmados." },
          { title: "Por cada ASIN incluido", description: "Recomendaciones para el listing, textos y briefs creativos aprobados y QA tras el cambio. Verificado: aprobación registrada y contenido en vivo comprobado." },
          { title: "Por cada activo externo", description: "Brief aprobado, URL publicada, destino, tracking y registro de transparencia. Verificado: móvil, enlaces y analítica." },
          { title: "Semanal y mensual", description: "Actualización semanal del progreso y, cada mes, resultados, revisión de costes y el siguiente plan de entrega, con las decisiones pendientes y los próximos pasos claros." },
          { title: "De qué nos encargamos", description: "Investigación y producción. Preparamos la campaña, producimos los activos acordados e informamos de lo que se ha entregado y de lo que ha pasado." },
          { title: "Qué aportas tú", description: "Accesos y la verdad del producto: pruebas del producto, activos de marca, permisos de cuenta, márgenes y una persona responsable de aprobar." },
          { title: "Antes del lanzamiento", description: "Un alcance a medida de tu marca que cubre número de ASIN, cantidad de activos, revisiones, propiedad, honorarios, presupuesto operativo y accesos." },
          { title: "Fuera del alcance", description: "Los cambios en listings y anuncios se coordinan con tu equipo de cuenta. Los medios de pago, la gestión de la salud de la cuenta y la fotografía nueva se presupuestan aparte." },
        ],
      },
      {
        type: "team",
        badge: "El equipo",
        heading: "Quién hace el trabajo",
        teamLead: {
          name: "Fabian van Til",
          role: "Estrategia e Innovación",
          bio: "Fabian dirige la estrategia de SEO Amazon. Lleva más de 8 años trabajando en varios marketplaces y gestiona cada proyecto de Amazon con la misma regla: el trabajo se juzga por pedidos y margen de contribución, no solo por posiciones de keywords.",
          image: "/images/framer/fabian-van-til-new.jpeg",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "SEO T\u00e9cnico & On-Page",
            bio: "Dise\u00f1a los sistemas de datos y on-page e infraestructura de seguimiento para campa\u00f1as de SEO Amazon. Especializado en an\u00e1lisis de rankings, automatizaci\u00f3n de investigaci\u00f3n de keywords y monitoreo de rendimiento.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://bg.linkedin.com/in/dimitar-georgiev-seo-expert",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page y Link Building",
            bio: "Martinijan lidera estrategias de tr\u00e1fico externo y RP digitales que potencian la autoridad de listings de Amazon. Construye se\u00f1ales externas que complementan los rankings org\u00e1nicos de Amazon.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Contenido, Link Building y PR",
            bio: "Redacta textos de listings de Amazon y estrategias de contenido A+ que posicionan y convierten. Especializado en mapeo de keywords, optimizaci\u00f3n de vi\u00f1etas y estrategia de t\u00e9rminos backend, y coordina link building y PR.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "¿En qué se diferencia el SEO Amazon del SEO en Google?",
          answer:
            "Dentro de Amazon, el ranking depende de la relevancia para la búsqueda y de si el comprador compra, así que el trabajo está en los textos del listing, los términos backend, los atributos y las creatividades. El SEO en Google sigue importando para la investigación que hace el comprador antes de llegar a Amazon, y ahí entran nuestro contenido comparativo y la captación externa. Lee más sobre [keywords SEO para ecommerce](/blog/ecommerce-seo-keywords) y en qué cambian según la plataforma.",
        },
        {
          question: "¿Cuánto tiempo hasta ver resultados en Amazon?",
          answer:
            "Los primeros 30 días cubren la auditoría, la línea base, los cambios aprobados en los listings y el tracking. Los días 31-60 se dedican a publicar y recoger los primeros datos, y entre los días 61-90 la atribución ya está lo bastante madura para decidir qué temas merecen más inversión. Nuestra guía de [investigación de keywords para ecommerce](/academy/keyword-research-for-ecommerce) explica la investigación que hay detrás.",
        },
        {
          question: "¿Cómo demostráis que la campaña ha generado dinero?",
          answer:
            "Cada activo externo tiene su propio enlace con tracking al marketplace y al ASIN correctos. En las cuentas con Brand Registry, Amazon Attribution informa de clics, añadidos al carrito y ventas por enlace, y el Brand Referral Bonus devuelve alrededor del 10% de las ventas atribuidas. Después reportamos el margen de contribución tras los costes de producto, de Amazon y de campaña, no solo los ingresos.",
        },
        {
          question: "¿También gestionáis el PPC de Amazon?",
          answer:
            "No. Los medios de pago se presupuestan aparte. Coordinamos los cambios de listing con tu equipo de anuncios y seguimos los rankings orgánicos y patrocinados por separado, para que veas cuál se movió de verdad.",
        },
        {
          question: "¿Importan los backlinks para los listings de Amazon?",
          answer:
            "El dominio de Amazon es fuerte, pero la autoridad a nivel de página es otra cosa. Creamos ubicaciones relevantes y contenido comparativo que posicionan en Google y envían compradores cualificados a tus ASIN. Nada de volumen de granjas de enlaces, y los tests con enlaces directos al listing solo se hacen tras una revisión de políticas.",
        },
        {
          question: "¿Qué necesitáis de nosotros?",
          answer:
            "Pruebas del producto, activos de marca, permisos de cuenta, márgenes y una persona responsable de aprobar. El control de la cuenta sigue siendo tuyo. Antes del lanzamiento acordamos número de ASIN, cantidad de activos, revisiones, honorarios y presupuesto operativo en un alcance a medida de tu marca.",
        },
        {
          question: "¿Podéis ayudar con el contenido A+ y las imágenes?",
          answer:
            "Sí. Para cada ASIN incluido entregamos una auditoría de la galería, un shot list, textos para las imágenes y un brief de módulos A+, y validamos el contenido en vivo tras la aprobación. La fotografía nueva se presupuesta aparte. Nuestro [equipo de redacción de contenidos](/content-writing) escribe los textos.",
        },
        {
          question: "¿Qué marketplaces de Amazon cubrís?",
          answer:
            "Todos los principales marketplaces de Amazon, incluidos US, UK, DE, FR, IT, ES y NL. Nuestra [investigación de keywords](/keyword-research) está localizada para cada marketplace.",
        },
      ],
      miniCta: {
        heading: "Empieza con una auditoría gratuita de oportunidades de ROI",
        subtitle:
          "Evaluamos el potencial de mejora en tus ASIN prioritarios antes de que te comprometas a nada.",
      },
    },
  },
  it: {
    hero: {
      badge: "SEO Amazon",
      heading: "Servizi SEO Amazon pensati per vendere",
      subtitle:
        "Più ricerche pertinenti, una pagina prodotto migliore e un percorso misurabile fino all'acquisto. Costruiamo la campagna attorno ai tuoi ASIN, poi colleghiamo il lavoro a vendite e margine di contribuzione.",
      ctaText: "Richiedi un audit gratuito delle opportunità di ROI",
    },
    trustBar: "Scelti da oltre 20 brand e-commerce da 7 a 9 cifre",
    trustBarLogos: [
      { src: "/images/clients/heyshape.png", alt: "HEYSHAPE", noFilter: true },
      { src: "/images/clients/hike.svg", alt: "Hike Footwear" },
      { src: "/images/clients/me-logo.png", alt: "Mother's Earth" },
      { src: "/images/clients/tobios-logo.png", alt: "Tobio's Kits" },
    ],
    trustBarMoreBrands: "+ altri 20 brand DTC da 7 a 9 cifre",
    sections: [
      {
        type: "benefits",
        badge: "L'obiettivo commerciale",
        heading: "Vinci le ricerche che contano. Poi conquista l'ordine.",
        subtitle: "Il successo si misura in ordini e margine di contribuzione. I posizionamenti delle keyword spiegano i progressi.",
        benefits: [
          {
            title: "Visibilità pertinente",
            description:
              "Associamo il tuo prodotto alle query d'acquisto per cui merita di comparire, invece di inseguire ogni termine ad alto volume.",
          },
          {
            title: "Conversione dell'inserzione",
            description:
              "Diamo agli acquirenti le prove che servono per scegliere il tuo prodotto: testi chiari, attributi completi e immagini che rispondono alle vere obiezioni.",
          },
          {
            title: "Acquisizione profittevole",
            description:
              "Portiamo traffico esterno qualificato sui tuoi ASIN e misuriamo cosa succede dopo il clic, fino a ordini e margine di contribuzione.",
          },
        ],
      },
      {
        type: "stats",
        badge: "Testato su brand e-commerce",
        heading: "Lo stesso team. Risultati di ricerca reali, prima di Amazon.",
        subtitle:
          "Caso studio: Tobio's. La stessa disciplina che portiamo su Amazon - una baseline a livello di query, pagine pubblicate, poi un risultato misurato.",
        stats: [
          { value: "+399%", label: "Traffico organico (da 9.318 a 46.471)" },
          { value: "+153%", label: "Keyword posizionate (da 2.012 a 5.087)" },
          { value: "+380%", label: "Posizionamenti in top 3 (da 117 a 562)" },
          { value: "+188%", label: "Impressioni organiche (da 466K a 1,34M)" },
        ],
      },
      {
        type: "process",
        badge: "Lo scope in sintesi",
        heading: "Una campagna. Deliverable chiari.",
        subtitle: "Quattro filoni di lavoro, ognuno con un output definito e una verifica definita.",
        process: [
          {
            number: "01",
            title: "Ricerca e baseline",
            description:
              "Audit degli ASIN, cluster di keyword e una mappa query-prodotto con priorità. Verifica: ASIN prioritari approvati e una baseline registrata.",
          },
          {
            number: "02",
            title: "SEO Amazon on-page",
            description:
              "Testi delle inserzioni, raccomandazioni sui termini backend, correzioni degli attributi e brief creativi. Verifica: modifiche approvate, controlli live e monitoraggio delle query.",
          },
          {
            number: "03",
            title: "Acquisizione off-page",
            description:
              "Contenuti comparativi, copertura su publisher pertinenti e landing page collegate ad Amazon. Verifica: URL live, tracciamento funzionante e qualità del traffico.",
          },
          {
            number: "04",
            title: "Misurazione e iterazione",
            description:
              "Monitoraggio dei posizionamenti, report di attribuzione e un log datato di test e modifiche. Verifica: una decisione mensile se migliorare, espandere o fermarsi.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Ricerca",
        heading: "Scegli le battaglie keyword giuste",
        subtitle: "Prima viene l'intento. Associamo il linguaggio degli acquirenti a un ASIN specifico invece di inseguire ogni termine ad alto volume.",
        richTextBlocks: [
          {
            heading: "Quattro cluster di query, quattro decisioni diverse",
            body: "I termini di prodotto principali come \"zaino da viaggio\" vengono valutati per pertinenza, posizionamento attuale e concorrenza. Le query di bisogno specifico come \"zaino bagaglio a mano con tasca per laptop\" vengono associate alle caratteristiche del prodotto che rispondono a quel bisogno. Le query comparative come \"miglior zaino da viaggio\" ricevono una pagina comparativa esterna utile con una CTA tracciata. La domanda di brand come \"zaino da viaggio [brand]\" viene verificata per reperibilità e destinazione corretta.",
          },
          {
            heading: "Gap di keyword dei competitor, filtrati senza sconti",
            body: "Confrontiamo gli ASIN dei competitor rilevanti, poi filtriamo i termini che si adattano davvero al tuo prodotto e all'intento d'acquisto. Un gap conta solo se puoi vincere la vendita. Il deliverable è una mappa delle opportunità ordinata per priorità, con ASIN target, cluster di keyword, visibilità attuale e azione proposta.",
            href: "/keyword-research",
            hrefLabel: "Come facciamo la ricerca keyword",
          },
        ],
      },
      {
        type: "benefits",
        badge: "SEO Amazon on-page",
        heading: "Rendi l'inserzione più facile da trovare. E da acquistare.",
        subtitle: "Per ogni ASIN in scope consegniamo un audit della galleria, una shot list, i testi delle immagini e un brief dei moduli A+, poi validiamo claim, leggibilità da mobile e contenuto live dopo l'approvazione.",
        benefits: [
          {
            title: "Titolo",
            description:
              "Apri con l'identità del prodotto e i termini primari pertinenti. Mantienilo leggibile e conforme.",
          },
          {
            title: "Elenchi puntati e descrizione",
            description:
              "Rispondi alle obiezioni d'acquisto con benefici verificati, specifiche e casi d'uso.",
          },
          {
            title: "Termini backend",
            description:
              "Aggiungi sinonimi pertinenti e termini mancanti. Elimina duplicati, parole non correlate e nomi di brand vietati.",
          },
          {
            title: "Attributi del catalogo",
            description:
              "Completa con precisione tipo di prodotto, taglia, materiale e gli altri attributi di categoria. Verifica la correttezza delle variazioni.",
          },
          {
            title: "Immagine principale e galleria",
            description:
              "Un prodotto riconoscibile su sfondo conforme, poi dimensioni, utilizzo, contenuto della confezione e benefici comprovati lungo tutta la galleria.",
          },
          {
            title: "A+ Content",
            description:
              "Confronto, contesto del brand e risposte alle domande d'acquisto. Nuovi servizi fotografici vengono definiti a parte, se ti servono.",
          },
        ],
      },
      {
        type: "tips",
        badge: "Come lavoriamo",
        heading: "Le 7 regole di ogni nostra campagna Amazon",
        subtitle: "La maggior parte della SEO Amazon sbaglia nella misurazione, non nei testi. Queste regole ci tengono onesti.",
        tips: [
          {
            number: "01",
            title: "Testa un'ipotesi, non un'intuizione",
            body: "Usa l'inserzione live come controllo. La versione B risponde in modo più chiaro a una specifica obiezione d'acquisto - nel titolo, in un'immagine, negli elenchi puntati o nell'A+ Content. Definisci prima la metrica, analizza il risultato completo e approva prima di pubblicare. Dove possibile usiamo gli esperimenti randomizzati di Amazon, con le impostazioni registrate e la pubblicazione automatica disattivata, salvo tua approvazione.",
          },
          {
            number: "02",
            title: "Trova la perdita prima di aggiungere traffico",
            body: "Mettiamo che un brand ottenga il 12% delle impressioni ma solo il 7% dei clic e il 5% degli acquisti. Mandare più traffico significa solo farlo passare dalla stessa falla. Prima controlliamo titolo, immagine principale e offerta, poi scaliamo l'acquisizione esterna.",
          },
          {
            number: "03",
            title: "Traccia organico e sponsorizzato separatamente",
            body: "I posizionamenti a pagamento possono far sembrare i progressi organici migliori o peggiori di quanto siano. Tagghiamo per ASIN e cluster di keyword, monitoriamo i competitor e annotiamo ogni modifica di inserzione, prezzo, annunci e stock, così vedi cosa si è mosso davvero.",
          },
          {
            number: "04",
            title: "Il ranking di una keyword non è il ranking di categoria",
            body: "Un prodotto può stare in posizione 2 per una query e in posizione 35 per una variante molto simile. Il Best Sellers Rank non sostituisce il monitoraggio a livello di query. Analizziamo i termini deboli uno per uno invece di nasconderli in una media.",
          },
          {
            number: "05",
            title: "Annota le modifiche, non attribuire cause",
            body: "Un salto di posizionamento la settimana dopo un aggiornamento dell'inserzione potrebbe dipendere dall'aggiornamento. Ma potrebbe anche essere un competitor rimasto senza stock, un cambio di prezzo o una nuova campagna pubblicitaria. Registriamo annunci, prezzo, stock e mosse dei competitor accanto a ogni modifica dell'inserzione e leggiamo il contesto prima di attribuire qualsiasi merito.",
          },
          {
            number: "06",
            title: "Tagga ogni asset esterno",
            body: "Un link tracciato per ogni pagina o placement rilevante, che punta al marketplace e all'ASIN corretti, testato prima del lancio. Per gli account Brand Registry, Amazon Attribution mostra clic, aggiunte al carrello e vendite per link, e il Brand Referral Bonus restituisce circa il 10% delle vendite attribuite. Prima del lancio verifichiamo cosa si applica al tuo account.",
          },
          {
            number: "07",
            title: "Il fatturato fa piacere. Il margine conta.",
            body: "1.000 visite tracciate con un tasso d'acquisto dell'8% e un ordine medio di $40 fanno $3.200 di vendite. Togli il 70% per prodotto, commissioni, logistica e resi, poi $700 di costi della campagna, e restano $260 per costi fissi e profitto. Il break-even è a $2.333 di vendite con un margine di contribuzione del 30%. Riportiamo questi conti, non solo il fatturato lordo.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Acquisizione off-page",
        heading: "Intercetta la domanda fuori da Amazon. Porta dentro gli acquirenti.",
        subtitle: "Gli acquirenti fanno ricerche su Google e sugli assistenti AI prima di aprire Amazon. Li raggiungiamo lì con contenuti utili e un percorso tracciato, specifico per ASIN, fino all'inserzione.",
        richTextBlocks: [
          {
            heading: "Contenuti comparativi che si guadagnano il clic",
            body: "Costruiamo pagine comparative e guide all'acquisto guidate dalle query, su domini approvati o pubblicazioni pertinenti, attorno a domande d'acquisto reali come quale zaino da viaggio rientra nei limiti del bagaglio a mano. Ogni pagina ha contenuti originali, criteri equi, rapporti commerciali dichiarati, un controllo da mobile e una destinazione funzionante per ogni CTA.",
            href: "/content-writing",
            hrefLabel: "Il nostro servizio di content writing",
          },
          {
            heading: "Siti pertinenti, non link in blocco",
            body: "Il dominio di Amazon è forte, ma l'autorità del dominio e l'autorità della pagina sono cose diverse. Costruiamo autorità a livello di pagina con placement pertinenti, verificati per affinità tematica, traffico reale, segnali di spam e trasparenza. Ogni asset finisce in un registro con URL, pubblico, costo, responsabile, destinazione e tag di tracciamento.",
            href: "/link-building",
            hrefLabel: "Il nostro approccio alla link building",
          },
          {
            heading: "Scala con metodo",
            body: "Ogni brief esterno è associato a un prodotto e a un bisogno dell'acquirente pertinenti, e misurato su clic in uscita qualificati e ordini attribuiti. Partiamo da termini molto vicini al prodotto e aggiungiamo temi più ampi solo quando il traffico si dimostra utile. Manteniamo coerenti dati e attributi di prodotto, così l'assistente AI per lo shopping di Amazon risponde correttamente alle domande d'acquisto. I test con link diretti all'inserzione partono solo dopo una verifica delle policy e con un'ipotesi definita.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Amazon vs Google",
        heading: "SEO Amazon vs SEO Google: dove si differenziano e dove si incontrano",
        subtitle: "Due sistemi di ranking diversi. Un unico obiettivo commerciale.",
        richTextBlocks: [
          {
            heading: "Su Amazon decidono pertinenza e vendite",
            body: "Dentro Amazon, il ranking dipende dal fatto che l'inserzione corrisponda alla query e che l'acquirente compri. Titoli, elenchi puntati, termini backend, attributi, immagini, prezzo, recensioni e stock alimentano tutti questo meccanismo. Contenuti long-form e interventi tecnici sulla scansione non si applicano entro i limiti di caratteri di un'inserzione.",
          },
          {
            heading: "Fuori da Amazon, il metodo Google paga ancora",
            body: "La ricerca che porta un acquirente su Amazon spesso inizia su Google o su un assistente AI. È lì che la SEO classica - contenuti comparativi, autorità pertinente e monitoraggio a livello di query - intercetta la domanda che i tuoi competitor si lasciano sfuggire. Teniamo visibilità su Google e posizionamenti su Amazon come metriche separate, così nessuna delle due si prende il merito del lavoro dell'altra.",
            href: "/blog/ecommerce-seo-keywords",
            hrefLabel: "Keyword SEO per l'e-commerce su diverse piattaforme",
          },
        ],
      },
      {
        type: "process",
        badge: "Piano di lancio",
        heading: "I primi 90 giorni. Costruiti sulle prove.",
        process: [
          {
            number: "01",
            title: "Giorni 1-30: audit e lancio",
            description:
              "Baseline degli ASIN prioritari, mappatura delle query, approvazione delle modifiche alle inserzioni e del primo piano di contenuti esterni. Output: baseline, modifiche approvate e QA del tracciamento.",
          },
          {
            number: "02",
            title: "Giorni 31-60: pubblica e impara",
            description:
              "Pubblicazione degli asset approvati, monitoraggio di indicizzazione e clic, test sulle inserzioni idonee e analisi dei dati Amazon. Output: registro degli asset live e analisi delle performance.",
          },
          {
            number: "03",
            title: "Giorni 61-90: migliora e decidi",
            description:
              "Aggiornamento di pagine e claim deboli, analisi dell'attribuzione consolidata e scelta dei temi su cui vale la pena investire ancora. Output: log delle ottimizzazioni e piano per il periodo successivo.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Ambito di lavoro",
        heading: "Vedi il lavoro che viene consegnato. A ogni ciclo.",
        subtitle: "Approvazioni chiare, esecuzione migliore, nessuna sorpresa. Il controllo dell'account resta a te.",
        deliverables: [
          { title: "In fase di setup", description: "Audit degli ASIN, mappa delle query, baseline, piano di produzione approvato e un registro di accessi e tracciamento. Verifica: ASIN, responsabili e priorità confermati." },
          { title: "Per ogni ASIN in scope", description: "Raccomandazioni per l'inserzione, testi e brief creativi approvati, e QA dopo le modifiche. Verifica: approvazione registrata e contenuto live controllato." },
          { title: "Per ogni asset esterno", description: "Brief approvato, URL pubblicato, destinazione, tracciamento e registro della trasparenza. Verifica: mobile, link e analytics." },
          { title: "Ogni settimana e ogni mese", description: "Aggiornamento settimanale sui progressi, poi risultati mensili, revisione dei costi e il piano di consegna successivo, con decisioni aperte e prossime azioni indicate." },
          { title: "Di cosa ci occupiamo noi", description: "Ricerca e produzione. Prepariamo la campagna, produciamo gli asset concordati e riportiamo cosa è stato consegnato e cosa è successo." },
          { title: "Cosa fornisci tu", description: "Accessi e dati veri sul prodotto: prove sul prodotto, asset del brand, permessi dell'account, margini e un responsabile delle approvazioni." },
          { title: "Prima del lancio", description: "Uno scope specifico per il brand che copre numero di ASIN, quantità di asset, revisioni, proprietà, compensi, budget operativo e accessi." },
          { title: "Tenuto separato", description: "Le modifiche a inserzioni e annunci sono coordinate con il tuo team account. Paid media, gestione dello stato dell'account e nuovi servizi fotografici vengono definiti a parte." },
        ],
      },
      {
        type: "team",
        badge: "Il team",
        heading: "Chi fa il lavoro",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategia & Innovazione",
          bio: "Fabian guida la strategia SEO Amazon. Lavora su diversi marketplace da oltre 8 anni e gestisce ogni progetto Amazon con la stessa regola: il lavoro si giudica su ordini e margine di contribuzione, non solo sui posizionamenti delle keyword.",
          image: "/images/framer/fabian-van-til-new.jpeg",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "SEO tecnico & On-Page",
            bio: "Dimitar progetta i sistemi di dati, on-page e l\u2019infrastruttura di tracking per le campagne SEO Amazon. Specializzato in analisi dei posizionamenti, automazione della ricerca keyword e monitoraggio delle performance.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://bg.linkedin.com/in/dimitar-georgiev-seo-expert",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Link Building",
            bio: "Martinijan gestisce strategie di traffico esterno e digital PR che potenziano l\u2019autorit\u00e0 delle inserzioni Amazon. Costruisce segnali esterni che completano i posizionamenti organici Amazon.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Contenuti, Link Building & PR",
            bio: "Gjorgi redige testi per inserzioni Amazon e strategie di contenuto A+ che si posizionano e convertono, oltre a link building e PR per brand Amazon. Specializzato in mappatura keyword, ottimizzazione dei punti elenco, strategia dei termini backend e campagne di outreach.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "In cosa si differenzia la SEO Amazon dalla SEO su Google?",
          answer:
            "Dentro Amazon, il ranking dipende dalla pertinenza rispetto alla query e dal fatto che gli acquirenti comprino, quindi il lavoro riguarda testi delle inserzioni, termini backend, attributi e creatività. La SEO su Google conta ancora per le ricerche che gli acquirenti fanno prima di arrivare su Amazon, ed è lì che entrano in gioco i nostri contenuti comparativi e l'acquisizione esterna. Scopri di più sulle [keyword SEO per l'e-commerce](/blog/ecommerce-seo-keywords) e su come cambiano tra le piattaforme.",
        },
        {
          question: "Quanto tempo serve per vedere risultati su Amazon?",
          answer:
            "I primi 30 giorni coprono audit, baseline, modifiche approvate alle inserzioni e tracciamento. I giorni 31-60 servono a pubblicare e raccogliere i primi dati, e tra il giorno 61 e il 90 l'attribuzione è abbastanza consolidata per decidere quali temi meritano più investimento. La nostra guida alla [ricerca keyword per l'e-commerce](/academy/keyword-research-for-ecommerce) spiega la ricerca che c'è dietro.",
        },
        {
          question: "Come dimostrate che la campagna ha fatto guadagnare?",
          answer:
            "Ogni asset esterno ha il proprio link tracciato verso il marketplace e l'ASIN corretti. Per gli account Brand Registry, Amazon Attribution riporta clic, aggiunte al carrello e vendite per link, e il Brand Referral Bonus restituisce circa il 10% delle vendite attribuite. Poi riportiamo il margine di contribuzione al netto di costi di prodotto, Amazon e campagna, non solo il fatturato.",
        },
        {
          question: "Gestite anche il PPC Amazon?",
          answer:
            "No. Il paid media viene definito a parte. Coordiniamo le modifiche alle inserzioni con il tuo team advertising e monitoriamo separatamente posizionamenti organici e sponsorizzati, così vedi quale dei due si è mosso davvero.",
        },
        {
          question: "I backlink contano per le inserzioni Amazon?",
          answer:
            "Il dominio di Amazon è forte, ma l'autorità a livello di pagina è un'altra cosa. Costruiamo placement pertinenti e contenuti comparativi che si posizionano su Google e portano acquirenti qualificati sui tuoi ASIN. Niente volumi da link farm, e i test con link diretti all'inserzione partono solo dopo una verifica delle policy.",
        },
        {
          question: "Cosa vi serve da parte nostra?",
          answer:
            "Prove sul prodotto, asset del brand, permessi dell'account, margini e un responsabile delle approvazioni. Il controllo dell'account resta a te. Prima del lancio concordiamo numero di ASIN, quantità di asset, revisioni, compensi e budget operativo in uno scope specifico per il brand.",
        },
        {
          question: "Potete aiutare con A+ Content e immagini?",
          answer:
            "Sì. Per ogni ASIN in scope consegniamo un audit della galleria, una shot list, i testi delle immagini e un brief dei moduli A+, e validiamo il contenuto live dopo l'approvazione. Nuovi servizi fotografici vengono definiti a parte. I testi li scrive il nostro [team di content writing](/content-writing).",
        },
        {
          question: "Quali marketplace Amazon supportate?",
          answer:
            "Tutti i principali marketplace Amazon, inclusi US, UK, DE, FR, IT, ES e NL. La nostra [ricerca keyword](/keyword-research) è localizzata per ogni marketplace.",
        },
      ],
      miniCta: {
        heading: "Parti da un audit gratuito delle opportunità di ROI",
        subtitle:
          "Valutiamo il potenziale di crescita sui tuoi ASIN prioritari prima che tu ti impegni in qualsiasi cosa.",
      },
    },
  },
  nl: {
    hero: {
      badge: "Amazon SEO",
      heading: "Amazon SEO-diensten die gebouwd zijn om te verkopen",
      subtitle:
        "Meer relevante zoekopdrachten, een betere productpagina en een meetbare route naar de aankoop. We bouwen de campagne rond je ASIN's en koppelen het werk aan verkoop en contributiemarge.",
      ctaText: "Vraag een gratis ROI-kansenaudit aan",
    },
    trustBar: "Vertrouwd door 20+ e-commercemerken met 7 tot 9 cijfers omzet",
    trustBarLogos: [
      { src: "/images/clients/heyshape.png", alt: "HEYSHAPE", noFilter: true },
      { src: "/images/clients/hike.svg", alt: "Hike Footwear" },
      { src: "/images/clients/me-logo.png", alt: "Mother's Earth" },
      { src: "/images/clients/tobios-logo.png", alt: "Tobio's Kits" },
    ],
    trustBarMoreBrands: "+ 20 andere DTC-merken met 7 tot 9 cijfers omzet",
    sections: [
      {
        type: "benefits",
        badge: "Het commerciële doel",
        heading: "Win de zoekopdrachten die ertoe doen. Verdien daarna de bestelling.",
        subtitle: "Succes betekent bestellingen en contributiemarge. Zoekwoordposities verklaren de voortgang.",
        benefits: [
          {
            title: "Relevante zichtbaarheid",
            description:
              "We koppelen je product aan de koopgerichte zoekopdrachten waarvoor het hoort te verschijnen, in plaats van elke term met veel volume na te jagen.",
          },
          {
            title: "Listingconversie",
            description:
              "We geven kopers het bewijs dat ze nodig hebben om voor jouw product te kiezen: heldere teksten, complete attributen en afbeeldingen die de echte bezwaren beantwoorden.",
          },
          {
            title: "Winstgevende acquisitie",
            description:
              "We sturen gekwalificeerd extern verkeer naar je ASIN's en meten wat er na de klik gebeurt, tot op bestellingen en contributiemarge.",
          },
        ],
      },
      {
        type: "stats",
        badge: "Bewezen bij e-commercemerken",
        heading: "Hetzelfde team. Echte zoekresultaten, al vóór Amazon.",
        subtitle:
          "Casestudy: Tobio's. Dezelfde discipline die we naar Amazon brengen - een nulmeting per zoekopdracht, live pagina's en daarna een gemeten resultaat.",
        stats: [
          { value: "+399%", label: "Organisch verkeer (9.318 naar 46.471)" },
          { value: "+153%", label: "Rankende zoekwoorden (2.012 naar 5.087)" },
          { value: "+380%", label: "Top 3-posities (117 naar 562)" },
          { value: "+188%", label: "Organische impressies (466K naar 1,34 mln)" },
        ],
      },
      {
        type: "process",
        badge: "De scope in één oogopslag",
        heading: "Eén campagne. Heldere deliverables.",
        subtitle: "Vier werkstromen, elk met een vaste output en een vaste controle.",
        process: [
          {
            number: "01",
            title: "Onderzoek en nulmeting",
            description:
              "ASIN-audit, zoekwoordclusters en een geprioriteerde koppeling van zoekopdracht naar product. Gecontroleerd via: goedgekeurde prioriteits-ASIN's en een vastgelegde nulmeting.",
          },
          {
            number: "02",
            title: "On-page Amazon SEO",
            description:
              "Listingteksten, aanbevelingen voor backend-zoektermen, attribuutfixes en creatieve briefings. Gecontroleerd via: goedgekeurde wijzigingen, livechecks en monitoring per zoekopdracht.",
          },
          {
            number: "03",
            title: "Off-page acquisitie",
            description:
              "Vergelijkingscontent, relevante publicaties en landingspagina's die naar Amazon linken. Gecontroleerd via: live URL's, werkende tracking en verkeerskwaliteit.",
          },
          {
            number: "04",
            title: "Meten en bijsturen",
            description:
              "Rankingtracking, attributierapporten en een gedateerd test- en wijzigingslogboek. Gecontroleerd via: een maandelijks besluit om te verbeteren, uit te breiden of te stoppen.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Onderzoek",
        heading: "Kies de juiste zoekwoordgevechten",
        subtitle: "Zoekintentie gaat voor. We koppelen de taal van kopers aan een specifieke ASIN in plaats van elke term met veel volume na te jagen.",
        richTextBlocks: [
          {
            heading: "Vier zoekclusters, vier verschillende beslissingen",
            body: "Kernproducttermen zoals \"reisrugzak\" beoordelen we op relevantie, huidige positie en concurrentie. Specifieke zoekopdrachten zoals \"handbagage rugzak met laptopvak\" koppelen we aan de productkenmerken die het antwoord geven. Vergelijkende zoekopdrachten zoals \"beste reisrugzak\" krijgen een bruikbare externe vergelijkingspagina met een getrackte CTA. Merkvraag zoals \"[merk] reisrugzak\" controleren we op vindbaarheid en de juiste bestemming.",
          },
          {
            heading: "Zoekwoordgaten bij concurrenten, streng gefilterd",
            body: "We vergelijken relevante ASIN's van concurrenten en filteren op termen die echt bij je product en de koopintentie passen. Een gat telt alleen als je de verkoop kunt winnen. De deliverable is een gerangschikte kansenkaart met doel-ASIN, zoekwoordcluster, huidige zichtbaarheid en voorgestelde actie.",
            href: "/keyword-research",
            hrefLabel: "Zo doen wij zoekwoordonderzoek",
          },
        ],
      },
      {
        type: "benefits",
        badge: "On-page Amazon SEO",
        heading: "Maak de listing makkelijker te vinden. En makkelijker te kopen.",
        subtitle: "Voor elke ASIN binnen de scope leveren we een galerij-audit, shotlist, beeldteksten en een briefing voor A+-modules. Daarna valideren we claims, mobiele leesbaarheid en de live content na goedkeuring.",
        benefits: [
          {
            title: "Titel",
            description:
              "Begin met de productidentiteit en relevante primaire termen. Houd het leesbaar en binnen de richtlijnen.",
          },
          {
            title: "Bullets en beschrijving",
            description:
              "Beantwoord koopbezwaren met aantoonbare voordelen, specificaties en toepassingen.",
          },
          {
            title: "Backend-zoektermen",
            description:
              "Voeg relevante synoniemen en gemiste termen toe. Verwijder dubbelingen, niet-gerelateerde woorden en verboden merknamen.",
          },
          {
            title: "Catalogusattributen",
            description:
              "Vul producttype, maat, materiaal en andere categorieattributen volledig en correct in. Controleer of de variaties kloppen.",
          },
          {
            title: "Hoofdafbeelding en galerij",
            description:
              "Een herkenbaar product op een achtergrond die aan de regels voldoet, en daarna maat, gebruik, inhoud en onderbouwde voordelen verspreid over de galerij.",
          },
          {
            title: "A+-content",
            description:
              "Vergelijking, merkcontext en antwoorden op koopvragen. Nieuwe fotografie nemen we apart op in de scope als je die nodig hebt.",
          },
        ],
      },
      {
        type: "tips",
        badge: "Zo werken wij",
        heading: "7 regels waar elke Amazon-campagne op draait",
        subtitle: "De meeste Amazon SEO gaat mis in de meting, niet in de tekst. Deze regels houden ons eerlijk.",
        tips: [
          {
            number: "01",
            title: "Test een hypothese, geen onderbuikgevoel",
            body: "Gebruik de live listing als controlegroep. Versie B beantwoordt één specifiek koopbezwaar duidelijker - in de titel, een afbeelding, de bullets of de A+-content. Bepaal eerst de metric, beoordeel het volledige resultaat en keur goed vóór publicatie. Waar mogelijk gebruiken we de gerandomiseerde experimenten van Amazon, met vastgelegde instellingen en automatisch publiceren uit, tenzij jij het goedkeurt.",
          },
          {
            number: "02",
            title: "Vind het lek voordat je verkeer toevoegt",
            body: "Stel dat een merk 12% van de impressies wint, maar slechts 7% van de klikken en 5% van de aankopen. Meer verkeer sturen giet het alleen door hetzelfde lek. We kijken eerst naar de titel, de hoofdafbeelding en het aanbod, en schalen pas daarna externe acquisitie op.",
          },
          {
            number: "03",
            title: "Volg organisch en gesponsord apart",
            body: "Betaalde plaatsingen kunnen organische vooruitgang beter of slechter laten lijken dan hij is. We taggen per ASIN en zoekwoordcluster, volgen concurrenten en noteren elke wijziging in listing, prijs, advertenties en voorraad, zodat je ziet wat er echt bewoog.",
          },
          {
            number: "04",
            title: "Een zoekwoordpositie is geen categorieranking",
            body: "Een product kan op positie 2 staan voor één zoekopdracht en op 35 voor een nauwe variant. Best Sellers Rank vervangt geen tracking per zoekopdracht. We onderzoeken de zwakke termen één voor één in plaats van ze in een gemiddelde te verstoppen.",
          },
          {
            number: "05",
            title: "Noteer wijzigingen, claim geen oorzaak",
            body: "Een sprong in ranking de week na een listingupdate kan door de update komen. Het kan ook een concurrent zijn die uitverkocht raakt, een prijswijziging of een nieuwe advertentiecampagne. We leggen advertenties, prijs, voorraad en bewegingen van concurrenten vast naast elke listingwijziging en lezen de context voordat we ergens credit aan geven.",
          },
          {
            number: "06",
            title: "Tag elk extern asset",
            body: "Eén getrackte link per relevante pagina of plaatsing, gericht op de juiste marketplace en ASIN, getest vóór de lancering. Voor accounts met Brand Registry toont Amazon Attribution klikken, toevoegingen aan winkelwagen en verkopen per link, en de Brand Referral Bonus betaalt ongeveer 10% van de toegeschreven verkopen terug. We bevestigen vóór de lancering wat voor jouw account geldt.",
          },
          {
            number: "07",
            title: "Omzet is mooi. Contributiemarge telt.",
            body: "1.000 getrackte bezoeken met een aankoopratio van 8% en een gemiddelde bestelling van $40 is $3.200 aan verkoop. Haal daar 70% af voor product, fees, fulfilment en retouren, daarna $700 aan campagnekosten, en er blijft $260 over voor overhead en winst. Break-even ligt op $2.333 aan verkoop bij een contributiemarge van 30%. Die rekensom rapporteren we, niet alleen de omzet.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Off-page acquisitie",
        heading: "Vang vraag buiten Amazon. Stuur kopers naar binnen.",
        subtitle: "Kopers doen onderzoek op Google en in AI-assistenten voordat ze Amazon openen. Daar ontmoeten we ze met bruikbare content en een getrackte, ASIN-specifieke route naar de listing.",
        richTextBlocks: [
          {
            heading: "Vergelijkingscontent die de klik verdient",
            body: "We bouwen vergelijkingspagina's en koopgidsen rond zoekopdrachten, op goedgekeurde domeinen of relevante publicaties, rond echte koopvragen zoals welke reisrugzak binnen de handbagagelimiet past. Elke pagina krijgt originele content, eerlijke criteria, openheid over commerciële relaties, een mobiele check en een werkende bestemming voor elke CTA.",
            href: "/content-writing",
            hrefLabel: "Onze dienst voor contentcreatie",
          },
          {
            heading: "Relevante sites, geen bulklinks",
            body: "Het eigen domein van Amazon is sterk, maar domeinautoriteit en pagina-autoriteit zijn twee verschillende dingen. We bouwen autoriteit op paginaniveau met relevante plaatsingen, gecontroleerd op thematische fit, echt verkeer, spamsignalen en openheid. Elk asset komt in een register met URL, doelgroep, kosten, eigenaar, bestemming en trackingtag.",
            href: "/link-building",
            hrefLabel: "Onze aanpak voor linkbuilding",
          },
          {
            heading: "Bewust opschalen",
            body: "Elke externe briefing koppelen we aan een relevant product en een concrete koperbehoefte, gemeten op gekwalificeerde uitgaande klikken en toegeschreven bestellingen. We beginnen met termen die nauw bij het product passen en voegen pas bredere thema's toe als het verkeer zijn waarde bewijst. We houden productfeiten en attributen consistent, zodat de AI-shoppingassistent van Amazon koopvragen correct beantwoordt. Tests met directe listinglinks draaien pas na een beleidscheck en met een vooraf bepaalde hypothese.",
          },
        ],
      },
      {
        type: "richText",
        badge: "Amazon vs Google",
        heading: "Amazon SEO vs Google SEO: waar ze verschillen en waar ze samenkomen",
        subtitle: "Twee verschillende rankingsystemen. Eén commercieel doel.",
        richTextBlocks: [
          {
            heading: "Op Amazon beslissen relevantie en verkoop",
            body: "Binnen Amazon draait ranking om de vraag of de listing bij de zoekopdracht past en of de koper koopt. Titels, bullets, backend-zoektermen, attributen, afbeeldingen, prijs, reviews en voorraad voeden dat allemaal. Lange content en technische crawlfixes spelen geen rol binnen de tekenlimieten van een listing.",
          },
          {
            heading: "Buiten Amazon loont Google-discipline nog steeds",
            body: "Het onderzoek dat een koper naar Amazon stuurt, begint vaak op Google of in een AI-assistent. Daar vangt klassieke SEO - vergelijkingscontent, relevante autoriteit en tracking per zoekopdracht - de vraag die je concurrenten laten liggen. We houden zichtbaarheid in Google en posities op Amazon als aparte metrics bij, zodat geen van beide credit krijgt voor het werk van de ander.",
            href: "/blog/ecommerce-seo-keywords",
            hrefLabel: "E-commerce SEO-zoekwoorden per platform",
          },
        ],
      },
      {
        type: "process",
        badge: "Lanceringsplan",
        heading: "De eerste 90 dagen. Gebouwd op bewijs.",
        process: [
          {
            number: "01",
            title: "Dag 1-30: audit en lancering",
            description:
              "Nulmeting van prioriteits-ASIN's, zoekopdrachten in kaart brengen, listingwijzigingen en het eerste externe contentplan goedkeuren. Output: nulmeting, goedgekeurde wijzigingen en tracking-QA.",
          },
          {
            number: "02",
            title: "Dag 31-60: publiceren en leren",
            description:
              "Goedgekeurde assets publiceren, indexatie en klikken monitoren, geschikte listingtests draaien en Amazon-data beoordelen. Output: register van live assets en een performancereview.",
          },
          {
            number: "03",
            title: "Dag 61-90: verbeteren en beslissen",
            description:
              "Zwakke pagina's en claims vernieuwen, de volwassen attributie beoordelen en beslissen welke thema's verdere investering verdienen. Output: optimalisatielogboek en plan voor de volgende periode.",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Scope van het werk",
        heading: "Je ziet het werk dat live gaat. Elke cyclus.",
        subtitle: "Heldere goedkeuringen, betere uitvoering, geen verrassingen. De controle over je account blijft bij jou.",
        deliverables: [
          { title: "Bij de start", description: "ASIN-audit, zoekopdrachtenkaart, nulmeting, goedgekeurd productieplan en een register voor toegang en tracking. Gecontroleerd: ASIN's, eigenaren en prioriteiten bevestigd." },
          { title: "Per ASIN binnen de scope", description: "Listingaanbevelingen, goedgekeurde teksten en creatieve briefings, en QA na de wijziging. Gecontroleerd: goedkeuring vastgelegd en live content geverifieerd." },
          { title: "Per extern asset", description: "Goedgekeurde briefing, gepubliceerde URL, bestemming, tracking en vastlegging van openheid. Gecontroleerd: mobiel, links en analytics." },
          { title: "Wekelijks en maandelijks", description: "Een wekelijkse voortgangsupdate, daarna maandelijkse resultaten, een kostenreview en het volgende leveringsplan, met openstaande beslissingen en volgende acties benoemd." },
          { title: "Wat wij doen", description: "Onderzoek en productie. We bereiden de campagne voor, produceren de afgesproken assets en rapporteren wat live ging en wat er gebeurde." },
          { title: "Wat jij aanlevert", description: "Toegang en productwaarheid: productbewijs, merkassets, accountrechten, marges en een vaste persoon die goedkeurt." },
          { title: "Vóór de lancering", description: "Een merkspecifieke scope met het aantal ASIN's, aantallen assets, revisies, eigenaarschap, fees, werkbudget en toegang." },
          { title: "Apart gehouden", description: "Listing- en advertentiewijzigingen stemmen we af met je accountteam. Paid media, accountgezondheid en nieuwe fotografie vallen onder een aparte scope." },
        ],
      },
      {
        type: "team",
        badge: "Het team",
        heading: "Wie doet het werk",
        teamLead: {
          name: "Fabian van Til",
          role: "Strategie & innovatie",
          bio: "Fabian leidt de Amazon SEO-strategie. Hij werkt al meer dan 8 jaar met meerdere marketplaces en voert elk Amazon-traject uit volgens dezelfde regel: het werk wordt beoordeeld op bestellingen en contributiemarge, niet alleen op zoekwoordposities.",
          image: "/images/framer/fabian-van-til-new.jpeg",
          linkedin: "https://www.linkedin.com/in/fabianvantil/",
        },
        teamMembers: [
          {
            name: "Dimitar Georgiev",
            role: "Technisch & On-Page SEO",
            bio: "Dimitar ontwerpt de datasystemen en tracking-infrastructuur voor Amazon SEO-campagnes. Hij is gespecialiseerd in ranking-analyse, on-page listing-optimalisatie, automatisering van zoekwoordonderzoek en prestatiemonitoring.",
            image: "/images/framer/Q3tfuu2ytPAotONsFoP1ouyPZic.png",
            linkedin: "https://bg.linkedin.com/in/dimitar-georgiev-seo-expert",
          },
          {
            name: "Martinijan Trajkovski",
            role: "Off-Page & Linkbuilding",
            bio: "Martinijan beheerst externe verkeersstrategieën en digitale PR die de autoriteit van Amazon-listings versterken. Hij bouwt externe signalen die organische Amazon-rankings aanvullen.",
            image: "/images/framer/CBAq5E76Hb1mj6ehAOixPYBjN1w.png",
            linkedin: "https://mk.linkedin.com/in/martinijan-trajkovski-7678b6bb",
          },
          {
            name: "Gjorgi Jovev",
            role: "Content, Linkbuilding & PR",
            bio: "Gjorgi schrijft Amazon-listingteksten en A+-contentstrategieën die ranken en converteren, plus linkbuilding en PR voor Amazon-merken. Hij is gespecialiseerd in keyword-mapping, bullet point-optimalisatie, backend-zoektermstrategie en outreach-campagnes.",
            image: "/images/framer/gjorgi-jovev.png",
            linkedin: "https://www.linkedin.com/in/gjorgi-jovev/",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Hoe verschilt Amazon SEO van Google SEO?",
          answer:
            "Binnen Amazon draait ranking om relevantie voor de zoekopdracht en of kopers kopen, dus het werk zit in listingteksten, backend-zoektermen, attributen en creatives. Google SEO blijft belangrijk voor het onderzoek dat kopers doen voordat ze op Amazon komen. Daar komen onze vergelijkingscontent en externe acquisitie om de hoek kijken. Lees meer over [e-commerce SEO-zoekwoorden](/blog/ecommerce-seo-keywords) en hoe ze per platform verschillen.",
        },
        {
          question: "Hoe lang duurt het voordat we resultaten zien op Amazon?",
          answer:
            "De eerste 30 dagen gaan naar de audit, de nulmeting, goedgekeurde listingwijzigingen en tracking. Dag 31-60 draaien om publiceren en eerste data, en tegen dag 61-90 is de attributie volwassen genoeg om te beslissen welke thema's meer investering verdienen. Onze gids over [zoekwoordonderzoek voor e-commerce](/academy/keyword-research-for-ecommerce) legt het onderzoek erachter uit.",
        },
        {
          question: "Hoe bewijzen jullie dat de campagne geld heeft opgeleverd?",
          answer:
            "Elk extern asset krijgt een eigen getrackte link naar de juiste marketplace en ASIN. Voor accounts met Brand Registry rapporteert Amazon Attribution klikken, toevoegingen aan winkelwagen en verkopen per link, en de Brand Referral Bonus betaalt ongeveer 10% van de toegeschreven verkopen terug. Daarna rapporteren we de contributiemarge na product-, Amazon- en campagnekosten, niet alleen de omzet.",
        },
        {
          question: "Beheren jullie ook Amazon PPC?",
          answer:
            "Nee. Paid media valt onder een aparte scope. We stemmen listingwijzigingen af met je advertentieteam en volgen organische en gesponsorde posities apart, zodat je ziet welke van de twee echt bewoog.",
        },
        {
          question: "Doen backlinks ertoe voor Amazon-listings?",
          answer:
            "Het domein van Amazon is sterk, maar autoriteit op paginaniveau is iets anders. We bouwen relevante plaatsingen en vergelijkingscontent die op Google ranken en gekwalificeerde kopers naar je ASIN's sturen. Geen volume uit linkfarms, en tests met directe listinglinks draaien pas na een beleidscheck.",
        },
        {
          question: "Wat hebben jullie van ons nodig?",
          answer:
            "Productbewijs, merkassets, accountrechten, marges en een vaste persoon die goedkeurt. De controle over je account blijft bij jou. Het aantal ASIN's, aantallen assets, revisies, fees en werkbudget leggen we vóór de lancering vast in een merkspecifieke scope.",
        },
        {
          question: "Kunnen jullie helpen met A+-content en afbeeldingen?",
          answer:
            "Ja. Voor elke ASIN binnen de scope leveren we een galerij-audit, shotlist, beeldteksten en een briefing voor A+-modules, en we valideren de live content na goedkeuring. Nieuwe fotografie valt onder een aparte scope. Ons [team voor contentcreatie](/content-writing) schrijft de teksten.",
        },
        {
          question: "Welke Amazon-marketplaces ondersteunen jullie?",
          answer:
            "Alle grote Amazon-marketplaces, waaronder US, UK, DE, FR, IT, ES en NL. Ons [zoekwoordonderzoek](/keyword-research) is per marketplace gelokaliseerd.",
        },
      ],
      miniCta: {
        heading: "Begin met een gratis ROI-kansenaudit",
        subtitle:
          "We beoordelen de potentiële groei over je prioriteits-ASIN's voordat je je ergens aan verbindt.",
      },
    },
  },
};

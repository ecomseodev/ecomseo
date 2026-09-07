import type { Locale } from "@/lib/i18n/config";

/** Per-locale overrides for team member translatable fields */
interface MemberI18n {
  role: string;
  tagline: string;
  bio: string;
  skills: string[];
  interests: string[];
  aboutHeading: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

type MemberTranslations = Record<string, Record<Locale, MemberI18n>>;

export const teamMemberI18n: MemberTranslations = {
  "fabian-van-til": {
    en: {
      role: "Entrepreneur and organic growth strategist",
      tagline: "A Passionate Entrepreneur, specialising in ecommerce marketing.",
      bio: "Fabian entered the e-commerce space in 2020. Two years later he and a partner launched a Google-marketing agency, which they swiftly refocused into an SEO firm. After selling his stake to his co-founder, Fabian doubled down on e-commerce. In 2023 he founded EcomSEO, an agency dedicated to shattering the norms of traditional marketing through transparent, results-oriented partnerships, and in 2024 he and his brother launched their own brand.",
      skills: ["Intent Matching", "Branding", "Systems / AI", "UX / UI", "Analytics", "Content Strategy"],
      interests: ["Chess", "Music", "Tech", "Fitness", "Travel", "Philosophy"],
      aboutHeading: "About Fabian",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Book 30 min",
    },
    de: {
      role: "Entrepreneur and organic growth strategist",
      tagline: "Leidenschaftlicher Unternehmer mit Spezialisierung auf E-Commerce-Marketing.",
      bio: "Fabian startete 2020 im E-Commerce. Zwei Jahre spaeter gruendete er mit einem Partner eine Google-Marketing-Agentur, die sie schnell zur SEO-Agentur umbauten. Nachdem er seinen Anteil verkauft hatte, konzentrierte sich Fabian voll auf E-Commerce. 2023 gruendete er EcomSEO - eine Agentur, die mit transparenten, ergebnisorientierten Partnerschaften neue Masstaebe im Marketing setzt. 2024 brachte er gemeinsam mit seinem Bruder eine eigene Marke auf den Markt.",
      skills: ["Intent Matching", "Markenaufbau", "Systeme / KI", "UX / UI", "Analytics", "Content-Strategie"],
      interests: ["Schach", "Musik", "Technologie", "Fitness", "Reisen", "Philosophie"],
      aboutHeading: "Ueber Fabian",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "30 Min. buchen",
    },
    fr: {
      role: "Entrepreneur and organic growth strategist",
      tagline: "Entrepreneur passionne, specialise dans le marketing e-commerce.",
      bio: "Fabian a fait ses debuts dans le e-commerce en 2020. Deux ans plus tard, il a lance avec un associe une agence de marketing Google, rapidement reorientee vers le SEO. Apres avoir cede ses parts, Fabian s'est consacre entierement au e-commerce. En 2023, il a fonde EcomSEO, une agence dediee a repousser les limites du marketing traditionnel grace a des partenariats transparents et axes sur les resultats. En 2024, avec son frere, il a cree sa propre marque.",
      skills: ["Intent Matching", "Branding", "Systemes / IA", "UX / UI", "Analytics", "Strategie de contenu"],
      interests: ["Echecs", "Musique", "Tech", "Fitness", "Voyages", "Philosophie"],
      aboutHeading: "A propos de Fabian",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Reserver 30 min",
    },
    es: {
      role: "Entrepreneur and organic growth strategist",
      tagline: "Emprendedor apasionado, especializado en marketing de comercio electronico.",
      bio: "Fabian entro en el espacio del comercio electronico en 2020. Dos anos despues, lanzo con un socio una agencia de marketing en Google que rapidamente reenfocaron hacia el SEO. Tras vender su participacion, Fabian se dedico por completo al e-commerce. En 2023 fundo EcomSEO, una agencia dedicada a transformar las normas del marketing tradicional mediante asociaciones transparentes y orientadas a resultados. En 2024, junto a su hermano, creo su propia marca.",
      skills: ["Intent Matching", "Branding", "Sistemas / IA", "UX / UI", "Analytics", "Estrategia de contenido"],
      interests: ["Ajedrez", "Musica", "Tecnologia", "Fitness", "Viajes", "Filosofia"],
      aboutHeading: "Sobre Fabian",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Reservar 30 min",
    },
    it: {
      role: "Entrepreneur and organic growth strategist",
      tagline: "Imprenditore appassionato, specializzato nel marketing e-commerce.",
      bio: "Fabian e entrato nel mondo dell'e-commerce nel 2020. Due anni dopo, ha lanciato con un socio un'agenzia di marketing Google, rapidamente riorientata verso la SEO. Dopo aver ceduto la sua quota, Fabian si e dedicato completamente all'e-commerce. Nel 2023 ha fondato EcomSEO, un'agenzia dedicata a rivoluzionare il marketing tradizionale attraverso partnership trasparenti e orientate ai risultati. Nel 2024, insieme a suo fratello, ha creato il proprio brand.",
      skills: ["Intent Matching", "Branding", "Sistemi / IA", "UX / UI", "Analytics", "Strategia contenuti"],
      interests: ["Scacchi", "Musica", "Tecnologia", "Fitness", "Viaggi", "Filosofia"],
      aboutHeading: "Chi e Fabian",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Prenota 30 min",
    },
    nl: {
      role: "Entrepreneur and organic growth strategist",
      tagline: "Gedreven ondernemer, gespecialiseerd in e-commerce marketing.",
      bio: "Fabian begon in 2020 met e-commerce. Twee jaar later richtte hij met een partner een Google-marketingbureau op, dat ze snel omvormden tot een SEO-bureau. Nadat hij zijn aandeel had verkocht, richtte Fabian zich volledig op e-commerce. In 2023 richtte hij EcomSEO op, een bureau dat de normen van traditionele marketing doorbreekt met transparante, resultaatgerichte samenwerkingen. In 2024 lanceerde hij samen met zijn broer een eigen merk.",
      skills: ["Intent Matching", "Branding", "Systemen / AI", "UX / UI", "Analytics", "Contentstrategie"],
      interests: ["Schaken", "Muziek", "Tech", "Fitness", "Reizen", "Filosofie"],
      aboutHeading: "Over Fabian",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Plan 30 min",
    },
  },
      };

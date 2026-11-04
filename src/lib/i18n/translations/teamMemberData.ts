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
      role: "Strategy & Innovation",
      tagline: "A Passionate Entrepreneur, specialising in ecommerce marketing.",
      bio: "Fabian entered the e-commerce space in 2020. Two years later he and a partner launched a Google-marketing agency, which they swiftly refocused into an SEO firm. After selling his stake to his co-founder, Fabian doubled down on e-commerce. In 2024 he and his brother introduced their own brand and co-founded EcomSEO, an agency dedicated to shattering the norms of traditional marketing through transparent, results-oriented partnerships.",
      skills: ["Intent Matching", "Branding", "Systems / AI", "UX / UI", "Analytics", "Content Strategy"],
      interests: ["Chess", "Music", "Tech", "Fitness", "Travel", "Philosophy"],
      aboutHeading: "About Fabian",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Book 30 min",
    },
    de: {
      role: "Strategie & Innovation",
      tagline: "Leidenschaftlicher Unternehmer mit Spezialisierung auf E-Commerce-Marketing.",
      bio: "Fabian startete 2020 im E-Commerce. Zwei Jahre spaeter gruendete er mit einem Partner eine Google-Marketing-Agentur, die sie schnell zur SEO-Agentur umbauten. Nachdem er seinen Anteil verkauft hatte, konzentrierte sich Fabian voll auf E-Commerce. 2024 gruendete er gemeinsam mit seinem Bruder die eigene Marke und EcomSEO - eine Agentur, die mit transparenten, ergebnisorientierten Partnerschaften neue Masstaebe im Marketing setzt.",
      skills: ["Intent Matching", "Markenaufbau", "Systeme / KI", "UX / UI", "Analytics", "Content-Strategie"],
      interests: ["Schach", "Musik", "Technologie", "Fitness", "Reisen", "Philosophie"],
      aboutHeading: "Ueber Fabian",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "30 Min. buchen",
    },
    fr: {
      role: "Strategie & Innovation",
      tagline: "Entrepreneur passionne, specialise dans le marketing e-commerce.",
      bio: "Fabian a fait ses debuts dans le e-commerce en 2020. Deux ans plus tard, il a lance avec un associe une agence de marketing Google, rapidement reorientee vers le SEO. Apres avoir cede ses parts, Fabian s'est consacre entierement au e-commerce. En 2024, avec son frere, il a cree sa propre marque et cofonde EcomSEO, une agence dediee a repousser les limites du marketing traditionnel grace a des partenariats transparents et axes sur les resultats.",
      skills: ["Intent Matching", "Branding", "Systemes / IA", "UX / UI", "Analytics", "Strategie de contenu"],
      interests: ["Echecs", "Musique", "Tech", "Fitness", "Voyages", "Philosophie"],
      aboutHeading: "A propos de Fabian",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Reserver 30 min",
    },
    es: {
      role: "Estrategia e Innovacion",
      tagline: "Emprendedor apasionado, especializado en marketing de comercio electronico.",
      bio: "Fabian entro en el espacio del comercio electronico en 2020. Dos anos despues, lanzo con un socio una agencia de marketing en Google que rapidamente reenfocaron hacia el SEO. Tras vender su participacion, Fabian se dedico por completo al e-commerce. En 2024, junto a su hermano, creo su propia marca y cofundo EcomSEO, una agencia dedicada a transformar las normas del marketing tradicional mediante asociaciones transparentes y orientadas a resultados.",
      skills: ["Intent Matching", "Branding", "Sistemas / IA", "UX / UI", "Analytics", "Estrategia de contenido"],
      interests: ["Ajedrez", "Musica", "Tecnologia", "Fitness", "Viajes", "Filosofia"],
      aboutHeading: "Sobre Fabian",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Reservar 30 min",
    },
    it: {
      role: "Strategia & Innovazione",
      tagline: "Imprenditore appassionato, specializzato nel marketing e-commerce.",
      bio: "Fabian e entrato nel mondo dell'e-commerce nel 2020. Due anni dopo, ha lanciato con un socio un'agenzia di marketing Google, rapidamente riorientata verso la SEO. Dopo aver ceduto la sua quota, Fabian si e dedicato completamente all'e-commerce. Nel 2024, insieme a suo fratello, ha creato il proprio brand e cofondato EcomSEO, un'agenzia dedicata a rivoluzionare il marketing tradizionale attraverso partnership trasparenti e orientate ai risultati.",
      skills: ["Intent Matching", "Branding", "Sistemi / IA", "UX / UI", "Analytics", "Strategia contenuti"],
      interests: ["Scacchi", "Musica", "Tecnologia", "Fitness", "Viaggi", "Filosofia"],
      aboutHeading: "Chi e Fabian",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Prenota 30 min",
    },
    nl: {
      role: "Strategie & Innovatie",
      tagline: "Gedreven ondernemer, gespecialiseerd in e-commerce marketing.",
      bio: "Fabian begon in 2020 met e-commerce. Twee jaar later richtte hij met een partner een Google-marketingbureau op, dat ze snel omvormden tot een SEO-bureau. Nadat hij zijn aandeel had verkocht, richtte Fabian zich volledig op e-commerce. In 2024 lanceerde hij samen met zijn broer een eigen merk en richtte EcomSEO op. Een bureau dat de normen van traditionele marketing doorbreekt met transparante, resultaatgerichte samenwerkingen.",
      skills: ["Intent Matching", "Branding", "Systemen / AI", "UX / UI", "Analytics", "Contentstrategie"],
      interests: ["Schaken", "Muziek", "Tech", "Fitness", "Reizen", "Filosofie"],
      aboutHeading: "Over Fabian",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Plan 30 min",
    },
  },
  "martinijan-trajkovski": {
    en: {
      role: "Co-Founder & Head of Strategy",
      tagline: "Data-driven SEO strategist with 9+ years of experience in ecommerce.",
      bio: "Martinijan is a data-driven SEO strategist with 9+ years of experience, four dedicated to skyrocketing ecommerce brands. As co-founder of EcomSEO, he has fused deep market research, competitor intel, white-hat link building, affiliate growth and digital PR to turn organic search into profit. Away from the SERPs he is usually devouring marketing books, lifting at the gym or chasing drop-shots on the tennis court.",
      skills: ["Market Research", "Branding", "Link Building", "Competitor Intelligence", "Affiliate Marketing", "Digital PR"],
      interests: ["Travel", "Music", "PlayStation", "Reading", "Football", "Skiing"],
      aboutHeading: "About Martinijan",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Book 30 min",
    },
    de: {
      role: "Mitgründer & Leiter Strategie",
      tagline: "Datengetriebener SEO-Stratege mit 9+ Jahren Erfahrung im E-Commerce.",
      bio: "Martinijan ist ein datengetriebener SEO-Stratege mit ueber 9 Jahren Erfahrung, davon vier speziell im E-Commerce. Als Mitgründer von EcomSEO kombiniert er tiefgreifende Marktforschung, Wettbewerbsanalysen, White-Hat-Linkaufbau, Affiliate-Wachstum und digitale PR, um organische Suche in Umsatz zu verwandeln.",
      skills: ["Marktforschung", "Markenaufbau", "Linkaufbau", "Wettbewerbsanalyse", "Affiliate Marketing", "Digitale PR"],
      interests: ["Reisen", "Musik", "PlayStation", "Lesen", "Fussball", "Skifahren"],
      aboutHeading: "Ueber Martinijan",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "30 Min. buchen",
    },
    fr: {
      role: "Co-fondateur & Responsable Stratégie",
      tagline: "Stratege SEO axe sur les donnees avec 9+ ans d'experience en e-commerce.",
      bio: "Martinijan est un stratege SEO axe sur les donnees avec plus de 9 ans d'experience, dont quatre dedies a la croissance de marques e-commerce. En tant que co-fondateur d'EcomSEO, il combine recherche approfondie, veille concurrentielle, netlinking white-hat, croissance affiliate et RP digital pour transformer la recherche organique en chiffre d'affaires.",
      skills: ["Etude de marche", "Branding", "Netlinking", "Veille concurrentielle", "Marketing d'affiliation", "RP digital"],
      interests: ["Voyages", "Musique", "PlayStation", "Lecture", "Football", "Ski"],
      aboutHeading: "A propos de Martinijan",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Reserver 30 min",
    },
    es: {
      role: "Cofundador y Jefe de Estrategia",
      tagline: "Estratega SEO basado en datos con mas de 9 anos de experiencia en e-commerce.",
      bio: "Martinijan es un estratega SEO basado en datos con mas de 9 anos de experiencia, cuatro dedicados al crecimiento de marcas de comercio electronico. Como cofundador de EcomSEO, combina investigacion de mercado profunda, inteligencia competitiva, link building white-hat, crecimiento de afiliados y PR digital para convertir la busqueda organica en ingresos.",
      skills: ["Investigacion de mercado", "Branding", "Link Building", "Inteligencia competitiva", "Marketing de afiliados", "PR Digital"],
      interests: ["Viajes", "Musica", "PlayStation", "Lectura", "Futbol", "Esqui"],
      aboutHeading: "Sobre Martinijan",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Reservar 30 min",
    },
    it: {
      role: "Co-fondatore e Responsabile Strategia",
      tagline: "Stratega SEO basato sui dati con oltre 9 anni di esperienza nell'e-commerce.",
      bio: "Martinijan e uno stratega SEO basato sui dati con oltre 9 anni di esperienza, di cui quattro dedicati alla crescita di brand e-commerce. Come co-fondatore di EcomSEO, combina ricerche di mercato approfondite, analisi della concorrenza, link building white-hat, crescita affiliate e PR digitali per trasformare la ricerca organica in fatturato.",
      skills: ["Ricerca di mercato", "Branding", "Link Building", "Analisi concorrenza", "Affiliate Marketing", "PR Digitale"],
      interests: ["Viaggi", "Musica", "PlayStation", "Lettura", "Calcio", "Sci"],
      aboutHeading: "Chi e Martinijan",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Prenota 30 min",
    },
    nl: {
      role: "Medeoprichter & Hoofd Strategie",
      tagline: "Datagedreven SEO-strateeg met 9+ jaar ervaring in e-commerce.",
      bio: "Martinijan is een datagedreven SEO-strateeg met meer dan 9 jaar ervaring, waarvan vier gewijd aan het laten groeien van e-commerce merken. Als medeoprichter van EcomSEO combineert hij diepgaand marktonderzoek, concurrentie-analyse, white-hat linkbuilding, affiliate groei en digitale PR om organisch verkeer om te zetten in omzet.",
      skills: ["Marktonderzoek", "Branding", "Linkbuilding", "Concurrentie-analyse", "Affiliate Marketing", "Digitale PR"],
      interests: ["Reizen", "Muziek", "PlayStation", "Lezen", "Voetbal", "Skieen"],
      aboutHeading: "Over Martinijan",
      ctaPrimary: "Whatsapp",
      ctaSecondary: "Plan 30 min",
    },
  },
  "gjorgi-jovev": {
    en: {
      role: "On-Page & PR Maestro",
      tagline: "An SEO Expert, specialising in e-commerce growth and visibility.",
      bio: "Gjorgi entered the e-commerce space in 2022. With a background in digital marketing, he quickly carved out a niche in SEO, focusing on performance-driven strategies for online stores. Over the next two years, he honed his skills in technical SEO, content optimization, keyword strategy, and high-quality backlink building. Known for his tenacity and results-first mindset, Gjorgi continues to help businesses scale through transparent, data-led SEO.",
      skills: ["Link Building", "Keyword Research", "AI", "E-commerce SEO", "Analytics", "Content Strategy"],
      interests: ["Travel", "Music", "PlayStation", "Art", "Art", "Skiing"],
      aboutHeading: "About Gjorgi",
    },
    de: {
      role: "On-Page & PR Experte",
      tagline: "SEO-Experte, spezialisiert auf E-Commerce-Wachstum und Sichtbarkeit.",
      bio: "Gjorgi startete 2022 im E-Commerce. Mit einem Hintergrund im digitalen Marketing spezialisierte er sich schnell auf SEO mit Fokus auf leistungsorientierte Strategien fuer Online-Shops. In den folgenden zwei Jahren vertiefte er seine Faehigkeiten in technischem SEO, Content-Optimierung, Keyword-Strategie und hochwertigem Linkaufbau.",
      skills: ["Linkaufbau", "Keyword-Recherche", "KI", "E-Commerce SEO", "Analytics", "Content-Strategie"],
      interests: ["Reisen", "Musik", "PlayStation", "Kunst", "Kunst", "Skifahren"],
      aboutHeading: "Ueber Gjorgi",
    },
    fr: {
      role: "Expert On-Page & RP",
      tagline: "Expert SEO, specialise dans la croissance et la visibilite e-commerce.",
      bio: "Gjorgi est entre dans le e-commerce en 2022. Fort d'une experience en marketing digital, il s'est rapidement specialise en SEO, se concentrant sur des strategies axees sur la performance pour les boutiques en ligne. En deux ans, il a perfectionne ses competences en SEO technique, optimisation de contenu, strategie de mots-cles et netlinking de qualite.",
      skills: ["Netlinking", "Recherche de mots-cles", "IA", "SEO E-commerce", "Analytics", "Strategie de contenu"],
      interests: ["Voyages", "Musique", "PlayStation", "Art", "Art", "Ski"],
      aboutHeading: "A propos de Gjorgi",
    },
    es: {
      role: "Experto On-Page & PR",
      tagline: "Experto SEO, especializado en crecimiento y visibilidad e-commerce.",
      bio: "Gjorgi entro en el espacio del e-commerce en 2022. Con experiencia en marketing digital, rapidamente se especializo en SEO, enfocandose en estrategias orientadas al rendimiento para tiendas online. En dos anos, perfecciono sus habilidades en SEO tecnico, optimizacion de contenido, estrategia de palabras clave y construccion de backlinks de calidad.",
      skills: ["Link Building", "Investigacion de palabras clave", "IA", "SEO E-commerce", "Analytics", "Estrategia de contenido"],
      interests: ["Viajes", "Musica", "PlayStation", "Arte", "Arte", "Esqui"],
      aboutHeading: "Sobre Gjorgi",
    },
    it: {
      role: "Esperto On-Page & PR",
      tagline: "Esperto SEO, specializzato nella crescita e visibilita e-commerce.",
      bio: "Gjorgi e entrato nel mondo dell'e-commerce nel 2022. Con un background nel marketing digitale, si e rapidamente specializzato nella SEO, concentrandosi su strategie orientate alle performance per negozi online. In due anni ha perfezionato le sue competenze in SEO tecnico, ottimizzazione dei contenuti, strategia delle parole chiave e link building di qualita.",
      skills: ["Link Building", "Ricerca parole chiave", "IA", "SEO E-commerce", "Analytics", "Strategia contenuti"],
      interests: ["Viaggi", "Musica", "PlayStation", "Arte", "Arte", "Sci"],
      aboutHeading: "Chi e Gjorgi",
    },
    nl: {
      role: "On-Page & PR Expert",
      tagline: "SEO-expert, gespecialiseerd in e-commerce groei en zichtbaarheid.",
      bio: "Gjorgi begon in 2022 met e-commerce. Met een achtergrond in digitale marketing specialiseerde hij zich snel in SEO, met focus op prestatiegerichte strategieen voor webshops. In twee jaar ontwikkelde hij zijn vaardigheden in technische SEO, contentoptimalisatie, zoekwoordstrategie en kwalitatieve linkbuilding.",
      skills: ["Linkbuilding", "Zoekwoordenonderzoek", "AI", "E-commerce SEO", "Analytics", "Contentstrategie"],
      interests: ["Reizen", "Muziek", "PlayStation", "Kunst", "Kunst", "Skieen"],
      aboutHeading: "Over Gjorgi",
    },
  },
};

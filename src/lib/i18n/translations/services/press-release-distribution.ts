import type { Locale } from "../../config";
import type { ReachOutlet, ServicePageProps } from "@/components/service/ServicePageTemplate";

/* Outlet names come from a real sample distribution report (1,387 destinations).
 * Names stay untranslated; only the channel labels are localised. */
const outlets: Record<string, ReachOutlet[]> = {
  usaToday: [
    { name: "IndyStar | The Indianapolis Star", location: "Indianapolis (IN)" },
    { name: "The Oklahoman", location: "Oklahoma City (OK)" },
    { name: "Cincinnati.com | The Enquirer", location: "Cincinnati (OH)" },
    { name: "The News-Press", location: "Fort Myers (FL)" },
    { name: "Journal Star", location: "Peoria (IL)" },
    { name: "Poughkeepsie Journal", location: "Poughkeepsie (NY)" },
    { name: "The Spectrum", location: "St. George (UT)" },
    { name: "SC Times | St. Cloud Times", location: "St. Cloud (MN)" },
    { name: "Erie Times News", location: "Erie (PA)" },
    { name: "Courier Post", location: "Cherry Hill (NJ)" },
    { name: "Lebanon Daily News", location: "Lebanon (PA)" },
    { name: "Beaver County Times", location: "Beaver (PA)" },
    { name: "The Northwestern", location: "Oshkosh (WI)" },
    { name: "Bluffton Today", location: "Bluffton (SC)" },
    { name: "Marco Eagle", location: "Marco Island (FL)" },
    { name: "Aberdeen News", location: "Aberdeen (SD)" },
    { name: "Pekin Daily Times", location: "Pekin (IL)" },
    { name: "The Star", location: "Shelby (NC)" },
    { name: "Donaldsonville Chief", location: "Donaldsonville (LA)" },
    { name: "The Progress-Index", location: "Petersburg (VA)" },
  ],
  broadcast: [
    { name: "KTLA CW 5", location: "Los Angeles (CA)" },
    { name: "WFLA NBC 8", location: "Tampa (FL)" },
    { name: "WJW FOX 8", location: "Cleveland (OH)" },
    { name: "WCMH NBC 4", location: "Columbus (OH)" },
    { name: "WTTV CBS 4", location: "Indianapolis (IN)" },
    { name: "WJZY FOX 46", location: "Charlotte (NC)" },
    { name: "WRIC ABC 8", location: "Richmond (VA)" },
    { name: "WTNH ABC 8", location: "New Haven (CT)" },
    { name: "WDVM 25", location: "Washington D.C." },
    { name: "KARK NBC 4", location: "Little Rock (AR)" },
    { name: "WNCN CBS 17", location: "Raleigh (NC)" },
    { name: "WATE ABC 6", location: "Knoxville (TN)" },
    { name: "KSNW NBC 3", location: "Wichita (KS)" },
    { name: "WAVY NBC 10", location: "Portsmouth (VA)" },
    { name: "FOX 21", location: "Colorado Springs (CO)" },
    { name: "WDTN NBC 2", location: "Dayton (OH)" },
    { name: "WSYR ABC 9", location: "Syracuse (NY)" },
    { name: "KTSM NBC 9", location: "El Paso (TX)" },
    { name: "WDKY FOX 56", location: "Lexington (KY)" },
    { name: "National Law Review" },
  ],
  niche: [
    { name: "Business Journal Florida", location: "Florida" },
    { name: "Florida Finance Today", location: "Florida" },
    { name: "Florida Food & Beverage Times", location: "Florida" },
    { name: "Florida Travel Industry Online", location: "Florida" },
    { name: "The Florida Herald", location: "Florida" },
    { name: "Sunshine State Today", location: "Florida" },
    { name: "The Canada Finance Journal", location: "Canada" },
    { name: "Canada Travel Daily", location: "Canada" },
    { name: "Culture Times of Canada", location: "Canada" },
    { name: "Food & Beverage News: Canada", location: "Canada" },
    { name: "Fintech Reporter UK", location: "United Kingdom" },
    { name: "UK Travel News Online", location: "United Kingdom" },
    { name: "UK Food & Beverage Update", location: "United Kingdom" },
    { name: "Culture Zone! UK", location: "United Kingdom" },
    { name: "Bermuda Business Review", location: "Bermuda" },
    { name: "Travel Journal Bermuda", location: "Bermuda" },
  ],
  newswires: [
    { name: "AP News" },
    { name: "Google News" },
    { name: "United States Newswire" },
    { name: "Florida Newswire" },
    { name: "Bermuda Newswire" },
  ],
  topicWires: [
    { name: "Airline Industry Today" },
    { name: "Banking Industry Today" },
    { name: "Finance Industry Today" },
    { name: "Bitcoin News Today" },
    { name: "Crowdfunding News Today" },
    { name: "FOREX Trading News Today" },
    { name: "Paris Air Show News Today" },
    { name: "Farnborough Airshow News Today" },
    { name: "Dubai Airshow News Today" },
    { name: "Singapore Airshow News Today" },
  ],
  databases: [
    { name: "Bloomberg Terminal" },
    { name: "Muck Rack" },
    { name: "LexisNexis" },
    { name: "Moody's NewsEdge" },
    { name: "Crunchbase" },
    { name: "Naviga" },
    { name: "MENAFN" },
  ],
  searchAi: [
    { name: "Google" },
    { name: "Bing" },
    { name: "Yahoo" },
    { name: "ChatGPT" },
    { name: "Gemini" },
    { name: "Claude" },
  ],
};

type ReachLabels = {
  usaToday: string;
  broadcast: string;
  niche: string;
  newswires: string;
  topicWires: string;
  databases: string;
  searchAi: string;
  journalists: string;
  journalistsNote: string;
  more: string;
};

const countries = ["United States", "Canada", "United Kingdom", "Bermuda"];

function buildReach(l: ReachLabels) {
  return {
    moreLabel: l.more,
    categories: [
      { label: l.usaToday, count: 227, outlets: outlets.usaToday },
      { label: l.broadcast, count: 524, outlets: outlets.broadcast },
      { label: l.niche, count: 276, outlets: outlets.niche },
      { label: l.newswires, count: 6, outlets: outlets.newswires },
      { label: l.topicWires, count: 90, outlets: outlets.topicWires },
      { label: l.databases, count: 7, outlets: outlets.databases },
      { label: l.searchAi, count: 6, outlets: outlets.searchAi },
      {
        label: l.journalists,
        count: 251,
        outlets: countries.map((c) => ({ name: c, location: l.journalistsNote })),
      },
    ],
  };
}

export const pressReleaseDistributionData: Record<Locale, ServicePageProps> = {
  en: {
    hero: {
      badge: "Press release distribution",
      heading: "Press release distribution that puts your brand on 1,000+ news sites",
      subtitle:
        "One release, pushed through the EcomSEO Syndication Framework to newswires, the USA TODAY Network, hundreds of local news sites and the databases journalists and AI models read. Every placement comes back as a live link you can check.",
      ctaText: "Book a distribution call",
    },
    trustBar: "Over 20+ businesses trust us",
    sections: [
      {
        type: "stats",
        badge: "Sample report",
        heading: "What one release actually looked like",
        subtitle:
          "Real numbers from a single distribution run. Your footprint depends on the targeting we pick, but this is the ballpark.",
        stats: [
          { value: "1,387", label: "Destinations" },
          { value: "330M+", label: "Monthly visitors across the network" },
          { value: "227", label: "USA TODAY Network placements" },
          { value: "251", label: "Journalists reached directly" },
        ],
      },
      {
        type: "reach",
        badge: "Your reach",
        heading: "1,387 destinations, each one traceable back to your story",
        subtitle:
          "Newswires, local broadcast sites, national networks, niche publications and the professional databases newsrooms use. That's 1,387 more indexed places where Google and the models behind ChatGPT, Gemini and Claude can find your brand.",
        reach: buildReach({
          usaToday: "USA TODAY Network",
          broadcast: "Local news sites",
          niche: "Niche publications",
          newswires: "Major newswires",
          topicWires: "Industry newswires",
          databases: "News databases",
          searchAi: "Search & AI",
          journalists: "Journalist outreach",
          journalistsNote: "Journalists & editors",
          more: "+ {n} more in this channel, all listed in your tracking file",
        }),
      },
      {
        type: "process",
        badge: "How it works",
        heading: "The EcomSEO Syndication Framework",
        subtitle: "Four steps from angle to proof. We run all of it. You approve the copy.",
        process: [
          {
            number: "01",
            title: "Find the angle",
            description:
              "We pick something a newsroom would actually run: a launch, a data point, a retail deal. Then we write it around the entities you want Google and AI tools to tie to your brand.",
          },
          {
            number: "02",
            title: "Review, verify, timestamp",
            description:
              "Every release goes through editorial review and is tied to a verified sender. What ships is the exact copy you signed off. It enters distribution with a timestamp, so there's a public record of when your news first appeared.",
          },
          {
            number: "03",
            title: "Syndicate across every channel",
            description:
              "AP News and Google News, the USA TODAY Network, local broadcast sites, niche and industry publications and professional news databases. On top of that, direct delivery to journalists in the markets you pick.",
          },
          {
            number: "04",
            title: "Proof and recap",
            description:
              "You get the distribution report and a CSV with a live link for every placement. We walk you through what landed and how to reuse it.",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Why it works",
        heading: "Why syndication matters for ecommerce SEO now",
        subtitle:
          "A press release won't rank your collection pages by itself. What it does is build the trail of trusted mentions that search engines and AI answer engines use to work out who you are.",
        benefits: [
          {
            title: "Something for AI to cite",
            description:
              "ChatGPT, Gemini and Perplexity lean on news sources and well-indexed pages. Hundreds of attributable mentions give them something to quote when someone asks about your category.",
          },
          {
            title: "A clearer brand entity",
            description:
              "Same brand name, founder, products and location across 1,000+ pages. That consistency is what helps Google connect the dots.",
          },
          {
            title: "In front of journalists",
            description:
              "Your release lands in Bloomberg Terminal, Muck Rack and LexisNexis, where reporters and analysts go looking for stories.",
          },
          {
            title: "Local and niche relevance",
            description:
              "Local news sites and industry publications put your brand next to the cities and topics you actually sell into.",
          },
          {
            title: "Proof you can reuse",
            description:
              "“As seen on” strips, investor updates, retailer pitches. Every placement is a link you can point to.",
          },
          {
            title: "A hook for link building",
            description:
              "Coverage gives our outreach team a reason to email. Editors who saw the news are warmer when we pitch the follow-up.",
            href: "/link-building",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "What you get",
        heading: "Everything in one distribution",
        subtitle: "No new dashboard to learn. You get the files and a call.",
        deliverables: [
          { title: "The release", description: "Angle, headline, quotes and copy written by our team, approved by you." },
          { title: "Distribution report", description: "Every channel and every count, in one report you can forward." },
          { title: "Tracking file", description: "A CSV with a live link for every confirmed placement." },
          { title: "Recap call", description: "What landed, what got picked up and how to use it in your SEO." },
        ],
      },
      {
        type: "richText",
        badge: "Straight talk",
        heading: "What press release distribution won't do",
        richTextBlocks: [
          {
            heading: "It's not a backlink shortcut",
            body: "Most syndicated placements are nofollow, or sit on pages with modest authority. If someone sells you press releases as a link hack, walk away. The value here is brand mentions, entity signals and discovery by AI systems. For links that move rankings, pair it with real link building.",
            href: "/link-building",
            hrefLabel: "See our link building service",
          },
          {
            heading: "Pickup is earned",
            body: "Delivery to 250+ journalists puts your story in their inbox. Whether they write about it is their call. A good angle is what changes the odds, so that's where we spend our time.",
          },
          {
            heading: "Reach is potential audience",
            body: "The 330M+ monthly visitors is the combined audience of the sites in the network, as reported by our syndication partners. It is not a view count for your release, and we won't pretend it is.",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "What is press release distribution?",
          answer:
            "We write your announcement and syndicate it in one go to newswires, national and local news sites, niche publications and professional news databases. You get a report and a live link for every placement.",
        },
        {
          question: "Do the links help my SEO?",
          answer:
            "Indirectly. Most placements are nofollow, so don't expect a ranking jump from the links alone. What you get is hundreds of indexed brand mentions, stronger entity signals and a better shot at being cited by AI answer engines. For direct ranking impact we pair it with [link building](/link-building).",
        },
        {
          question: "How does it help my visibility in ChatGPT and Google AI Overviews?",
          answer:
            "AI answers draw on news sources and widely indexed pages. A release placed across 1,000+ attributable pages gives them consistent facts about your brand to pull from. It's one of the quickest ways to add trusted mentions at scale.",
        },
        {
          question: "How fast does my release go live?",
          answer:
            "Usually within one to two business days of your sign-off, after editorial review. Placements show up within hours of distribution and the tracking file fills as they're confirmed.",
        },
        {
          question: "Can you target Europe or the Netherlands?",
          answer:
            "Yes. Geographic newswires and journalist outreach are picked per market, so we aim at the countries you sell into. The large US networks run on top of that.",
        },
        {
          question: "Is media pickup guaranteed?",
          answer:
            "No, and be careful with anyone who says it is. Placements on the syndication network are confirmed and linked. A journalist writing their own story is a bonus we work for with the angle.",
        },
        {
          question: "How often should we send a release?",
          answer:
            "When you have real news. For most DTC brands that's a launch, a funding round, a retail deal or a data study, so roughly once a quarter. Thin releases water down the trail.",
        },
      ],
      miniCta: {
        heading: "Got news worth sharing?",
        subtitle: "Tell us what's coming up. We'll tell you if it's a story and where it should land.",
        ctaText: "Book a distribution call",
      },
    },
  },

  de: {
    hero: {
      badge: "Pressemitteilungen verbreiten",
      heading: "Pressemitteilungs-Verbreitung, die Ihre Marke auf 1.000+ Nachrichtenseiten bringt",
      subtitle:
        "Eine Mitteilung, verteilt über das EcomSEO Syndication Framework an Newswires, das USA TODAY Network, Hunderte lokale Nachrichtenseiten und die Datenbanken, die Journalisten und KI-Modelle lesen. Jede Platzierung bekommen Sie als Live-Link zum Nachprüfen.",
      ctaText: "Verbreitungsgespräch buchen",
    },
    trustBar: "Über 20 Unternehmen vertrauen uns",
    sections: [
      {
        type: "stats",
        badge: "Beispielbericht",
        heading: "So sah eine einzige Mitteilung aus",
        subtitle:
          "Echte Zahlen aus einem Verbreitungslauf. Ihre Reichweite hängt vom Targeting ab, aber das ist die Größenordnung.",
        stats: [
          { value: "1.387", label: "Ziele" },
          { value: "330 Mio.+", label: "Monatliche Besucher im Netzwerk" },
          { value: "227", label: "Platzierungen im USA TODAY Network" },
          { value: "251", label: "Direkt erreichte Journalisten" },
        ],
      },
      {
        type: "reach",
        badge: "Ihre Reichweite",
        heading: "1.387 Ziele, jedes bis zu Ihrer Meldung zurückverfolgbar",
        subtitle:
          "Newswires, lokale TV-Nachrichtenseiten, nationale Netzwerke, Fachpublikationen und die Datenbanken, mit denen Redaktionen arbeiten. 1.387 zusätzliche indexierte Orte, an denen Google und die Modelle hinter ChatGPT, Gemini und Claude Ihre Marke finden.",
        reach: buildReach({
          usaToday: "USA TODAY Network",
          broadcast: "Lokale Nachrichtenseiten",
          niche: "Fachpublikationen",
          newswires: "Große Newswires",
          topicWires: "Branchen-Newswires",
          databases: "Nachrichtendatenbanken",
          searchAi: "Suche & KI",
          journalists: "Journalisten-Outreach",
          journalistsNote: "Journalisten & Redakteure",
          more: "+ {n} weitere in diesem Kanal, alle in Ihrer Tracking-Datei",
        }),
      },
      {
        type: "process",
        badge: "So funktioniert es",
        heading: "Das EcomSEO Syndication Framework",
        subtitle: "Vier Schritte vom Aufhänger bis zum Nachweis. Wir machen alles, Sie geben den Text frei.",
        process: [
          {
            number: "01",
            title: "Den Aufhänger finden",
            description:
              "Wir wählen etwas, das eine Redaktion wirklich bringen würde: einen Launch, eine Zahl, einen Handelsdeal. Dann schreiben wir rund um die Entitäten, die Google und KI-Tools mit Ihrer Marke verknüpfen sollen.",
          },
          {
            number: "02",
            title: "Prüfen, verifizieren, Zeitstempel",
            description:
              "Jede Mitteilung geht durch eine redaktionelle Prüfung und ist an einen verifizierten Absender gebunden. Veröffentlicht wird genau der Text, den Sie freigegeben haben. Sie geht mit Zeitstempel in die Verbreitung, also gibt es einen öffentlichen Nachweis, wann Ihre Nachricht zuerst erschien.",
          },
          {
            number: "03",
            title: "Syndizierung über alle Kanäle",
            description:
              "AP News und Google News, das USA TODAY Network, lokale TV-Nachrichtenseiten, Fach- und Branchenpublikationen und professionelle Nachrichtendatenbanken. Dazu die direkte Zustellung an Journalisten in Ihren Zielmärkten.",
          },
          {
            number: "04",
            title: "Nachweis und Recap",
            description:
              "Sie erhalten den Verbreitungsbericht und eine CSV mit einem Live-Link pro Platzierung. Wir gehen mit Ihnen durch, was gelandet ist und wie Sie es weiter nutzen.",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Warum es wirkt",
        heading: "Warum Syndizierung für Ecommerce-SEO jetzt zählt",
        subtitle:
          "Eine Pressemitteilung bringt Ihre Kategorieseiten nicht allein nach oben. Sie baut aber die Spur vertrauenswürdiger Erwähnungen auf, mit der Suchmaschinen und KI-Antwortmaschinen einordnen, wer Sie sind.",
        benefits: [
          {
            title: "Zitierbar für KI",
            description:
              "ChatGPT, Gemini und Perplexity stützen sich auf Nachrichtenquellen und gut indexierte Seiten. Hunderte zuordenbare Erwähnungen geben ihnen etwas zum Zitieren, wenn jemand nach Ihrer Kategorie fragt.",
          },
          {
            title: "Eine klarere Marken-Entität",
            description:
              "Gleicher Markenname, Gründer, Produkte und Standort auf 1.000+ Seiten. Genau diese Konsistenz hilft Google, die Punkte zu verbinden.",
          },
          {
            title: "Vor den Augen von Journalisten",
            description:
              "Ihre Mitteilung landet in Bloomberg Terminal, Muck Rack und LexisNexis, wo Reporter und Analysten nach Geschichten suchen.",
          },
          {
            title: "Lokale und thematische Relevanz",
            description:
              "Lokale Nachrichtenseiten und Fachpublikationen stellen Ihre Marke neben die Städte und Themen, in die Sie verkaufen.",
          },
          {
            title: "Wiederverwendbarer Nachweis",
            description:
              "„Bekannt aus“-Leisten, Investoren-Updates, Pitches beim Handel. Jede Platzierung ist ein Link, auf den Sie zeigen können.",
          },
          {
            title: "Ein Aufhänger für Linkaufbau",
            description:
              "Berichterstattung gibt unserem Outreach-Team einen Grund zu schreiben. Redakteure, die die Nachricht kennen, reagieren offener auf den Follow-up-Pitch.",
            href: "/link-building",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Was Sie bekommen",
        heading: "Alles in einer Verbreitung",
        subtitle: "Kein neues Dashboard. Sie bekommen die Dateien und ein Gespräch.",
        deliverables: [
          { title: "Die Mitteilung", description: "Aufhänger, Headline, Zitate und Text von unserem Team, freigegeben von Ihnen." },
          { title: "Verbreitungsbericht", description: "Jeder Kanal und jede Zahl in einem Bericht zum Weiterleiten." },
          { title: "Tracking-Datei", description: "Eine CSV mit einem Live-Link für jede bestätigte Platzierung." },
          { title: "Recap-Gespräch", description: "Was gelandet ist, was aufgegriffen wurde und wie Sie es für SEO nutzen." },
        ],
      },
      {
        type: "richText",
        badge: "Klartext",
        heading: "Was Pressemitteilungs-Verbreitung nicht leistet",
        richTextBlocks: [
          {
            heading: "Keine Backlink-Abkürzung",
            body: "Die meisten syndizierten Platzierungen sind nofollow oder liegen auf Seiten mit überschaubarer Autorität. Wer Ihnen Pressemitteilungen als Link-Trick verkauft, dem sollten Sie misstrauen. Der Wert liegt in Markenerwähnungen, Entitätssignalen und der Auffindbarkeit durch KI. Für Links, die Rankings bewegen, kombinieren Sie es mit echtem Linkaufbau.",
            href: "/link-building",
            hrefLabel: "Zu unserem Linkaufbau",
          },
          {
            heading: "Berichterstattung wird verdient",
            body: "Die Zustellung an 250+ Journalisten bringt Ihre Geschichte in deren Postfach. Ob sie darüber schreiben, entscheiden sie selbst. Ein guter Aufhänger verbessert die Chancen, deshalb investieren wir dort die meiste Zeit.",
          },
          {
            heading: "Reichweite ist potenzielles Publikum",
            body: "Die 330 Mio.+ monatlichen Besucher sind das kombinierte Publikum der Seiten im Netzwerk, laut Angaben unserer Syndizierungspartner. Das ist keine Aufrufzahl für Ihre Mitteilung, und wir tun auch nicht so.",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Was ist Pressemitteilungs-Verbreitung?",
          answer:
            "Wir schreiben Ihre Ankündigung und syndizieren sie in einem Schritt an Newswires, nationale und lokale Nachrichtenseiten, Fachpublikationen und professionelle Nachrichtendatenbanken. Sie bekommen einen Bericht und einen Live-Link für jede Platzierung.",
        },
        {
          question: "Helfen die Links meinem SEO?",
          answer:
            "Indirekt. Die meisten Platzierungen sind nofollow, ein Ranking-Sprung allein durch die Links ist also nicht zu erwarten. Sie bekommen Hunderte indexierte Markenerwähnungen, stärkere Entitätssignale und bessere Chancen, von KI-Antwortmaschinen zitiert zu werden. Für direkten Ranking-Effekt kombinieren wir es mit [Linkaufbau](/link-building).",
        },
        {
          question: "Wie hilft das meiner Sichtbarkeit in ChatGPT und Google AI Overviews?",
          answer:
            "KI-Antworten greifen auf Nachrichtenquellen und breit indexierte Seiten zurück. Eine Mitteilung auf 1.000+ zuordenbaren Seiten liefert ihnen konsistente Fakten über Ihre Marke. Das ist einer der schnellsten Wege, vertrauenswürdige Erwähnungen in großer Zahl aufzubauen.",
        },
        {
          question: "Wie schnell ist meine Mitteilung live?",
          answer:
            "In der Regel ein bis zwei Werktage nach Ihrer Freigabe, nach der redaktionellen Prüfung. Platzierungen erscheinen innerhalb von Stunden, und die Tracking-Datei füllt sich, sobald sie bestätigt sind.",
        },
        {
          question: "Können Sie Europa oder den DACH-Raum ansprechen?",
          answer:
            "Ja. Geografische Newswires und Journalisten-Outreach wählen wir pro Markt, also zielen wir auf die Länder, in die Sie verkaufen. Die großen US-Netzwerke kommen obendrauf.",
        },
        {
          question: "Ist Berichterstattung garantiert?",
          answer:
            "Nein, und seien Sie vorsichtig bei jedem, der das verspricht. Platzierungen im Syndizierungsnetzwerk sind bestätigt und verlinkt. Wenn ein Journalist eine eigene Geschichte schreibt, ist das ein Bonus, den wir mit dem Aufhänger erarbeiten.",
        },
        {
          question: "Wie oft sollten wir eine Mitteilung versenden?",
          answer:
            "Wenn es echte Neuigkeiten gibt. Für die meisten DTC-Marken ist das ein Launch, eine Finanzierungsrunde, ein Handelsdeal oder eine Datenstudie, also etwa einmal pro Quartal. Dünne Mitteilungen verwässern die Spur.",
        },
      ],
      miniCta: {
        heading: "Haben Sie Neuigkeiten?",
        subtitle: "Erzählen Sie uns, was ansteht. Wir sagen Ihnen, ob es eine Geschichte ist und wo sie landen sollte.",
        ctaText: "Verbreitungsgespräch buchen",
      },
    },
  },

  fr: {
    hero: {
      badge: "Diffusion de communiqués",
      heading: "Diffusion de communiqués de presse qui place votre marque sur 1 000+ sites d'actualité",
      subtitle:
        "Un communiqué, diffusé via l'EcomSEO Syndication Framework vers les fils de presse, le USA TODAY Network, des centaines de sites d'info locale et les bases de données que lisent journalistes et modèles d'IA. Chaque placement vous revient sous forme de lien actif à vérifier.",
      ctaText: "Réserver un appel diffusion",
    },
    trustBar: "Plus de 20 entreprises nous font confiance",
    sections: [
      {
        type: "stats",
        badge: "Rapport exemple",
        heading: "Ce qu'a donné un seul communiqué",
        subtitle:
          "De vrais chiffres issus d'une seule diffusion. Votre empreinte dépend du ciblage choisi, mais c'est l'ordre de grandeur.",
        stats: [
          { value: "1 387", label: "Destinations" },
          { value: "330 M+", label: "Visiteurs mensuels sur le réseau" },
          { value: "227", label: "Placements USA TODAY Network" },
          { value: "251", label: "Journalistes contactés directement" },
        ],
      },
      {
        type: "reach",
        badge: "Votre portée",
        heading: "1 387 destinations, chacune traçable jusqu'à votre histoire",
        subtitle:
          "Fils de presse, sites d'info des chaînes locales, réseaux nationaux, publications spécialisées et bases de données professionnelles des rédactions. 1 387 endroits indexés de plus où Google et les modèles derrière ChatGPT, Gemini et Claude trouvent votre marque.",
        reach: buildReach({
          usaToday: "USA TODAY Network",
          broadcast: "Sites d'info locale",
          niche: "Publications spécialisées",
          newswires: "Grands fils de presse",
          topicWires: "Fils sectoriels",
          databases: "Bases de presse",
          searchAi: "Recherche & IA",
          journalists: "Relations presse",
          journalistsNote: "Journalistes & rédacteurs",
          more: "+ {n} autres dans ce canal, tous listés dans votre fichier de suivi",
        }),
      },
      {
        type: "process",
        badge: "Comment ça marche",
        heading: "L'EcomSEO Syndication Framework",
        subtitle: "Quatre étapes de l'angle à la preuve. On gère tout, vous validez le texte.",
        process: [
          {
            number: "01",
            title: "Trouver l'angle",
            description:
              "On choisit ce qu'une rédaction publierait vraiment : un lancement, un chiffre, un accord avec un distributeur. Puis on écrit autour des entités que Google et les IA doivent associer à votre marque.",
          },
          {
            number: "02",
            title: "Relire, vérifier, horodater",
            description:
              "Chaque communiqué passe une relecture éditoriale et est rattaché à un expéditeur vérifié. Ce qui part est exactement le texte que vous avez validé. Il entre en diffusion horodaté : une trace publique de quand votre info est apparue.",
          },
          {
            number: "03",
            title: "Diffusion sur tous les canaux",
            description:
              "AP News et Google News, le USA TODAY Network, les sites d'info locale, les publications spécialisées et les bases de presse professionnelles. En plus, un envoi direct aux journalistes des marchés que vous choisissez.",
          },
          {
            number: "04",
            title: "Preuve et bilan",
            description:
              "Vous recevez le rapport de diffusion et un CSV avec un lien actif par placement. On passe en revue ce qui a été publié et comment le réutiliser.",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Pourquoi ça marche",
        heading: "Pourquoi la syndication compte pour le SEO e-commerce aujourd'hui",
        subtitle:
          "Un communiqué ne fera pas ranker vos pages catégories à lui seul. Il construit la trace de mentions fiables que les moteurs de recherche et les IA utilisent pour comprendre qui vous êtes.",
        benefits: [
          {
            title: "De quoi être cité par l'IA",
            description:
              "ChatGPT, Gemini et Perplexity s'appuient sur les sources d'actualité et les pages bien indexées. Des centaines de mentions attribuables leur donnent de quoi citer quand on les interroge sur votre catégorie.",
          },
          {
            title: "Une entité de marque plus nette",
            description:
              "Même nom, même fondateur, mêmes produits et même lieu sur 1 000+ pages. C'est cette cohérence qui aide Google à relier les points.",
          },
          {
            title: "Sous les yeux des journalistes",
            description:
              "Votre communiqué arrive dans Bloomberg Terminal, Muck Rack et LexisNexis, là où reporters et analystes cherchent leurs sujets.",
          },
          {
            title: "Pertinence locale et thématique",
            description:
              "Les sites d'info locale et les publications spécialisées associent votre marque aux villes et aux sujets où vous vendez.",
          },
          {
            title: "Une preuve réutilisable",
            description:
              "Bandeaux « Vu dans », updates investisseurs, pitchs distributeurs. Chaque placement est un lien que vous pouvez montrer.",
          },
          {
            title: "Un levier pour le netlinking",
            description:
              "La couverture donne à notre équipe outreach une bonne raison d'écrire. Les éditeurs qui ont vu l'info accueillent mieux la relance.",
            href: "/link-building",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Ce que vous recevez",
        heading: "Tout dans une seule diffusion",
        subtitle: "Pas de nouveau tableau de bord. Vous recevez les fichiers et un appel.",
        deliverables: [
          { title: "Le communiqué", description: "Angle, titre, citations et texte rédigés par notre équipe, validés par vous." },
          { title: "Rapport de diffusion", description: "Chaque canal et chaque chiffre, dans un rapport à transférer." },
          { title: "Fichier de suivi", description: "Un CSV avec un lien actif pour chaque placement confirmé." },
          { title: "Appel bilan", description: "Ce qui a été publié, repris, et comment l'utiliser pour votre SEO." },
        ],
      },
      {
        type: "richText",
        badge: "Sans détour",
        heading: "Ce que la diffusion de communiqués ne fait pas",
        richTextBlocks: [
          {
            heading: "Ce n'est pas un raccourci backlinks",
            body: "La plupart des placements syndiqués sont en nofollow ou sur des pages à l'autorité modeste. Si on vous vend des communiqués comme une astuce de liens, passez votre chemin. La valeur est dans les mentions de marque, les signaux d'entité et la découverte par l'IA. Pour des liens qui font bouger les positions, associez-le à du vrai netlinking.",
            href: "/link-building",
            hrefLabel: "Voir notre service de netlinking",
          },
          {
            heading: "La reprise se mérite",
            body: "L'envoi à 250+ journalistes met votre histoire dans leur boîte mail. Qu'ils écrivent dessus, c'est leur choix. Un bon angle change les probabilités, c'est donc là qu'on passe notre temps.",
          },
          {
            heading: "La portée est une audience potentielle",
            body: "Les 330 M+ visiteurs mensuels sont l'audience cumulée des sites du réseau, selon nos partenaires de syndication. Ce n'est pas un nombre de vues de votre communiqué, et on ne prétendra pas le contraire.",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Qu'est-ce que la diffusion de communiqués de presse ?",
          answer:
            "On rédige votre annonce et on la syndique en une fois vers les fils de presse, les sites d'info nationaux et locaux, les publications spécialisées et les bases de presse professionnelles. Vous recevez un rapport et un lien actif par placement.",
        },
        {
          question: "Les liens aident-ils mon SEO ?",
          answer:
            "Indirectement. La plupart des placements sont en nofollow, donc n'attendez pas un bond de positions grâce aux liens seuls. Vous obtenez des centaines de mentions de marque indexées, des signaux d'entité plus forts et plus de chances d'être cité par les IA. Pour un effet direct sur le classement, on l'associe au [netlinking](/link-building).",
        },
        {
          question: "Comment ça aide ma visibilité dans ChatGPT et les AI Overviews de Google ?",
          answer:
            "Les réponses IA puisent dans les sources d'actualité et les pages largement indexées. Un communiqué présent sur 1 000+ pages attribuables leur fournit des faits cohérents sur votre marque. C'est l'un des moyens les plus rapides d'ajouter des mentions fiables en volume.",
        },
        {
          question: "En combien de temps mon communiqué est-il en ligne ?",
          answer:
            "En général un à deux jours ouvrés après votre validation, après relecture éditoriale. Les placements apparaissent en quelques heures et le fichier de suivi se remplit au fil des confirmations.",
        },
        {
          question: "Pouvez-vous cibler l'Europe ou la France ?",
          answer:
            "Oui. Les fils géographiques et l'envoi aux journalistes se choisissent par marché, on vise donc les pays où vous vendez. Les grands réseaux américains viennent en plus.",
        },
        {
          question: "La reprise médiatique est-elle garantie ?",
          answer:
            "Non, et méfiez-vous de ceux qui le promettent. Les placements sur le réseau de syndication sont confirmés et liés. Un journaliste qui écrit son propre article, c'est un bonus qu'on va chercher avec l'angle.",
        },
        {
          question: "À quelle fréquence envoyer un communiqué ?",
          answer:
            "Quand vous avez une vraie info. Pour la plupart des marques DTC, c'est un lancement, une levée de fonds, un accord distributeur ou une étude de données, soit environ une fois par trimestre. Les communiqués creux diluent la trace.",
        },
      ],
      miniCta: {
        heading: "Une info à partager ?",
        subtitle: "Dites-nous ce qui arrive. On vous dira si c'est une histoire et où elle doit atterrir.",
        ctaText: "Réserver un appel diffusion",
      },
    },
  },

  es: {
    hero: {
      badge: "Distribución de notas de prensa",
      heading: "Distribución de notas de prensa que lleva tu marca a más de 1.000 medios",
      subtitle:
        "Una nota, distribuida con el EcomSEO Syndication Framework a agencias de noticias, la USA TODAY Network, cientos de webs de noticias locales y las bases de datos que leen periodistas y modelos de IA. Cada publicación te llega como un enlace activo que puedes comprobar.",
      ctaText: "Reserva una llamada",
    },
    trustBar: "Más de 20 empresas confían en nosotros",
    sections: [
      {
        type: "stats",
        badge: "Informe de ejemplo",
        heading: "Así quedó una sola nota",
        subtitle:
          "Cifras reales de una sola distribución. Tu alcance depende de la segmentación, pero este es el orden de magnitud.",
        stats: [
          { value: "1.387", label: "Destinos" },
          { value: "330 M+", label: "Visitantes mensuales en la red" },
          { value: "227", label: "Publicaciones en USA TODAY Network" },
          { value: "251", label: "Periodistas contactados directamente" },
        ],
      },
      {
        type: "reach",
        badge: "Tu alcance",
        heading: "1.387 destinos, cada uno rastreable hasta tu historia",
        subtitle:
          "Agencias de noticias, webs de televisiones locales, redes nacionales, publicaciones de nicho y las bases de datos profesionales de las redacciones. 1.387 lugares indexados más donde Google y los modelos detrás de ChatGPT, Gemini y Claude encuentran tu marca.",
        reach: buildReach({
          usaToday: "USA TODAY Network",
          broadcast: "Noticias locales",
          niche: "Publicaciones de nicho",
          newswires: "Grandes agencias",
          topicWires: "Agencias sectoriales",
          databases: "Bases de noticias",
          searchAi: "Búsqueda e IA",
          journalists: "Contacto con periodistas",
          journalistsNote: "Periodistas y editores",
          more: "+ {n} más en este canal, todos en tu archivo de seguimiento",
        }),
      },
      {
        type: "process",
        badge: "Cómo funciona",
        heading: "El EcomSEO Syndication Framework",
        subtitle: "Cuatro pasos del enfoque a la prueba. Nosotros lo hacemos todo, tú apruebas el texto.",
        process: [
          {
            number: "01",
            title: "Encontrar el enfoque",
            description:
              "Elegimos algo que una redacción publicaría de verdad: un lanzamiento, un dato, un acuerdo con un retailer. Luego escribimos alrededor de las entidades que Google y la IA deben asociar a tu marca.",
          },
          {
            number: "02",
            title: "Revisar, verificar, fechar",
            description:
              "Cada nota pasa una revisión editorial y queda vinculada a un remitente verificado. Lo que se publica es exactamente el texto que aprobaste. Entra en distribución con marca de tiempo, así queda un registro público de cuándo apareció tu noticia.",
          },
          {
            number: "03",
            title: "Sindicación en todos los canales",
            description:
              "AP News y Google News, la USA TODAY Network, webs de noticias locales, publicaciones de nicho y sectoriales y bases de noticias profesionales. Además, envío directo a periodistas de los mercados que elijas.",
          },
          {
            number: "04",
            title: "Prueba y repaso",
            description:
              "Recibes el informe de distribución y un CSV con un enlace activo por publicación. Repasamos contigo qué salió y cómo reaprovecharlo.",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Por qué funciona",
        heading: "Por qué la sindicación importa ahora para el SEO ecommerce",
        subtitle:
          "Una nota de prensa no posicionará tus páginas de categoría por sí sola. Lo que hace es construir el rastro de menciones fiables que buscadores y motores de respuesta con IA usan para entender quién eres.",
        benefits: [
          {
            title: "Algo que la IA pueda citar",
            description:
              "ChatGPT, Gemini y Perplexity se apoyan en fuentes de noticias y páginas bien indexadas. Cientos de menciones atribuibles les dan algo que citar cuando alguien pregunta por tu categoría.",
          },
          {
            title: "Una entidad de marca más clara",
            description:
              "El mismo nombre, fundador, productos y ubicación en más de 1.000 páginas. Esa coherencia ayuda a Google a unir los puntos.",
          },
          {
            title: "Delante de periodistas",
            description:
              "Tu nota llega a Bloomberg Terminal, Muck Rack y LexisNexis, donde reporteros y analistas buscan historias.",
          },
          {
            title: "Relevancia local y de nicho",
            description:
              "Las webs de noticias locales y las publicaciones sectoriales colocan tu marca junto a las ciudades y temas donde vendes.",
          },
          {
            title: "Pruebas reutilizables",
            description:
              "Franjas de «Visto en», updates para inversores, presentaciones a retailers. Cada publicación es un enlace que puedes enseñar.",
          },
          {
            title: "Un gancho para el link building",
            description:
              "La cobertura le da a nuestro equipo de outreach un motivo para escribir. Los editores que vieron la noticia reciben mejor el siguiente pitch.",
            href: "/link-building",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Qué recibes",
        heading: "Todo en una sola distribución",
        subtitle: "Ningún panel nuevo que aprender. Recibes los archivos y una llamada.",
        deliverables: [
          { title: "La nota", description: "Enfoque, titular, citas y texto escritos por nuestro equipo y aprobados por ti." },
          { title: "Informe de distribución", description: "Cada canal y cada cifra en un informe que puedes reenviar." },
          { title: "Archivo de seguimiento", description: "Un CSV con un enlace activo por cada publicación confirmada." },
          { title: "Llamada de repaso", description: "Qué salió, qué se recogió y cómo usarlo en tu SEO." },
        ],
      },
      {
        type: "richText",
        badge: "Sin rodeos",
        heading: "Lo que la distribución de notas de prensa no hace",
        richTextBlocks: [
          {
            heading: "No es un atajo de backlinks",
            body: "La mayoría de publicaciones sindicadas son nofollow o están en páginas con autoridad modesta. Si alguien te vende notas de prensa como truco de enlaces, desconfía. El valor está en las menciones de marca, las señales de entidad y el descubrimiento por la IA. Para enlaces que muevan posiciones, combínalo con link building de verdad.",
            href: "/link-building",
            hrefLabel: "Ver nuestro servicio de link building",
          },
          {
            heading: "La cobertura se gana",
            body: "El envío a más de 250 periodistas pone tu historia en su bandeja de entrada. Si escriben sobre ella es decisión suya. Un buen enfoque cambia las probabilidades, así que ahí invertimos el tiempo.",
          },
          {
            heading: "El alcance es audiencia potencial",
            body: "Los más de 330 M de visitantes mensuales son la audiencia combinada de las webs de la red, según nuestros socios de sindicación. No es un recuento de visitas de tu nota y no vamos a fingir que lo sea.",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "¿Qué es la distribución de notas de prensa?",
          answer:
            "Escribimos tu anuncio y lo sindicamos de una vez a agencias de noticias, webs de noticias nacionales y locales, publicaciones de nicho y bases de noticias profesionales. Recibes un informe y un enlace activo por publicación.",
        },
        {
          question: "¿Los enlaces ayudan a mi SEO?",
          answer:
            "De forma indirecta. La mayoría de publicaciones son nofollow, así que no esperes un salto de posiciones solo por los enlaces. Lo que consigues son cientos de menciones de marca indexadas, señales de entidad más fuertes y más opciones de que la IA te cite. Para un impacto directo en rankings lo combinamos con [link building](/link-building).",
        },
        {
          question: "¿Cómo ayuda a mi visibilidad en ChatGPT y en los AI Overviews de Google?",
          answer:
            "Las respuestas de IA tiran de fuentes de noticias y páginas muy indexadas. Una nota en más de 1.000 páginas atribuibles les da datos coherentes sobre tu marca. Es una de las formas más rápidas de sumar menciones fiables a escala.",
        },
        {
          question: "¿Cuánto tarda mi nota en publicarse?",
          answer:
            "Normalmente de uno a dos días laborables tras tu aprobación, después de la revisión editorial. Las publicaciones aparecen en horas y el archivo de seguimiento se completa a medida que se confirman.",
        },
        {
          question: "¿Podéis apuntar a Europa o a España?",
          answer:
            "Sí. Las agencias geográficas y el contacto con periodistas se eligen por mercado, así que apuntamos a los países donde vendes. Las grandes redes de EE. UU. van además.",
        },
        {
          question: "¿Está garantizada la cobertura en medios?",
          answer:
            "No, y desconfía de quien lo prometa. Las publicaciones en la red de sindicación están confirmadas y enlazadas. Que un periodista escriba su propia pieza es un extra que buscamos con el enfoque.",
        },
        {
          question: "¿Cada cuánto deberíamos enviar una nota?",
          answer:
            "Cuando haya noticias reales. Para la mayoría de marcas DTC eso es un lanzamiento, una ronda de financiación, un acuerdo con un retailer o un estudio de datos, más o menos una vez por trimestre. Las notas flojas diluyen el rastro.",
        },
      ],
      miniCta: {
        heading: "¿Tienes algo que contar?",
        subtitle: "Cuéntanos qué viene. Te diremos si es una historia y dónde debería aterrizar.",
        ctaText: "Reserva una llamada",
      },
    },
  },

  it: {
    hero: {
      badge: "Distribuzione comunicati stampa",
      heading: "Distribuzione di comunicati stampa che porta il tuo brand su 1.000+ siti di notizie",
      subtitle:
        "Un comunicato, distribuito con l'EcomSEO Syndication Framework a newswire, USA TODAY Network, centinaia di siti di notizie locali e i database che leggono giornalisti e modelli di IA. Ogni uscita ti torna come link attivo da verificare.",
      ctaText: "Prenota una call",
    },
    trustBar: "Oltre 20 aziende si fidano di noi",
    sections: [
      {
        type: "stats",
        badge: "Report di esempio",
        heading: "Com'è andato un singolo comunicato",
        subtitle:
          "Numeri reali da una sola distribuzione. La tua copertura dipende dal targeting, ma l'ordine di grandezza è questo.",
        stats: [
          { value: "1.387", label: "Destinazioni" },
          { value: "330 M+", label: "Visitatori mensili sulla rete" },
          { value: "227", label: "Uscite su USA TODAY Network" },
          { value: "251", label: "Giornalisti raggiunti direttamente" },
        ],
      },
      {
        type: "reach",
        badge: "La tua copertura",
        heading: "1.387 destinazioni, ognuna riconducibile alla tua storia",
        subtitle:
          "Newswire, siti delle TV locali, reti nazionali, testate di nicchia e i database professionali delle redazioni. 1.387 posti indicizzati in più dove Google e i modelli dietro ChatGPT, Gemini e Claude trovano il tuo brand.",
        reach: buildReach({
          usaToday: "USA TODAY Network",
          broadcast: "Notizie locali",
          niche: "Testate di nicchia",
          newswires: "Grandi newswire",
          topicWires: "Newswire di settore",
          databases: "Database di notizie",
          searchAi: "Ricerca e IA",
          journalists: "Contatto giornalisti",
          journalistsNote: "Giornalisti e redattori",
          more: "+ altri {n} in questo canale, tutti nel tuo file di tracciamento",
        }),
      },
      {
        type: "process",
        badge: "Come funziona",
        heading: "L'EcomSEO Syndication Framework",
        subtitle: "Quattro passaggi dall'angolo alla prova. Facciamo tutto noi, tu approvi il testo.",
        process: [
          {
            number: "01",
            title: "Trovare l'angolo",
            description:
              "Scegliamo qualcosa che una redazione pubblicherebbe davvero: un lancio, un dato, un accordo con un retailer. Poi scriviamo attorno alle entità che Google e l'IA devono collegare al tuo brand.",
          },
          {
            number: "02",
            title: "Revisione, verifica, timestamp",
            description:
              "Ogni comunicato passa una revisione editoriale ed è legato a un mittente verificato. Esce esattamente il testo che hai approvato. Entra in distribuzione con un timestamp, così resta una traccia pubblica di quando è uscita la notizia.",
          },
          {
            number: "03",
            title: "Syndication su tutti i canali",
            description:
              "AP News e Google News, USA TODAY Network, siti di notizie locali, testate di nicchia e di settore e database di notizie professionali. In più, invio diretto ai giornalisti dei mercati che scegli.",
          },
          {
            number: "04",
            title: "Prova e recap",
            description:
              "Ricevi il report di distribuzione e un CSV con un link attivo per ogni uscita. Ripercorriamo insieme cosa è uscito e come riusarlo.",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Perché funziona",
        heading: "Perché la syndication conta oggi per la SEO ecommerce",
        subtitle:
          "Un comunicato da solo non posiziona le tue pagine categoria. Costruisce però la scia di menzioni affidabili che motori di ricerca e motori di risposta IA usano per capire chi sei.",
        benefits: [
          {
            title: "Qualcosa da citare per l'IA",
            description:
              "ChatGPT, Gemini e Perplexity si basano su fonti di notizie e pagine ben indicizzate. Centinaia di menzioni attribuibili danno loro qualcosa da citare quando qualcuno chiede della tua categoria.",
          },
          {
            title: "Un'entità di brand più chiara",
            description:
              "Stesso nome, fondatore, prodotti e sede su 1.000+ pagine. È questa coerenza che aiuta Google a unire i puntini.",
          },
          {
            title: "Davanti ai giornalisti",
            description:
              "Il comunicato arriva su Bloomberg Terminal, Muck Rack e LexisNexis, dove reporter e analisti cercano storie.",
          },
          {
            title: "Rilevanza locale e di nicchia",
            description:
              "Siti di notizie locali e testate di settore mettono il tuo brand accanto alle città e ai temi dove vendi.",
          },
          {
            title: "Prove riutilizzabili",
            description:
              "Fasce “Visto su”, aggiornamenti per investitori, pitch ai retailer. Ogni uscita è un link da mostrare.",
          },
          {
            title: "Un aggancio per la link building",
            description:
              "La copertura dà al nostro team outreach un motivo per scrivere. I redattori che hanno visto la notizia accolgono meglio il pitch successivo.",
            href: "/link-building",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Cosa ricevi",
        heading: "Tutto in una sola distribuzione",
        subtitle: "Nessuna nuova dashboard da imparare. Ricevi i file e una call.",
        deliverables: [
          { title: "Il comunicato", description: "Angolo, titolo, citazioni e testo scritti dal nostro team, approvati da te." },
          { title: "Report di distribuzione", description: "Ogni canale e ogni numero in un report da inoltrare." },
          { title: "File di tracciamento", description: "Un CSV con un link attivo per ogni uscita confermata." },
          { title: "Call di recap", description: "Cosa è uscito, cosa è stato ripreso e come usarlo per la SEO." },
        ],
      },
      {
        type: "richText",
        badge: "Senza giri di parole",
        heading: "Cosa non fa la distribuzione di comunicati stampa",
        richTextBlocks: [
          {
            heading: "Non è una scorciatoia per i backlink",
            body: "La maggior parte delle uscite in syndication è nofollow o su pagine con autorità modesta. Se qualcuno ti vende comunicati come trucco per i link, lascia perdere. Il valore sta nelle menzioni del brand, nei segnali di entità e nella scoperta da parte dell'IA. Per link che spostano le posizioni, abbinalo a vera link building.",
            href: "/link-building",
            hrefLabel: "Scopri il nostro servizio di link building",
          },
          {
            heading: "La ripresa si conquista",
            body: "L'invio a 250+ giornalisti porta la tua storia nella loro casella. Se ne scrivono, lo decidono loro. Un buon angolo cambia le probabilità, ed è lì che passiamo il tempo.",
          },
          {
            heading: "La copertura è pubblico potenziale",
            body: "I 330 M+ visitatori mensili sono il pubblico complessivo dei siti della rete, secondo i nostri partner di syndication. Non sono visualizzazioni del tuo comunicato e non faremo finta che lo siano.",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Cos'è la distribuzione di comunicati stampa?",
          answer:
            "Scriviamo il tuo annuncio e lo distribuiamo in un colpo solo a newswire, siti di notizie nazionali e locali, testate di nicchia e database di notizie professionali. Ricevi un report e un link attivo per ogni uscita.",
        },
        {
          question: "I link aiutano la mia SEO?",
          answer:
            "Indirettamente. La maggior parte delle uscite è nofollow, quindi non aspettarti un salto di posizioni solo dai link. Ottieni centinaia di menzioni del brand indicizzate, segnali di entità più forti e più probabilità di essere citato dall'IA. Per un impatto diretto sul ranking lo abbiniamo alla [link building](/link-building).",
        },
        {
          question: "Come aiuta la mia visibilità su ChatGPT e negli AI Overviews di Google?",
          answer:
            "Le risposte IA attingono da fonti di notizie e pagine molto indicizzate. Un comunicato su 1.000+ pagine attribuibili fornisce dati coerenti sul tuo brand. È uno dei modi più rapidi per aggiungere menzioni affidabili su larga scala.",
        },
        {
          question: "Quanto ci mette il comunicato ad andare online?",
          answer:
            "Di solito uno o due giorni lavorativi dalla tua approvazione, dopo la revisione editoriale. Le uscite compaiono in poche ore e il file di tracciamento si riempie man mano che vengono confermate.",
        },
        {
          question: "Potete puntare sull'Europa o sull'Italia?",
          answer:
            "Sì. Newswire geografici e contatto con i giornalisti si scelgono per mercato, quindi puntiamo ai paesi dove vendi. Le grandi reti USA si aggiungono sopra.",
        },
        {
          question: "La ripresa dei media è garantita?",
          answer:
            "No, e diffida di chi la promette. Le uscite sulla rete di syndication sono confermate e linkate. Un giornalista che scrive un suo pezzo è un bonus che inseguiamo con l'angolo giusto.",
        },
        {
          question: "Ogni quanto dovremmo inviare un comunicato?",
          answer:
            "Quando c'è una vera notizia. Per la maggior parte dei brand DTC è un lancio, un round di finanziamento, un accordo retail o uno studio di dati, più o meno una volta a trimestre. I comunicati deboli diluiscono la scia.",
        },
      ],
      miniCta: {
        heading: "Hai una notizia da condividere?",
        subtitle: "Raccontaci cosa sta arrivando. Ti diremo se è una storia e dove dovrebbe uscire.",
        ctaText: "Prenota una call",
      },
    },
  },

  nl: {
    hero: {
      badge: "Persberichten verspreiden",
      heading: "Persbericht-verspreiding die je merk op 1.000+ nieuwssites zet",
      subtitle:
        "Eén persbericht, verspreid via het EcomSEO Syndication Framework naar newswires, het USA TODAY Network, honderden lokale nieuwssites en de databases die journalisten en AI-modellen lezen. Elke plaatsing krijg je terug als live link die je zelf kunt checken.",
      ctaText: "Plan een gesprek",
    },
    trustBar: "Meer dan 20 bedrijven vertrouwen op ons",
    sections: [
      {
        type: "stats",
        badge: "Voorbeeldrapport",
        heading: "Zo zag één persbericht eruit",
        subtitle:
          "Echte cijfers uit één verspreiding. Jouw bereik hangt af van de targeting, maar dit is de orde van grootte.",
        stats: [
          { value: "1.387", label: "Bestemmingen" },
          { value: "330 mln+", label: "Maandelijkse bezoekers in het netwerk" },
          { value: "227", label: "Plaatsingen in het USA TODAY Network" },
          { value: "251", label: "Journalisten direct bereikt" },
        ],
      },
      {
        type: "reach",
        badge: "Jouw bereik",
        heading: "1.387 bestemmingen, elk terug te leiden naar jouw verhaal",
        subtitle:
          "Newswires, nieuwssites van lokale tv-zenders, nationale netwerken, nichetitels en de vakdatabases van redacties. Dat zijn 1.387 extra geïndexeerde plekken waar Google en de modellen achter ChatGPT, Gemini en Claude je merk vinden.",
        reach: buildReach({
          usaToday: "USA TODAY Network",
          broadcast: "Lokaal nieuws",
          niche: "Nichetitels",
          newswires: "Grote newswires",
          topicWires: "Branche-newswires",
          databases: "Nieuwsdatabases",
          searchAi: "Zoeken & AI",
          journalists: "Journalisten-outreach",
          journalistsNote: "Journalisten & redacteuren",
          more: "+ {n} meer in dit kanaal, allemaal in je trackingbestand",
        }),
      },
      {
        type: "process",
        badge: "Zo werkt het",
        heading: "Het EcomSEO Syndication Framework",
        subtitle: "Vier stappen van invalshoek tot bewijs. Wij doen het werk, jij keurt de tekst goed.",
        process: [
          {
            number: "01",
            title: "De invalshoek vinden",
            description:
              "We kiezen iets wat een redactie echt zou plaatsen: een lancering, een cijfer, een retaildeal. Daarna schrijven we rond de entiteiten die Google en AI-tools aan je merk moeten koppelen.",
          },
          {
            number: "02",
            title: "Review, verificatie, tijdstempel",
            description:
              "Elk persbericht gaat door een redactionele check en hangt aan een geverifieerde afzender. Wat de deur uitgaat, is precies de tekst die jij hebt goedgekeurd. Het gaat met een tijdstempel de verspreiding in, dus er is openbaar bewijs van wanneer je nieuws als eerste verscheen.",
          },
          {
            number: "03",
            title: "Verspreiden over elk kanaal",
            description:
              "AP News en Google News, het USA TODAY Network, lokale nieuwssites, niche- en vaktitels en professionele nieuwsdatabases. Plus directe levering aan journalisten in de markten die jij kiest.",
          },
          {
            number: "04",
            title: "Bewijs en terugkoppeling",
            description:
              "Je krijgt het verspreidingsrapport en een CSV met een live link per plaatsing. We lopen samen door wat er geland is en hoe je het hergebruikt.",
          },
        ],
      },
      {
        type: "benefits",
        badge: "Waarom het werkt",
        heading: "Waarom syndicatie nu telt voor ecommerce-SEO",
        subtitle:
          "Een persbericht zet je categoriepagina's niet in z'n eentje bovenaan. Het bouwt wel het spoor van betrouwbare vermeldingen waarmee zoekmachines en AI-antwoordmachines bepalen wie je bent.",
        benefits: [
          {
            title: "Iets om te citeren voor AI",
            description:
              "ChatGPT, Gemini en Perplexity leunen op nieuwsbronnen en goed geïndexeerde pagina's. Honderden herleidbare vermeldingen geven ze iets om te citeren als iemand naar jouw categorie vraagt.",
          },
          {
            title: "Een scherpere merkentiteit",
            description:
              "Dezelfde merknaam, oprichter, producten en locatie op 1.000+ pagina's. Juist die consistentie helpt Google de puntjes te verbinden.",
          },
          {
            title: "Onder de ogen van journalisten",
            description:
              "Je persbericht komt in Bloomberg Terminal, Muck Rack en LexisNexis terecht, waar verslaggevers en analisten naar verhalen zoeken.",
          },
          {
            title: "Lokale en niche-relevantie",
            description:
              "Lokale nieuwssites en vaktitels zetten je merk naast de steden en onderwerpen waar je echt verkoopt.",
          },
          {
            title: "Bewijs dat je hergebruikt",
            description:
              "“Bekend van”-balken, investeerdersupdates, pitches bij retailers. Elke plaatsing is een link waar je naar kunt wijzen.",
          },
          {
            title: "Een haakje voor linkbuilding",
            description:
              "Media-aandacht geeft ons outreachteam een reden om te mailen. Redacteuren die het nieuws al zagen, staan opener voor de vervolgpitch.",
            href: "/link-building",
          },
        ],
      },
      {
        type: "deliverables",
        badge: "Wat je krijgt",
        heading: "Alles in één verspreiding",
        subtitle: "Geen nieuw dashboard om te leren. Je krijgt de bestanden en een gesprek.",
        deliverables: [
          { title: "Het persbericht", description: "Invalshoek, kop, quotes en tekst door ons team geschreven, door jou goedgekeurd." },
          { title: "Verspreidingsrapport", description: "Elk kanaal en elk cijfer in één rapport om door te sturen." },
          { title: "Trackingbestand", description: "Een CSV met een live link voor elke bevestigde plaatsing." },
          { title: "Terugkoppelgesprek", description: "Wat er geland is, wat is opgepikt en hoe je het inzet voor SEO." },
        ],
      },
      {
        type: "richText",
        badge: "Eerlijk verhaal",
        heading: "Wat persbericht-verspreiding niet doet",
        richTextBlocks: [
          {
            heading: "Geen backlink-shortcut",
            body: "De meeste gesyndiceerde plaatsingen zijn nofollow of staan op pagina's met bescheiden autoriteit. Verkoopt iemand je persberichten als linktruc, loop dan weg. De waarde zit in merkvermeldingen, entiteitssignalen en vindbaarheid voor AI. Voor links die rankings bewegen combineer je het met echte linkbuilding.",
            href: "/link-building",
            hrefLabel: "Bekijk onze linkbuilding",
          },
          {
            heading: "Media-aandacht verdien je",
            body: "Levering aan 250+ journalisten zet je verhaal in hun inbox. Of ze erover schrijven, bepalen ze zelf. Een goede invalshoek verandert de kansen, dus daar steken we de tijd in.",
          },
          {
            heading: "Bereik is potentieel publiek",
            body: "De 330 mln+ maandelijkse bezoekers zijn het gezamenlijke publiek van de sites in het netwerk, volgens opgave van onze syndicatiepartners. Het is geen aantal views van jouw persbericht, en dat doen we ook niet voorkomen.",
          },
        ],
      },
    ],
    faqs: {
      items: [
        {
          question: "Wat is persbericht-verspreiding?",
          answer:
            "We schrijven je aankondiging en verspreiden die in één keer naar newswires, nationale en lokale nieuwssites, nichetitels en professionele nieuwsdatabases. Je krijgt een rapport en een live link voor elke plaatsing.",
        },
        {
          question: "Helpen de links mijn SEO?",
          answer:
            "Indirect. De meeste plaatsingen zijn nofollow, dus verwacht geen rankingsprong van de links alleen. Je krijgt honderden geïndexeerde merkvermeldingen, sterkere entiteitssignalen en een grotere kans om door AI geciteerd te worden. Voor direct effect op rankings combineren we het met [linkbuilding](/link-building).",
        },
        {
          question: "Hoe helpt het mijn zichtbaarheid in ChatGPT en Google AI Overviews?",
          answer:
            "AI-antwoorden putten uit nieuwsbronnen en breed geïndexeerde pagina's. Een persbericht op 1.000+ herleidbare pagina's geeft ze consistente feiten over je merk. Het is een van de snelste manieren om op schaal betrouwbare vermeldingen toe te voegen.",
        },
        {
          question: "Hoe snel staat mijn persbericht live?",
          answer:
            "Meestal binnen één tot twee werkdagen na je akkoord, na de redactionele check. Plaatsingen verschijnen binnen een paar uur en het trackingbestand vult zich zodra ze bevestigd zijn.",
        },
        {
          question: "Kunnen jullie op Europa of Nederland richten?",
          answer:
            "Ja. Geografische newswires en journalisten-outreach kiezen we per markt, dus we richten op de landen waar je verkoopt. De grote Amerikaanse netwerken komen daar bovenop.",
        },
        {
          question: "Is media-aandacht gegarandeerd?",
          answer:
            "Nee, en wees voorzichtig met iedereen die dat belooft. Plaatsingen op het syndicatienetwerk zijn bevestigd en gelinkt. Een journalist die er zelf een stuk over schrijft, is een bonus waar we met de invalshoek voor werken.",
        },
        {
          question: "Hoe vaak moeten we een persbericht sturen?",
          answer:
            "Als er echt nieuws is. Voor de meeste DTC-merken is dat een lancering, een investeringsronde, een retaildeal of een datastudie, dus ongeveer eens per kwartaal. Dunne persberichten verwateren het spoor.",
        },
      ],
      miniCta: {
        heading: "Nieuws om te delen?",
        subtitle: "Vertel ons wat eraan komt. Wij zeggen of het een verhaal is en waar het moet landen.",
        ctaText: "Plan een gesprek",
      },
    },
  },
};

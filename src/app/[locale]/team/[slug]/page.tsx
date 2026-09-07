import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TeamMemberPage from "./TeamMemberPage";
import { generateAlternates } from "@/lib/i18n/metadata";
import { type Locale, ogLocaleMap, BASE_URL, publicLocalizedUrl } from "@/lib/i18n/config";
import JsonLd from "@/components/JsonLd";
import {
  personJsonLd,
  fabianPersonJsonLd,
  breadcrumbJsonLd,
} from "@/lib/jsonLd";
import { teamMemberI18n } from "@/lib/i18n/translations/teamMemberData";

export const revalidate = 86400;

/** Get locale-aware member data by merging base data with translations */
function getLocalizedMember(slug: string, locale: Locale) {
  const base = teamMembers[slug];
  if (!base) return null;
  const i18n = teamMemberI18n[slug]?.[locale] || teamMemberI18n[slug]?.en;
  if (!i18n) return base;
  const cta = { ...base.cta };
  if (cta.primary && i18n.ctaPrimary) {
    cta.primary = { ...cta.primary, label: i18n.ctaPrimary };
  }
  if (cta.secondary && i18n.ctaSecondary) {
    cta.secondary = { ...cta.secondary, label: i18n.ctaSecondary };
  }
  return {
    ...base,
    role: i18n.role,
    tagline: i18n.tagline,
    bio: i18n.bio,
    skills: i18n.skills,
    interests: i18n.interests,
    cta,
  };
}


interface TeamMember {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  image: string;
  bio: string;
  skills: string[];
  interests: string[];
  cta: {
    primary: { label: string; href: string; icon: "phone" | "mail" };
    secondary?: { label: string; href: string };
  };
  socials: { platform: string; href: string }[];
  youtubeVideo?: string;
}

const teamMembers: Record<string, TeamMember> = {
  "fabian-van-til": {
    slug: "fabian-van-til",
    name: "Fabian van Til",
    role: "Entrepreneur and organic growth strategist",
    tagline:
      "A Passionate Entrepreneur, specialising in ecommerce marketing.",
    image:
      "/images/framer/fabian-van-til-new.jpeg",
    bio: "Fabian entered the e-commerce space in 2020. Two years later he and a partner launched a Google-marketing agency, which they swiftly refocused into an SEO firm. After selling his stake to his co-founder, Fabian doubled down on e-commerce. In 2023 he founded EcomSEO, an agency dedicated to shattering the norms of traditional marketing through transparent, results-oriented partnerships, and in 2024 he and his brother launched their own brand.",
    skills: [
      "Intent Matching",
      "Branding",
      "Systems / AI",
      "UX / UI",
      "Analytics",
      "Content Strategy",
    ],
    interests: ["Chess", "Music", "Tech", "Fitness", "Travel", "Philosophy"],
    cta: {
      primary: {
        label: "Whatsapp",
        href: "https://wa.link/2ls6pk",
        icon: "phone",
      },
      secondary: {
        label: "Book 30 min",
        href: "https://cal.com/fabianvantil/30min",
      },
    },
    socials: [
      {
        platform: "YouTube",
        href: "https://www.youtube.com/@fabian-ecomseo",
      },
      { platform: "X", href: "https://x.com/til_fabian" },
      {
        platform: "LinkedIn",
        href: "https://www.linkedin.com/in/fabian-van-til",
      },
      {
        platform: "Instagram",
        href: "https://www.instagram.com/fabianvantil",
      },
      { platform: "Website", href: "https://fabianvantil.com" },
    ],
    // youtubeVideo: "https://www.youtube.com/embed/_3vIp9O6-EM",
  },
      };

const allSlugs = Object.keys(teamMembers);

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const member = getLocalizedMember(slug, locale as Locale);
  if (!member) return {};

  return {
    title: `${member.name} - ${member.role}`,
    description: member.tagline,
    alternates: generateAlternates(`/team/${slug}`, locale as Locale),
    openGraph: {
      title: `${member.name} - ${member.role}`,
      description: member.tagline,
      url: publicLocalizedUrl(locale as Locale, `/team/${slug}`),
      siteName: "EcomSEO",
      type: "profile",
      images: [
        {
          url: `${BASE_URL}${member.image}`,
          width: 400,
          height: 400,
          alt: member.name,
        },
      ],
      locale: ogLocaleMap[locale as Locale] || "en_GB",
    },
    twitter: {
      card: "summary",
      site: "@ecomSEO_",
      title: `${member.name} - ${member.role}`,
      description: member.tagline,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const member = getLocalizedMember(slug, locale as Locale);
  if (!member) notFound();

  return (
    <>
      <JsonLd
        data={
          slug === "fabian-van-til"
            ? fabianPersonJsonLd({
                pageUrl: publicLocalizedUrl(
                  locale as Locale,
                  `/team/${slug}`
                ),
                description: member.tagline,
              })
            : personJsonLd({
                name: member.name,
                jobTitle: member.role,
                description: member.tagline,
                url: publicLocalizedUrl(locale as Locale, `/team/${slug}`),
                image: member.image,
                sameAs: member.socials.map((s) => s.href),
              })
        }
      />
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: "Home", path: "/" },
          { name: "Team", path: "/team" },
          { name: member.name, path: `/team/${slug}` },
        ])}
      />
      {member.youtubeVideo && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "$10k a day in Dutch market with eCom - Daniel & Fabian Van Til",
            description: "Fabian van Til, founder of EcomSEO, shares how he built a successful ecommerce brand and SEO agency in the Dutch market. Featured on Alex Fedotoff's podcast.",
            thumbnailUrl: "https://i.ytimg.com/vi/_3vIp9O6-EM/maxresdefault.jpg",
            uploadDate: "2024-11-15",
            contentUrl: "https://www.youtube.com/watch?v=_3vIp9O6-EM",
            embedUrl: member.youtubeVideo,
            duration: "PT1H1M41S",
            interactionStatistic: {
              "@type": "InteractionCounter",
              interactionType: { "@type": "WatchAction" },
              userInteractionCount: 5000,
            },
            publisher: {
              "@type": "Organization",
              name: "Alex Fedotoff",
              logo: {
                "@type": "ImageObject",
                url: "https://yt3.googleusercontent.com/ytc/AIdro_kQx1",
              },
            },
          }}
        />
      )}
      <TeamMemberPage member={member} />
    </>
  );
}

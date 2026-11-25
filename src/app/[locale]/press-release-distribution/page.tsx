import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonLd";
import { servicePageData, homeBreadcrumb } from "@/lib/i18n/translations/services";

export const revalidate = 3600;

const PATH = "/press-release-distribution";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildPageMetadata(locale as Locale, PATH);
}

export default async function PressReleaseDistributionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = servicePageData["press-release-distribution"][locale as Locale];
  const faqItemsPlain = t.faqs.items.map((item) => ({
    question: item.question,
    answer: item.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"),
  }));
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          locale: locale as Locale,
          name: t.hero.heading,
          description: t.hero.subtitle,
          path: PATH,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: homeBreadcrumb[locale as Locale], path: "/" },
          { name: t.hero.badge, path: PATH },
        ])}
      />
      <JsonLd data={faqJsonLd(faqItemsPlain)} />
      <ServicePageTemplate locale={locale as Locale} {...t} />
    </>
  );
}

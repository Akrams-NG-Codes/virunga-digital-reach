import { Link } from "@tanstack/react-router";
import { useLang, useT } from "@/lib/i18n";

export function CTASection() {
  const lang = useLang();
  const t = useT();
  return (
    <section className="bg-brand py-16 text-brand-foreground sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl sm:text-4xl">{t.home.finalCtaTitle}</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/$lang/get-involved/partner"
            params={{ lang }}
            className="inline-flex h-12 items-center rounded-md bg-ochre px-6 font-semibold text-ochre-foreground hover:opacity-90"
          >
            {t.common.partnerWithUs}
          </Link>
          <Link
            to="/$lang/contact"
            params={{ lang }}
            className="inline-flex h-12 items-center rounded-md border border-brand-foreground/40 px-6 font-semibold hover:bg-brand-foreground/10"
          >
            {t.common.contactUs}
          </Link>
        </div>
      </div>
    </section>
  );
}

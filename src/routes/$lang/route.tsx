import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { isLang } from "@/i18n/config";
import { SiteLayout } from "@/components/site/layout";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
  },
  component: LangLayout,
});

function LangLayout() {
  const { lang } = Route.useParams();
  return (
    <div lang={lang}>
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    </div>
  );
}

import DashboardChart from "@components/dashboard/chart/DashboardChart";
import Section from "@components/section/Section";
import { getLastWeekUrls } from "@data/url.data";

const AnalyticsUrls = async () => {
  const data = await getLastWeekUrls();
  return (
    <main className="flex mt-5 mb-5 gap-x-5 ">
      <Section className="flex-col flex-3 gap-y-5">
        <DashboardChart data={data} labels={{ label1: "users" }} />
      </Section>
    </main>
  );
};

export default AnalyticsUrls;

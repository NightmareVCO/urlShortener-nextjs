import DashboardChart from "@components/dashboard/chart/DashboardChart";
import Section from "@components/section/Section";
import { getLastWeekUsers } from "@data/user.data";

const AnalyticsUsers = async () => {
  const data = await getLastWeekUsers();

  return (
    <main className="flex mt-5 mb-5 gap-x-5 ">
      <Section className="flex-col flex-3 gap-y-5">
        <DashboardChart data={data} labels={{ label1: "users" }} />
      </Section>
    </main>
  );
};

export default AnalyticsUsers;

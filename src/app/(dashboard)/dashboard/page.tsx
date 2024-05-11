import DashboardCard from "@components/dashboard/card/DashboardCard";
import DashboardChart from "@components/dashboard/chart/DashboardChart";
import DashboardRightbar from "@components/dashboard/rightbar/DashboardRightbar";
import DashboardTransaction from "@components/dashboard/transactions/DashboardTransaction";
import Section from "@components/section/Section";
import { getWeeklyData } from "@data/page.data";
import {
  getAmountOfUrls,
  getAverageUrlsPerUser,
  getLastNUrls,
  getWeeklyAverageUrlsPerUserGrowth,
  getWeeklyUrlGrowth,
} from "@data/url.data";
import { getAmountOfUsers, getWeeklyUserGrowth } from "@data/user.data";

const Dashboard = async () => {
  const amountOfUsers = await getAmountOfUsers();
  const weeklyUserGrowth = await getWeeklyUserGrowth();
  const amountOfUrls = await getAmountOfUrls();
  const weeklyUrlGrowth = await getWeeklyUrlGrowth();
  const averageUrlsPerUser = await getAverageUrlsPerUser();
  const weeklyAverageUrlsPerUserGrowth =
    await getWeeklyAverageUrlsPerUserGrowth();
  const last5Urls = await getLastNUrls(5);
  const data = await getWeeklyData();

  return (
    <main className="flex mt-5 mb-5 gap-x-5">
      <Section className="flex-col flex-3 gap-y-5">
        <Section className="justify-between gap-x-5">
          <DashboardCard
            title="Total of users"
            amount={amountOfUsers}
            percentage={weeklyUserGrowth}
          />
          <DashboardCard
            title="Total of urls"
            amount={amountOfUrls}
            percentage={weeklyUrlGrowth}
          />
          <DashboardCard
            title="Average of url per user"
            amount={averageUrlsPerUser}
            percentage={weeklyAverageUrlsPerUserGrowth}
          />
        </Section>
        <DashboardTransaction urls={last5Urls} />
        <DashboardChart
          data={data}
          labels={{ label1: "visits", label2: "clicks" }}
        />
      </Section>
      <Section className="flex-1">
        <DashboardRightbar />
      </Section>
    </main>
  );
};

export default Dashboard;

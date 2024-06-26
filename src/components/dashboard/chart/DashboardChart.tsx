"use client";

import Heading2 from "@components/dashboard/heading/Heading2";
import Section from "@components/section/Section";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type DashboardChartProperties = {
  data: Array<{
    name: string;
    n1: number;
    n2?: number;
  }>;

  labels: {
    label1: string;
    label2?: string;
  };
};

const DashboardChart = ({ data, labels }: DashboardChartProperties) => {
  console.log(data);

  return (
    <Section className="flex-col p-5 rounded-lg gap-y-5 h-96 bg-main-gray">
      <Heading2>Dashboard Chart</Heading2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="n1"
            name={labels.label1}
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          {data[0].n2 && (
            <Line
              type="monotone"
              dataKey="n2"
              name={labels.label2}
              stroke="#82ca9d"
              strokeDasharray="3 4 5 2"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </Section>
  );
};

export default DashboardChart;

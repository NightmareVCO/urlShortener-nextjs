import Section from "@components/section/Section";
import User from "@components/user/User";
import Link from "next/link";

import Heading2 from "../heading/Heading2";

type DashboardTransactionProperties = {
  urls: any[];
};

const DashboardTransaction = ({ urls }: DashboardTransactionProperties) => {
  return (
    <Section className="flex-col p-5 rounded-lg gap-y-5 bg-main-gray">
      <Heading2>Latest Urls</Heading2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-3 font-bold text-start">User</td>
            <td className="p-3 font-bold">Status</td>
            <td className="p-3 font-bold">Date</td>
            <td className="p-3 font-bold">Url</td>
          </tr>
        </thead>
        <tbody>
          {urls?.map((url) => (
            <tr key={url.id}>
              <td className="p-3">
                <User image userId={url.user} />
              </td>
              <td className="p-3">
                <span
                  className={
                    "p-[5px] rounded-md" +
                    (url.status ? " bg-green-800/50" : " bg-red-800/50")
                  }
                >
                  {url.status ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="p-3">{url.date.toLocaleDateString()}</td>
              <td className="p-3">
                <Link
                  href={`url/${url.shortUrl}`}
                  className="font-bold transition hover:underline hover:text-main-blue-active"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {url.shortUrl}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
};

export default DashboardTransaction;

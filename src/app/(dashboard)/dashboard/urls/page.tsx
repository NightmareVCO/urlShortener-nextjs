import Button from "@components/buttons/Button";
import Heading2 from "@components/dashboard/heading/Heading2";
import Pagination from "@components/dashboard/pagination/Pagination";
import Search from "@components/dashboard/search/Search";
import ChangeUrlStatusForm from "@components/forms/ChageUrlStatusForm";
import Section from "@components/section/Section";
import User from "@components/user/User";
import { getUrls } from "@data/url.data";
import Link from "next/link";

const DashboardUrl = async ({ searchParams }: any) => {
  const q = searchParams?.q || "";
  const page = +searchParams?.page || 1;
  const { urlsAmount, urls } = await getUrls(q, page);

  return (
    <main className="flex mt-5 mb-5 gap-x-5 ">
      <Section className="flex-col w-full p-5 rounded-lg gap-y-5 bg-main-gray">
        <nav>
          <ul className="flex items-center justify-between gap-x-4>">
            <li>
              <Search placeholder="Search for an url..." />
            </li>
            <li>
              <Button className="bg-main-blue border-main-blue">
                <Link href="/dashboard/urls/add">Add url</Link>
              </Button>
            </li>
          </ul>
        </nav>

        <Heading2>Latest Urls</Heading2>
        <table className="w-full">
          <thead>
            <tr>
              <td className="p-3 font-bold text-start">Short Link</td>
              <td className="p-3 font-bold text-start">Original Link</td>
              <td className="p-3 font-bold">Clicks</td>
              <td className="p-3 font-bold">Status</td>
              <td className="p-3 font-bold">User</td>
              <td className="p-3 font-bold">Action</td>
            </tr>
          </thead>
          <tbody>
            {urls?.map((url) => (
              <tr key={url.id}>
                <td className="p-3 text-start max-w-10">
                  <Link
                    href={`/url/${url.shortUrl}`}
                    rel="noopener"
                    target="_blank"
                  >
                    <span className="transition hover:underline hover:text-main-blue-active">
                      {url.shortUrl}
                    </span>
                  </Link>
                </td>
                <td className="p-3 text-start max-w-24">
                  <Link href={url.originalUrl}>
                    <span className="transition line-clamp-1 hover:underline hover:text-main-blue-active">
                      {url.originalUrl}
                    </span>
                  </Link>
                </td>
                <td className="p-3">{url.clicks}</td>
                <td className="p-3">
                  <span
                    className={`p-[5px] rounded-md ${url.status ? "bg-green-800/50" : "bg-red-800/50"}`}
                  >
                    {url.status ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="flex items-center justify-center p-3">
                  <Link href={`/dashboard/users/${url.user}`}>
                    <User userId={url.user} />
                  </Link>
                </td>
                <td>
                  <ChangeUrlStatusForm urlId={url.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={urlsAmount} />
      </Section>
    </main>
  );
};

export default DashboardUrl;

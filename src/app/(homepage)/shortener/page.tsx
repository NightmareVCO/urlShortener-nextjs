import UrlForm from "@components/forms/UrlForm";
import Section from "@components/section/Section";
import ListSkeleton from "@components/skeleton/ListSkeleton";
import Table from "@components/table/url/Table";
import { ShortenerInformation } from "@config/site";
import { getUrlByUserId } from "@data/url.data";
import { auth } from "@lib/auth/auth";
import { Suspense } from "react";

import { incrementPageVisits } from "@/lib/data/page.data";

export const metadata = {
  title: ShortenerInformation.name,
  description: ShortenerInformation.description,
};

const getUrl = async () => {
  const session = await auth();
  const user = session?.user;
  const reverse = true;
  if (user && user.id) return await getUrlByUserId(user.id, reverse);
};

const Shortener = async () => {
  incrementPageVisits();
  const urls = await getUrl();

  return (
    <main>
      <Section className="flex-col items-center justify-center gap-y-10">
        <h2 className="sr-only">All your shorten urls</h2>
        <UrlForm />
        <Suspense fallback={<ListSkeleton />}>
          <Table urls={urls} />
        </Suspense>
      </Section>
    </main>
  );
};

export default Shortener;

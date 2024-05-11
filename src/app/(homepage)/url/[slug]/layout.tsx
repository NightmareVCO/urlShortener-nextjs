import Section from "@components/section/Section";
import Square from "@components/square/Square";

import { getUrlByShortUrl } from "@/lib/data/url.data";

const UrlLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) => {
  const { slug } = params;
  const url = await getUrlByShortUrl(slug);

  return (
    <Section className="items-center justify-center">
      <Square>
        <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent">
          {url && url.status && <h2 className="text-5xl">Redirecting...</h2>}
          {!url.status && <h2 className="text-5xl">Url Not Active...</h2>}
          {!url && <h2 className="text-5xl">Not Found</h2>}
          {children}
        </span>
      </Square>
    </Section>
  );
};

export default UrlLayout;

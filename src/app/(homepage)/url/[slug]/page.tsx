import { incrementPageClicks } from "@data/page.data";
import { getUrlByShortUrl, updateUrl } from "@data/url.data";
import { to } from "@utils/to";
import { redirect } from "next/navigation";

const RedirectUrl = async ({ params }: any) => {
  const { slug } = params;

  const [url, error] = await to(getUrlByShortUrl(slug));
  if (error) return console.error("Error fetching URL");
  if (!url) return console.error("URL not found");
  if (!url.status) return console.error("URL is disabled");

  updateUrl(url._id, { clicks: url.clicks + 1 });
  incrementPageClicks();

  redirect(url.originalUrl);
};

export default RedirectUrl;

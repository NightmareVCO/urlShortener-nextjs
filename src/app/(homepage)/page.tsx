import Button from "@components/buttons/Button";
import MainIcon2 from "@components/icons/MainIcon2";
import Section from "@components/section/Section";
import AnimatedTitle from "@components/title/Title";
import { NavReferences } from "@config/site";
import { auth } from "@lib/auth/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

import { incrementPageVisits } from "@/lib/data/page.data";

const Home = async () => {
  incrementPageVisits();
  const session = await auth();
  const user = session?.user;
  if (user) {
    redirect("/shortener");
  }
  return (
    <main>
      <Section className="flex-col items-center justify-center xl:flex-row gap-x-36">
        <div className="flex flex-col items-center justify-center gap-y-6">
          <div>
            <AnimatedTitle>Shorten Your Loong Links :)</AnimatedTitle>
            <p>
              LinkLoom is an efficient and easy-to-use URL shortening service
              that streamlines your online experience.
            </p>
          </div>

          <div>
            <Link href={NavReferences.Shortener}>
              <Button
                shadow
                className="bg-main-blue border-main-blue active:bg-main-blue-active"
              >
                Start To Shorten Your Links Now!
              </Button>
            </Link>
          </div>
        </div>

        <div className="size-96 xl:size-1/3">
          <MainIcon2 />
        </div>
      </Section>
    </main>
  );
};

export default Home;

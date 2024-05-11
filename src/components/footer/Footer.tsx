import { NavReferences } from "@config/site";
import Link from "next/link";

import Credits from "./credtits/Credits";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="flex items-center justify-between p-4 rounded-lg bg-main-gray">
        <Link href={NavReferences.Home}>
          <h2 className="text-2xl font-extrabold sm:text-4xl md:text-3xl lg:text-5xl">
            LinkLoom
          </h2>
        </Link>
        <Credits className="hidden md:block" />
        <div className="flex items-center justify-start gap-x-3">
          <Link href={NavReferences.Home}>Home</Link>
        </div>
      </div>
      <Credits className="pt-3 md:hidden" />
    </footer>
  );
};

export default Footer;

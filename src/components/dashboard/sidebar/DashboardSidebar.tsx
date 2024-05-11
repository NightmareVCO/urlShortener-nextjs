import LogoutButton from "@components/buttons/LogoutButton";
import HomeIcon from "@components/icons/Dashboard/HomeIcon";
import User from "@components/user/User";
import { siteConfig } from "@config/site";
import { getSessionUser } from "@utils/getSessionUser";
import Link from "next/link";

// import Button from "@/components/buttons/Button";
import MenuLink from "./menuLink/menuLink";

const DashboardSidebar = async () => {
  const user = await getSessionUser();

  return (
    <aside className="w-full pt-5 bg-background-gray">
      <nav className="flex flex-col mx-6 gap-y-5">
        {user?.id && <User image userId={user?.id} />}
        <ul>
          {siteConfig.navMenuItems.map((cat) => (
            <li key={cat.title} className="flex flex-col gap-y-2">
              <span className="text-xs font-semibold text-start text-main-dark-white">
                {cat.title}
              </span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.label} />
              ))}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-y-2">
          <Link
            href="/"
            className="flex items-center w-full p-3 transition rounded-lg gap-x-3 hover:bg-main-blue/50"
          >
            <HomeIcon />
            Home
          </Link>
          <form>
            <LogoutButton />
          </form>
        </div>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;

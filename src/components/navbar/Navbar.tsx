import { logout } from "@actions/auth.action";
import Button from "@components/buttons/Button";
import LoginIcon from "@components/icons/LogInIcon";
import Logo from "@components/icons/Logo";
import { NavReferences } from "@config/site";
import { getSessionUser } from "@utils/getSessionUser";
import Link from "next/link";

const Navbar = async () => {
  const user = await getSessionUser();

  return (
    <nav className="flex items-center justify-between">
      <Link className="w-fit pl-4 md:pl-0" href={NavReferences.Home}>
        <Logo />
      </Link>
      <div className="flex gap-x-4">
        {!user && (
          <Link href={NavReferences.Login}>
            <Button className="bg-main-gray border-main-gray-border active:bg-main-gray-border">
              Login <LoginIcon />
            </Button>
          </Link>
        )}
        {!user && (
          <Link className="hidden md:inline" href={NavReferences.Register}>
            <Button
              shadow
              className="bg-main-blue border-main-blue active:bg-main-blue-active"
            >
              Register Now
            </Button>
          </Link>
        )}
        {user && user.isAdmin && (
          <Link href={NavReferences.Dashboard}>
            <Button
              shadow
              className="hidden sm:block bg-main-blue border-main-blue active:bg-main-blue-active"
            >
              Dashboard
            </Button>
          </Link>
        )}
        {user && (
          <Link href={NavReferences.Shortener}>
            <Button
              shadow
              className="bg-main-blue border-main-blue active:bg-main-blue-active"
            >
              Shortener
            </Button>
          </Link>
        )}
        {user && (
          <form action={logout}>
            <Button className="hidden sm:block bg-main-gray border-main-gray-border active:bg-main-gray-border">
              Logout
            </Button>
          </form>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

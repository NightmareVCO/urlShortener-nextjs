"use client";

import { logout } from "@actions/auth.action";
import LoginIcon from "@icons/LogInIcon";
import { redirect } from "next/navigation";

const handleLogout = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => {
  event.preventDefault();
  logout();
  redirect("/");
};

const LogoutButton = () => {
  return (
    <button
      className="flex items-center w-full p-3 transition rounded-lg gap-x-3 hover:bg-main-blue/50"
      onClick={handleLogout}
    >
      <LoginIcon />
      Logout
    </button>
  );
};

export default LogoutButton;

import { User as AuthUser } from "@auth/core/types";
import { auth } from "@lib/auth/auth";
import { redirect } from "next/navigation";

interface User extends AuthUser {
  username?: string;
}

const UserProfile = async () => {
  const session = await auth();
  if (!session) return redirect("/login");

  const user: User | undefined = session.user;
  if (!user) return redirect("/login");

  if (user.username) redirect(`/dashboard/users/${user.username}`);

  return <main>UserProfile</main>;
};

export default UserProfile;

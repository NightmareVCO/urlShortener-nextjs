import { auth } from "@lib/auth/auth";
import { redirect } from "next/navigation";

const UserProfile = async () => {
  const session = await auth();
  if (!session) return redirect("/login");

  const user = session.user;
  if (!user) return redirect("/login");

  redirect(`/dashboard/users/${user.username}`);

  return <main>UserProfile</main>;
};

export default UserProfile;

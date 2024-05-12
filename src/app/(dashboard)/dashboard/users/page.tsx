import Button from "@components/buttons/Button";
import Heading2 from "@components/dashboard/heading/Heading2";
import Pagination from "@components/dashboard/pagination/Pagination";
import Search from "@components/dashboard/search/Search";
import DeleteUserForm from "@components/forms/DeleteUserForm";
import Section from "@components/section/Section";
import User from "@components/user/User";
import { getUsers } from "@data/user.data";
import Link from "next/link";
const DashboardUsers = async ({ searchParams }: any) => {
  const q = searchParams?.q || "";
  const page = +searchParams?.page || 1;
  const { usersAmount, users } = await getUsers(q, page);

  return (
    <main className="flex mt-5 mb-5 gap-x-5 ">
      <Section className="flex-col w-full p-5 rounded-lg gap-y-5 bg-main-gray">
        <nav>
          <ul className="flex items-center justify-between gap-x-4>">
            <li>
              <Search placeholder="Search for an user..." />
            </li>
            <li>
              <Button className="bg-main-blue border-main-blue">
                <Link href="/dashboard/users/add">Add user</Link>
              </Button>
            </li>
          </ul>
        </nav>

        <Heading2>Latest Users</Heading2>
        <table className="w-full">
          <thead>
            <tr>
              <td className="p-3 font-bold text-start">User</td>
              <td className="p-3 font-bold text-start">Email</td>
              <td className="p-3 font-bold">Created at</td>
              <td className="p-3 font-bold">Rol</td>
              <td className="p-3 font-bold">Action</td>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id}>
                <td className="p-3">
                  <User image userId={user.id} />
                </td>
                <td className="p-3 text-start max-w-44">
                  <span>{user.email}</span>
                </td>

                <td className="p-3">{user.createdAt.toLocaleDateString()}</td>
                <td className="p-3">
                  <span
                    className={`p-[5px] rounded-md ${
                      user.isAdmin ? "bg-main-blue/50" : "bg-green-800/50"
                    }`}
                  >
                    {user.isAdmin ? "Admin" : "User"}
                  </span>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-x-3">
                    <Link
                      href={`/dashboard/users/${user.username}`}
                      className=""
                    >
                      <Button className="bg-main-blue border-main-blue">
                        View
                      </Button>
                    </Link>
                    {!user.isAdmin && <DeleteUserForm userId={user.id} />}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={usersAmount} />
      </Section>
    </main>
  );
};

export default DashboardUsers;

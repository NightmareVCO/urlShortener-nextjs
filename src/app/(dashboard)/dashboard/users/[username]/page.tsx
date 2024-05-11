import Button from "@components/buttons/Button";
import InputButton from "@components/buttons/InputButton";
import InputSelect from "@components/buttons/InputSelect";
import Section from "@components/section/Section";
import Square from "@components/square/Square";
import { getUserByUsername } from "@data/user.data";
import Image from "next/image";

const SingleUserPage = async ({ params }: any) => {
  const { username } = params;
  const user = await getUserByUsername(username);

  if (!user) {
    return (
      <Section className="items-center justify-center p-6">
        <Square>
          <h3 className="text-4xl font-extrabold">User not found</h3>
        </Square>
      </Section>
    );
  }

  return (
    <main className="flex mt-5 mb-5 gap-x-5">
      <Section className="items-center justify-center w-full">
        <div className="flex flex-row items-center w-full p-2 shadow-xl sm:p-14 md:p-20 rounded-3xl bg-background-gray">
          <div className="flex flex-col items-center justify-center flex-2 gap-y-6">
            <h3 className="text-4xl font-extrabold">{user.name}</h3>
            <Image
              src={`https://unavatar.io/${user.username}`}
              width={250}
              height={250}
              alt="User Pic"
              className="rounded-full"
            />
          </div>

          <form
            // action={formAction}
            className="flex flex-col items-center justify-center gap-y-5 flex-3"
          >
            <label htmlFor="name">
              <InputButton
                id="name"
                type="text"
                name="name"
                placeholder={user.name}
                shadow
                // onChange={handleInputChange}
              />
            </label>
            <label htmlFor="email">
              <InputButton
                id="email"
                type="email"
                name="email"
                placeholder={user.email}
                shadow
                // onChange={handleInputChange}
              />
            </label>
            <label htmlFor="password">
              <InputButton
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                shadow
                // onChange={handleInputChange}
              />
            </label>
            <label htmlFor="confirm-password">
              <InputButton
                id="confirm-password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                shadow
                // onChange={handleInputChange}
              />
            </label>
            <label htmlFor="role">
              <InputSelect
                id="role"
                type="text"
                name="role"
                admin={user.isAdmin}
                shadow
              />
            </label>
            <Button
              className="bg-main-blue border-main-blue active:bg-main-blue-active"
              shadow
              // onClick={handleClick}
            >
              Update user account
            </Button>

            {/* {isErrorVisible && state?.error && (
        <p className="text-red-500">{state.error}</p>
      )}
      {login && (
        <Link href="/login">
          <p className="text-main-blue hover:text-main-blue-active">
            Have an account? <strong>Log in</strong>
          </p>
        </Link>
      )} */}
          </form>
        </div>
      </Section>
    </main>
  );
};

export default SingleUserPage;

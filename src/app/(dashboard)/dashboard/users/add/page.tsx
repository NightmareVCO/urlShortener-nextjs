import RegisterForm from "@components/forms/RegisterForm";
import Section from "@components/section/Section";

const DashboardAddUser = () => {
  return (
    <main className="flex mt-5 mb-5 gap-x-5">
      <Section className="items-center justify-center w-full">
        <div className="flex flex-col items-center w-full p-2 shadow-xl sm:p-14 md:p-20 gap-y-8 rounded-3xl bg-background-gray">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-5xl font-extrabold">Create a new user</h2>
            <p>Create an account for a new user.</p>
          </div>
          <RegisterForm create />
        </div>
      </Section>
    </main>
  );
};

export default DashboardAddUser;

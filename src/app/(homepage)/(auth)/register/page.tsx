import RegisterForm from "@components/forms/RegisterForm";
import Section from "@components/section/Section";
import { RegisterInformation } from "@config/site";

export const metadata = {
  title: RegisterInformation.name,
  description: RegisterInformation.description,
};
const Register = () => {
  return (
    <main>
      <Section className="items-center justify-center">
        <div className="flex flex-col items-center p-2 shadow-xl sm:p-14 md:p-20 w-fit gap-y-8 rounded-3xl bg-background-gray-translucent">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-5xl font-extrabold">Register</h2>
            <p>Create an account to start shortening your links.</p>
          </div>
          <RegisterForm login />
        </div>
      </Section>
    </main>
  );
};

export default Register;

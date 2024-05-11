import LogInForm from "@components/forms/LogInForm";
import Section from "@components/section/Section";
import { LoginInformation } from "@config/site";

export const metadata = {
  title: LoginInformation.name,
  description: LoginInformation.description,
};
const Login = async () => {
  return (
    <main>
      <Section className="items-center justify-center">
        <div className="flex flex-col items-center p-2 shadow-xl sm:p-14 md:p-20 w-fit gap-y-8 rounded-3xl bg-background-gray-translucent">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-5xl font-extrabold">Log In</h2>
            <p>Log In into your account to keep shortening your links.</p>
          </div>
          <LogInForm />
        </div>
      </Section>
    </main>
  );
};

export default Login;

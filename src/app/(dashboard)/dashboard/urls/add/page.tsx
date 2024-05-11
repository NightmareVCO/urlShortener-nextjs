import UrlForm from "@components/forms/UrlForm";
import Section from "@components/section/Section";

const DashboardAddUrl = () => {
  return (
    <main className="flex mt-5 mb-5 gap-x-5">
      <Section className="items-center justify-center w-full">
        <div className="flex flex-col items-center w-full p-2 shadow-xl sm:p-14 md:p-20 gap-y-8 rounded-3xl bg-background-gray">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-5xl font-extrabold">
              Create a new shorten url
            </h2>
            <p>Shorten your url.</p>
          </div>
          <UrlForm admin />
        </div>
      </Section>
    </main>
  );
};

export default DashboardAddUrl;

import Button from "@components/buttons/Button";
import Section from "@components/section/Section";

const DashboardRightbar = () => {
  return (
    <Section className="fixed flex flex-col p-5 rounded-lg gap-y-5 bg-gradient-to-t from-30% from-main-gray to-main-gray-bright">
      <article className="relative">
        <div className="flex flex-col gap-y-4 text-start">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="text-sm font-bold ">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-sm font-medium text-main-dark-white">
            Takes 5 minutes to learn
          </span>
          <p className="text-sm text-pretty text-main-dark-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            similique vel excepturi placeat labore sunt, sint voluptates
            corrupti fuga exercitationem.
          </p>
          <Button
            className=" bg-main-blue border-main-blue active:bg-main-blue-active"
            shadow
          >
            Read Now!
          </Button>
        </div>
      </article>
    </Section>
  );
};

export default DashboardRightbar;

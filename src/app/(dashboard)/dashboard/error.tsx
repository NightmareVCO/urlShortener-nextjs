"use client";

import Section from "@components/section/Section";

const Error = () => {
  return (
    <Section className="items-center justify-center">
      <div className="flex flex-col items-center justify-center min-w-[450px] min-h-[450px] p-1 shadow-xl sm:p-14 md:p-20 w-fit gap-y-8 rounded-3xl bg-background-gray-translucent">
        <h2 className="text-3xl font-bold">Error</h2>
      </div>
    </Section>
  );
};

export default Error;

"use client";

import Button from "@components/buttons/Button";
import UrlButton from "@components/buttons/UrlButton";

import { useUrl } from "./hook/useUrl";

type UrlFormProperties = {
  admin?: boolean;
};

const UrlForm = ({ admin }: UrlFormProperties) => {
  const { state, url, setUrl, handleSubmit } = useUrl({ admin });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-4/5 gap-3 p-1 lg:flex-row"
    >
      <div className="flex items-center w-full md:w-2/3 p-3.5 border-2 border-solid rounded-full gap-x-2 bg-main-gray border-main-gray-border">
        <UrlButton
          value={url}
          onChange={(event_: any) => setUrl(event_.target.value)}
        />
      </div>
      <div>
        <Button
          className="bg-main-blue border-main-blue active:bg-main-blue-active"
          shadow
        >
          Shorten Now!
        </Button>
      </div>

      {state?.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
};

export default UrlForm;

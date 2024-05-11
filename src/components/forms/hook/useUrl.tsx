import { createShortUrl } from "@actions/url.action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";

type useUrlProperties = {
  admin?: boolean;
};

export function useUrl({ admin }: useUrlProperties) {
  const [state, formAction] = useFormState(createShortUrl, undefined);
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (url.length > 15) await formAction({ originalUrl: url });

    setUrl(""); // clear the input field

    if (admin) {
      router.push("/dashboard/urls");
    }
  };
  return { state, formAction, url, setUrl, handleSubmit };
}

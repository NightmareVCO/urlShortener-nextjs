"use client";

import Button from "@components/buttons/Button";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { useChangeUrlStatus } from "./hook/useChangeUrlStatus";

type ChangeUrlStatusFormProperties = {
  urlId: string;
};

const ChangeUrlStatusForm = ({ urlId }: ChangeUrlStatusFormProperties) => {
  const { router, state, formAction } = useChangeUrlStatus();

  useEffect(() => {
    if (state?.success) {
      toast.success("Successfully Status Changed!");
      router.refresh();
    }
  }, [router, state, state?.success]);

  return (
    <div>
      <Toaster />
      <form action={formAction}>
        <input
          type="text"
          name="urlId"
          value={urlId}
          className="sr-only"
          onChange={() => ""}
        />
        <Button className="bg-red-800 border-red-800">Change Status</Button>
      </form>
    </div>
  );
};

export default ChangeUrlStatusForm;

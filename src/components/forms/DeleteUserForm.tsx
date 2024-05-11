"use client";

import Button from "@components/buttons/Button";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { useDeleteUser } from "./hook/useDeleteUser";

type DeleteUserFormProperties = {
  userId: string;
};

const DeleteUserForm = ({ userId }: DeleteUserFormProperties) => {
  const { router, state, formAction } = useDeleteUser();

  useEffect(() => {
    if (state?.success) {
      toast.success("Successfully Deleted!");
      router.refresh();
    }
  }, [router, state, state?.success]);

  return (
    <div>
      <Toaster />
      <form action={formAction}>
        <input
          type="text"
          name="userId"
          value={userId}
          className="sr-only"
          onChange={() => ""}
        />
        <Button className="bg-red-800 border-red-800">Delete</Button>
      </form>
    </div>
  );
};

export default DeleteUserForm;

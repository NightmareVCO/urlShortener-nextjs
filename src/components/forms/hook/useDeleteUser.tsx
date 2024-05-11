import { deleteUserForm } from "@actions/user.action";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
export function useDeleteUser() {
  const router = useRouter();

  const [state, formAction] = useFormState(deleteUserForm, undefined);

  return {
    router,
    state,
    formAction,
  };
}

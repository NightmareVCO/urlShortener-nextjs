import { changeUrlStatus } from "@actions/url.action";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";

export function useChangeUrlStatus() {
  const router = useRouter();

  const [state, formAction] = useFormState(changeUrlStatus, undefined);

  return {
    router,
    state,
    formAction,
  };
}

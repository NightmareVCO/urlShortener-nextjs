import { register } from "@actions/auth.action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";

export function useRegister() {
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  const handleInputChange = () => {
    if (isErrorVisible) setIsErrorVisible(false);
  };

  const handleClick = () => {
    setIsErrorVisible(true);
  };

  return {
    state,
    formAction,
    isErrorVisible,
    handleInputChange,
    router,
    handleClick,
  };
}

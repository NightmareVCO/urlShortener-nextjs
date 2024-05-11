import { useState } from "react";
import { useFormState } from "react-dom";

import { login } from "@/lib/actions/auth.action";

export function useLogin() {
  const [state, formAction] = useFormState(login, undefined);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const handleInputChange = () => {
    if (isErrorVisible) setIsErrorVisible(false);
  };

  const handleClick = () => {
    setIsErrorVisible(true);
  };

  return { state, formAction, isErrorVisible, handleInputChange, handleClick };
}

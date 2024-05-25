import { login } from "@actions/auth.action";
import { useState } from "react";
import { useFormState } from "react-dom";

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

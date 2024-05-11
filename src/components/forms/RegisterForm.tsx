"use client";

import Button from "@components/buttons/Button";
import InputButton from "@components/buttons/InputButton";
import Link from "next/link";
import { useEffect } from "react";

import { useRegister } from "./hook/useRegister";

type RegisterFormProperties = {
  login?: boolean;
  create?: boolean;
};

const RegisterForm = ({ login, create }: RegisterFormProperties) => {
  const {
    formAction,
    state,
    isErrorVisible,
    handleInputChange,
    router,
    handleClick,
  } = useRegister();

  useEffect(() => {
    const routerPush = () => {
      if (state?.success && !create) {
        router.push("/login");
      } else if (state?.success && create) {
        router.push("/dashboard/users");
      }
    };

    routerPush();
  }, [state?.success, router, create]);

  return (
    <form
      action={formAction}
      className="flex flex-col items-center justify-center gap-y-5"
    >
      <label htmlFor="name">
        <InputButton
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          shadow
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="email">
        <InputButton
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          shadow
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="password">
        <InputButton
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          shadow
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="confirm-password">
        <InputButton
          id="confirm-password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          shadow
          onChange={handleInputChange}
        />
      </label>
      <Button
        className="bg-main-blue border-main-blue active:bg-main-blue-active"
        shadow
        onClick={handleClick}
      >
        Create your account now
      </Button>
      {isErrorVisible && state?.error && (
        <p className="text-red-500">{state.error}</p>
      )}
      {login && (
        <Link href="/login">
          <p className="text-main-blue hover:text-main-blue-active">
            Have an account? <strong>Log in</strong>
          </p>
        </Link>
      )}
    </form>
  );
};

export default RegisterForm;

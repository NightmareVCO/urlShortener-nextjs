"use client";

import Button from "@components/buttons/Button";
import InputButton from "@components/buttons/InputButton";
import Toogle from "@components/buttons/Toogle";
import Link from "next/link";

import { useLogin } from "./hook/useLogin";

const LogInForm = () => {
  const { formAction, state, isErrorVisible, handleInputChange, handleClick } =
    useLogin();

  return (
    <form
      action={formAction}
      className="flex flex-col items-center justify-center gap-y-5"
    >
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

      <Toogle>Remember Me</Toogle>
      <Button
        className="bg-main-blue border-main-blue active:bg-main-blue-active"
        shadow
        onClick={handleClick}
      >
        Login into your account
      </Button>
      <Link href="/register">
        <p className="text-main-blue hover:text-main-blue-active">
          {"Don't have an account?"} <strong>Register</strong>
        </p>
      </Link>
      {isErrorVisible && state?.error && (
        <p className="text-red-500">{state.error}</p>
      )}
    </form>
  );
};

export default LogInForm;

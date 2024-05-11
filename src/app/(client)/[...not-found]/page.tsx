"use client";

import "@components/globals.css";

import Section from "@components/section/Section";
import Square from "@components/square/Square";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const goBack = (event: any) => {
    event.preventDefault();
    router.back();
  };

  return (
    <main className="p-6 pt-12 sm:p-8 md:p-10 lg:p-12 xl:p-14">
      <Section className="items-center justify-center h-full">
        <Square>
          <h2 className="text-3xl font-bold">{"Page not found"}</h2>
          <Link href="/">
            <p className="text-2xl text-main-blue hover:text-main-blue-active">
              <strong>Go Home</strong>
            </p>
          </Link>
          <a
            href="/"
            onClick={goBack}
            className="text-2xl text-main-blue hover:text-main-blue-active"
          >
            <strong>Go Back</strong>
          </a>
        </Square>
      </Section>
    </main>
  );
}

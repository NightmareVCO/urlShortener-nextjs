import "@components/globals.css";

import Background from "@components/background/Background";
import Banner from "@components/banner/Banner";
import Footer from "@components/footer/Footer";
import Navbar from "@components/navbar/Navbar";
import { HomeInformation } from "@config/site";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: HomeInformation.name,
  description: HomeInformation.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14"}>
        <Banner />
        <Background />
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

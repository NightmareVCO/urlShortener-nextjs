import "@components/globals.css";

import Background from "@components/background/Background";
// import Banner from "@components/banner/Banner";
import DashboardNavbar from "@components/dashboard/navbar/DashboardNavbar";
import DashboardSidebar from "@components/dashboard/sidebar/DashboardSidebar";
import Footer from "@components/footer/Footer";
import Section from "@components/section/Section";
// import Footer from "@components/footer/Footer";
// import Navbar from "@components/navbar/Navbar";
import { DashboardInformation } from "@config/site";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: DashboardInformation.name,
  description: DashboardInformation.description,
  icons: {
    icon: "/logoLL.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <Section className="items-start justify-center ">
          <Section className="sticky top-0 flex-1 min-h-screen ">
            <DashboardSidebar />
          </Section>

          <Section className="sticky top-0 flex-col p-5 flex-4">
            <DashboardNavbar />
            {children}
            <Footer />
          </Section>
        </Section>
      </body>
    </html>
  );
}

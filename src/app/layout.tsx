import type { Metadata } from "next";
import Provider from "../shared/providers/Provider";
import { poppins } from "@/config/fonts";
import Navbar from "@/components/ui/Navbar/Index";
import Footer from "@/components/ui/Footer/Index";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loopy",
  description: "The Official Loopy ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        <Navbar />
        <Provider>
          { children }
        </Provider>
        <Footer />
      </body>
    </html>
  );
}

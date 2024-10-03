import type { Metadata } from "next";
import Provider from "../shared/providers/Provider";
import { poppins } from "@/config/fonts";
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
        <Provider>
          { children }
        </Provider>
      </body>
    </html>
  );
}

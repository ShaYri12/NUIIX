import type { Metadata } from "next";
import "./globals.css";
import CookieConsentPopup from "./components/CookieConsentPopup";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <CookieConsentPopup />
        {children}
      </body>
    </html>
  );
}

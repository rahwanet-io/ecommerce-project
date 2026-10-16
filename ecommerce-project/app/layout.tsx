
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trendy Closet",
  description: "Online clothing store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

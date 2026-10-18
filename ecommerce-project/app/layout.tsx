import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habesha Wears",
  description: "Shop traditional Habesha clothing and accessories.",
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
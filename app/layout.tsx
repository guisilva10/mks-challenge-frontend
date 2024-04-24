import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "MKS Challenge Front-End",
  description: "Sistema de loja virtual",
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

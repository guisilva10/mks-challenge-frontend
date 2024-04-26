

import type { Metadata } from "next";
import "./globals.scss";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/services/queryClient";
import CartContextProvider from "@/contexts/cart.context";

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
      <body>
          <CartContextProvider>
            {children}
          </CartContextProvider>
        </body>
    </html>
  );
}

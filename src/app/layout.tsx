import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IKIGAI Protocol",
  description: "DeFi protocol built on Berachain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="env-script" strategy="beforeInteractive">
          {`window.ENV = {
            NEXT_PUBLIC_IKIGAI_VAULT_FACTORY_ADDRESS: "${process.env.NEXT_PUBLIC_IKIGAI_VAULT_FACTORY_ADDRESS}",
            NEXT_PUBLIC_IKIGAI_STRATEGY_FACTORY_ADDRESS: "${process.env.NEXT_PUBLIC_IKIGAI_STRATEGY_FACTORY_ADDRESS}"
          }`}
        </Script>
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

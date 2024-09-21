import type { Metadata } from "next";
import { Poppins, Source_Code_Pro } from "next/font/google";
import { Providers } from "./providers";

import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-source-code-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "my.money",
  description: "Take control of your finances",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${sourceCodePro.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Portfolio HMG",
  description: "Héctor Matcovich González",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}


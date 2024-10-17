import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/config/fonts";

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
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}


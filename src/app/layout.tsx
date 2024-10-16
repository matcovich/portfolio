import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/config/fonts";
import {getMessages} from 'next-intl/server';
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Portfolio HMG",
  description: "Héctor Matcovich González",
};

// type Props = {
//   children: React.ReactNode;
//   params: {
//     locale:"en" | "es";
//   };
// };



export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={montserrat.className}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

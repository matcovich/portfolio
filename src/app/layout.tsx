
import "./globals.css";
import { roboto } from "@/config/fonts";
import { getLocale } from 'next-intl/server';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}


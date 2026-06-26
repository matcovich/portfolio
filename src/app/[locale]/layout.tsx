import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://hmatcovich.vercel.app';

export async function generateMetadata({
    params: { locale }
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Meta' });

    return {
        metadataBase: new URL(BASE_URL),
        title: t('title'),
        description: t('description'),
        openGraph: {
            title: t('title'),
            description: t('description'),
            url: `${BASE_URL}/${locale}`,
            siteName: 'Portfolio HMG',
            type: 'website',
            locale: locale === 'es' ? 'es_CL' : 'en_US',
            images: [
                {
                    url: '/img/heroimg.png',
                    width: 800,
                    height: 600,
                    alt: 'Héctor Matcovich González — Portfolio',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: t('title'),
            description: t('description'),
            images: ['/img/heroimg.png'],
        },
        alternates: {
            canonical: `${BASE_URL}/${locale}`,
            languages: {
                'es': `${BASE_URL}/es`,
                'en': `${BASE_URL}/en`,
            },
        },
    };
}

export function generateStaticParams() {
    return [{ locale: 'es' }, { locale: 'en' }];
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <NextUIProvider>
                <NextThemesProvider attribute="class" defaultTheme="dark">
                    {children}
                </NextThemesProvider>
            </NextUIProvider>
        </NextIntlClientProvider>
    );
}

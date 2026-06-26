'use client';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const t = useTranslations('Errors');
    const router = useRouter();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-800 px-6 text-center">
            <span className="text-8xl font-extralight text-purple-400 dark:text-purple-300 mb-4">!</span>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 dark:text-gray-100">
                {t('errorTitle')}
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md mb-10">
                {t('errorDescription')}
            </p>
            <div className="flex gap-4">
                <button
                    onClick={reset}
                    className="px-8 py-2 rounded-md border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors"
                >
                    {t('errorRetry')}
                </button>
                <button
                    onClick={() => router.push('/')}
                    className="px-8 py-2 rounded-md border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
                >
                    {t('errorBack')}
                </button>
            </div>
        </div>
    );
}

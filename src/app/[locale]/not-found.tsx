import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function NotFound() {
    const t = await getTranslations('Errors');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-800 px-6 text-center">
            <span className="text-[120px] leading-none font-extralight text-purple-400 dark:text-purple-300">
                404
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold mt-2 mb-4 dark:text-gray-100">
                {t('notFoundTitle')}
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md mb-10">
                {t('notFoundDescription')}
            </p>
            <Link
                href="/"
                className="px-10 py-2 rounded-md border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors"
            >
                {t('notFoundBack')}
            </Link>
        </div>
    );
}

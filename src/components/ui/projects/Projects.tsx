'use client'
import { useState } from "react"
import dynamic from "next/dynamic"
import { Element } from "react-scroll"
import { DiCss3, DiReact } from "react-icons/di"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiHtml5, SiTypescript, SiPrisma, SiPostgresql, SiRedux } from "react-icons/si"
import { FaBootstrap, FaJs } from "react-icons/fa"
import { FaAngular, FaSass } from "react-icons/fa6"
import { useTranslations } from 'next-intl';
import clsx from "clsx"

const CardWorks  = dynamic(() => import('./cards/Card-works').then(m => ({ default: m.CardWorks })),   { ssr: false });
const CardWorks2 = dynamic(() => import('./cards/Card-works2').then(m => ({ default: m.CardWorks2 })), { ssr: false });
const CardWorks3 = dynamic(() => import('./cards/Card-works3').then(m => ({ default: m.CardWorks3 })), { ssr: false });
const CardWorks4 = dynamic(() => import('./cards/Card-works4').then(m => ({ default: m.CardWorks4 })), { ssr: false });
const CardWorks5 = dynamic(() => import('./cards/Card-works5').then(m => ({ default: m.CardWorks5 })), { ssr: false });
const CardWorks6 = dynamic(() => import('./cards/Card-works6').then(m => ({ default: m.CardWorks6 })), { ssr: false });

type Tag = 'html' | 'css' | 'js' | 'react' | 'typescript' | 'next' | 'tailwind' | 'bootstrap' | 'angular' | 'sass' | 'prisma' | 'postgresql' | 'redux';

const cardTags: Tag[][] = [
    ['html', 'css', 'js', 'react', 'typescript', 'next', 'tailwind'],                          // CardWorks  — Quinzio
    ['html', 'css', 'js', 'react', 'typescript', 'next', 'tailwind'],                          // CardWorks2 — COYC
    ['html', 'css', 'js', 'react', 'typescript', 'tailwind', 'bootstrap'],                     // CardWorks3 — IBM/Itaú
    ['html', 'css', 'js', 'angular', 'sass'],                                                   // CardWorks4 — Santander
    ['react', 'typescript', 'next', 'tailwind', 'prisma', 'postgresql'],                       // CardWorks5 — Mantos Verde
    ['react', 'typescript', 'next', 'tailwind', 'redux'],                                      // CardWorks6 — Blue-Express
];

const filters: { tag: Tag; icon: React.ReactNode; color: string }[] = [
    { tag: 'html',       icon: <SiHtml5 size={28} />,          color: 'hover:text-[#e34c26]' },
    { tag: 'css',        icon: <DiCss3 size={34} />,           color: 'hover:text-[#264de4]' },
    { tag: 'js',         icon: <FaJs size={28} />,             color: 'hover:text-[#f0db4f]' },
    { tag: 'react',      icon: <DiReact size={34} />,          color: 'hover:text-[#7cc5d9]' },
    { tag: 'typescript', icon: <SiTypescript size={28} />,     color: 'hover:text-[#007acc]' },
    { tag: 'next',       icon: <RiNextjsFill size={34} />,     color: 'hover:text-gray-200' },
    { tag: 'tailwind',   icon: <RiTailwindCssFill size={28} />, color: 'hover:text-[#5454ec]' },
    { tag: 'bootstrap',  icon: <FaBootstrap size={28} />,      color: 'hover:text-[#0275d8]' },
    { tag: 'angular',    icon: <FaAngular size={28} />,        color: 'hover:text-[#dd0031]' },
    { tag: 'sass',       icon: <FaSass size={28} />,           color: 'hover:text-[#cc6699]' },
    { tag: 'prisma',     icon: <SiPrisma size={28} />,         color: 'hover:text-[#2d3748]' },
    { tag: 'postgresql', icon: <SiPostgresql size={28} />,     color: 'hover:text-[#336791]' },
    { tag: 'redux',      icon: <SiRedux size={28} />,          color: 'hover:text-[#764abc]' },
];

export const Projects = () => {
    const t = useTranslations('Projects');
    const [activeFilter, setActiveFilter] = useState<Tag | null>(null);

    const isVisible = (index: number) =>
        activeFilter === null || cardTags[index].includes(activeFilter);

    const toggleFilter = (tag: Tag) =>
        setActiveFilter(prev => prev === tag ? null : tag);

    return (
        <Element name="projects">
            <div className="flex flex-col gap-4 justify-start items-center fade-in relative h-[auto] py-20 border-y-2 border-gray-200 dark:border-slate-600 dark:bg-slate-800">
                <div className="w-4/6">
                    <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
                    <p className="text-lg">{t('description')}</p>
                </div>

                {/* Filter bar */}
                <div className="w-4/6 mt-8">
                    <div className="flex flex-wrap gap-4 items-center">
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{t('filterLabel')}</p>
                        {activeFilter && (
                            <button
                                onClick={() => setActiveFilter(null)}
                                className="text-xs px-3 py-1 rounded-full border border-gray-400 text-gray-400 hover:border-gray-200 hover:text-gray-200 transition-colors"
                            >
                                {t('clearFilter')}
                            </button>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-3">
                        {filters.map(({ tag, icon, color }) => (
                            <button
                                key={tag}
                                onClick={() => toggleFilter(tag)}
                                title={tag}
                                className={clsx(
                                    'transition-colors',
                                    color,
                                    activeFilter === tag
                                        ? 'opacity-100 scale-110'
                                        : activeFilter !== null
                                            ? 'opacity-30'
                                            : 'text-[#777777]'
                                )}
                            >
                                {icon}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-16 mt-8 px-4">
                    <div className={clsx('transition-all duration-300', !isVisible(0) && 'hidden')}><CardWorks /></div>
                    <div className={clsx('transition-all duration-300', !isVisible(1) && 'hidden')}><CardWorks2 /></div>
                    <div className={clsx('transition-all duration-300', !isVisible(2) && 'hidden')}><CardWorks3 /></div>
                    <div className={clsx('transition-all duration-300', !isVisible(3) && 'hidden')}><CardWorks4 /></div>
                    <div className={clsx('transition-all duration-300', !isVisible(4) && 'hidden')}><CardWorks5 /></div>
                    <div className={clsx('transition-all duration-300', !isVisible(5) && 'hidden')}><CardWorks6 /></div>
                </div>
            </div>
        </Element>
    )
}


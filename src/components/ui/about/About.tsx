'use client'
import { Element } from "react-scroll"
import { useTranslations } from 'next-intl';

export const About = () => {
    const t = useTranslations('About');
    return (
        <Element name="about">
            <div className=" bg-green-50 dark:bg-cyan-950 h-[100vh] lg:px-32">
                <div className="container mx-auto flex justify-end items-center  fade-in h-full">
                    <div className="lg:w-4/6 px-8 lg:px-0 ">
                        <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
                        <p className="text-lg text-pretty">
                            {t('p1')}
                        </p>
                        <p className="text-lg text-pretty">
                            {t('p2')}
                        </p>
                    </div>
                </div>
            </div>
        </Element>
    )
}

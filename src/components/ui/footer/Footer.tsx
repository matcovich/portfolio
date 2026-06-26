'use client'
import { FaHeart } from 'react-icons/fa'
import { FaRegCopyright } from 'react-icons/fa6'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiReact } from 'react-icons/si'
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    return (
        <footer className="bg-[#1d0d3c] dark:bg-[#140c24] text-white z-[2]">
            <div className={'container mx-auto px-4 pt-6'}>
                <div className="w-full pb-1">
                    <p className="flex justify-center items-center gap-3 font-light text-xs lg:text-sm text-white/60 mb-2">
                        {t('madeWith')}
                        <span className="flex items-center gap-2">
                            <SiNextdotjs title="Next.js" className="text-base" />
                            <SiReact title="React" className="text-base text-[#61dafb]" />
                            <SiTypescript title="TypeScript" className="text-base text-[#3178c6]" />
                            <SiTailwindcss title="Tailwind CSS" className="text-base text-[#38bdf8]" />
                        </span>
                    </p>
                </div>
                <div className="w-full pb-3">
                    <p className="flex justify-center items-center p-2 gap-2 font-light text-xs lg:text-sm">
                        <FaRegCopyright /> 2026 &nbsp; {t('credits')} <FaHeart className='text-red-500 animate-pulse' /> &nbsp; por HMG
                    </p>
                </div>
            </div>
        </footer>
    )
}

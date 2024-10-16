'use client'
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { SelectLenguage } from '../selectlenguage/SelectLenguage';
import { useTranslations } from 'next-intl';
import { FaArrowUp } from 'react-icons/fa6';

import { useUIStore } from "@/store/ui/ui-store";
import { GiHamburgerMenu } from 'react-icons/gi';


export const TopMenu = () => {

    const t = useTranslations("Menu");

    const [isScrolled, setIsScrolled] = useState(false);
    const openSideMenu = useUIStore((state) => state.openSideMenu);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* menu dark */}
            <nav className={` fixed top-0 w-full h-[94px] z-[6] transition duration-300 ease-in-out ${isScrolled ? 'bg-black bg-opacity-65' : ''}`}>
                <div className="container mx-auto px-4 py-6 flex justify-center md:justify-between items-center w-full h-[94px]">
                    {/**Logo */}
                    <button
                    className="absolute right-4 top-5 "
                    onClick={openSideMenu}
                    >
                        <GiHamburgerMenu size={40}  className={isScrolled ? 'text-white' : 'text-black'} />
                    </button>
                    <div className="">
                        <Link to="inicio" spy={true} smooth={true} offset={0} duration={500}>
                            <span className={`text-3xl font-extralight ${isScrolled ? 'text-white' : 'text-black'}`}>HMG</span>
                        </Link>
                    </div>

                    {/**Menu */}

                    <div className={`hidden font-normal gap-3 lg:gap-9 text-red-500 lg:text-lg   justify-center items-center`}>
                        <Link to="inicio" spy={true} smooth={true} offset={0} duration={500}
                            className={`hover:text-orange-200 cursor-pointer`}
                        >
                            <span>{t('home')}</span>
                        </Link>
                        <Link to="nosotros" spy={true} smooth={true} offset={-94} duration={500}
                            className={`hover:text-orange-200 cursor-pointer`}
                        >
                            <span>{t('about')}</span>
                        </Link>
                        <Link to="equipo" spy={true} smooth={true} offset={-94} duration={500}
                            className={`hover:text-orange-200 cursor-pointer`}
                        >
                            <span>{t('team')}</span>
                        </Link>

                        <Link to="servicios" spy={true} smooth={true} offset={4} duration={500}
                            className={`hover:text-orange-200 cursor-pointer`}
                        >
                            <span>{t('services')}</span>
                        </Link>

                        <Link to="contacto" spy={true} smooth={true} offset={-94} duration={500}
                            className={`hover:text-orange-200 cursor-pointer`}
                        >
                            <span>{t('contact')}</span>
                        </Link>

                        <SelectLenguage />
                    </div>

                </div>

            </nav>

            {/* top 0  */}
        <div className={`z-[9] md:hidden fixed bottom-8 right-8  rounded-full flex items-center justify-center opacity-35  ${isScrolled ? 'h-8 w-8 bg-[#EF7C35] text-white' : ''}`}>
            <Link to="inicio" spy={true} smooth={true} offset={0} duration={500} className="cursor-pointer">
                <FaArrowUp size={16} className={`  ${isScrolled ? ' text-white' : 'text-[#ef7c3500] '} `} />
            </Link>
        </div>

        </>
    )
}
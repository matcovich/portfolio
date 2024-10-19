'use client'
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa6';

import { useUIStore } from "@/store/ui/ui-store";
import { GiHamburgerMenu } from 'react-icons/gi';
import Switcher from '../switcher/Switcher';


export const TopMenu = () => {

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
                    className="absolute right-4 top-7 "
                    onClick={openSideMenu}
                    >
                        <GiHamburgerMenu size={40}  className={isScrolled ? 'dark:text-gray-200 ' : 'text-gray-400 '} />
                    </button>
                    <div className="">
                        <Link to="inicio" spy={true} smooth={true} offset={0} duration={500}>
                            <span className={`text-[38px] font-extralight ${isScrolled ? 'text-white' : 'text-black dark:text-gray-200'}`}>&lt; </span> 
                            <span className={`text-3xl font-extralight tracking-[-4px]  ${isScrolled ? 'text-white' : 'text-black dark:text-gray-200'}`}>HMG</span>
                            <span className={`text-[38px] font-extralight ${isScrolled ? 'text-white' : 'text-black dark:text-gray-200'}`}> /&gt;</span>
                        </Link>
                    </div>

                    <Switcher/>

                </div>

            </nav>

            {/* top 0  */}
        <div className={`z-[9] md:hidden fixed bottom-8 right-8  rounded-full flex items-center justify-center opacity-35  ${isScrolled ? 'h-8 w-8 bg-[#333] text-white' : ''}`}>
            <Link to="inicio" spy={true} smooth={true} offset={0} duration={500} className="cursor-pointer">
                <FaArrowUp size={16} className={`  ${isScrolled ? ' text-white' : 'text-[#ef7c3500] '} `} />
            </Link>
        </div>

        </>
    )
}
'use client'
import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";
import { IoCloseOutline } from "react-icons/io5"

import { Link } from 'react-scroll';

import { usePathname } from "next/navigation"
export const Sidebar = () => {

    const router = usePathname();
    const isSideMenuopen = useUIStore((state) => state.isSideMenuOpen);
    const closeMenu = useUIStore((state) => state.closeSideMenu);

    return (
        <div>
            {/* background black */}
            {
                isSideMenuopen && (
                    <div
                    className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-70  transform transition-all duration-300"/>
                )
            }
            {/* Blur */}
            {
                isSideMenuopen && (
                    <div
                    onClick={() => closeMenu()}
                    className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm   transform transition-all duration-300"/>
                )
            }

            {/* Sidemenu */}
            <nav
            // todo: efecto de slide
            className={
                clsx(
                    "fixed top-0 left-0 w-[100%]  h-screen z-20 transform transition-all duration-0",
                    {
                        "-translate-x-full": !isSideMenuopen,
                    }
                )
            }
            >
                <IoCloseOutline
                    size={50}
                    className="absolute top-4 right-4 text-white cursor-pointer"
                    onClick={() => closeMenu()}
                />
                <div className="flex flex-col justify-center items-center h-full">

                <div className={`font-[100] gap-12 -mt-36 text-white flex flex-col items-center text-5xl`}>
                <Link to="inicio" spy={true} smooth={true} offset={0} duration={500}
                            className={`hover:text-orange-200 cursor-pointer`}
                            onClick={() => closeMenu()}
                        >
                            <span>Inicio</span>
                        </Link>
                        <Link to="about" spy={true} smooth={true} offset={-94} duration={500}
                            className={`hover:text-orange-200 cursor-pointer`}
                            onClick={() => closeMenu()}
                        >
                            <span>Sobre mi</span>
                        </Link>
                        <Link to="projects" spy={true} smooth={true} offset={-94} duration={500}
                            className={`hover:text-orange-200 cursor-pointer`}
                            onClick={() => closeMenu()}
                        >
                            <span>Proyectos</span>
                        </Link>

                        <Link to="contacto" spy={true} smooth={true} offset={-94} duration={500}
                            className={`hover:text-orange-200 cursor-pointer`}
                            onClick={() => closeMenu()}
                        >
                            <span>Contacto</span>
                        </Link>
                </div>
                </div>
            </nav>
        </div>
    )
}

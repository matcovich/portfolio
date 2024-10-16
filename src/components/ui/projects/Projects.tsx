'use client'
import { Element } from "react-scroll"
import { DiCss3, DiReact } from "react-icons/di"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiHtml5, SiLaravel, SiPhp, SiTypescript } from "react-icons/si"
import { FaBootstrap, FaJs, FaPhp, FaVuejs } from "react-icons/fa"
import { CardWorks } from "./cards/Card-works"
import { CardWorks2 } from "./cards/Card-works2"
import { CardWorks3 } from "./cards/Card-works3"

export const Projects = () => {
    return (
        <Element name="projects">
            <div className="flex flex-col gap-4 justify-start items-center fade-in relative h-[auto] py-20 border-y-2 border-gray-200">
                <div className="w-4/6 ">
                    <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
                    <p className="text-lg">
                    A continuación, encontrarás algunos de mis proyectos más relevantes, en los que he trabajado recientemente. Cada uno de ellos refleja mi enfoque en la creación de experiencias digitales optimizadas y funcionales, utilizando tecnologías modernas como React, Next.js y Tailwind CSS. Estos trabajos demuestran mi capacidad para resolver desafíos técnicos y colaborar en equipos multidisciplinarios para desarrollar soluciones escalables y atractivas.
                    </p>
                </div>

                <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 px-4">
                    <div className="hidden w-full  col-start-1 col-end-3">
                        <div className=" flex gap-6 items-center ">
                            <p className="text-lg font-semibold">filtro:</p>
                            <button className="text-[#777777] hover:text-[#e34c26]"><SiHtml5 size={32} /></button>
                            <button className="text-[#777777] hover:text-[#264de4]"><DiCss3 size={42} /></button>
                            <button className="text-[#777777] hover:text-[#f0db4f]"><FaJs size={36} /></button>
                            <button className="text-[#777777] hover:text-[#7cc5d9]"><DiReact size={42} /></button>
                            <button className="text-[#777777] hover:text-[#007acc]"><SiTypescript  size={32} /></button>
                            <button className="text-[#777777] hover:text-[#333222]"><RiNextjsFill size={42} /></button>
                            <button className="text-[#777777] hover:text-[#5454ec]"><RiTailwindCssFill size={36} /></button>
                            <button className="text-[#777777] hover:text-[#0275d8]"><FaBootstrap size={36} /></button>
                            <button className="text-[#777777] hover:text-[#fb503b]"><SiLaravel size={36} /></button>
                            <button className="text-[#777777] hover:text-[#8993be]"><SiPhp size={56} /></button>
                            <button className="text-[#777777] hover:text-[#42b883]"><FaVuejs size={36} /></button>
                        </div>
                    </div>
                    <CardWorks />
                    <CardWorks2/>
                    <CardWorks3/>
                </div>
            </div>
        </Element>
    )
}

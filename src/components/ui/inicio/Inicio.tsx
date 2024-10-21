'use client'
import React from 'react'
import Image from 'next/image'

import { Link } from 'react-scroll';
import { Element } from 'react-scroll';
import { Button } from '@nextui-org/button';

export const Inicio = () => {
    return (
        <Element name="inicio">
            <div className="h-[100vh]  z-0 bg-white dark:bg-slate-600">
                <div className='container mx-auto w-full  flex flex-col-reverse justify-center items-center  lg:flex-row    lg:justify-around h-full'>
                    <div className="[clip-path:circle(69%_at_81%_120%)]
                    absolute top-0 w-full h-full bg-[#5341c811] dark:bg-[#c841891d]  z-[2]"></div>
                    <div className="[clip-path:circle(69%_at_1%_160%)]
                    absolute top-0 w-full h-full bg-[#41c8bd11] dark:bg-[#4541c830]  z-[2]"></div>

                    <div className="w-full h-[auto] md:h-[calc(60vh)] lg:w-1/2 lg:h-auto flex justify-center lg:justify-end items-end lg:items-center">
                        <Image src="/img/heroimg.png" width={500} height={500} alt="hero image" className="w-full md:w-[400px] lg:w-[500px]" />
                    </div>
                    <div className="flex flex-col lg:w-1/2 justify-center items-center md:mt-24 lg:mt-0  ">
                        <h1
                        className={`
                            text-[28px] leading-[46px] mb-2 text-center lg:text-[62px] lg:leading-[74px] font-normal px-6
                            dark:text-gray-200
                            `}
                        >
                            Héctor Matcovich González
                        </h1>
                        <h2 className="text-[28px] leading-[26px] mb-2 text-center lg:text-[48px] lg:leading-[52px] font-extralight px-6">
                        Desarrollador Frontend y Diseñador Web
                        </h2>

                        <div className="hidden md:flex flex-col md:flex-row gap-8 lg:mt-16 z-[3]">

                            <Button color='secondary' radius="sm" variant="bordered" className='px-12 cursor-pointer dark:text-purple-300 dark:border-purple-300 p-0'>
                                <Link to="projects" spy={true} smooth={true} offset={-94} duration={500} className={`cursor-pointer px-12 py-2 rounded-md`}>Portafolio</Link>
                            </Button>

                            <Button color='primary' radius="sm" variant="bordered" className='px-12 cursor-pointer dark:text-blue-300 dark:border-blue-300 p-0'>
                                <Link  to="contacto" spy={true} smooth={true} offset={-80} duration={500} className='cursor-pointer px-12 py-2 rounded-md'>Hablemos</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

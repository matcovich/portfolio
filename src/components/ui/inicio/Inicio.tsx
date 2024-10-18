'use client'
import React from 'react'
import Image from 'next/image'

import { Link } from 'react-scroll';
import { Element } from 'react-scroll';
import { Button } from '@nextui-org/button';

export const Inicio = () => {
    return (
        <Element name="inicio">
            <div  className=" h-[calc(100vh-94px)] w-full md:h-[calc(100vh)] inset-0  flex flex-col-reverse  lg:flex-row justify-center  items-center lg:justify-around z-0 bg-white 
            dark:bg-slate-600">
                <div className="[clip-path:circle(69%_at_81%_120%)]
                absolute top-0 w-full h-full bg-[#5341c811] dark:bg-[#c841891d]  z-[2]"></div>
                <div className="[clip-path:circle(69%_at_1%_160%)]
                absolute top-0 w-full h-full bg-[#41c8bd11] dark:bg-[#4541c830]  z-[2]"></div>
                <div className="w-full h-full lg:w-1/2 lg:h-auto flex justify-center lg:justify-end items-end lg:items-center">
                    <Image src="/img/heroimg.png" width={500} height={500} alt="hero image" className="w-full" />
                </div>
                <div className="flex flex-col justify-center items-center md:mt-24 lg:mt-0 ">
                    <h1
                    className={`
                        text-[28px] leading-[46px] mb-2 text-center lg:text-[62px] lg:leading-[74px] font-normal px-6
                        dark:text-gray-200
                        `}
                    >
                        Héctor Matcovich González
                    </h1>
                    <h2 className="text-[28px] leading-[46px] mb-2 text-center lg:text-[48px] lg:leading-[52px] font-extralight px-6">Diseñador Web</h2>
                    <div className="hidden md:flex flex-col md:flex-row gap-8 lg:mt-16">
                        <Link  to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
                            <Button color='secondary' radius="sm" variant="bordered" className='px-12 cursor-pointer dark:text-purple-400'>Portafolio</Button>
                        </Link>

                        <Link  to="contacto" spy={true} smooth={true} offset={-80} duration={500} className='cursor-pointer'>
                            <Button color='primary' radius="sm" variant="bordered" className='px-12 cursor-pointer dark:text-blue-400'>Hablemos</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Element>
    )
}

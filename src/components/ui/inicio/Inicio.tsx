'use client'
import React from 'react'
import Image from 'next/image'

import { Link } from 'react-scroll';
import { secundaryFont } from '@/config/fonts';
import { Element } from 'react-scroll';
import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/button';

export const Inicio = () => {
    const t = useTranslations("HomePage");
    return (
        <Element name="inicio">
            <div  className=" h-[calc(100vh-94px)] w-full md:h-[calc(100vh)] inset-0  flex flex-col md:flex-row   items-center justify-around z-0 ">
                <div className="[clip-path:circle(69%_at_81%_120%)] 
                absolute top-0 w-full h-full bg-[#5341c811]  z-[2]"></div>
                <div className="[clip-path:circle(69%_at_1%_160%)] 
                absolute top-0 w-full h-full bg-[#41c8bd11]  z-[2]"></div>
                <div className="">
                <Image src="/img/heroimg.png" width={500} height={500} alt="hero image" className="w-full" />
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <h1
                    className={`
                        text-[28px] leading-[46px] mb-2 text-center lg:text-[62px] lg:leading-[74px] font-normal px-6`}
                    >
                        {t("title")}
                    </h1>
                    <h2 className="text-[28px] leading-[46px] mb-2 text-center lg:text-[48px] lg:leading-[52px] font-extralight px-6">{t("subtitle")}</h2>
                    <div className="hidden md:flex flex-col md:flex-row gap-8 mt-16">
                        <Link  to="servicios" spy={true} smooth={true} offset={0} duration={500}>
                            <Button color='secondary' radius="sm" variant="bordered" className='px-12'>{t("button")}</Button>
                        </Link>

                        <Link  to="contacto" spy={true} smooth={true} offset={-80} duration={500}>
                            <Button color='primary' radius="sm" variant="bordered" className='px-12'>{t("button2")}</Button>
                        </Link>
                    </div>
                </div>
        </div>
        </Element>
    )
}

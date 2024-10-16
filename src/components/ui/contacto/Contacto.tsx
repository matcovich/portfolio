'use client'
// import Image from 'next/image'
import React from 'react'
import { secundaryFont } from '@/config/fonts';
import { Element } from 'react-scroll';
import { useTranslations } from 'next-intl';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { ContactForm } from './ContactForm';


export const Contacto = () => {
    const t = useTranslations("Contacto");
    return (
        <Element name="contacto">
            <div  className=" bg-contacto h-[740px] text-white   flex flex-col items-center justify-start z-0 py-24">
                
                    <h2 className={`${secundaryFont.className}
                    md:hidden text-[32px]   lg:text-[42px] lg:mb-2 text-center  font-normal mb-2 -mt-12`}
                    >
                        {t("title")} <br/>
                    </h2>
                    <p className="md:hidden min-h-[52px] font-light px-4 mb-6">Envianos tu consulta y nos pondremos en contacto con uds a la brevedad.</p>

                <div className="container mx-auto lg:w-4/6 px-4">
                    <div className="flex gap-8">
                        <div className="hidden w-3/12 md:flex flex-col gap-8 ">
                            <h2 className={`${secundaryFont.className}
                                text-[42px] mb-2  font-normal`}
                            >
                                {t("title")} <br/>
                            </h2>
                            <p className="font-light text-2xl">{t("description")}</p>
                            <div className="flex gap-3">
                                <FaMapMarkerAlt size={24} className="" />
                                <p className="">{t("direccionSocio2")}</p>
                            </div>

                            <div className="flex gap-3">
                                <MdMail size={24} className="" />
                                <p className="">{t("correoSocio2")}</p>
                            </div>
                        </div>
                        <div className='md:w-9/12 w-full z-[5]' >
                            <div className="w-full h-full bg-white rounded-lg flex flex-col items-center justify-center shadow-lg" >
                                    <ContactForm />
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </Element>
    )
}

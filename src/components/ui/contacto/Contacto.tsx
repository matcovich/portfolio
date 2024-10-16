'use client'
// import Image from 'next/image'
import React from 'react'
import { secundaryFont } from '@/config/fonts';
import { Element } from 'react-scroll';
import { useTranslations } from 'next-intl';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { ContactForm } from './ContactForm';
import { Divider } from '@nextui-org/divider';


export const Contacto = () => {
    const t = useTranslations("Contacto");
    return (
        <Element name="contacto">
            <div className="bg-contacto"></div>
            <div  className="h-[740px] text-gray-800   flex flex-col items-center justify-center z-0 py-24">
                <div className="w-4/6">
                    <h3 className="w-full text-6xl text-gray-400 uppercase first-letter:text-7xl font-extrabold"  >Contacto</h3>
                    <div className='h-[3px] my-3 w-full bg-gray-300'></div>
                    <div className='flex justify-center  items-center gap-4'>
                        <div className='w-2/6 flex justify-between h-20'>
                            <p className='text-2xl font-bold text-gray-400'>E-MAIL</p>
                            <a  href='mailto:matcovich@gmail.com' className='text-[18px] text-gray-400 cursor-pointer'>matcovich@gmail.com</a>
                        </div>
                        <div className='w-4/6 flex justify-center gap-12 h-20'>
                            <p className='text-2xl font-bold text-gray-400'>REDES SOCIALES</p>
                            <div className='flex flex-col gap-2'>
                            <a target='_blank' href='https://github.com/matcovich' className='text-[18px] text-gray-400 cursor-pointer'>github</a>
                            <a target='_blank' href='https://www.linkedin.com/in/hector-matcovich-3a9967221/' className='text-[18px] text-gray-400 cursor-pointer'>linkedin</a>
                            <a target='_blank' href='/CV-Hectormatocvich.pdf' className='text-[18px] text-gray-400 cursor-pointer'>cv</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Element>
    )
}

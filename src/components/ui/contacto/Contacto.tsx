'use client'
import React from 'react'
import { Element } from 'react-scroll';


export const Contacto = () => {
    return (
        <Element name="contacto">
            <div className="bg-contacto"></div>
            <div  className="h-[740px] text-gray-800   flex flex-col items-center justify-center z-0 py-24 dark:bg-[#253146]">
                <div className="w-5/6 xl:w-4/6">
                    <h3 className="w-full text-4xl  lg:text-6xl text-gray-400 uppercase lg:first-letter:text-7xl font-extrabold"  >Contacto</h3>
                    <div className='h-[3px] my-3 w-full bg-gray-300'></div>
                    <div className='flex flex-col lg:flex-row justify-center  items-center gap-4'>
                        <div className='w-full lg:w-2/6 flex flex-col lg:flex-row lg:justify-between h-20 mt-8 lg:mt-0'>
                            <p className='text-xl lg:text-2xl font-bold text-gray-400'>E-MAIL</p>
                            <a  href='mailto:matcovich@gmail.com' className='text-[18px] text-gray-400 cursor-pointer'>matcovich@gmail.com</a>
                        </div>
                        <div className='w-full lg:w-4/6 flex  flex-col lg:flex-row justify-start  lg:justify-center lg:gap-12 lg:h-20'>
                            <p className='text-xl lg:text-2xl font-bold text-gray-400'>REDES SOCIALES</p>
                            <div className='flex flex-col gap-2 lg:gap-1'>
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

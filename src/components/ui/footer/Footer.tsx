
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { BiHeart, BiHeartCircle } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { FaInstagram, FaLinkedin, FaRegCopyright } from 'react-icons/fa6'
import { MdMail, MdPlace } from 'react-icons/md'

export default function Footer() {
    const t = useTranslations("Footer")
    return (
        <footer className="bg-[#1d0d3c] text-white z-[2]">
            <div  className={'container mx-auto px-4 pt-6'}>
                <div className="w-full pb-3">
                    <p className="flex justify-center items-center p-2 gap-2 font-light text-xs lg:text-sm"> <FaRegCopyright /> 2024   creado con <FaHeart className='text-red-500 animate-pulse' />  por HMG </p>
                </div>
            </div>
        </footer>
    )
}

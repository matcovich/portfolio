
import { FaHeart } from 'react-icons/fa'
import { FaRegCopyright } from 'react-icons/fa6'

export default function Footer() {
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

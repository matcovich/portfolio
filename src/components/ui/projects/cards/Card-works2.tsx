import React from 'react'

import { Card, CardBody } from "@nextui-org/card"
import { Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"

import { DiCss3, DiReact } from "react-icons/di"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiHtml5, SiLaravel, SiPhp, SiTypescript } from "react-icons/si"
import { FaBootstrap, FaJs, FaPhp, FaVuejs } from "react-icons/fa"

import { Pagination, Scrollbar, A11y, Navigation } from 'swiper/modules';
import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
export const CardWorks2 = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
        <Card
            isBlurred
            className="border-none  w-full"
            shadow="md"
            >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-8 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                        <Image
                        alt="portfolio"
                        className="object-cover rounded-none object-top"
                        height={275}
                        src="/img/coyc.png"
                        width="100%"
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8 justify-center items-start  h-full">
                        <div className=" flex flex-col gap-1 shrink-0">
                            <h3 className="text-large font-bold">COYC - Landing Page</h3>
                            <p className="text-small text-foreground/80 text-gray-400">Proyecto freelance </p>
                        </div>
                        <div className="flex flex-col items-start    h-full">
                            <p className="text-[14px] text-foreground/90 mt-2 text-balance ">
                            Proyecto freelance para COYC, una empresa de abogados boutique que requiria una landing page multi lenguaje.
                            </p>
                            <p className='text-[14px] text-foreground/90 mt-2 text-balance' >Desarrollé una landing page moderna y atractiva para COYC, con el objetivo de presentar la misión y visión de la organización de manera clara y concisa. La página cuenta con una estructura minimalista y fácil de navegar, con un enfoque en la experiencia del usuario y la conversión de leads.</p>
                        </div>

                        <div className=" flex w-full items-center justify-between mt-8 shrink-0">
                            <Button variant="light"  onPress={onOpen}>ver más</Button>
                            <div className="flex gap-2">
                            <span className=" text-[#e34c26]"><SiHtml5 size={18} /></span>
                            <span className=" text-[#264de4]"><DiCss3 size={18} /></span>
                            <span className=" text-[#f0db4f]"><FaJs size={18} /></span>
                            <span className=" text-[#7cc5d9]"><DiReact size={18} /></span>
                            <span className=" text-[#007acc]"><SiTypescript  size={18} /></span>
                            <span className=" text-[#333222] dark:bg-slate-50 rounded-full"><RiNextjsFill size={18} /></span>
                            <span className=" text-[#5454ec]"><RiTailwindCssFill size={18} /></span>
                            <span className="hidden  text-[#0275d8]"><FaBootstrap size={18} /></span>
                            <span className="hidden  text-[#fb503b]"><SiLaravel size={18} /></span>
                            <span className="hidden  text-[#8993be]"><SiPhp size={18} /></span>
                            <span className="hidden  text-[#42b883]"><FaVuejs size={18} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='3xl' backdrop='blur' placement="top-center" scrollBehavior="outside">
            <ModalContent className="dark:bg-slate-800">
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Quinzio-LPC</ModalHeader>
                <ModalBody className="text-pretty">

                    <div>
                        <Swiper
                            modules={[Pagination,Navigation, Scrollbar, A11y]}
                            spaceBetween={10}
                            navigation
                            slidesPerView={1}
                            className='mySwiper my-4 h-[410px] w-full'
                            pagination={{
                            clickable: true,
                            }}
                        >
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={375} src="/img/coyc.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={375} src="/img/coycb.jpg" width="100%" /></SwiperSlide>
                        </Swiper>
                    </div>

                    <p>Proyecto freelance para COYC, una firma de abogados boutique que necesitaba una landing page multi-lenguaje en inglés y chino. El objetivo principal fue presentar la misión y visión de la firma de manera clara y accesible para una audiencia global.</p>
                    <p>Desarrollé una landing page moderna y minimalista utilizando Next.js y React, enfocándome en una navegación intuitiva y una experiencia de usuario fluida. La página está optimizada para cargar rápido y adaptarse a dispositivos móviles, lo que asegura una presentación efectiva de los servicios legales de COYC.</p>
                    <p>La implementación multi-lenguaje con i18n permite a los usuarios cambiar de idioma facilmente, lo que refuerza la accesibilidad y el alcance internacional de la firma. El diseño limpio y funcional facilita la conversión de leads y destaca la propuesta de valor de COYC en el mercado legal.</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                    </Button>
                    <Button color="primary" variant="light" onPress={onClose}>
                        <a target="_blank" href="https://coyc.vercel.app/es" >
                        Ver sitio
                        </a>
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
        </>
    )
}

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
export const CardWorks = () => {
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
                        src="/img/quinzio.jpg"
                        width="100%"
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8 justify-center items-start  h-full">
                        <div className=" flex flex-col gap-1 shrink-0">
                            <h3 className="text-large font-bold">Quinzio-LPC</h3>
                            <p className="text-small text-foreground/80 text-gray-400">Proyecto freelance </p>
                        </div>
                        <div className="flex flex-col items-start    h-full">

                            <p className="text-[14px] text-foreground/90 mt-2 text-balance ">
                            Proyecto freelance para Quinzio LPC, una firma de abogados con una reconocida trayectoria en la industria de los recursos naturales. Desarrollé el sitio web con un enfoque en la experiencia de usuario, asegurando una navegación fluida y accesible en dispositivos móviles y de escritorio, para reflejar la visión integral y estratégica de la firma.
                            </p>
                        </div>

                        <div className=" flex w-full items-center justify-between mt-8 shrink-0 z-[99999]">
                            <Button variant="light"  onPress={onOpen}>ver más</Button>
                            <div className="flex gap-2">
                            <span className=" text-[#e34c26]"><SiHtml5 size={18} /></span>
                            <span className=" text-[#264de4]"><DiCss3 size={18} /></span>
                            <span className=" text-[#f0db4f]"><FaJs size={18} /></span>
                            <span className=" text-[#7cc5d9]"><DiReact size={18} /></span>
                            <span className=" text-[#007acc]"><SiTypescript  size={18} /></span>
                            <span className=" text-[#333222]"><RiNextjsFill size={18} /></span>
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
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='xl' backdrop='blur' placement="top-center" scrollBehavior="outside">
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Quinzio-LPC</ModalHeader>
                <ModalBody className="text-pretty">

                    <div>
                        <Swiper
                            modules={[Pagination,Navigation, Scrollbar, A11y]}
                            spaceBetween={2}
                            navigation
                            slidesPerView={1}
                            className='mySwiper my-4 h-[310px] w-full'
                            pagination={{
                            clickable: true,
                            }}
                        >
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={275} src="/img/quinzio.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={275} src="/img/quinzio.jpg" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={275} src="/img/equipoquinzio.jpg" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={275} src="/img/areasqinzio.jpg" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={275} src="/img/ventajasquinzio.jpg" width="100%" /></SwiperSlide>
                        </Swiper>
                    </div>

                    <p>
                    Proyecto freelance para Quinzio LPC, una firma de abogados con una reconocida trayectoria en la industria de los recursos naturales. Desarrollé el sitio web con un enfoque en la experiencia de usuario, asegurando una navegación fluida y accesible en dispositivos móviles y de escritorio, para reflejar la visión integral y estratégica de la firma.
                    </p>
                    <p>
                    El desarrollo incluyó la implementación de un diseño moderno y optimizado utilizando React y Tailwind CSS, así como técnicas de optimización de rendimiento para mejorar la velocidad de carga. El resultado es una plataforma escalable que fortalece la presencia digital de Quinzio LPC, facilitando el acceso a sus servicios legales y recursos.
                    </p>
                    <p>
                    El sitio web destaca la experiencia de la firma y su papel como socio legal para afrontar los desafíos y oportunidades en el sector de los recursos naturales, ofreciendo una experiencia alineada con los valores y la trayectoria de la empresa.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                    </Button>
                    <Button color="primary" variant="light" onPress={onClose}>
                        <a target="_blank" href="https://quinziolpc.cl/" >
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

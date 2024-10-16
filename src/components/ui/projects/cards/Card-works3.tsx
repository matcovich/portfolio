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
export const CardWorks3 = () => {
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
                        src="/img/itau.jpg"
                        width="100%"
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8 justify-center items-start  h-full">
                        <div className=" flex flex-col gap-1 shrink-0">
                            <h3 className="text-large font-bold">Desarrollador Frontend</h3>
                            <p className="text-small text-foreground/80 text-gray-400">IBM - Itaú </p>
                        </div>
                        <div className="flex flex-col items-start    h-full">
                            <p className="text-[14px] text-foreground/90 mt-2 text-balance ">
                            Trabajo en IBM - Itaú como desarrollador frontend, maquetando páginas para el uso en Portal y creando aplicaciones web para la banca con React.js y TypeScript. Optimización de rendimiento, integración de APIs RESTful y diseño modular con Tailwind CSS. </p>
                        </div>

                        <div className=" flex w-full items-center justify-between mt-8 shrink-0">
                            <Button variant="light"  onPress={onOpen}>ver más</Button>
                            <div className="flex gap-2">
                            <span className=" text-[#e34c26]"><SiHtml5 size={18} /></span>
                            <span className=" text-[#264de4]"><DiCss3 size={18} /></span>
                            <span className=" text-[#f0db4f]"><FaJs size={18} /></span>
                            <span className=" text-[#7cc5d9]"><DiReact size={18} /></span>
                            <span className=" text-[#007acc]"><SiTypescript  size={18} /></span>
                            <span className="hidden text-[#333222]"><RiNextjsFill size={18} /></span>
                            <span className=" text-[#5454ec]"><RiTailwindCssFill size={18} /></span>
                            <span className="  text-[#0275d8]"><FaBootstrap size={18} /></span>
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
                <ModalHeader className="flex flex-col gap-1">Desarrollador Frontend en IBM - Itaú</ModalHeader>
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
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={275} src="/img/itaua.jpg" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={275} src="/img/iatub.jpg" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={275} src="/img/itauc.jpg" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={275} src="/img/itaud.jpg" width="100%" /></SwiperSlide>
                        </Swiper>
                    </div>

                    <p>Desarrollador Frontend en IBM - Itaú, donde participé en el desarrollo de aplicaciones web para la banca utilizando React.js y TypeScript. Implementé interfaces de usuario optimizadas siguiendo principios de Atomic Design y BEM, asegurando la modularidad y reutilización del código.</p>
                    <p>Trabajé en la optimización del rendimiento de la aplicación, utilizando tecnologías como Vite y Nginx para mejorar los tiempos de carga y la eficiencia. Colaboré estrechamente con equipos backend para integrar APIs RESTful y servicios de AWS, garantizando la escalabilidad de las soluciones. Además, utilicé Tailwind CSS para un diseño ágil y la personalización de componentes, participando en la integración continua con Git para asegurar la calidad del código en un entorno ágil.</p>
                    <p>Durante este tiempo, también realicé cursos en IBM, incluyendo temas relacionados con la seguridad de software, y participé en una capacitación intensiva de 3 semanas con evangelizadores de Modyo, liderada por Carlos Solis, para profundizar en el uso de la plataforma y sus mejores prácticas.</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
        </>
    )
}

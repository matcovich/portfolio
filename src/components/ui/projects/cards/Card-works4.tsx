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
import { FaAngular, FaSass } from 'react-icons/fa6'
export const CardWorks4 = () => {
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
                        src="/img/santander.png"
                        width="100%"
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8 justify-center items-start  h-full">
                        <div className=" flex flex-col gap-1 shrink-0">
                            <h3 className="text-large font-bold">Desarrollador Frontend</h3>
                            <p className="text-small text-foreground/80 text-gray-400">Qintess - Santander </p>
                        </div>
                        <div className="flex flex-col items-start    h-full">
                            <p className="text-[14px] text-foreground/90 mt-2 text-balance ">
                            Implementación de interfaces con Angular y Sass, colaborando en la creación de componentes reutilizables para aplicaciones bancarias críticas.
                            </p>
                        </div>

                        <div className=" flex w-full items-center justify-between mt-8 shrink-0">
                            <Button variant="light"  onPress={onOpen}>ver más</Button>
                            <div className="flex gap-2">
                            <span className=" text-[#e34c26]"><SiHtml5 size={18} /></span>
                            <span className=" text-[#264de4]"><DiCss3 size={18} /></span>
                            <span className=" text-[#f0db4f]"><FaJs size={18} /></span>
                            <span className="text-[#dd0031]"><FaAngular size={18} /></span>
                            <span className="text-[#cc6699]"><FaSass size={18} /></span>

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
                <ModalHeader className="flex flex-col gap-1">Desarrollador Frontend en Qintess - Santander</ModalHeader>
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

                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={375} src="/img/santnder1.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={375} src="/img/santnder2.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={375} src="/img/santnder3.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={375} src="/img/santnder4.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={375} src="/img/santnder5.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="portfolio" className="object-cover rounded-none object-top" height={375} src="/img/santnder6.png" width="100%" /></SwiperSlide>
                        </Swiper>
                    </div>
                    <p>En Qintess - Santander, me desempeñé como Desarrollador Frontend, donde trabajé en la implementación de interfaces utilizando Angular y Sass. Participé activamente en la creación de componentes reutilizables y en la optimización de interfaces para aplicaciones bancarias críticas, aplicando principios de diseño atómico.</p>
                    <p>Colaboré estrechamente con los equipos backend para asegurar una integración fluida de los servicios, utilizando Git para la integración continua y el versionado de código. También fui responsable de diseño y prototipar interfaces UI/UX utilizando herramientas como Sketch.</p>
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

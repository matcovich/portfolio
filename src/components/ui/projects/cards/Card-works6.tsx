'use client'
import React from 'react'
import { useTranslations } from 'next-intl';
import { Card, CardBody } from "@nextui-org/card"
import { Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript, SiRedux } from "react-icons/si"
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

export const CardWorks6 = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const t = useTranslations('Cards');
    return (
        <>
        <Card isBlurred className="border-none w-full" shadow="md">
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-8 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                        <Image
                            alt="Blue-Express Planner"
                            className="object-cover rounded-none object-top"
                            height={275}
                            src="/img/blue-planner-1.png"
                            width="100%"
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8 justify-center items-start h-full">
                        <div className="flex flex-col gap-1 shrink-0">
                            <h3 className="text-large font-bold">Planner — Sistema Operacional</h3>
                            <p className="text-small text-foreground/80 text-gray-400">Desarrollador Frontend — Blue-Express</p>
                        </div>
                        <div className="flex flex-col items-start h-full">
                            <p className="text-[14px] text-foreground/90 mt-2 text-balance">
                                Plataforma operacional de alta complejidad para la gestión de reservas y asignaciones en tiempo real. Tablas de gran volumen, mapas interactivos con Google Maps y Deck.gl, gráficos de datos y filtros inteligentes.
                            </p>
                        </div>

                        <div className="flex w-full items-center justify-between mt-8 shrink-0">
                            <Button variant="light" onPress={onOpen}>{t('seeMore')}</Button>
                            <div className="flex gap-2 items-center">
                                <span className="text-[#333222] dark:bg-slate-50 rounded-full"><RiNextjsFill size={18} /></span>
                                <span className="text-[#007acc]"><SiTypescript size={16} /></span>
                                <span className="text-[#5454ec]"><RiTailwindCssFill size={18} /></span>
                                <span className="text-[#764abc]"><SiRedux size={18} /></span>
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
                <ModalHeader className="flex flex-col gap-1">Planner — Blue-Express</ModalHeader>
                <ModalBody className="text-pretty">
                    <div>
                        <Swiper
                            modules={[Pagination, Navigation, Scrollbar, A11y]}
                            spaceBetween={10}
                            navigation
                            slidesPerView={1}
                            className='mySwiper my-4 h-[410px] w-full'
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide><Image alt="Blue-Express Planner vista 1" className="object-cover rounded-none object-top" height={375} src="/img/blue-planner-1.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="Blue-Express Planner vista 2" className="object-cover rounded-none object-top" height={375} src="/img/blue-planner-2.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="Blue-Express Planner vista 3" className="object-cover rounded-none object-top" height={375} src="/img/blue-planner-3.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="Blue-Express Planner vista 4" className="object-cover rounded-none object-top" height={375} src="/img/blue-planner-4.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="Blue-Express Planner vista 5" className="object-cover rounded-none object-top" height={375} src="/img/blue-planner-5.png" width="100%" /></SwiperSlide>
                        </Swiper>
                    </div>
                    <p>
                        Desarrollo de la plataforma operacional Planner para Blue-Express, empresa líder de logística en Chile. Sistema de alta complejidad centrado en la gestión de reservas y asignaciones en tiempo real, diseñado para manejar grandes volúmenes de datos de manera eficiente.
                    </p>
                    <p>
                        Uno de los módulos principales es la vista de asignación de reservas, con una tabla de alto rendimiento que muestra las operaciones del día con ordenamiento dinámico de columnas, filtros inteligentes multicriteria y acciones en lote. Se implementó optimización de carga progresiva para garantizar fluidez con miles de registros simultáneos.
                    </p>
                    <p>
                        La plataforma integra mapas interactivos con Google Maps API y Deck.gl para visualización geoespacial de rutas y zonas de cobertura, dashboards con gráficos de datos operacionales, y gestión de estado compleja con Redux y Zustand según el módulo. Stack: Next.js, TypeScript, Tailwind CSS, Redux, Zustand, Google Maps, Deck.gl.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                        {t('close')}
                    </Button>
                    <Button color="primary" variant="light" onPress={onClose}>
                        <a target="_blank" href="https://planner.blue.cl/">
                            {t('visitSite')}
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

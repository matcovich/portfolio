'use client'
import React from 'react'
import { useTranslations } from 'next-intl';
import { Card, CardBody } from "@nextui-org/card"
import { Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript, SiPrisma, SiPostgresql, SiSupabase, SiZod, SiCloudinary } from "react-icons/si"
import { SiNextdotjs } from "react-icons/si"
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

export const CardWorks5 = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const t = useTranslations('Cards');
    return (
        <>
        <Card isBlurred className="border-none w-full" shadow="md">
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-8 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                        <Image
                            alt="Mantos Verde RCR Support"
                            className="object-cover rounded-none object-top"
                            height={275}
                            src="/img/sheqMV1.png"
                            width="100%"
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8 justify-center items-start h-full">
                        <div className="flex flex-col gap-1 shrink-0">
                            <h3 className="text-large font-bold">RCR Support — Sistema de Gestión</h3>
                            <p className="text-small text-foreground/80 text-gray-400">Proyecto freelance — Mantos Verde</p>
                        </div>
                        <div className="flex flex-col items-start h-full">
                            <p className="text-[14px] text-foreground/90 mt-2 text-balance">
                                Sistema de gestión de acceso y credenciales para la empresa minera Mantos Verde. Plataforma full-stack con control de roles, gestión de contratistas, solicitudes de acceso y generación de credenciales QR.
                            </p>
                        </div>

                        <div className="flex w-full items-center justify-between mt-8 shrink-0">
                            <Button variant="light" onPress={onOpen}>{t('seeMore')}</Button>
                            <div className="flex gap-2 items-center">
                                <span className="text-[#333222] dark:bg-slate-50 rounded-full"><RiNextjsFill size={18} /></span>
                                <span className="text-[#007acc]"><SiTypescript size={16} /></span>
                                <span className="text-[#5454ec]"><RiTailwindCssFill size={18} /></span>
                                <span className="text-[#2d3748]"><SiPrisma size={16} /></span>
                                <span className="text-[#336791]"><SiPostgresql size={16} /></span>
                                <span className="text-[#3ecf8e]"><SiSupabase size={16} /></span>
                                <span className="text-[#f4473c]"><SiZod size={16} /></span>
                                <span className="text-[#3448c5]"><SiCloudinary size={16} /></span>
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
                <ModalHeader className="flex flex-col gap-1">RCR Support — Sistema de Gestión de Acceso para Mantos Verde</ModalHeader>
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
                            <SwiperSlide><Image alt="RCR Support vista 1" className="object-cover rounded-none object-top" height={375} src="/img/sheqMV1.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="RCR Support vista 2" className="object-cover rounded-none object-top" height={375} src="/img/sheqMV2.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="RCR Support vista 3" className="object-cover rounded-none object-top" height={375} src="/img/sheqMV3.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="RCR Support vista 4" className="object-cover rounded-none object-top" height={375} src="/img/sheqMV4.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="RCR Support vista 5" className="object-cover rounded-none object-top" height={375} src="/img/sheqMV5.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="RCR Support vista 6" className="object-cover rounded-none object-top" height={375} src="/img/sheqMV6.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="RCR Support vista 7" className="object-cover rounded-none object-top" height={375} src="/img/sheqMV7.png" width="100%" /></SwiperSlide>
                            <SwiperSlide><Image alt="RCR Support vista 8" className="object-cover rounded-none object-top" height={375} src="/img/sheqMV8.png" width="100%" /></SwiperSlide>
                        </Swiper>
                    </div>
                    <p>
                        Sistema full-stack desarrollado para Mantos Verde, empresa minera chilena, con el objetivo de digitalizar y centralizar la gestión de acceso a faenas. La plataforma permite administrar contratistas, usuarios y sus credenciales de acceso de forma segura y escalable.
                    </p>
                    <p>
                        Incluye un sistema de control de acceso por roles (admin, SHEQ, adminContractor, user, credential), gestión de solicitudes de acceso con flujo de aprobación, generación de credenciales con código QR, gestión documental con validaciones configurables por actividad, y notificaciones por correo.
                    </p>
                    <p>
                        Construido con Next.js 14 App Router, TypeScript, Tailwind CSS, Prisma ORM con PostgreSQL (Supabase), NextAuth v5, Cloudinary para archivos, Zod para validaciones y Zustand para estado global.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                        {t('close')}
                    </Button>
                    <Button color="primary" variant="light" onPress={onClose}>
                        <a target="_blank" href="https://dashboard-rcr.vercel.app/">
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

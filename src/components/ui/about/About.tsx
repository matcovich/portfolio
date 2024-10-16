'use client'
import { Element } from "react-scroll"

export const About = () => {
    return (
        <Element name="about">
            <div className="flex justify-end items-center fade-in relative bg-green-50 h-[100vh] px-32">
                <div className="w-4/6 ">
                    <h2 className="text-3xl font-bold mb-4">Acerca de mi</h2>
                    <p className="text-lg text-pretty">
                    Soy un desarrollador frontend con más de 12 años de experiencia en la creación de interfaces web y móviles optimizadas. Me especializo en el uso de tecnologías modernas como React, JavaScript, TypeScript, HTML5 y CSS3, y tengo experiencia en la implementación de soluciones escalables que mejoran la experiencia del usuario. También he trabajado en proyectos donde he utilizado herramientas de desarrollo como Git, Node.js, ESLint y Jest para garantizar la calidad del código.
                    </p>
                    <p className="text-lg text-pretty">
                    A lo largo de mi carrera, he trabajado en entornos ágiles, participando activamente en la gestión de tareas con herramientas como Jira, y colaborando estrechamente con diseñadores para el desarrollo de interfaces utilizando herramientas como Figma. Además, estoy constantemente aprendiendo nuevas tecnologías para mantenerme actualizado y poder contribuir de manera efectiva en proyectos colaborativos.
                    </p>
                </div>
                
            </div>
        </Element>
    )
}

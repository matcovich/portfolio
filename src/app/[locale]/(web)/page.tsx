import { About, Contacto, Inicio, Projects } from "@/components";

export default function Home() {
    return (
        <div className="flex flex-col">
            <Inicio />
            <About />
            <Projects />
            <Contacto />
        </div>
    );
}

// import { Title } from "@/components";

import { About, Contacto,  Inicio, Projects } from "@/components";


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* <Title title="" subtitle="" className=""/> */}
      <Inicio/>
      <About/>
      <Projects/>
      <Contacto/>
    </div>
  );
}

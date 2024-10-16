import sleep from "@/utils/sleep"
import { Button, ButtonGroup } from "@nextui-org/button"
import { Input, Textarea } from "@nextui-org/input"
import { useState } from "react";


export const ContactForm = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const response = await fetch(event.currentTarget.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })

        const result = await response.json();
        if (response.ok) {
            setMessage('Gracias por ponerte en contacto');
            await sleep(3000);
            event.currentTarget.reset();
        } else {
            setMessage((result.errors as Error[]).map(error => error.message).join('\n'));
            return false;
        }
    };


    return (
        <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-full px-6 py-6 md:px-24 md:py-20 text-gray-600"
        action="https://formspree.io/f/mnnqqdyz"
        method="POST"
        >
            <Input name="name" type="text" variant="underlined" label="Nombre y Apellidos"
             isInvalid={false}
             errorMessage="Por favor Ingrese Su nombre y Apellidos"/>
            <Input name="company" type="text" variant="underlined" label="Nombre de la empresa" />
            <Input name="email" type="email" variant="underlined" label="Email" 
            isInvalid={false}
            errorMessage="Por favor Ingrese un Email Valido"
            />
            <Input name="tel" type="tel" variant="underlined" label="Teléfono" />
            <Textarea
                name="message"
                key="underlined"
                variant="underlined"
                label="Mensaje"
                labelPlacement="outside"
                className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                isInvalid={false}
                errorMessage="Necesitas escribir un mensaje"
                />

                <Button type="submit" variant="flat" className="w-fit px-16 self-end bg-[#E74D18] text-white font-semibold">
                    Enviar
                </Button>
                {!message ? null :<p className="text-[#1D4148] bg-green-100 py-1 px-2 rounded-md text-left font-medium  ">{message}</p>}
        </form>
    )
}

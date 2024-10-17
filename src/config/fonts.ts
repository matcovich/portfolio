import { DM_Serif_Text, Roboto_Flex } from "next/font/google";

export const secundaryFont = DM_Serif_Text({
    weight: ['400'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export const roboto = Roboto_Flex ({
    weight: ['100','300', '400','600','700', '800', '900'],
    style: ['normal'],
    subsets: ['latin'],
})
import { DM_Serif_Text, Montserrat, Roboto_Flex } from "next/font/google";

export const secundaryFont = DM_Serif_Text({
    weight: ['400'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export const montserrat = Roboto_Flex ({
    weight: ['100','300', '400','600','700', '800', '900'],
    style: ['normal'],
    subsets: ['latin'],
})
// export const secundaryFont = Open_Sans({
//     subsets: ["latin"],
//     weight: ['300', '400','600','700', '800'],
// });
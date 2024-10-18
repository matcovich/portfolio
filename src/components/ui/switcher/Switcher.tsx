'use client'
import { Switch } from "@nextui-org/react";
import { div } from "framer-motion/client";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import { PiMoonDuotone, PiSunDuotone } from "react-icons/pi";

const Switcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleSwitch = (isSelected: boolean, classname: string):ReactNode => {
        if (isSelected) {
            setTheme('light')
            return <PiSunDuotone className={classname} />
        } else {
            setTheme('dark')
            return <PiMoonDuotone className={classname} />
        }
    }

    if(!mounted) return null

    return (
        <div className="mr-[52px] mt-1">
            <Switch
                defaultSelected ={theme === 'light' ? true : false}
                size="lg"
                color="warning"
                thumbIcon={({ isSelected, className })=>handleSwitch( isSelected, className)}
            />
        </div>
    );
};

export default Switcher
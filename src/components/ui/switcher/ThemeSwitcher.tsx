// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null

    return (
        <div className="z-20 mt-72 absolute dark:text-red-500">
        The current theme is: {theme} <br />
        <button onClick={() => setTheme('light')}>Light Mode</button>   <br/>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
        </div>
    )
};
'use client'
import { useUIStore } from "@/store/ui/ui-store";
import { IoMenu } from "react-icons/io5";

export default function MenuIcon() {
    const openSideMenu = useUIStore((state) => state.openSideMenu);
    return (
        <button
        className="absolute right-4 top-5 "
        onClick={openSideMenu}
        >
            <IoMenu size={40} className="text-gray-900" />
        </button>
    )
}

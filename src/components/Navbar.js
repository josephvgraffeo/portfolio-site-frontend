import { useState } from "react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div className="w-screen h-[80px] z-10 bg-[#0d0d0d] fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl">LOGO HERE</h1>
                    <ul className="hidden md:flex">
                        <li className="text-white">Home</li>
                        <li className="text-white">About</li>
                        <li className="text-white">Projects</li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="px-8 py-3">Contact</button>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-[#0d0d0d] w-full px-8 flex flex-col justify-center items-center"}>
                <li className="bg-white w-[85%] m-4 rounded-lg flex text-center">Home</li>
                <li className="bg-white w-[85%] m-4 rounded-lg flex text-center">About</li>
                <li className="bg-white w-[85%] m-4 rounded-lg flex text-center">Projects</li>
                <div className="mb-4 flex flex-col justify-center items-center">
                    <button className="bg-white w-[50%] m-4 rounded-lg px-14 py-3 flex justify-center">Contact</button>
                </div>
            </ul>
        </div>
    )
}
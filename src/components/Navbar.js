import { useState } from "react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div className="w-screen h-[80px] z-10 bg-[#0d0d0d] fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="p5menu text-white text-[40px] m-4">JG DEV</h1>
                    <ul className="hidden md:flex">
                        <li className="p5menu text-white text-[20px]">Home</li>
                        <li className="p5menu text-white text-[20px]">About</li>
                        <li className="p5menu text-white text-[20px]">Projects</li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="p5menu text-[30px] text-white bg-cover rounded-lg px-6 py-2 bg-center">Contact</button>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <MenuIcon className="text-white w-8 m-4" /> : <XIcon className="text-white w-8 m-4" />}
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-[#0d0d0d] w-full px-8 flex flex-col justify-center items-center"}>
                <li className="p5menu text-[25px] text-white bg-[#D92323] w-[70%] m-3 rounded-lg flex justify-center">About</li>
                <li className="p5menu text-[25px] text-white bg-[#D92323] w-[70%] m-3 rounded-lg flex justify-center">Projects</li>
                <li className="p5menu text-[25px] text-white bg-[#D92323] w-[70%] m-3 rounded-lg flex justify-center">Home</li>
                <div className="mb-4 flex flex-col justify-center items-center">
                    <button className="p5menu text-white bg-cover rounded-lg px-8 py-3 bg-center" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/button-bg.webp')" }}>Contact</button>
                </div>
            </ul>
        </div>
    )
}
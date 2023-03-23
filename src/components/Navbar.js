import { useState } from "react"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div className="w-screen h-[80px] z-10 bg-[#0d0d0d] fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="p5menu text-white text-[40px] m-4">JG DEV</h1>
                    <ul className="hidden md:flex">
                        <li className="p5menu text-white text-[21px] rounded-lg cursor-pointer hover:bg-[#D92323] transform transition-all duration-300 hover:scale-105"><Link to="hero" smooth={true} duration={500}>Home</Link></li>
                        <li className="p5menu text-white text-[21px] rounded-lg cursor-pointer hover:bg-[#D92323] transform transition-all duration-300 hover:scale-105"><Link to="about" smooth={true} duration={500}>About</Link></li>
                        <li className="p5menu text-white text-[21px] rounded-lg cursor-pointer hover:bg-[#D92323] transform transition-all duration-300 hover:scale-105"><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                        <li className="p5menu text-white text-[21px] rounded-lg cursor-pointer hover:bg-[#D92323] transform transition-all duration-300 hover:scale-105"><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="p5menu text-[28px] text-white bg-cover rounded-lg px-6 py-2 bg-center hover:bg-[#D92323] transform transition-all duration-300 hover:scale-105"><Link to="contact" smooth={true} duration={500}>Contact</Link></button>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <FaBars className="text-white w-8 m-4" /> : <FaTimes className="text-white w-8 m-4" />}
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-[#0d0d0d] w-full px-8 flex flex-col justify-center items-center"}>
                <li className="p5menu text-[27px] text-white bg-[#D92323] w-[70%] m-3 rounded-lg flex justify-center bg-cover transform transition-all duration-300 hover:scale-110 cursor-pointer" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }}><Link onClick={handleClick} to="hero" smooth={true} duration={500}>Home</Link></li>
                <li className="p5menu text-[27px] text-white bg-[#D92323] w-[70%] m-3 rounded-lg flex justify-center bg-cover transform transition-all duration-300 hover:scale-110 cursor-pointer" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }}><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
                <li className="p5menu text-[27px] text-white bg-[#D92323] w-[70%] m-3 rounded-lg flex justify-center bg-cover transform transition-all duration-300 hover:scale-110 cursor-pointer" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }}><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className="p5menu text-[27px] text-white bg-[#D92323] w-[70%] m-3 rounded-lg flex justify-center bg-cover transform transition-all duration-300 hover:scale-110 cursor-pointer" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }}><Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link></li>
                <div className="mb-4 flex flex-col justify-center items-center">
                    <button className="p5menu text-white text-[22px] w-[120%] bg-cover rounded-lg px-8 py-3 my-4 bg-center transform transition-all duration-300 hover:scale-110" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/button-bg.webp')" }}><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></button>
                </div>
            </ul>
            <div className="hidden lg:flex fixed flex-col top-[320%] left-0">
                <ul>
                    <li className="p5menu w-[160px] h-[65px] flex justify-between items-center ml-[-100px] text-white hover:ml-[-10px] duration-300 bg-cover" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }}>
                        <a className="flex justify-between items-center w-full" href="https://www.linkedin.com/in/josephgraffeo/" target="_blank" rel="noreferrer">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="p5menu w-[160px] h-[65px] flex justify-between items-center ml-[-100px] text-white hover:ml-[-10px] duration-300 bg-cover" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }}>
                        <a className="flex justify-between items-center w-full" href="https://github.com/josephvgraffeo" target="_blank" rel="noreferrer">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="p5menu w-[160px] h-[65px] flex justify-between items-center ml-[-100px] text-white hover:ml-[-10px] duration-300 bg-cover" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }}>
                        <a className="flex justify-between items-center w-full" href="/" target="_blank" rel="noreferrer">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="p5menu w-[160px] h-[65px] flex justify-between items-center ml-[-100px] text-white hover:ml-[-10px] duration-300 bg-cover" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }}>
                        <a className="flex justify-between items-center w-full" href="/" target="_blank" rel="noreferrer">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
import { useState } from "react"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiMusic } from "react-icons/fi";
import { Link } from "react-scroll";
import BackgroundMusic from "./BackgroundMusic";

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    const handleCopyEmail = () => {
        const email = 'josephgraffeodev@gmail.com';
        navigator.clipboard.writeText(email)
            .then(() => {
                alert(`Copied ${email} to clipboard!`);
            })
            .catch((error) => {
                console.error('Failed to copy email: ', error);
            });
    };

    return (
        <div className="w-screen h-[75px] z-10 bg-[#0d0d0d] fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <Link to="hero" smooth={true} duration={500}><img className="h-[60px] w-[185px] mx-2 transform transition-all duration-300 hover:scale-105 cursor-pointer" src="https://portfolio-site-assets-jg.s3.amazonaws.com/navbar-text-nobg.png" alt="logo" /></Link>
                    <ul className="hidden md:flex">
                        <Link to="hero" smooth={true} duration={500}><img className="rounded-lg w-[80px] ml-8 mr-1 cursor-pointer transform transition-all duration-300 hover:scale-110" src="https://portfolio-site-assets-jg.s3.amazonaws.com/home-text-nobg.png" alt="home" /></Link>
                        <Link to="about" smooth={true} duration={500}><img className="rounded-lg w-[90px] ml-9 mr-5 cursor-pointer transform transition-all duration-300 hover:scale-110" src="https://portfolio-site-assets-jg.s3.amazonaws.com/about-text-nobg.png" alt="about" /></Link>
                        <Link to="skills" smooth={true} offset={-80} duration={500}><img className="rounded-lg w-[90px] ml-5 mr-8 cursor-pointer transform transition-all duration-300 hover:scale-110" src="https://portfolio-site-assets-jg.s3.amazonaws.com/skills-text-nobg.png" alt="skills" /></Link>
                        <Link to="projects" smooth={true} offset={-85} duration={500}><img className="rounded-lg w-[120px] ml-2 cursor-pointer transform transition-all duration-300 hover:scale-110" src="https://portfolio-site-assets-jg.s3.amazonaws.com/projects-text-nobg.png" alt="projects" /></Link>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <Link to="contact" smooth={true} offset={-50} duration={500}><img className="rounded-lg w-[150px] cursor-pointer transform transition-all duration-300 hover:scale-110" src="https://portfolio-site-assets-jg.s3.amazonaws.com/contact-text-nobg.png" alt="contact" /></Link>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <FaBars className="text-white w-8 m-4 text-[22px] cursor-pointer" /> : <FaTimes className="text-white w-8 m-4 text-[22px] cursor-pointer" />}
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-[#0d0d0d] w-full px-8 flex flex-col justify-center items-center"}>
                <Link to="hero" smooth={true} duration={500} onClick={handleClick}><img className="rounded-lg w-[160px] m-5 cursor-pointer transform transition-all duration-300 hover:scale-110 p-2" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }} src="https://portfolio-site-assets-jg.s3.amazonaws.com/home-text-nobg.png" alt="home" /></Link>
                <Link to="about" smooth={true} offset={-35} duration={500} onClick={handleClick}><img className="rounded-lg w-[170px] m-5 cursor-pointer transform transition-all duration-300 hover:scale-110 p-3" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }} src="https://portfolio-site-assets-jg.s3.amazonaws.com/about-text-nobg.png" alt="about" /></Link>
                <Link to="skills" smooth={true} offset={-160} duration={500} onClick={handleClick}><img className="rounded-lg w-[170px] m-5 cursor-pointer transform transition-all duration-300 hover:scale-110 p-3" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }} src="https://portfolio-site-assets-jg.s3.amazonaws.com/skills-text-nobg.png" alt="skills" /></Link>
                <Link to="projects" smooth={true} offset={-65} duration={500} onClick={handleClick}><img className="rounded-lg w-[180px] m-5 cursor-pointer transform transition-all duration-300 hover:scale-110 p-3 px-2" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }} src="https://portfolio-site-assets-jg.s3.amazonaws.com/projects-text-nobg.png" alt="projects" /></Link>
                <div className="mb-4 flex flex-col justify-center items-center">
                    <Link to="contact" smooth={true} offset={-40} duration={500} onClick={handleClick}><img className="rounded-lg w-[170px] cursor-pointer transform transition-all duration-300 hover:scale-110 p-3 m-5" src="https://portfolio-site-assets-jg.s3.amazonaws.com/contact-text-nobg.png" alt="contact" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }} /></Link>
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
                    <li className="p5menu w-[160px] h-[65px] flex justify-between items-center ml-[-100px] text-white hover:ml-[-10px] duration-300 bg-cover cursor-pointer" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }} onClick={handleCopyEmail}>
                        Email <HiOutlineMail size={30} />
                    </li>
                    <li className="p5menu w-[160px] h-[65px] flex justify-between items-center ml-[-100px] text-white hover:ml-[-10px] duration-300 bg-cover" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }}>
                        <a className="flex justify-between items-center w-full" href="https://portfolio-site-assets-jg.s3.amazonaws.com/Graffeo_Joseph_Resume_2023.pdf" target="_blank" rel="noreferrer">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                    <li className="p5menu w-[160px] h-[65px] flex justify-between items-center ml-[-100px] text-white hover:ml-[-10px] duration-300 bg-cover" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-sm.webp')" }}>
                        <BackgroundMusic /><FiMusic size={30}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
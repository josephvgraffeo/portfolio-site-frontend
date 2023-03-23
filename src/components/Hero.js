import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

export default function Hero() {
    return (
        <div name="hero" className="w-full h-screen">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-white">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-black">Joe Graffeo</h1>
                <h2 className="text 3xl sm:text-6xl font-bold text-white">I am a full-stack Developer.</h2>
                <p className="text-white py-4 max-w-[700px]">I am a full-stack developer specializing in front-end design. I have a passion for UX/UI and designing appealing and easy to use applications.</p>
                <div>
                    <button className="text-white group border-2 border-white px-6 py-3 my-2 flex items-center bg-transparent hover:bg-black transform transition-all duration-300 hover:scale-105">
                        <Link to="projects" smooth={true} duration={500}>See my projects</Link>
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
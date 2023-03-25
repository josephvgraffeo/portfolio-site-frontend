import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

export default function Hero() {
    return (
        <div name="hero" className="w-full h-screen">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-white text-[25px]">Hi, my name is</p>
                <img className="w-[650px] mt-2 mb-1 transform transition-all duration-500 hover:scale-110" src="https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-name-nobg.png" alt="contact" />
                <h2 className="text-4xl sm:text-6xl font-bold text-black">I am a full-stack Software Developer.</h2>
                <p className="text-white text-[22px] py-4 max-w-[700px]">Please feel free to check out my site and contact me about any potential collaborative opportunities!</p>
                <div>
                    <button className="text-white p5older text-[] rounded-sm group border-2 border-white px-6 py-3 my-2 flex items-center bg-transparent hover:bg-black transform transition-all duration-300 hover:scale-105">
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
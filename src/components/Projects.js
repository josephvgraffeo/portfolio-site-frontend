export default function Projects() {
    return (
        <div name="projects" className="w-full md:h-screen text-white my-[12rem]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                <img className="h-[90px] inline border-b-4 border-black mx-2" src="https://portfolio-site-assets-jg.s3.amazonaws.com/projects-text-nobg.png" alt="about" />
                    <p className="pt-6 pv-4 text-[22px]">Check out some of my past projects</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="shadow-lg shadow-[#000000] group container rounded-md flex justify-center items-center mx-auto content-div"
                    style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/cert-gamer-preview.webp')" }}>
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold ml-[30px] text-white tracking-wider">
                                CertifiedGamer Project
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://www.certifiedgamerproject.com/" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white hover:ring-opacity-100">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://www.youtube.com/watch?v=eeMMautVnK4" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white hover:ring-opacity-100">
                                        Presentation
                                    </button>
                                </a>
                                <a href="https://github.com/josephvgraffeo/gamer-profile-frontend" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white hover:ring-opacity-100">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-[#000000] group container rounded-md flex justify-center items-center mx-auto content-div"
                    style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/tic-tac-preview.webp')" }}>
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Tic-Tac-Toe React App
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://tic-tac-toe-react-jg.web.app/" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white hover:ring-opacity-100">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/josephvgraffeo/portfolio-tic-tac-toe" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white hover:ring-opacity-100">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-[#000000] group container rounded-md flex justify-center items-center mx-auto content-div"
                    style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/nfav-preview.webp')" }}>
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Audio Visualizer
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://audio-visualizer-project-jg.web.app/" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white hover:ring-opacity-100">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/josephvgraffeo/portfolio-audio-visualizer" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white hover:ring-opacity-100">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-[#000000] group container rounded-md flex justify-center items-center mx-auto content-div"
                    style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/hex-color-preview.webp')" }}>
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Random Hex Generator
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://portfolio-hex-color-generator.web.app/" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white hover:ring-opacity-100">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/josephvgraffeo/portfolio-hex-color-generator" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white hover:ring-opacity-100">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
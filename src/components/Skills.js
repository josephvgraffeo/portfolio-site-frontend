export default function Skills() {
    return (
        <div name="skills" className="text-white w-full h-[1200px] md:h-[1100px] sm:bg-cover" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-stars.png')" }}>
            <div className="max-w-[1000px] mt-[150px] sm:mt-auto mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <img className="w-[210px] sm:w-[270px] inline border-b-4 border-white mx-2 transform transition-all duration-300 hover:scale-110" src="https://portfolio-site-assets-jg.s3.amazonaws.com/skills-text-nobg.png" alt="about" />
                    <p className="pt-2 sm:pt-4 pb-0 sm:pb-2 text-[22px] transform transition-all duration-300 hover:scale-105">These are the technologies I have worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-6">
                    <div className="h-[175px] sm:h-auto shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill rounded-md bg-[#0000009d]">
                        <img className="w-[100px] sm:w-[120px] mx-auto filter invert hover:scale-105 duration-500" src="https://portfolio-site-assets-jg.s3.amazonaws.com/javascript.svg" alt="js icon" />
                        <p className="my-3 text-[22px]">Javascript</p>
                    </div>
                    <div className="h-[175px] sm:h-auto shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill rounded-md bg-[#0000009d]">
                        <img className="w-[100px] sm:w-[120px] mx-auto filter invert hover:scale-105 duration-500" src="https://portfolio-site-assets-jg.s3.amazonaws.com/react.webp" alt="js icon" />
                        <p className="my-3 text-[22px]">React</p>
                    </div>
                    <div className="h-[175px] sm:h-auto shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill rounded-md bg-[#0000009d]">
                        <img className="w-[100px] sm:w-[120px] mx-auto filter invert hover:scale-105 duration-500" src="https://portfolio-site-assets-jg.s3.amazonaws.com/css-3.svg" alt="js icon" />
                        <p className="my-3 text-[22px]">CSS</p>
                    </div>
                    <div className="h-[175px] sm:h-auto shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill rounded-md bg-[#0000009d]">
                        <img className="w-[100px] sm:w-[120px] mx-auto filter invert hover:scale-105 duration-500" src="https://portfolio-site-assets-jg.s3.amazonaws.com/html-5.svg" alt="js icon" />
                        <p className="my-3 text-[22px]">HTML</p>
                    </div>
                    <div className="h-[175px] sm:h-auto shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill rounded-md bg-[#0000009d]">
                        <img className="w-[100px] sm:w-[120px] mx-auto filter invert hover:scale-105 duration-500" src="https://portfolio-site-assets-jg.s3.amazonaws.com/mongodb.svg" alt="js icon" />
                        <p className="my-3 text-[22px]">MongoDB</p>
                    </div>
                    <div className="h-[175px] sm:h-auto shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill rounded-md bg-[#0000009d]">
                        <img className="w-[100px] sm:w-[120px] mx-auto filter invert hover:scale-105 duration-500" src="https://portfolio-site-assets-jg.s3.amazonaws.com/firebase.svg" alt="js icon" />
                        <p className="my-3 text-[22px]">Firebase</p>
                    </div>
                    <div className="h-[175px] sm:h-auto shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill rounded-md bg-[#0000009d]">
                        <img className="w-[100px] sm:w-[120px] mx-auto filter invert hover:scale-105 duration-500" src="https://portfolio-site-assets-jg.s3.amazonaws.com/material-ui-bw.webp" alt="js icon" />
                        <p className="my-3 text-[22px]">MaterialUI</p>
                    </div>
                    <div className="h-[175px] sm:h-auto shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill rounded-md bg-[#0000009d]">
                        <img className="w-[100px] sm:w-[120px] mx-auto filter invert hover:scale-105 duration-500" src="https://portfolio-site-assets-jg.s3.amazonaws.com/tailwind-css.webp" alt="js icon" />
                        <p className="my-3 text-[22px]">Tailwind</p>
                    </div>
                    <div className="h-[175px] sm:h-auto shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill rounded-md bg-[#0000009d]">
                        <img className="w-[100px] sm:w-[120px] mx-auto filter invert hover:scale-105 duration-500" src="https://portfolio-site-assets-jg.s3.amazonaws.com/bootstrap-bw.webp" alt="js icon" />
                        <p className="my-3 text-[22px]">Bootstrap</p>
                    </div>
                    </div>
                </div>
        </div>
    )
}
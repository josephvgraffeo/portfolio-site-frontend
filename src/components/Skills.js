export default function Skills() {
    return (
        <div name="skills" className="text-white w-full h-screen">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-black">Skills</p>
                    <p className="py-4">These are the technologies I have worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-6">
                    <div className="shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-lg.webp')" }}>
                        <img className="w-[120px] mx-auto filter invert" src="https://portfolio-site-assets-jg.s3.amazonaws.com/javascript.svg" alt="js icon" />
                        <p className="my-4">Javascript</p>
                    </div>
                    <div className="shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-lg.webp')" }}>
                        <img className="w-[120px] mx-auto filter invert" src="https://portfolio-site-assets-jg.s3.amazonaws.com/react.webp" alt="js icon" />
                        <p className="my-4">React</p>
                    </div>
                    <div className="shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-lg.webp')" }}>
                        <img className="w-[120px] mx-auto filter invert" src="https://portfolio-site-assets-jg.s3.amazonaws.com/css-3.svg" alt="js icon" />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-lg.webp')" }}>
                        <img className="w-[120px] mx-auto filter invert" src="https://portfolio-site-assets-jg.s3.amazonaws.com/html-5.svg" alt="js icon" />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-lg.webp')" }}>
                        <img className="w-[120px] mx-auto filter invert" src="https://portfolio-site-assets-jg.s3.amazonaws.com/mongodb.svg" alt="js icon" />
                        <p className="my-4">MongoDB</p>
                    </div>
                    <div className="shadow-lg shadow-[#000000] hover:scale-110 duration-500 py-6 bg-fill" style={{ backgroundImage: "url('https://portfolio-site-assets-jg.s3.amazonaws.com/portfolio-button-bg-lg.webp')" }}>
                        <img className="w-[120px] mx-auto filter invert" src="https://portfolio-site-assets-jg.s3.amazonaws.com/firebase.svg" alt="js icon" />
                        <p className="my-4">Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
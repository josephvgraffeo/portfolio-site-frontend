export default function About() {
    return (
        <div name="about" className="w-full h-screen">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 text-white">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-black">About</p>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 text-white px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hello. My name is Joe, nice to meet you! Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am a highly motivated and dedicated frontend developer with a passion for creating beautiful and user-friendly interfaces. I have a keen eye for detail and am committed to ensuring that every aspect of a project is polished and professional. With a strong background in HTML, CSS, and JavaScript, I am able to create responsive and dynamic websites that meet the needs of users and clients alike. Additionally, I am always seeking to learn new technologies and improve my skills in order to stay on top of the latest industry trends and provide the best possible solutions to any project I work on.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
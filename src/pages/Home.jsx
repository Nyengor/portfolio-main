import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";

import ui from "../assets/photo4.jpg";
import Webdev from "../assets/photo2.jpg";
import Webdesign from "../assets/photo3.jpg";

import Html from "../assets/assethtml.svg";
import Css from "../assets/assetcss.svg";
import Javascript from "../assets/assetjs.svg";
import Python from "../assets/assetpy.svg";
import Tailwind from "../assets/assettailwind.svg";
import { ArrowLeft } from "lucide-react";

export default function Home() {
    return (
        <>
            <Navbar />

            {/* SECTION ONE */}
            <div className="bg-radial-[at_90%_30%] from-pink-900 to-[#15001B] to-70% bg-cover bg-center h-screen px-30 py-6 bg-fixed">
                <div className="flex flex-row">
                    <div className="pt-27 w-full mb-40">
                        <div className="text-white w-full">
                            <button
                                type="button"
                                className="bg-transparent border-2 border-purple rounded-4xl p-4 mx-5 hover:border-pink-600 font-mono"> Welcome To My World
                            </button>

                            <h1 className="pt-10">
                                <span className="font-bold text-5xl mx-5">Hi I'm </span>
                                <span className="text-lg font-medium">Janet Dede Odonkor</span>
                            </h1>
                            <h1 className="text-5xl font-bold mx-5 pt-4 w-full animate__animated animate__bounce">
                                <span className="text-pink-600">Frontend</span> Developer
                            </h1>
                            <h3 className="text-2xl p-5 animate__animated animate__backInDown">Web Development</h3>
                            <p className="text-lg px-5 text-pink-600 font-mono animate__animated animate__shakeX">
                                Crafting responsive UIs with React, Tailwind & JavaScript — built for speed, creativity, and real-world impact.
                            </p>
                            <ul className="flex flex-row gap-10 p-5">
                                <li>
                                    <a
                                        href="./Images/wrk.pdf"
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-pink-600 text-black font-bold px-4 py-2 rounded-xl hover:bg-black hover:text-pink-600"
                                    >
                                        Resume
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="bg-transparent border-2 border-white text-white font-bold px-4 py-2 rounded-xl hover:border-none hover:bg-black hover:text-pink-600"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-[60%] mt-17 ml-50">
                        <img
                            className="border-1 border-white rounded-full bg-[rgba(255,192,203,0.3)]"
                            src="./Images/profile4.png"
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>

            {/* SECTION TWO - About Me */}
            <div className="bg-radial-[at_90%_30%] from-pink-900 to-[#15001B] to-70% bg-cover bg-center h-screen px-30 py-6 bg-fixed">
                <div className="bg-[rgba(255,255,255,0.5)] w-[95%] mx-auto h-[80vh] border-none rounded-xl">
                    <div className="gap-20 flex flex-row">
                        <div className="p-5 w-[50%]">
                            <img src="/Images/image100.jpg" alt="About" />
                        </div>
                        <div className="w-[50%]">
                            <h2 className="text-black mt-auto text-3xl font-bold pt-5 pb-10">
                                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-5xl">
                                    About Me
                                </span>
                            </h2>
                            <p className="text-lg pb-4 font-mono">
                                I am Janet Dede Odonkor, a passionate young woman with a strong love
                                for technology and an unshakable curiosity for how things work. <br />
                                Technology is not just a tool for me; it is a language of creativity and
                                possibility. Whether I am coding a dynamic website, capturing moments
                                through photography, or diving into data, I do it with heart, purpose, and
                                a bold vision for the future.
                            </p>
                            <p className="pt-2 text-xl font-bold">SKILLS</p>
                            <div className="grid grid-cols-5 gap-6 w-[70%] pt-10">
                                <img src={Html} alt="HTML" />
                                <img src={Css} alt="CSS" />
                                <img src={Javascript} alt="JavaScript" />
                                <img src={Tailwind} alt="Tailwind CSS" />
                                <img src={Python} alt="Python" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION THREE - Services */}
            <div className="bg-radial-[at_30%_70%] from-[#24002F] to-[#0A0011] to-80% text-white p-4 sm:p-12 md:p-16 lg:p-10 font-sans h-[95vh]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
                        My Services
                    </h2>
                    <p className="text-center text-gray-400 mx-auto mb-6 sm:mb-16 md:mb-10">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard title="UI/UX Design" imageUrl={ui} />
                    <ServiceCard title="Web Development" imageUrl={Webdev} />
                    <ServiceCard title="Website Redesign" imageUrl={Webdesign} />
                </div>
            </div>

            {/* SECTION FOUR - Projects */}
            <div className="h-[90vh] bg-radial-[at_90%_30%] from-pink-900 to-[#15001B] to-70% ">
                <div className="text-white text-center p-10 font-bold text-3xl">
                    <p className="text-4xl">Projects</p>
                    <p>Let's Have a Look <br /> at <span className="text-pink-600">My Projects</span></p>
                </div>

                {/* The arrow button */}
                <div className="absolute bottom-0 left-0 bg-[#0A0011] p-3 rounded-ss-4xl">
                    <a href="#" className="bg-pink-600 p-3 rounded-full inline-block hover:bg-opacity-90 transition-colors duration-300">
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </a>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] m-auto">
                    <div className="">
                        <ProjectCard title="Advertising Website" imageUrl={Webdev}/>
                    </div>
                </div>
            </div>




            <Footer />
        </>
    );
}

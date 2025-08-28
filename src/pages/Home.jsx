import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

import ui from "../assets/photo4.jpg";
import Webdev from "../assets/photo2.jpg";
import Webdesign from "../assets/photo3.jpg";
import Profilepic from "../assets/profilepic.jpg"

import Html from "../assets/assethtml.svg";
import Css from "../assets/assetcss.svg";
import Javascript from "../assets/assetjs.svg";
import Python from "../assets/assetpy.svg";
import Nextjs from "../assets/nextjs.svg";
import Tailwind from "../assets/assettailwind.svg";
import Project1 from "../assets/project2.png";
import Project2 from "../assets/project3.png";
import Project3 from "../assets/project4.png";
import Project4 from "../assets/project5.png";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
    return (
        <>
            <Navbar />

            {/* SECTION ONE */}
            <div className="bg-radial-[at_90%_30%] from-pink-900 to-[#15001B] to-70% bg-cover bg-center h-screen  bg-fixed">
                <div className=" w-[80%] flex flex-row pt-[27px] mx-auto ">
                    <div className="text-white w-[60%]">
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


                    <div className=" ">
                        <img
                            className="w-[100px] h-[130px] border border-white rounded-full bg-[rgba(255,192,203,0.3)]"
                            src={Profilepic}
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
                            <h2 className="mt-auto text-3xl font-bold pt-5 pb-10">
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
                            <div className="grid grid-cols-6 gap-6 w-[70%] pt-10">
                                <img src={Html} alt="HTML" />
                                <img src={Css} alt="CSS" />
                                <img src={Javascript} alt="JavaScript" />
                                <img src={Tailwind} alt="Tailwind CSS" />
                                <img src={Python} alt="Python" />
                                <img src={Nextjs} alt="Nextjs" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION THREE - Services */}
            <div className="bg-radial-[at_30%_70%] from-[#24002F] to-[#0A0011] to-80% text-white p-4 sm:p-12 md:p-16 lg:p-10 font-sans h-[95vh]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center mb-4">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-800 bg-clip-text text-transparent">
                            My Services
                        </span>
                    </h2>
                    <p className="text-center text-gray-400 mx-auto mb-6 sm:mb-16 md:mb-10">
                        I design and build beautiful, responsive websites and user interfaces.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard title="UI/UX Design" imageUrl={ui} />
                    <ServiceCard title="Web Development" imageUrl={Webdev} />
                    <ServiceCard title="Website Redesign" imageUrl={Webdesign} />
                </div>
            </div>

            {/* SECTION FOUR - Projects */}
            <div className="relative h-[90vh] bg-radial-[at_90%_30%] from-pink-900 to-[#15001B] to-70% ">
                <div className="text-white  p-10 font-bold text-3xl">
                    <span className="text-5xl uppercase bg-gradient-to-r from-purple-600 to-pink-800 bg-clip-text text-transparent">Projects</span>

                </div>
                {/* Carousel */}
                <div className="w-full max-w-6xl mx-auto px-4">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={3}      // show 3 at a time
                        slidesPerGroup={1}     // move 1 at a time
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={Project1}
                                    alt="Advertisement Website"
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold mb-2">Advertisement Website</h3>
                                    <p className="text-gray-600 text-sm">
                                        A bilingual e-commerce platform for Ghana-China trade.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className=" rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={Project2}
                                    alt="Portfolio Website"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                                    <p className="text-gray-600 text-sm">
                                        A personal site showcasing my projects and skills.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className=" rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={Project3}
                                    alt="Blog Platform"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold mb-2">Blog Platform</h3>
                                    <p className="text-gray-600 text-sm">
                                        A simple blogging app built with React and Tailwind.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 4 */}
                        <SwiperSlide>
                            <div className=" rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={Project4}
                                    alt="E-learning Platform"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold mb-2">E-learning Platform</h3>
                                    <p className="text-gray-600 text-sm">
                                        A modern platform for online courses and tutorials.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 5 */}
                        <SwiperSlide>
                            <div className="rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={Project1}
                                    alt="Photography Gallery"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold mb-2">Photography Gallery</h3>
                                    <p className="text-gray-600 text-sm">
                                        A showcase of high-quality photographs with a clean UI.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* You can add more slides here the same way */}
                    </Swiper>
                </div>


            </div>




            <Footer />
        </>
    );
}

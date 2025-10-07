import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import { FiExternalLink } from "react-icons/fi";
import { FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Front from "../assets/photo4.jpg";
import Webdev from "../assets/photo2.jpg";
import Webdesign from "../assets/photo3.jpg";
import Profilepic from "../assets/profilepic.jpg"

import React from "../assets/react.svg";
import Css from "../assets/assetcss.svg";
import Javascript from "../assets/assetjs.svg";
import Python from "../assets/assetpy.svg";
import Nextjs from "../assets/nextjs.svg";
import Tailwind from "../assets/assettailwind.svg";
import Postgres from "../assets/postgresql.webp";
import Nodejs from "../assets/nodejs.svg";
import Techy from "../assets/about1.jpg"

import Project2 from "../assets/project3.png";
import Project3 from "../assets/project4.png";
import Project4 from "../assets/project5.png";
import Project5 from "../assets/project6.png";

// Carousel Import
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
            <div className="bg-radial-[at_90%_30%] from-pink-900 to-[#15001B] to-70% bg-cover bg-center  h-[200vh]">
                <div className=" w-[80%] flex flex-row gap-10 mx-auto pt-[120px]">
                    <div className="text-white w-[55%] justify-center">
                        <button
                            type="button"
                            className="bg-transparent border-2 border-purple rounded-4xl p-4 mx-5 hover:border-pink-600 font-mono"> Welcome To My World💫
                        </button>

                        <h1 className="text-4xl mx-5 pt-4 font-bold">
                            Hi, <span className="text-3xl">I'm Janet</span> 
                        </h1>
                        <h1 className="text-5xl font-bold mx-5 pt-4 w-full animate__animated animate__bounce">
                            <span className="text-pink-600">Junior Web</span> Developer
                        </h1>
                        <h3 className="text-2xl p-5 animate__animated animate__backInDown">Full Stack Development</h3>
                        <p className="text-lg px-5 text-pink-600 font-mono animate__animated animate__shakeX">
                            Building seamless digital experiences with React, Tailwind, and APIs whiles blending design, logic, and creativity into powerful web solutions.
                        </p>
                        <ul className="flex flex-row gap-10 p-5">
                            <li>
                                <a
                                    href="../assests/resume.pdf"
                                    download
                                    target="_blank"
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

                        <div className="flex gap-4 p-5">
                            {/* Phone */}
                            <a
                                href="tel:+233 501313538" // replace with your number
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-pink-500 hover:bg-pink-500 hover:text-white transition"
                            >
                                <FaPhoneAlt />
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/Nyengor"
                                target="_blank"
                                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-pink-500 hover:bg-pink-500 hover:text-white transition"
                            >
                                <FaGithub />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/janet-dede-nyengor-odonkor/"
                                target="_blank"
                                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-pink-500 hover:bg-pink-500 hover:text-white transition"
                            >
                                <FaLinkedin />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:dedenyengor09@gmail.com"
                                target="_blank"
                                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-pink-500 hover:bg-pink-500 hover:text-white transition"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>


                    <div className="w-[35%] h-[90vh] ">
                        <img
                            className="border border-white rounded-full bg-[rgba(255,192,203,0.3)]"
                            src={Profilepic}
                            alt="Profile"
                        />
                    </div>
                </div>


                {/* SECTION TWO - About Me */}
                <div className="h-[80vh] w-[80%] mx-auto mt-20 bg-[rgba(255,255,255,0.5)] rounded-xl border-none" id="about">
                        <div className="gap-20 flex flex-row w-[90%] mx-auto p-5">
                            <div className=" w-[50%] rounded-2xl">
                                <img src={Techy} alt="About" className=" rounded-2xl pt-10" />
                            </div>
                            <div className="w-[60%] ">
                                <h2 className="mt-auto text-3xl font-bold  pb-10">
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
                                <div className="grid grid-cols-8 gap-6  pt-10">
                                    <img src={React} alt="React" />
                                    <img src={Css} alt="CSS" />
                                    <img src={Javascript} alt="JavaScript" />
                                    <img src={Tailwind} alt="Tailwind CSS" />
                                    <img src={Python} alt="Python" />
                                    <img src={Nextjs} alt="Nextjs" />
                                    <img src={Postgres} alt="Postgresql" />
                                    <img src={Nodejs} alt="Nodejs" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            {/* SECTION THREE - Services */}
            <div className="bg-radial-[at_30%_70%] from-[#24002F] to-[#0A0011] to-80% text-white p-4 sm:p-12 md:p-16 lg:p-10 font-sans h-[95vh]" id="services">
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
                    <ServiceCard title="Front-end Development" imageUrl={Front} />
                    <ServiceCard title="Back-end Development" imageUrl={Webdev} />
                    <ServiceCard title="Website Redesign" imageUrl={Webdesign} />
                </div>
            </div>

            {/* SECTION FOUR - Projects */}
            <section className="relative h-[90vh] bg-radial-[at_90%_30%] from-pink-900 to-[#15001B] to-70% " id="projects">
                <div className="text-white  p-10 font-bold text-3xl">
                    <span className="text-5xl uppercase bg-gradient-to-r from-purple-600 to-pink-800 bg-clip-text text-transparent">Projects</span>

                </div>
                {/* Carousel */}
                <div className="w-full max-w-6xl mx-auto px-4">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={3}
                        slidesPerGroup={1}
                        navigation={{ clickable: true }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        style={{ "--swiper-navigation-color": "#ec4899", "--swiper-pagination-color": "#ec4899" }}
                        loop={true}
                    >

                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={Project3}
                                    alt="Advertisement & Trade Website"
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-2xl font-bold text-violet-700 mb-3">
                                        Advertisement & Trade Website
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4">
                                        A bilingual platform enabling Ghanaian and Chinese vendors to register, list products, and showcase their businesses through a localized interface.
                                    </p>

                                    {/* Stack */}
                                    <p className="font-semibold text-pink-600">Stack</p>
                                    <div className="flex justify-center gap-3 mt-2 text-sm text-gray-300 items-center">
                                        <span>React</span>
                                        <span>TailwindCSS</span>
                                        <span>MongoDb</span>
                                        <span>Javascript</span>

                                        {/* Website Icon */}
                                        <a
                                            href="https://bambi-online.netlify.app/"
                                            target="_blank"
                                            title="Visit Website"
                                            className="text-violet-800 hover:text-pink-600"
                                        >
                                            <FiExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={Project4}
                                    alt="Bambi Watch (Real-Time Video Sharing)"
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-2xl font-bold text-violet-700 mb-3">
                                        Bambi Watch (Real-Time Video Sharing)
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4">
                                        A web app for friends and family to watch  videos together in real time, with synchronized playback and chat in virtual rooms.
                                    </p>

                                    {/* Stack */}
                                    <p className="font-semibold text-pink-600">Stack</p>
                                    <div className="flex justify-center gap-3 mt-2 text-sm text-gray-300 items-center">
                                        <span>React</span>
                                        <span>Node.js</span>
                                        <span>Express</span>
                                        <span>MongoDB</span>
                                        <span>Socket.IO</span>

                                        {/* Website Icon */}
                                        <a
                                            href="https://bambi-watch.netlify.app/"
                                            target="_blank"
                                            title="Visit Website"
                                            className="text-violet-800 hover:text-pink-600"
                                        >
                                            <FiExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className="rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={Project2}
                                    alt="Amanex E-commerce Website"
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-2xl font-bold text-violet-700 mb-3">
                                        Amanex E-commerce Website
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4">
                                        Developed a group e-commerce platform for Amanex, enabling users to browse and purchase products through a sleek, responsive interface.
                                    </p>

                                    {/* Stack */}
                                    <p className="font-semibold text-pink-600">Stack</p>
                                    <div className="flex justify-center gap-3 mt-2 text-sm text-gray-300 items-center">
                                        <span>React</span>
                                        <span>TailwindCSS</span>
                                        <span>TypeScript</span>

                                        {/* Website Icon */}
                                        <a
                                            href="https://amanexcom.netlify.app"
                                            target="_blank"
                                            title="Visit Website"
                                            className="text-violet-800 hover:text-pink-600"
                                        >
                                            <FiExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/* Slide 4 */}
                        <SwiperSlide>
                            <div className="rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={Project5}
                                    alt="Restaurant Website"
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-2xl font-bold text-violet-700 mb-3">
                                        Restaurant Website
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4">
                                        A responsive website showcasing a restaurant’s menu, about information, and enabling smooth online reservations with an engaging layout.
                                    </p>

                                    {/* Stack */}
                                    <p className="font-semibold text-pink-600">Stack</p>
                                    <div className="flex justify-center gap-3 mt-2 text-sm text-gray-300 items-center">
                                        <span>HTML</span>
                                        <span>TailwindCSS</span>

                                        {/* Website Icon */}
                                        <a
                                            href="https://my-first-landing-page-demo.vercel.app/"
                                            target="_blank"
                                            title="Visit Website"
                                            className="text-violet-800 hover:text-pink-600"
                                        >
                                            <FiExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 5 */}
                        <SwiperSlide>
                            <div className="rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={Project5}
                                    alt="Restaurant Website"
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-2xl font-bold text-violet-700 mb-3">
                                        Restaurant Website
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4">
                                        A responsive website showcasing a restaurant’s menu, about information, and enabling smooth online reservations with an engaging layout.
                                    </p>

                                    {/* Stack */}
                                    <p className="font-semibold text-pink-600">Stack</p>
                                    <div className="flex justify-center gap-3 mt-2 text-sm text-gray-300 items-center">
                                        <span>HTML</span>
                                        <span>TailwindCSS</span>

                                        {/* Website Icon */}
                                        <a
                                            href="https://my-first-landing-page-demo.vercel.app/"
                                            target="_blank"
                                            title="Visit Website"
                                            className="text-violet-800 hover:text-pink-600"
                                        >
                                            <FiExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>


            </section>

            {/* SECTION 5 - Contact */}
            <section id="contact">

            </section>



            <Footer />
        </>
    );
}

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import { useNavigate } from "react-router";


export default function Home() {
    return (
        <>
            <Navbar />


            <div>
                {/* SECTION ONE */}
                <div
                    class=" bg-radial-[at_90%_30%] from-pink-900 to-[#15001B] to-70% bg-cover bg-center h-screen px-30 py-6 bg-fixed">
                    <div class="flex flex-row">
                        <div class="pt-27 w-[100%] mb-40">
                            <div class="text-white w-[100%]">
                                <button type="button"
                                    class="bg-transparent border-2 border-purple rounded-4xl p-4 mx-5 hover:border-pink-600 font-mono ">Welcome
                                    To My World</button>

                                <h1 class="pt-10"><span class="font-bold text-5xl mx-5 ">Hi I'm</span><span class="text-lg">Janet Dede
                                    Odonkor</span></h1>
                                <h1 class="text-5xl font-bold mx-5 pt-4 w-[100%] animate__animated animate__bounce"><span
                                    class="text-pink-600">Frontend</span> Developer
                                </h1>
                                <h3 class="text-2xl p-5 animate__animated animate__backInDown">Web Development</h3>
                                <p class="text-lg px-5 text-pink-300 font-mono animate__animated animate__shakeX">Crafting responsive
                                    UIs with React, Tailwind &
                                    JavaScript — built for
                                    speed,
                                    creativity, and real-world impact.</p>
                                <ul class="flex flex-row  gap-10 p-5">
                                    <li><a href="#" download="./Images/wrk.pdf" target="_blank"
                                        class="bg-pink-600 text-black font-bold px-4 py-2 rounded-xl hover:bg-black hover:text-pink-600">Resume</a>
                                    </li>
                                    <li><a href="#"
                                        class="bg-transparent border-2 border-white text-white font-bold px-4 py-2 rounded-xl hover:border-none hover:bg-black hover:text-pink-600">Contact</a>
                                    </li>
                                </ul>
                            </div>

                            {/* <div class="flex flex-row gap-6 p-5">
                            <a href="https://phone number/0245114074" aria-label="Phone Number">
                                <i class="fa-solid fa-phone fa-beat rounded-full border-2 border-white py-2 px-2 "
                                    style="color: #f472b6;"></i></a>
                            <a href="https://github.com/Nyengor" aria-label="GitHub Profile">
                                <i class="fa-brands fa-github fa-beat rounded-full border-2 border-white py-2 px-2"
                                    style="color: #f472b6;"></i></a>
                            <a href="https://www.linkedin.com/in/janet-dede-nyengor-odonkor-898823252/"
                                aria-label="LinkedIn Profile">
                                <i class="fa-brands fa-linkedin-in fa-beat rounded-full border-2 border-white py-2 px-2"
                                    style="color: #f472b6 ;"></i></a>
                            <a href="mailto:janetdede12odonkor@gmail.com" aria-label="Email">
                                <i class="fa-regular fa-envelope fa-beat rounded-full border-2 border-white py-2 px-2"
                                    style="color: #f472b6 ;"></i></a>

                        </div> */}

                        </div>

                        <div class="w-[60%] mt-17 ml-50 ">
                            <img class=" border-1 border-white rounded-full  bg-[rgba(255,192,203,0.3)]" src="./Images/profile4.png"
                                alt="Profile picture" />
                        </div>
                    </div>
                </div>

                {/* Section 2 */}

                <div
                    class=" bg-radial-[at_90%_30%] from-pink-900 to-[#15001B] to-70% bg-cover bg-center h-screen px-30 py-6 bg-fixed">

                    <div className="bg-white w-[95%] mx-auto h-[80vh] border rounded-xl">
                        <div class="gap-20 flex flex-row">
                            <div class="p-5 w-[50%] ">
                                <img src="/Images/image100.jpg" alt="image" />
                            </div>
                            <div class="w-[50%]">
                                <h2 class="text-black mt-auto text-3xl font-bold pt-5 pb-10">
                                    <span class=" bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-5xl">
                                        About Me</span>
                                </h2>

                                <p class="text-lg pb-4 font-mono">I am Janet Dede Odonkor, a passionate young woman with a strong love
                                    for technology and an unshakable curiosity for how things work.<br /> Technology is not just a tool for
                                    me; it is a language of creativity and possibility. Whether I am coding a dynamic website, capturing
                                    moments through photography, or diving into data, I do it with heart, purpose, and a bold vision for
                                    the future.</p>

                                <p class="pt-2 text-xl font-bold">SKILLS</p>
                                <div class="grid grid-cols-5 gap-6 w-[70%] pt-10 ">
                                    <img src="./Images/assethtml.svg" alt="HTML" />
                                    <img src="./Images/assetcss.svg" alt="CSS" />
                                    <img src="./Images/assetjs.svg" alt="JS" />
                                    <img src="./Images/assettailwind.svg" alt="TAILWIND" />
                                    <img src="./Images/assetpy.svg" alt="PYTHON" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}

                <div className="bg-[#262e44] text-white p-8 sm:p-12 md:p-16 lg:p-20 font-sans h-[80vh]">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">My Services</h2>
                        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard title="UI/UX Design" />
                    <ServiceCard title="UI/UX Design" />
                    <ServiceCard title="UI/UX Design" />
                </div>

            </div>



            <Footer />
        </>
    );
}
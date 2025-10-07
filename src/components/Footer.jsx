import { FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {

    return(

        <>
        <div class="bg-black text-white h-[50vh]">
            <div class=" flex flex-row justify-around">
                <div class="flex flex-col mt-10">
                    <p class="font-bold text-xl mb-5">Lady Jane</p>
                    <p>Accra Ghana, Africa</p>
                </div>

                <div class="flex flex-col list-none n0-underline mt-10">
                    <p class="font-bold text-xl mb-5">Our Services</p>
                    <ul>
                        <li>Web Development</li>
                        <li>Back-end Development</li>
                        <li>Mentorship</li>
                        <li>Photography</li>
                    </ul>
                </div>

                <div class="mt-20">
                    <p class="underline decoration-pink-500">Contact Me</p>
                    <p class="underline decoration-pink-500">Collaborate with the best</p>
                </div>

               <div className="flex gap-4 mt-20">
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

            <div>
                <p class="text-center text-pink-300 pt-30">Copyright@ 2025 LadyJane Ghana, Inc. All Rights Reserved.
                    Terms of
                    use|Privacy Policy</p>
            </div>
        </div>
        </>
    )
}
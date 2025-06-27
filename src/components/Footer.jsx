export default function Footer() {

    return(

        <>
        <div class="bg-black text-white h-[50vh]">
            <div class=" flex flex-row justify-around">
                <div class="flex flex-col mt-10">
                    <p class="font-bold text-xl mb-5">Lady Jane</p>
                    <p>123 Harvest Lane, Greenfield, CA 93927, USA</p>
                </div>

                <div class="flex flex-col list-none n0-underline mt-10">
                    <p class="font-bold text-xl mb-5">Our Services</p>
                    <ul>
                        <li>Web Development</li>
                        <li>UI/UX Design</li>
                        <li>Mentorship</li>
                        <li>Photography</li>
                    </ul>
                </div>

                <div class="mt-20">
                    <p class="underline decoration-pink-500">Contact Us</p>
                    <p class="underline decoration-pink-500">Collaborate with Us</p>
                </div>

                {/* <div class="flex gap-4 mt-25">
                    <i class="fa-brands fa-instagram fa-xl rounded-full" style="color: #e4e7ec;"></i>
                    <i class="fa-brands fa-x-twitter fa-xl rounded-full " style="color: white;"></i>
                    <i class="fa-brands fa-whatsapp fa-xl rounded-full " style="color: white;"></i>
                    <i class="fa-brands fa-linkedin-in fa-xl rounded-full " style="color: white;"></i>
                    <i class="fa-regular fa-envelope fa-xl rounded-full " style="color: white;"></i>
                </div> */}
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
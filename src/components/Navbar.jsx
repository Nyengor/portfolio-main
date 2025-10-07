export default function Navbar() {
    return (
        <>
            <div className="flex flex-row fixed top-4 left-1/2 transform -translate-x-1/2 w-[80%] z-50 bg-[rgba(255,255,255,0.2)] backdrop-blur-md justify-around items-center rounded-4xl py-2">


                <h2
                    class="bg-linear-to-r  from-purple-500 to-pink-500 font-bold text-2xl bg-clip-text text-transparent p-4">
                    Lady Jane</h2>
                <ul class=" list-none flex flex-row gap-10 p-4">
                    <li
                        class=" text-white hover:bg-gradient-to-r  from-purple-500 to-pink-500 font-bold  hover:bg-clip-text hover:text-transparent">
                        <a href="index.html">Home</a>
                    </li>
                    <li
                        class=" text-white hover:bg-gradient-to-r  from-purple-500 to-pink-500 font-bold  hover:bg-clip-text hover:text-transparent">
                        <a href="#about">About</a>
                    </li>
                    <li
                        class=" text-white hover:bg-gradient-to-r  from-purple-500 to-pink-500 font-bold  hover:bg-clip-text hover:text-transparent">
                        <a href="#projects">Projects</a>
                    </li>
                    <li
                        class=" text-white hover:bg-gradient-to-r  from-purple-500 to-pink-500 font-bold  hover:bg-clip-text hover:text-transparent">
                        <a href="#services">Services</a>
                    </li>
                    <li
                        class=" text-white hover:bg-gradient-to-r  from-purple-500 to-pink-500 font-bold  hover:bg-clip-text hover:text-transparent">
                        <a href="#contact">Contact</a>
                    </li>

                </ul>
                <p className="border rounded-2xl p-2">Reviews</p>
            </div>
        </>
    )

}
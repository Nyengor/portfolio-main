import { ArrowUpRight } from "lucide-react"

export default function ServiceCard() {


    const ServiceCard = ({ title, imageUrl }) => {
        return (
            <>
                <div className="bg-transparent border border-amber-50 w-[30%] h-[80vh] rounded-lg ">
                    <h3 className="text-2xl font-semibold z-10 relative">{title}</h3>
                </div>

                {/* The overlapping image effect */}
                <div className="relative aspect-video rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    {/* The orange arrow button */}
                    <div className="absolute bottom-4 right-4">
                        <a href="#" className="bg-[#ff4f00] p-3 rounded-full inline-block hover:bg-opacity-90 transition-colors duration-300">
                            <ArrowUpRight className="w-6 h-6 text-white" />
                        </a>
                    </div>
                </div>

            </>
        )
}
}
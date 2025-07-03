import { ArrowUpRight } from "lucide-react";
import { Link } from "lucide-react";

export default function ServiceCard({ title, imageUrl }) {

    return (
        <>
            <div className="bg-transparent border border-[rgba(255,255,255,0.5)] w-[90%] h-[60vh] rounded-lg ">
                <h3 className="text-2xl font-semibold p-4">{title}</h3>
              <hr className="border-[rgba(255,255,255,0.5)]"/>

               {/* The overlapping image effect  */}
                <div className="relative rounded-lg pt-7 ">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-[45vh] object-cover rounded-4xl" />

                  {/* The orange arrow button */}
                    <div className="absolute bottom-0 right-0 bg-[#0A0011] p-3 rounded-ss-4xl">
                        <a href="#" className="bg-pink-600 p-3 rounded-full inline-block hover:bg-opacity-90 transition-colors duration-300">
                            <ArrowUpRight className="w-6 h-6 text-white" />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}
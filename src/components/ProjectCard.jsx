import { ArrowLeft, ArrowRight } from "lucide-react";


export default function ProductCard({ title, imageUrl }) {

    return (
        <>
            <div className="bg-[rgba(255,255,255,0.5)] border border-[rgba(255,255,255,0.5)] w-[90%] h-[55vh] rounded-lg ">

                {/* The image effect  */}
                <div className="relative rounded-sm px-4 pt-2">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-[45vh] object-cover rounded-4xl" />
                </div>

                <div className=" h-15vh">
                    <p className="text-2xl ">{title}</p>
                    <p>Web Development</p>
                </div>
            </div>

        </>
    )
}
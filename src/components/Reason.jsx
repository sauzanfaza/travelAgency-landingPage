import { FaSuitcase } from "react-icons/fa";
import { LiaGlobeSolid } from "react-icons/lia";
import { BiSolidLike } from "react-icons/bi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Reason() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, []);

    return(
        <div
        className="relative min-h-screen w-full bg-cover"
        style={{ backgroundImage: 'url("/assets/latar.jpeg")'}}>
            <div className="absolute inset-0 bg-black/50">
            </div>

            <div
                className="relative flex flex-col min-h-screen items-center justify-center text-center text-white">
                <h1 className="text-lg md:text-xl font-bold">WHY CHOOSE US?</h1>
                <h2 className="text-sm mt-1">A BRAND NAME YOU CAN TRUST AND RELY ON</h2>
                <div 
                    data-aos="fade-up"
                    className="grid grid-cols-3 gap-6 mt-6 px-6">
                    <div className="flex flex-col items-center justify-center p-4">
                        <div className="bg-slate-100 rounded-full w-15 h-15 mb-2 flex items-center justify-center text-3xl text-amber-400">
                        <FaSuitcase />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center text-white">
                            <h1 className="font-semibold">AFFORDABLE PRICE GUARANTEE</h1>
                            <p className="text-[11px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo amet id. Excepturi provident consectetur molestiae dolor id, officia minima!</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4">
                        <div className="bg-slate-100 rounded-full w-15 h-15 mb-2 flex items-center justify-center text-3xl text-amber-400">
                        <LiaGlobeSolid />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center text-white">
                            <h1 className="font-semibold">WIDE VARIETY OF DESTINATION</h1>
                            <p className="text-[11px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo amet id. Excepturi provident consectetur molestiae dolor id, officia minima!</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4">
                        <div className="bg-slate-100 rounded-full w-15 h-15 mb-2 flex items-center justify-center text-3xl text-amber-400">
                        <BiSolidLike />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center text-white">
                            <h1 className="font-semibold">HIGHLY QUALIFIED SERVICE FOR YOU</h1>
                            <p className="text-[11px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo amet id. Excepturi provident consectetur molestiae dolor id, officia minima!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
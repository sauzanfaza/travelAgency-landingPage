import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGooglePlus } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";


export default function Footer() {
    return(
        <footer className="w-full bg-[#04356A] text-white py-6 px-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
                <h1 className="font-bold text-lg">TRAVEL AGENCY</h1>
                <p className="text-sm">© 2024 Travel Agency. All rights reserved.</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                <a href="#" className="text-sm hover:text-orange-500">Privacy Policy</a>
                <a href="#" className="text-sm hover:text-orange-500">Terms of Service</a>
                <a href="#" className="text-sm hover:text-orange-500">Contact Us</a>
                </div>
                <div className="flex gap-4 items-center justify-center">
                    <a href="#" className="text-lg hover:text-orange-500"><FaFacebook /></a>
                    <a href="#" className="text-xl hover:text-orange-500"><AiFillTwitterCircle /></a>
                    <a href="#" className="text-lg hover:text-orange-500"><FaGooglePlus /></a>
                    <a href="#" className="text-2xl hover:text-orange-500"><TiSocialLinkedinCircular /></a>
                    <a href="#" className="text-2xl hover:text-orange-500"><TiSocialYoutubeCircular /></a>
                </div>
            </div>
        </footer>
    )
}
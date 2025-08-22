// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

export default function Navbar() {
return (
    <>
    <header className="w-full fixed top-0 z-50 p-4 px-20 flex items-center justify-between bg-[#04356A] text-white">
        <div className="flex items-center pl-4 font-bold text-lg">
        TRAVEL AGENCY
        </div>

        <nav className="grid gap-2">
            <div className="flex items-center text-sm gap-2">
                <p className="text-orange-500"><IoLocationSharp /></p>
                <p>FIND US</p>
                <input type="text" placeholder="search" className="border border-white rounded-md focus:outline-none p-1"/>
                <button className="text-lg"><IoMdSearch /></button>
            </div>
            <div className="flex items-center justify-center gap-2">
                <p className="text-sm">CALL US TOLL FREE!</p>
                <p className="text-orange-500 tetx-sm">0123456789</p>
            </div>
        </nav>        
    </header>
    <nav className="w-full bg-white mt-26 mb-3">
    <div className="flex items-center justify-center text-black gap-6 text-sm font-semibold">
        <a href="" className="hover:text-[#04356A]">Home</a>
        <a href="" className="hover:text-[#04356A]">Tour</a>
        <a href="" className="hover:text-[#04356A]">About Us</a>
        <a href="" className="hover:text-[#04356A]">Dicover</a>
        <a href="" className="hover:text-[#04356A]">Events</a>
        <a href="" className="hover:text-[#04356A]">Rewards</a>
        <a href="" className="hover:text-[#04356A]">Travel Blog</a>
        <a href="" className="hover:text-[#04356A]">Contact Us</a>
    </div>
</nav>
</>
);
}

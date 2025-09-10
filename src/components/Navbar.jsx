import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <>
    <header className="w-full fixed top-0 z-50 py-2 px-4 md:px-10 flex items-center justify-between bg-[#04356A] text-white">
        <div className="flex items-center font-bold text-md">TRAVEL AGENCY</div>

        {/* Right side (Find us + Search + Phone) */}
        <nav className="hidden md:grid gap-2">
            <div className="flex items-center text-sm gap-2">
            <p className="text-orange-500">
                <IoLocationSharp />
            </p>
            <p>FIND US</p>
            <input
                type="text"
                placeholder="find us"
                className="border border-white rounded-md focus:outline-none p-1 text-black"
            />
            <button className="text-lg">
                <IoMdSearch />
            </button>
            </div>
            <div className="flex items-center justify-end gap-2">
            <p className="text-sm">CALL US TOLL FREE!</p>
            <p className="text-orange-500 text-sm">0123456789</p>
            </div>
        </nav>

        {/* Mobile Right Side (Search bar + input sebelahan) */}
        <div className="flex items-center gap-2 md:hidden">
            <input
            type="text"
            placeholder="find us"
            className="border border-white rounded-md focus:outline-none p-1 text-black text-sm"
            />
            <button className="text-lg">
                <IoMdSearch />
            </button>
        </div>
        </header>

      {/* Second Nav */}
      <nav className="w-full bg-white mt-14 md:mt-20 mb-3">
        <div className="hidden md:flex items-center justify-center text-black gap-6 text-sm font-semibold">
          <a href="" className="hover:text-[#04356A]">Home</a>
          <a href="" className="hover:text-[#04356A]">Tour</a>
          <a href="" className="hover:text-[#04356A]">About Us</a>
          <a href="" className="hover:text-[#04356A]">Discover</a>
          <a href="" className="hover:text-[#04356A]">Events</a>
          <a href="" className="hover:text-[#04356A]">Rewards</a>
          <a href="" className="hover:text-[#04356A]">Travel Blog</a>
          <a href="" className="hover:text-[#04356A]">Contact Us</a>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden justify-between items-center px-4 py-2">
          {/* Hamburger icon kiri */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-black"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Dropdown mobile */}
        {isOpen && (
          <div className="flex flex-col items-start px-4 py-2 gap-2 text-black text-sm font-semibold md:hidden">
            <a href="" className="hover:text-[#04356A]">Home</a>
            <a href="" className="hover:text-[#04356A]">Tour</a>
            <a href="" className="hover:text-[#04356A]">About Us</a>
            <a href="" className="hover:text-[#04356A]">Discover</a>
            <a href="" className="hover:text-[#04356A]">Events</a>
            <a href="" className="hover:text-[#04356A]">Rewards</a>
            <a href="" className="hover:text-[#04356A]">Travel Blog</a>
            <a href="" className="hover:text-[#04356A]">Contact Us</a>
          </div>
        )}
      </nav>
    </>
  );
}

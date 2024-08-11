import { IoMdArrowDropdown } from "react-icons/io";

import { AiFillFacebook } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { PiCrownSimpleFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="gradient text-white py-8 px-[10rem]">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold">Navigation</h1>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">Browse Popular</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">Browse Simulcasts</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">Release Calendar</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">News</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">Games</p>
        </div>
        <div>
          <h1 className="font-bold">Connect With Us</h1>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 flex items-center transition-all">
            <FaYoutube />
             Youtube
          </p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 flex items-center transition-all">
            <AiFillFacebook />
             Facebook
          </p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 flex items-center transition-all">
            <FaTwitter />
             Twitter
          </p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 flex items-center transition-all">
            <FaInstagram />
             Instagram
          </p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 flex items-center transition-all">
            <AiFillTikTok />
             Tiktok
          </p>
        </div>
        <div>
          <h1 className="font-bold">Crunchyroll</h1>
          <p className="text-sm py-1 cursor-pointer hover:text-white hover:underline gap-2 flex items-center text-yellow-400 transition-all">
            <PiCrownSimpleFill />
             Start a Free Trial
          </p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">About</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">Help Center</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">Terms of Use</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">Privacy Policy</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">AdChoices</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">
            Donot sell or share my personal informaiton
          </p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">Cookie Concent Tool</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">Press Inquieries</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">Get the Apps</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">Redeem Gift Cards</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">Jobs</p>
        </div>
        <div>
          <h1 className="font-bold">Account</h1>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">Create Account</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline gap-2 transition-all">Login</p>
          
        </div>
      </div>

      <div className="border border-gray-600 mt-4"></div>
      <div className="flex justify-between w-full h-full mt-5">
        <div className="">
          <p>SONY PICTURES | &copy; Crunchyroll, LLC</p>
        </div>
        <div className="flex items-center justify-center w-[6rem] h-[3rem]  hover:bg-gray-950">
          <IoMdArrowDropdown />
          <p>English</p>
        </div>
      </div>
    </footer>
  );
}

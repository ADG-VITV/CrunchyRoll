import { IoMdArrowDropdown } from "react-icons/io";

import { AiFillFacebook } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { PiCrownSimpleFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="gradient text-white py-8 px-44">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold">Navigation</h1>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">Browse Popular</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">Browse Simulcasts</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">Release Calendar</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">News</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">Games</p>
        </div>
        <div>
          <h1 className="font-bold">Connect With Us</h1>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline flex items-center">
            <FaYoutube />
            &nbsp; Youtube
          </p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline flex items-center">
            <AiFillFacebook />
            &nbsp; Facebook
          </p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline flex items-center">
            <FaTwitter />
            &nbsp; Twitter
          </p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline flex items-center">
            <FaInstagram />
            &nbsp; Instagram
          </p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline flex items-center">
            <AiFillTikTok />
            &nbsp; Tiktok
          </p>
        </div>
        <div>
          <h1 className="font-bold">Crunchyroll</h1>
          <p className="text-sm py-1 cursor-pointer hover:text-white hover:underline flex items-center text-yellow-400">
            <PiCrownSimpleFill />
            &nbsp; Start a Free Trial
          </p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">About</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">Help Center</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">Terms of Use</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">Privacy Policy</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">AdChoices</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">
            Donot sell or share my personal informaiton
          </p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">Cookie Concent Tool</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">Press Inquieries</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">Get the Apps</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">Redeem Gift Cards</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">Jobs</p>
        </div>
        <div>
          <h1 className="font-bold">Account</h1>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">Create Account</p>
          <p className="text-sm text-gray-400 py-1 cursor-pointer hover:text-white hover:underline">Login</p>
          
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

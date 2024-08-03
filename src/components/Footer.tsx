import { IoMdArrowDropdown } from "react-icons/io";

import { AiFillFacebook } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { PiCrownSimpleFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-[#23252b] text-white py-8 px-44">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold">Navigation</h1>
          <p className="text-sm text-gray-400 py-1">Browse Popular</p>
          <p className="text-sm text-gray-400 py-1">Browse Simulcasts</p>
          <p className="text-sm text-gray-400 py-1">Release Calendar</p>
          <p className="text-sm text-gray-400 py-1">News</p>
          <p className="text-sm text-gray-400 py-1">Games</p>
        </div>
        <div>
          <h1 className="font-bold">Connect With Us</h1>
          <p className="text-sm text-gray-400 py-1 flex items-center">
            <FaYoutube />
            &nbsp; Youtube
          </p>
          <p className="text-sm text-gray-400 py-1 flex items-center">
            <AiFillFacebook />
            &nbsp; Facebook
          </p>
          <p className="text-sm text-gray-400 py-1 flex items-center">
            <FaTwitter />
            &nbsp; Twitter
          </p>
          <p className="text-sm text-gray-400 py-1 flex items-center">
            <FaInstagram />
            &nbsp; Instagram
          </p>
          <p className="text-sm text-gray-400 py-1 flex items-center">
            <AiFillTikTok />
            &nbsp; Tiktok
          </p>
        </div>
        <div>
          <h1 className="font-bold">Crunchyroll</h1>
          <p className="text-sm py-1 flex items-center text-yellow-400">
            <PiCrownSimpleFill />
            &nbsp; Start a Free Trial
          </p>
          <p className="text-sm text-gray-400 py-1">About</p>
          <p className="text-sm text-gray-400 py-1">Help Center</p>
          <p className="text-sm text-gray-400 py-1">Terms of Use</p>
          <p className="text-sm text-gray-400 py-1">Privacy Policy</p>
          <p className="text-sm text-gray-400 py-1">AdChoices</p>
          <p className="text-sm text-gray-400 py-1">
            Donot sell or share my personal informaiton
          </p>
          <p className="text-sm text-gray-400 py-1">Cookie Concent Tool</p>
          <p className="text-sm text-gray-400 py-1">Press Inquieries</p>
          <p className="text-sm text-gray-400 py-1">Get the Apps</p>
          <p className="text-sm text-gray-400 py-1">Redeem Gift Cards</p>
          <p className="text-sm text-gray-400 py-1">Jobs</p>
        </div>
        <div>
          <h1 className="font-bold">Account</h1>
          <p className="text-sm text-gray-400 py-1">Create Account</p>
          <p className="text-sm text-gray-400 py-1">Login</p>
          
        </div>
      </div>

      <div className="border border-gray-600"></div>
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

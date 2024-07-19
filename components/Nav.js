"use client";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitcher";

// import img from "../images/icon-moon.svg";
// import Img from "../images/icon-sun.svg";
import { FaMoon } from "react-icons/fa";

import { MdSunny } from "react-icons/md";

function Nav() {
  return (
    <nav className="sticky right-0 left-0 h-[10vh] container mx-auto">
      <div className="flex justify-between cursor-pointer">
        <h1 className="text-[#03A9F5] text-3xl  text-center ">JH</h1>
        <div className="flex gap-2 justify-between mt-3">
          <ThemeSwitch />
          
        </div>
        <ul className="flex gap-5 mt-3 ">
          <li className=" hover:bg-[#03A9F5] rounded-2xl p-3  text-center hover:text-[white]">
            Home
          </li>
          <li className="  hover:bg-[#03A9F5] rounded-2xl p-3  text-center hover:text-[white] ">
            About Me
          </li>
          <li className="   hover:bg-[#03A9F5] rounded-2xl p-3  text-center hover:text-[white]">
            Skills
          </li>
          <li className="   hover:bg-[#03A9F5] rounded-2xl p-3  text-center hover:text-[white] ">
            Contact Me
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

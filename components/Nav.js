"use client";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitcher";
import Link from 'next/link'
import { usePathname } from 'next/navigation'


// import img from "../images/icon-moon.svg";
// import Img from "../images/icon-sun.svg";
import { FaMoon } from "react-icons/fa";

import { MdSunny } from "react-icons/md";

function Nav() {
  return (
    <nav className="sticky  top-0 right-0 left-0 h-[10vh]  p- bg-[#03A9F5] mb-4">
      <div className="container mx-auto flex justify-between items-center cursor-pointer">
        <h1 className="text-[white] text-3xl justify-center text-center font-bold ">JH</h1>
        
        <ul className="flex gap-5 mt-3 ">
          <li className=" hover:bg-[black] rounded-2xl p-3 text-white   text-center hover:text-[white]">
            Home
          </li>
         <Link href="" > <li className="  hover:bg-[black] text-white rounded-2xl p-3  text-center hover:text-[white] ">
            About Me
          </li>
          </Link>
          <li className="   hover:bg-[black] rounded-2xl p-3 text-white  text-center hover:text-[white]">
            Skills
          </li>
          <li className="   hover:bg-[black] rounded-2xl p-3 text-white  text-center hover:text-[white] ">
            Contact Me
          </li>
        </ul>
        <div className="flex gap-2 justify-between mt-3">
          <ThemeSwitch />
          
        </div>
      </div>
    </nav>
  );
}

export default Nav;

// import React from "react";
// const Nav = () => {
function Nav(){
  return (
    <nav className="sticky right-0 left-0 h-[10vh] container mx-auto">
      <div className="flex justify-between cursor-pointer">
        <h1 className="text-[#03A9F5] text-3xl  text-center ">JH</h1>
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
};

export default Nav;

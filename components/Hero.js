import Image from "next/image";
// import img from "../images/ave-removebg-preview.png";
import img from "../images/Hellen.jpg";
// import { HashLink as Link } from "react-router-hash-link";

import Img from "../images/istockphoto-1288814782-612x612-removebg-preview.png";
function Hero() {
  return (
    <section>
      <div className="container mx-auto ">
        <div className="flex justify-center items-center flex-col">
          <Image className="w-[10%] h-[30%] rounded-full" src={img} alt="An avatar image to represent Hellen James" />
          
          <div>
            <h2 className="text-3xl text-black font-bold">WElCOME.</h2>
            <div className="flex  justify-center items-center ">
              <Image src={Img} width={70} alt="A wahing hand emoji"/>

              <p className="text-2xl ">I'm Hellen James</p>
            </div>
            <p className="text-[#03A9F5] text-2xl font-semibold my-4">
              A Full Stack Developer
            </p>
          </div>
          <div className="flex-1 flex gap-4 ">
            <button className="border rounded-full py-4 px-[4em] bg-[#03A9F5] text-[white] hover:bg-[black]">
              Download Resume
            </button>
          <button className="border border-[#03A9F5] rounded-full py-4 px-[4em]  text-[#03A9F5] font-bold hover:bg-[black] hover:border-white">
              My Projects
            </button>
             
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;

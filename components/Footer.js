import Image from "next/image";
import img from "../images/instagram.png";
import Img from "../images/twitter.png";
import Im from "../images/linkedin.png";

function Footer() {
  return (
    <section className="bg-gray-400 mt-7">
      <div className="container mx-auto flex justify-around">
        <div>
          <h2 className="text-[#03A9F5] text-2xl  font-bold ">JH</h2>
          <p className="">My Portfolio Defines Who Iam </p>
        </div>
        <div>
          <h2 className="text-2xl text-[#03A9F5] m-2 font-bold ">
            Quick Links
          </h2>
          <ul className="cursor-pointer ">
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Contact Me</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl text-[#03A9F5] m-2 font-bold  ">
            Follow Me For More Updates
          </h2>
          <div className="flex gap-5 justify-center cursor-pointer">
          <Image src={img} width={30} alt="A wahing hand emoji" />
          <Image src={Img} width={30} alt="A wahing hand emoji" />
          <Image src={Im} width={30} alt="A wahing hand emoji" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;

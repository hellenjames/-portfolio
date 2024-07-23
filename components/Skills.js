import Image from "next/image";
import img1 from "../images/html.png";
import img2 from "../images/CSS.png";
import img3 from "../images/responsive.jpeg";
import img4 from "../images/js.jpeg";
import img5 from "../images/figma.png";
import img6 from "../images/react.png";
import img7 from "../images/python.png";
import img8 from "../images/react native.jpeg";

function Skills() {
  return (
    <section className="container mx-auto">
      <h2 className="text-[#03A9F5] text-3xl flex justify-center flex-1 mt-8">
        SKILLS
      </h2>
      <div className="flex justify-center items-center gap-[6em]">
        <div className="flex justify-around gap-[3em] flex-col cursor-pointer">
          <div className="flex justify-between gap-[6em] my-5">
            <Image
              className=" border border-[#03A9F5] shadow-md p-5 rounded-xl"
              src={img1}
              width={150}
              alt="A wahing hand emoji"
            />
            <Image
              className=" border border-[#03A9F5] shadow-md p-5 rounded-xl"
              src={img2}
              width={150}
              alt="A wahing hand emoji"
            />
            <Image
              className=" border border-[#03A9F5] shadow-md p-5 rounded-xl"
              src={img3}
              width={150}
              alt="A wahing hand emoji"
            />
            <Image
              className=" border border-[#03A9F5] shadow-md p-5 rounded-xl"
              src={img4}
              width={150}
              alt="A wahing hand emoji"
            />
          </div>
          <div className="flex justify-between gap-6">
            <Image
              className=" border border-[#03A9F5] shadow-md p-5 rounded-xl"
              src={img5}
              width={150}
              alt="A wahing hand emoji"
            />
            <Image
              className=" border border-[#03A9F5] shadow-md p-5 rounded-xl"
              src={img6}
              width={150}
              alt="A wahing hand emoji"
            />
            <Image
              className=" border border-[#03A9F5] shadow-md p-5 rounded-xl"
              src={img7}
              width={150}
              alt="A wahing hand emoji"
            />
            <Image
              className=" border border-[#03A9F5] shadow-md p-5 rounded-xl"
              src={img8}
              width={150}
              alt="A wahing hand emoji"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;

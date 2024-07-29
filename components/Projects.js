import Image from "next/image";
import img from "../images/homepage.png";
import Img from "../images/hom.png";
import Im from "../images/design.png";



function Projects() {
  return (
    <section id="projects" className="">
      <div className="container mx-auto">
        <h2 className="text-[#03A9F5] text-3xl flex justify-center flex-1 my-8">
          PROJECTS
        </h2>
        <p className="flex justify-center text-center my-4">
          Here you will find some of the personal and group projects that I
          created with each project containing its own case study
        </p>
        <div className="flex justify-center gap-6 ">
          <div className="flex flex-col my-4">
            <Image
              className=" border border-[#03A9F5] shadow-md"
              src={img}
              width={400}
              height={400}
              alt="Screenshot for the save life project"
            />
          
          <div className="flex justify-between gap-4 my-4">
            <button className=" border border-[#03A9F5]  text-[#03A9F5] font-bold hover:bg-[black] hover:border-white w-30px  h-5 flex justify-center items-center text-center rounded-br-full p-5 cursor-pointer">
              <a href="https://github.com/hellenjames/save-life-care">
                GitHub Link
              </a>
            </button>

            <button className="border rounded-br-full  bg-[#03A9F5] font-bold border-[black] text-[white] hover:bg-[black] w-50px  h-5 flex justify-center items-center text-center p-5 cursor-pointer ">
              <a href=" https://hellenjames.github.io/save-life-care/">
                Live Link
              </a>
            </button>
          </div>
          </div>
          <div className="flex flex-col my-4">
          <Image
            className=" border border-[#03A9F5] shadow-md"
            src={Img}
            width={600}
            height={600}
            alt="Screenshot for the skill master project"
          />
<div className="flex justify-between gap-4 my-4">
          <button className=" border border-[#03A9F5]  text-[#03A9F5] font-bold hover:bg-[black] hover:border-white w-30px  h-5 flex justify-center items-center text-center rounded-br-full p-5 cursor-pointer">
            <a href="https://github.com/hellenjames/skill-master">
              GitHub Link
            </a>
          </button>

          <button className="border rounded-br-full  bg-[#03A9F5] font-bold border-[black] text-[white] hover:bg-[black] w-50px  h-5 flex justify-center items-center text-center p-5 cursor-pointer ">
            <a href=" https://hellenjames.github.io/skill-master/">
              Live Link
            </a>
          </button>
          </div>
        </div>

        <div className="flex flex-col my-4">
          <Image
            className=" border border-[#03A9F5] shadow-md"
            src={Im}
            width={600}
            height={600}
            alt="Screenshot for the skill master project"
          />
<div className="flex justify-between gap-4 my-4">
          <button className=" border border-[#03A9F5]  text-[#03A9F5] font-bold hover:bg-[black] hover:border-white w-30px  h-5 flex justify-center items-center text-center rounded-br-full p-5 cursor-pointer">
            <a href="https://github.com/hellenjames/eternity-design">
              GitHub Link
            </a>
          </button>

          <button className="border rounded-br-full  bg-[#03A9F5] font-bold border-[black] text-[white] hover:bg-[black] w-50px  h-5 flex justify-center items-center text-center p-5 cursor-pointer ">
            {/* <a href=" https://hellenjames.github.io/save-life-care/"> */}
              Live Link
            {/* </a> */}
          </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;

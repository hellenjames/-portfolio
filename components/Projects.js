import Image from "next/image";
import img from "../images/homepage.png";

function Projects() {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-[#03A9F5] text-3xl flex justify-center flex-1 my-8">
          PROJECTS
        </h2>
        <p className="flex justify-center text-center my-4">Here you will find some of the personal and group projects that I created with each project containing its own case study
</p>
        <div className="flex justify-between ">
          <Image className="bg-gray-200" src={img} width={400} height={400} alt="Screenshot for the save life project" />
          {/* <Image
            className="border shadow-gray-200 bg-[#03A9F5] w-40 h-52"
            src="./next/images/images/homepage.png"
          /> */}
          {/* <Image
            className="border shadow-xl bg-[#03A9F5] w-40 h-52"
            src="/homepage.png"
          /> */}
        </div>
      </div>
    </section>
  );
}
export default Projects;


import Image from "next/image"; 
function Hero() {
  return (
    <section>
      <div className="container mx-auto ">
        <div className="flex justify-center items-center flex-col">
        <Image 
                    src="/next/images/images.png"
                    height="50"
                    width="50"
                />           <div>
            <h2 className="text-3xl text-black font-bold">WElCOME.</h2>
          
            <p className=" flex-1  text-2xl">I'm Hellen James</p>
            <p className="text-[#03A9F5] text-2xl font-semibold my-4">
              A Full Stack Developer
            </p>
          </div>
          <div className="flex-1 flex gap-4 ">
            <button className="border rounded-full py-4 px-[4em] bg-[#03A9F5] text-[white] hover:bg-[black]">
              Download Resume
            </button>
            <button className="border border-[#03A9F5] rounded-full py-4 px-[4em]  text-[#03A9F5] font-bold hover:bg-[black] hpver:border-white">
              My Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;

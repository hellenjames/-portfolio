import { IoCheckmarkSharp } from "react-icons/io5";

function successfully() {
  return (
    <section className="container mx-auto">
      <div className="bg-[#03A9F5] mt-5 flex flex-col justify-center items-center w-[50%]">
        <p className="">successfully sent</p>
        <p className="bg-[white] rounded-full p-3 text-blue-700 font-bold">
        < IoCheckmarkSharp />
        </p>
      </div>
    </section>
  );
}
export default successfully;

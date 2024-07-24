import { IoCheckmarkSharp } from "react-icons/io5";

function Successfully({showSuccessPop,setShowSuccessPop}) {

  return (
    <section className="container mx-auto absolute w-[20%] success-box">
      <div className="bg-[#03A9F5] mt-5 flex flex-col justify-center items-center rounded-xl">
        <p className="text-1xl">successfully sent</p>
        <p className="bg-[white] rounded-full p-3 text-blue-400 font-bold">
          <IoCheckmarkSharp />
        </p>
        <p className="w-[40%]">
          Your message has been sent.I will get to you as soon as possible.
        </p>
        <button className="border border-[black] rounded-full py-[13px] px-[3em] mt-2 font-bold hover:bg-[black] hover:border-white cursor-pointer" onClick={()=>setShowSuccessPop(false)}>
          OK
        </button>
      </div>
    </section>
  );
}
export default Successfully;

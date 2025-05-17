import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function App() {
  const [count1, setCount1] = useState(0);

  const handleVote1 = () => {
    setCount1(count1 + 1);
    toast.success("Waaxaad u codeysay Hassan Sheikh Mohamud!");
  };

  const handleVote2 = () => {
    setCount1(count1 + 1);
    toast.success("Waaxaad u codeysay Abdirahman Abdishakur Warsame, balse Hassan ayaa codka qaatay!");
  };

  return (
    <div className="bg-[#003049] sm:h-[800px] h-full py-2 text-white font-[#Montserrat]">
      <h1 className="sm:text-4xl text-2xl font-semibold text-center capitalize pt-15">Wareegii ugu danbeeyay Ee Doorashada Dalka Somalia</h1>
      <div className="sm:flex flex-col sm:flex-row justify-center mt-20 sm:gap-80 ml-10 ">
        
        <div className="bg-white w-[300px] h-[460px] rounded-2xl my-5 sm:my-0">
          <img className="w-[300px] h-[300px] rounded-t-2xl" src="src/images/images (6).jpeg" alt="Hassan Sheikh Mohamud"/>
          <h1 className="text-[#003049] text-[20px] font-semibold pl-1"> Hassan Sheikh Mohamud</h1>
          <h1 className="text-3xl font-black text-[#003049] text-center my-5">{count1}</h1>
          <div className="flex justify-center mt-6">
            <button onClick={handleVote1}  className="bg-[#003049] py-1 pb-2 px-10 cursor-pointer text-2xl rounded-2xl " >  Vot </button>
          </div>
        </div>

        {/* Abdirahman Abdishakur Warsame */}
        <div className="bg-white w-[300px] h-[460px] rounded-2xl">
          <img className="w-[300px] h-[300px] rounded-t-2xl" src="src/images/images.webp" alt="Abdirahman Abdishakur Warsame" />
          <h1 className="text-[#003049] text-[18px] font-semibold pl-1"> Abdirahman Abdishakur Warsam</h1>
          <h1 className="text-3xl font-black text-[#003049] text-center my-5">0</h1>
          <div className="flex justify-center mt-6">
            <button onClick={handleVote2} className="bg-[#003049] py-1 pb-2 px-10 cursor-pointer text-2xl rounded-2xl" > Vote
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

import type { HomeProps } from "../src/assets/types";
import PrintIcon from "@iconify-react/material-symbols/print";

const ResultsPage = ({ isSidebarCollapsed }: HomeProps) => {
  return (
    <div
      className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"} pt-15`}
    >
      <div className="backgroundColor1 min-h-screen">
        <div className="pl-3 pt-5 pr-3">
          <p className="text-[#B8B8B8] font-bold text-sm">
            Student Dashboard  / {" "}
            <span className="text-black text-xs">Results</span>
          </p>
          <div className="flex justify-end gap-3">
            <div className="flex gap-3 border rounded-2xl p-1 ">
              <button className="text-xs bg-[#EBF3FF] font-bold w-20 rounded-2xl py-1">
                All
              </button>
              <button className="text-xs font-bold w-20 rounded-2xl py-1">
                1 <sup>st</sup> term
              </button>
              <button className="text-xs font-bold w-20 rounded-2xl py-1">
                2 <sup>nd</sup> term
              </button>
              <button className="text-xs font-bold w-20 rounded-2xl py-1">
                3 <sup>rd</sup>term
              </button>
            </div>
          </div>
          <div className="mt-3">
            <div className="py-5 px-10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-xs">Academic Result </p>
                  <p className="font-bold text-[8px] textColor6 mt-0.5">
                    Current Academic Results for Student
                  </p>
                </div>
                <p className="font-bold text-xs textColor6 ">
                  Academic Year : 2023/2024 | Academic Term : 2{" "}
                </p>
                <p className="flex items-center gap-2 text-xs textColor6">
                  {" "}
                  <span>
                    {" "}
                    <PrintIcon className="h-4 text-blue-800" />{" "}
                  </span>{" "}
                  Print Results
                </p>
              </div>
              <div className="grid grid-cols-12 bg-[#468DFF] mt-7 h-10 rounded-md items-center mb-3">
                <div className="col-span-2">
                  <p className="text-white font-bold text-[10px] text-center ">
                    Subject code
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-white font-bold text-[10px] text-center ">
                    Subject
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-white font-bold text-[10px] text-center ">
                    Class Score (50)
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-white font-bold text-[10px] text-center ">
                    Exam Score (50)
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-white font-bold text-[10px] text-center ">
                    Total Marks (100)
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-white font-bold text-[10px] text-center ">
                    Grade
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-white font-bold text-[10px] text-center ">
                    Position
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-white font-bold text-[10px] text-center ">
                    Remarks
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 bg-[#EBF3FF] mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">CSM 252</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">English Language</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> 80</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> A</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> 1st</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> Remarks</p>
                </div>
              </div>
              <div className="grid grid-cols-12 mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">CSM 252</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">English Language</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> 80</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> A</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> 1st</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> Remarks</p>
                </div>
              </div>
              <div className="grid grid-cols-12 bg-[#EBF3FF] mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">CSM 252</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">English Language</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> 80</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> A</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> 1st</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> Remarks</p>
                </div>
              </div>
              <div className="grid grid-cols-12 mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">CSM 252</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">English Language</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> 80</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> A</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> 1st</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> Remarks</p>
                </div>
              </div>
              <div className="grid grid-cols-12 bg-[#EBF3FF] mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">CSM 252</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">English Language</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> 80</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> A</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> 1st</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> Remarks</p>
                </div>
              </div>
              <div className="grid grid-cols-12 mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">CSM 252</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">English Language</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> 80</p> 
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> A</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> 1st</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> Remarks</p>
                </div>
              </div>
              <div className="grid grid-cols-12 bg-[#EBF3FF] mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">CSM 252</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">English Language</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> 80</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> A</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> 1st</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> Remarks</p>
                </div>
              </div>
              <div className="grid grid-cols-12 mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">CSM 252</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">English Language</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center ">40</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> 80</p>
                </div>
                <div className="col-span-1">
                  <p className="  text-[8px] text-center "> A</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> 1st</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center "> Remarks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;

import type { HomeProps } from "../src/assets/types";
const SchedulePage = ({ isSidebarCollapsed }: HomeProps) => {
  return (
    <div
      className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"} pt-15`}
    >
      <div className="backgroundColor1 min-h-screen">
        <div className="pl-3 pt-5 pr-3">
          <p className="text-[#B8B8B8] font-bold text-sm">
            Student Dashboard  / {" "}
            <span className="text-black text-xs">Schedule and Time Table</span>
          </p>
          <div className="flex justify-end gap-3">
            <div className="flex gap-3 border rounded-2xl p-1 ">
              <button className="text-xs bg-[#EBF3FF] font-bold w-20 rounded-2xl py-1">
                All
              </button>
              <button className="text-xs font-bold w-20 rounded-2xl py-1">
                Schedule
              </button>
              <button className="text-xs font-bold w-20 rounded-2xl py-1">
                Time Table
              </button>
            </div>
          </div>
          <div className="mt-3">
            <div className="py-5 px-10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl">
              <p className="font-bold text-xs">Junior High School</p>
              <p className="font-bold text-[8px] textColor6 mt-0.5">
                JHS is more focused and prepares students for the BECE (Basic
                Education Certificate Examination).
              </p>
              <div className="grid grid-cols-12 bg-[#468DFF] mt-7 h-10 rounded-md items-center mb-3">
                <div className="col-span-2">
                  <p className="text-white font-bold text-[10px] text-center ">
                    Time Slot
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-white font-bold text-[10px] text-center ">
                    Monday
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-white font-bold text-[10px] text-center ">
                    Tuesday
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-white font-bold text-[10px] text-center ">
                    Wednesday
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-white font-bold text-[10px] text-center ">
                    Thursday
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-white font-bold text-[10px] text-center ">
                    Friday
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 bg-[#EBF3FF] mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    7:00 - 7:30 AM (30 min)
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    Assembly / Registration
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    Assembly / Registration
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
              </div>
              <div className="grid grid-cols-12 mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    7:30 - 8:20 AM (50 min)
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">English</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Science</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Mathematics</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Social Studies</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    {" "}
                    Ghanaian Language
                  </p>
                </div>
               
              </div>
              <div className="grid grid-cols-12 bg-[#EBF3FF] mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    7:00 - 7:30 AM (30 min)
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    Assembly / Registration
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    Assembly / Registration
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
              </div>
              <div className="grid grid-cols-12 mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    7:30 - 8:20 AM (50 min)
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">English</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Science</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Mathematics</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Social Studies</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    {" "}
                    Ghanaian Language
                  </p>
                </div>
               
              </div>
              <div className="grid grid-cols-12 bg-[#EBF3FF] mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    7:00 - 7:30 AM (30 min)
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    Assembly / Registration
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    Assembly / Registration
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
              </div>
              <div className="grid grid-cols-12 mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    7:30 - 8:20 AM (50 min)
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">English</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Science</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Mathematics</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Social Studies</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    {" "}
                    Ghanaian Language
                  </p>
                </div>
               
              </div>
              <div className="grid grid-cols-12 bg-[#EBF3FF] mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    7:00 - 7:30 AM (30 min)
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    Assembly / Registration
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    Assembly / Registration
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
              </div>
              <div className="grid grid-cols-12 mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    7:30 - 8:20 AM (50 min)
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">English</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Science</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Mathematics</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Social Studies</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    {" "}
                    Ghanaian Language
                  </p>
                </div>
               
              </div>
              <div className="grid grid-cols-12 bg-[#EBF3FF] mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    7:00 - 7:30 AM (30 min)
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    Assembly / Registration
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    Assembly / Registration
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Career Technology</p>
                </div>
              </div>
              <div className="grid grid-cols-12 mt-2 h-10 rounded-md items-center">
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    7:30 - 8:20 AM (50 min)
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">English</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Science</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Mathematics</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">Social Studies</p>
                </div>
                <div className="col-span-2">
                  <p className="  text-[8px] text-center ">
                    {" "}
                    Ghanaian Language
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
    </div>
  );
};

export default SchedulePage;

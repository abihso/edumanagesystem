/* eslint-disable no-irregular-whitespace */
import ArrowDropdownIcon from "@iconify-react/nrk/arrow-dropdown";
import Images from "../src/assets/images";
import type { HomeProps } from "../src/assets/types";
import { SearchIcon } from "lucide-react";
const HomePage = ({ isSidebarCollapsed }: HomeProps) => {
  return (
    <>
      {/* Mobile view */}
      <div className="lg:hidden px-4 py-3 pb-24 overflow-y-auto mt-15">
        <p className="text-[#B8B8B8] font-bold text-xs">
          Student Dashboard / <span className="text-black">Overview</span>
        </p>

        <div className="gradient5 rounded-2xl p-4 mt-3 relative overflow-hidden">
          <div>
            <p className="font-bold">
              Welcome back, <span>Abih Solo</span>
            </p>
            <p className="text-[10px] w-2/3 font-semibold mt-1">
              you've completed 85% of your homeworks goals this month!
            </p>
          </div>
          <div className="absolute right-0  bottom-0 -top-6">
            <img className="h-24 opacity-80" src={Images[3]} alt="" />
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center bg-white rounded-xl px-3 py-2 shadow-sm">
            <SearchIcon className="h-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search courses, assignments..."
              className="flex-1 ml-2 text-sm outline-none"
            />
          </div>
        </div>

        <div className="gradient6 rounded-2xl p-4 mt-4">
          <p className="font-bold">Academic Performance</p>
          <div className="flex justify-center my-3">
            <div className="w-32 h-32 rounded-full gradient7 flex items-center justify-center">
              <div className="w-24 h-24 bg-[#EFEFEF] rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <p className="font-bold text-2xl textColor1">78%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold bg-[#D2DEFF] px-2 py-1 rounded-md text-xs">
              Current GPA: <span className="textColor6">3.7</span>
            </p>
            <p className="text-[10px] font-bold text-[#00C06D]">
              ↑ +0.2 from last sem
            </p>
          </div>
        </div>

        {/*.*/}
        <div className="flex gap-3 overflow-x-auto mt-4 pb-2 scrollbar-hide">
          <div className="min-w-70 bg-white rounded-2xl p-3 shadow-sm">
            <div className="flex justify-between items-center">
              <p className="font-bold text-sm">Latest Notice</p>
              <p className="text-[#3884FF] text-xs font-bold">View all</p>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="w-12 h-12 bg-[#D9D9D9] rounded-xl flex items-center justify-center">
                <img src={Images[4]} className="h-8 rounded-lg" alt="" />
              </div>
              <div>
                <p className="font-bold text-sm">@Accountant</p>
                <p className="text-[11px] text-gray-500">
                  +5% increase in next academic year's fees
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-70 bg-white rounded-2xl p-3 shadow-sm">
            <p className="font-bold text-sm">AI Recommendation</p>
            <div className="bg-[#EBF3FF] rounded-xl p-2 mt-2">
              <p className="font-bold text-xs bg-[#D2DEFF] inline-block px-2 py-0.5 rounded">
                Study Suggestion
              </p>
              <p className="text-[10px] mt-1">
                Focus on Algebra this week based on your recent performance
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-3 mt-4 shadow-sm">
          <p className="font-bold">Your Courses</p>
          <p className="text-[9px] textColor6">
            Based on current GES curriculum
          </p>
          {[
            {
              name: "Mathematics",
              code: "MATH303",
              teacher: "Sir Antwi Boasiako",
              progress: 40,
              lessons: "7/23",
            },
            {
              name: "Integrated Science",
              code: "SCS303",
              teacher: "Sir Kusi Boasiako",
              progress: 20,
              lessons: "3/13",
            },
            {
              name: "Creative and Perform Art",
              code: "CPA356",
              teacher: "Madam Lizy",
              progress: 78,
              lessons: "19/65",
            },
            {
              name: "Religious and Moral Education",
              code: "RME356",
              teacher: "Madam Vida",
              progress: 83,
              lessons: "83/100",
            },
          ].map((course, idx) => (
            <div key={idx} className="bg-[#EBF3FF] rounded-xl p-3 mt-3">
              <p className="font-bold text-sm">{course.name}</p>
              <div className="flex justify-between items-center">
                <p className="text-xs">
                  {course.code} | {course.teacher}
                </p>
                <p className="text-[10px] textColor6">
                  {course.lessons} Lessons
                </p>
              </div>
              <progress
                value={course.progress}
                max={100}
                className="w-full rounded-full h-2 mt-2
                  [&::-webkit-progress-bar]:bg-gray-200 
                  [&::-webkit-progress-value]:bg-[#2F88FF]
                  [&::-webkit-progress-value]:rounded-full"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-[#F3FCF4] rounded-2xl p-3">
            <p className="font-bold text-sm">Linked Teachers</p>
            <div className="flex items-center gap-2 mt-2 bg-[#D9D9D9] p-2 rounded-xl">
              <img src={Images[2]} className="h-8 w-8 rounded-full" alt="" />
              <div>
                <p className="text-[11px] font-bold">Mr Godfred</p>
                <p className="text-[9px]">English</p>
              </div>
            </div>
          </div>
          <div className="gradient8 rounded-2xl p-3">
            <p className="font-bold text-sm">Attendance</p>
            <div className="flex justify-between mt-2">
              <span className="text-xs">Today</span>
              <div className="w-4 h-4 bg-[#64E727] rounded"></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs">Tuesday</span>
              <div className="w-4 h-4 bg-[#64E727] rounded"></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs">Friday</span>
              <div className="w-4 h-4 bg-[#F41616] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Window view */}
      <div
        className={`hidden lg:block flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"} pt-15`}
      >
        <div className="backgroundColor1 min-h-screen">
          <div className="pl-3 pt-5 pr-3">
            <p className="text-[#B8B8B8] font-bold text-sm">
              Student Dashboard  / {" "}
              <span className="text-black text-xs">Overview</span>
            </p>
            <div className="grid grid-cols-12 mt-3 gap-4">
              <div className="col-span-8">
                <div className="lg:h-32 rounded-3xl gradient5 flex justify-between py-5 px-5 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] ">
                  <div>
                    <p className="font-[1000] text-xl xl:text-3xl">
                      Welcome back, <span>Abih Solo</span>
                    </p>
                    <p className="text-xs font-bold mt-1 wrap-break-word ">
                      you've completed 85% of your homeworks goals this month!
                      keep going to reach and improve even more
                    </p>
                  </div>
                  <div>
                    <img className="h-50 -mt-20" src={Images[3]} alt="" />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-4">
                  <div className="col-span-6 rounded-2xl min-h-40 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]">
                    <div className="pl-3 pt-2 pb-3">
                      <p className="font-bold">Post for Notice</p>
                      <p className="text-[10px] text-[#AEAEAE]">
                        Overview of published and scheduled events in school
                      </p>
                    </div>
                    <hr className="text-[#AEAEAE]" />
                    <div className="px-3 pb-3">
                      <div className="flex justify-between gap-1 mt-3">
                        <div className="flex gap-2 w-55">
                          <button className="py-3 border-b-2 textColor3 font-bold text-xs w-full">
                            Latest post
                          </button>
                          <button className="py-3 textColor6 font-bold text-xs w-full">
                            Latest post
                          </button>
                        </div>
                        <p className="font-bold text-2xl">...</p>
                      </div>
                      <div className="flex gap-3 mt-4">
                        <div className="w-30 h-20 flex items-center">
                          <p className="-rotate-90 -ml-5 font-bold textColor6 text-xs text-center w-full">
                            Dec 25
                          </p>
                          <div className="w-full -ml-7 bg-[#D9D9D9] h-full rounded-2xl flex justify-center items-center">
                            <img
                              src={Images[4]}
                              className="h-12 rounded-2xl"
                              alt=""
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-lg mt-2">@Accountant</p>
                          <p className="text-[10px]">
                            +5% increase in next accademic year's fees
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-4">
                        <div className="w-30 h-20 flex items-center">
                          <p className="-rotate-90 -ml-5 font-bold textColor6 text-xs text-center w-full">
                            Dec 25
                          </p>
                          <div className="w-full -ml-7 bg-[#D9D9D9] h-full rounded-2xl flex justify-center items-center">
                            <img
                              src={Images[4]}
                              className="h-12 rounded-2xl"
                              alt=""
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-lg mt-2">@Accountant</p>
                          <p className="text-[10px]">
                            +5% increase in next accademic year's fees
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-4">
                        <div className="w-30 h-20 flex items-center">
                          <p className="-rotate-90 -ml-5 font-bold textColor6 text-xs text-center w-full">
                            Dec 25
                          </p>
                          <div className="w-full -ml-7 bg-[#D9D9D9] h-full rounded-2xl flex justify-center items-center">
                            <img
                              src={Images[4]}
                              className="h-12 rounded-2xl"
                              alt=""
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-lg mt-2">@Accountant</p>
                          <p className="text-[10px]">
                            +5% increase in next accademic year's fees
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 rounded-2xl min-h-40 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]">
                    <div className="pl-3 pt-2 pb-3">
                      <p className="font-bold">
                        AI Personalized Recommendations
                      </p>
                      <p className="text-[10px] text-[#AEAEAE]">
                        Machine learning for your academic success and carreer
                        path
                      </p>
                    </div>
                    <hr className="text-[#AEAEAE]" />
                    <div className="p-5">
                      <div className="bg-[#EBF3FF] h-20 rounded-2xl px-5 py-2">
                        <div className="flex gap-3 items-center">
                          <p className="text-xs font-bold bg-[#D2DEFF] w-44 rounded-md xl:py-1 px-2">
                            Study Suggestion
                          </p>
                          <p className="text-xs">87% confidence</p>
                        </div>
                        <p className=" text-[7px] xl:text-[10px] mt-2">
                          Lorem ipsum, dolor sit amet io quis eveniet asperiores
                          nisi fuga deleniti placeat non to
                        </p>
                      </div>
                      <div className="bg-[#EBF3FF] h-20 rounded-2xl mt-3 px-5 py-2">
                        <div className="flex gap-3 items-center">
                          <p className="text-xs font-bold bg-[#D2DEFF] w-44 rounded-md xl:py-1 px-2">
                            Career Path
                          </p>
                          <p className="text-xs">87% confidence</p>
                        </div>
                        <p className=" text-[7px] xl:text-[10px] mt-2">
                          Lorem ipsum, dolor sit amet io quis eveniet asperiores
                          nisi fuga deleniti placeat non to
                        </p>
                      </div>
                      <div className="bg-[#EBF3FF] h-20 mt-3 rounded-2xl px-5 py-2">
                        <div className="flex gap-3 items-center">
                          <p className="text-xs font-bold bg-[#D2DEFF] w-44 rounded-md xl:py-1 px-2">
                            Learning Resource
                          </p>
                          <p className="text-xs">87% confidence</p>
                        </div>
                        <p className=" text-[7px] xl:text-[10px] mt-2">
                          Lorem ipsum, dolor sit amet io quis eveniet asperiores
                          nisi fuga deleniti placeat non to
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 min-h-40 mt-7 mb-10 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]">
                  <p className="font-bold">Your Courses</p>
                  <p className="text-[10px] textColor6">
                    Courses are based on the current GES curriculum for all
                    Basic Schools
                  </p>
                  <div className="bg-[#EBF3FF] px-5 py-3 rounded-2xl mt-3">
                    <p className="font-bold">Mathematics</p>
                    <div className="flex justify-between pr-3">
                      <p className="text-sm">MATH303 | Sir Antwi Boasiako</p>
                      <p className="text-xs textColor6">7/23 Lessons</p>
                    </div>
                    <progress
                      value={40}
                      max={100}
                      className="w-full rounded-3xl h-2
                          [&::-webkit-progress-bar]:bg-gray-200 
                          [&::-webkit-progress-value]:bg-[#2F88FF]
                          [&::-webkit-progress-value]:rounded-3xl
                          [&::-moz-progress-bar]:bg-[#2F88FF]
                          [&::-moz-progress-bar]:rounded-3xl"
                    />
                  </div>
                  <div className="bg-[#EBF3FF] px-5 py-3 rounded-2xl mt-3">
                    <p className="font-bold">Integrated Science</p>
                    <div className="flex justify-between pr-3">
                      <p className="text-sm">SCS303 | Sir Kusi Boasiako</p>
                      <p className="text-xs textColor6">3/13 Lessons</p>
                    </div>
                    <progress
                      value={20}
                      max={100}
                      className="w-full rounded-3xl h-2
                          [&::-webkit-progress-bar]:bg-gray-200 
                          [&::-webkit-progress-value]:bg-[#2F88FF]
                          [&::-webkit-progress-value]:rounded-3xl
                          [&::-moz-progress-bar]:bg-[#2F88FF]
                          [&::-moz-progress-bar]:rounded-3xl"
                    />
                  </div>
                  <div className="bg-[#EBF3FF] px-5 py-3 rounded-2xl mt-3">
                    <p className="font-bold">Creative and Perform Art</p>
                    <div className="flex justify-between pr-3">
                      <p className="text-sm">CPA356 | Madam Lizy</p>
                      <p className="text-xs textColor6">19/65 Lessons</p>
                    </div>
                    <progress
                      value={78}
                      max={100}
                      className="w-full rounded-3xl h-2
                          [&::-webkit-progress-bar]:bg-gray-200 
                          [&::-webkit-progress-value]:bg-[#2F88FF]
                          [&::-webkit-progress-value]:rounded-3xl
                          [&::-moz-progress-bar]:bg-[#2F88FF]
                          [&::-moz-progress-bar]:rounded-3xl"
                    />
                  </div>
                  <div className="bg-[#EBF3FF] px-5 py-3 rounded-2xl mt-3">
                    <p className="font-bold">Religious and Moral Education</p>
                    <div className="flex justify-between pr-3">
                      <p className="text-sm">RME356 | Madam Vida</p>
                      <p className="text-xs textColor6">83/100 Lessons</p>
                    </div>
                    <progress
                      value={83}
                      max={100}
                      className="w-full rounded-3xl h-2
                          [&::-webkit-progress-bar]:bg-gray-200 
                          [&::-webkit-progress-value]:bg-[#2F88FF]
                          [&::-webkit-progress-value]:rounded-3xl
                          [&::-moz-progress-bar]:bg-[#2F88FF]
                          [&::-moz-progress-bar]:rounded-3xl"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4 pr-4 ">
                <div className="w-full h-110 gradient6 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] p-8 rounded-3xl">
                  <p className="font-[1000]">Academic Performance</p>
                  <div className="flex justify-center items-center mt-10 xl:mt-0">
                    <div className="h-4/6 xl:h-80 xl:w-80 flex justify-center items-center">
                      <div className="flex justify-center items-center w-40 h-40 xl:w-[90%] xl:h-[90%] rounded-full gradient7">
                        <div className="flex justify-center items-center w-33 h-33 xl:w-[80%] xl:h-[80%] bg-[#EFEFEF] rounded-full">
                          <div className="flex justify-center items-center xl:w-[80%] xl:h-[80%] w-25 h-25 bg-[#FFFFFF] rounded-full">
                            <p className="font-bold text-4xl textColor1">78%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-10 xl:mt-3">
                    <p className="font-bold bg-[#D2DEFF] xl:px-3 rounded-md text-[10px] xl:text-sm">
                      Current GPA : <span className="textColor6">3.7</span>
                    </p>
                    <p className="text-[10px] font-bold text-[#00C06D]">
                      ! +0.2 from last semester
                    </p>
                  </div>
                </div>
                <div className="bg-[#F3FCF4] shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] min-h-40 mt-5 rounded-2xl px-5 py-2">
                  <div className="flex justify-between items-center">
                    <p className="font-bold">Linked Teachers</p>
                    <p className="text-[10px] text-[#9497FF] font-bold">
                      See all
                    </p>
                  </div>
                  <div className="flex justify-center mt-2 items-center bg-[#D9D9D9] px-3 py-2 rounded-2xl">
                    <img src={Images[2]} alt="" />
                    <div className="w-full">
                      <p className="text-[12px] font-bold">
                        Mr Godfred Kusi(Subject Teacher)
                      </p>
                      <p className="text-[10px]">English</p>
                    </div>
                    <ArrowDropdownIcon className="h-7" />
                  </div>
                  <div className="flex justify-center items-center mt-3 bg-[#D9D9D9] px-3 py-2 rounded-2xl">
                    <img src={Images[2]} alt="" />
                    <div className="w-full">
                      <p className="text-[12px] font-bold">
                        Mr Godfred Kusi(Subject Teacher)
                      </p>
                      <p className="text-[10px]">English</p>
                    </div>
                    <ArrowDropdownIcon className="h-7" />
                  </div>
                </div>
                <div className="bg-[#F3FCF4] shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] min-h-90 mt-5 rounded-2xl px-5 py-2 gradient8">
                  <div className="flex justify-between items-center">
                    <p className="font-bold">Attendance</p>
                    <p className="text-[10px] text-[#9497FF] font-bold">
                      See all
                    </p>
                  </div>
                  <p className="font-bold mt-1">This Week/Week 2</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm">Today</p>
                    <div className="w-5 h-5 bg-[#64E727] rounded-md"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm">Tuesday</p>
                    <div className="w-5 h-5 bg-[#64E727] rounded-md"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm">Wednessday</p>
                    <div className="w-5 h-5 bg-[#64E727] rounded-md"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm">Thursday</p>
                    <div className="w-5 h-5 bg-[#64E727] rounded-md"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm">Friday</p>
                    <div className="w-5 h-5 bg-[#F41616] flex justify-center items-center rounded-full">
                      <div className="w-4 h-4 bg-[#FFFFFF] flex justify-center items-center rounded-full">
                        <div className="w-2 h-2 bg-[#F41616] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 font-bold">Last Week/Week 1</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm">Tuesday</p>
                    <div className="w-5 h-5 bg-[#64E727] rounded-md"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm">Wednessday</p>
                    <div className="w-5 h-5 bg-[#64E727] rounded-md"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm">Thursday</p>
                    <div className="w-5 h-5 bg-[#64E727] rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

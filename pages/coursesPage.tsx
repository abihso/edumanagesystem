import type { HomeProps } from "../src/assets/types";
import CourseDescription from "../src/components/courseDescription";
import CloseIcon from '@iconify-react/material-symbols/close';
import BooksIcon from '@iconify-react/tabler/books';
import BookOpenIcon from '@iconify-react/boxicons/book-open';
import AnalyticsReportIcon from '@iconify-react/fluent-mdl2/analytics-report';
import { useState } from "react";
const CoursesPage = ({isSidebarCollapsed} : HomeProps) => {
  const [showDialogBox,setShowDialogBox] = useState(false)
  const [code, setCode] = useState("")
  return (
     <div className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? 'ml-16' : 'ml-64'} pt-15`}>
            <div className='backgroundColor1 min-h-screen'>
              <div className='pl-3 pt-5 pr-3'>
                <p className='text-[#B8B8B8] font-bold text-sm'>Student Dashboard / <span className='text-black text-xs'> My Courses</span></p>
                <p className="text-[10px] text-[#B8B8B8] font-bold" >
                  Courses are base on the current GES curriculum for all Basic School
                </p>
                <div className="grid grid-cols-12 gap-5 mt-4" >
                  {
                    [1,2,3,4,5,6,7,8,9,10].map((i) =><CourseDescription 
                      setCode={setCode}
                      setShowDialogBox={() => setShowDialogBox(true)}
                      courseCode={i.toString()}
                      key={i}
                       />)
                  }
                </div>
              </div>
            </div>
            {
              showDialogBox && (
                <div className="fixed z-40 top-0 right-0 left-0 bottom-0 bg-[#000000b4] flex justify-center items-center " >
                    <div className="min-h-140 min-w-[68%] gradient9 rounded-2xl grid grid-cols-12 pt-4 gap-4" >
                      <div className=" col-span-4 pl-10 text-[10px] font-bold" >
                        <p>Course Facilitator</p>
                        <div className="h-[80%] bg-[#EBF3FF] mt-3 rounded-2xl" >
                            <div className="h-40 flex justify-center items-center" >
                                <div className="bg-[#D9D9D9] w-20 h-20 rounded-full" >

                                </div>
                            </div>
                        </div>
                      </div>
                      <div className=" col-span-8 text-[10px] font-bold pr-10" >
                        <div className="flex justify-between items-center " >
                          <p>Course Facilitator</p>
                          <CloseIcon className="h-8 p-2 -mr-5" onClick={() => setShowDialogBox(false)} />
                        </div>
                        <div className="h-[80%] bg-[#EBF3FF] mt-3 rounded-2xl p-5" >
                          <div className="flex justify-between items-center gap-2" >
                            <div className="w-full" >
                              <p>General informationn</p>
                              <p className="text-[8px] textColor6 mt-1" >Mathematics</p> <br />
                              <input type="text" disabled name="" id="" className=" shadow-2xl border rounded-2xl p-1 w-full" />
                            </div>
                            <div className="w-full" >
                              <p>Courses Code</p>
                              <p className="text-[8px] textColor6 mt-1" >Mathematics</p> <br />
                              <input type="text" name="" value={code} disabled id="" className=" shadow-2xl border rounded-2xl p-1 w-full" />
                            </div>
                          </div>
                          <p className="mt-4" >Course Title</p>
                          <input type="text" name="" disabled id="" className=" shadow-2xl border rounded-2xl p-5 w-full" />
                          <div className="flex justify-between items-center mt-5 " >
                            <p className="text-[7px] textColor6" >MATH303 | Sir AbihSolo</p>
                            <p className="text-[7px] text-[#3884FF]" >See Course Details</p>
                          </div>
                        <div className='flex justify-between items-center mt-2'>
                          <p className='text-[8px] textColor6 font-bold mt-3'>Courses Progress</p>
                          <p className='text-[7px] textColor6'>7/23 Lessons</p>
                        </div>
                        <progress 
                          value={60} 
                          max={100} 
                          className='w-full rounded-3xl h-2
                          [&::-webkit-progress-bar]:bg-gray-200 
                          [&::-webkit-progress-value]:bg-[#2F88FF]
                          [&::-webkit-progress-value]:rounded-3xl
                          [&::-moz-progress-bar]:bg-[#2F88FF]
                          [&::-moz-progress-bar]:rounded-3xl'
                        />
                        <div className="flex justify-between items-center gap-1 mt-1" >
                            <button className='flex items-center justify-center w-full gap-1 border rounded-md py-1' >
                              <BooksIcon className='h-3' />
                              <span className='text-[8px] font-bold' >Materials</span>
                            </button>
                            <button className='flex items-center justify-center py-1 w-full gap-1 border rounded-md' >
                              <BookOpenIcon className='h-3' />
                              <span className='text-[8px] font-bold' >Assignment</span>
                            </button>
                            <button className='flex py-1 justify-center w-full gap-1 items-center border rounded-md' >
                              <AnalyticsReportIcon className='h-3' />
                              <span className='text-[8px] font-bold' >Grades</span>
                            </button>
                        </div>
                        </div>
                      </div>

                    </div>
            </div>
              )
            }
          </div>
  )
}

export default CoursesPage
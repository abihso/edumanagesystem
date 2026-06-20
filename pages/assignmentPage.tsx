import type { HomeProps } from "../src/assets/types";
import AssignmentInfor from "../src/components/assignmentInfor";
import { useState } from "react";
import CloseIcon from "@iconify-react/material-symbols/close";

const AssignmentPage = ({isSidebarCollapsed} : HomeProps) => {
   const [showDialogBox,setShowDialogBox] = useState(false)
 
  return (
    <div
      className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"} pt-15`}
    >
      <div className="backgroundColor1 min-h-screen">
        <div className=" py-5 px-3">
          <p className="text-[#B8B8B8] font-bold text-sm">
            Student Dashboard  / {" "}
            <span className="text-black text-xs"> Assignments</span>
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[10px] text-[#B8B8B8] mb-10 font-bold">
                Submit work and track grading status
              </p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <button className="w-25 h-10 border font-bold rounded-2xl bg-[#EBF3FF]">
                All
              </button>
              <button className="w-25 h-10  font-bold rounded-2xl">
                Pending
              </button>
              <button className="w-25 h-10  font-bold rounded-2xl">
                Submitted
              </button>
            </div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
            <AssignmentInfor
              setShowDialogBox={() => setShowDialogBox(true)}
              key={i}
            />
          ))}
        </div>
      </div>
      {showDialogBox && (
        <div className="fixed z-40 top-0 right-0 left-0 bottom-0 bg-[#000000b4] flex justify-center items-center ">
          <div className="h-100 w-150 gradient9 rounded-2xl pt-7 gap-4">
            <CloseIcon
              className="h-8 p-2 float-right -mt-2 mr-5"
              onClick={() => setShowDialogBox(false)}
            />
            <p className="font-bold text-center text-xl">Assignment Details</p>
            <div className="px-30 mt-4">
              <div className="flex items-center justify-between mt-3">
                <p className="text-sm font-bold text-[#0A0332] w-full">
                  Teacher's Name
                </p>
                <p className="textColor6 text-xs w-full">Mr Antwi Boasiako</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-sm font-bold text-[#0A0332] w-full">
                  Course Title
                </p>
                <p className="textColor6 text-xs w-full">Mathematics</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-sm font-bold text-[#0A0332] w-full">Topic</p>
                <p className="textColor6 text-xs w-full">
                  Algebra / General Questiona
                </p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-sm font-bold text-[#0A0332] w-full">
                  Submission Date
                </p>
                <p className="textColor6 text-xs w-full">25/12/2025</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-sm font-bold text-[#0A0332] w-full">
                  Assignment Type
                </p>
                <p className="textColor6 text-xs w-full">
                  Written / Multiple Choice / Practical
                </p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-sm font-bold text-[#0A0332] w-full">
                  Total Question
                </p>
                <p className="textColor6 text-xs w-full">10 </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignmentPage;
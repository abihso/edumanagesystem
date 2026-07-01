/* eslint-disable no-irregular-whitespace */
import type { HomeProps } from "../src/assets/types";
import AssignmentInfor from "../src/components/assignmentInfor";
import { useState } from "react";
import CloseIcon from "@iconify-react/material-symbols/close";

const AssignmentPage = ({ isSidebarCollapsed }: HomeProps) => {
  const [showDialogBox, setShowDialogBox] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <>
      {/* Mobile Version */}
      <div className="lg:hidden block backgroundColor1 min-h-screen pt-5">
        <div className="px-4">
          <p className="text-[#B8B8B8] font-bold text-xs">
            Student Dashboard /{" "}
            <span className="text-black text-[10px]"> Assignments</span>
          </p>
          <p className="text-[8px] text-[#B8B8B8] font-bold mt-1">
            Submit work and track grading status
          </p>

          {/* Mobile Filter Buttons - Horizontal Scroll */}
          <div className="overflow-x-auto mt-4 pb-2 hide-scrollbar">
            <div className="flex gap-2 min-w-max">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  activeFilter === "all"
                    ? "bg-[#EBF3FF] text-[#2F88FF] border border-[#2F88FF]"
                    : "bg-transparent text-[#B8B8B8]"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter("pending")}
                className={`px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  activeFilter === "pending"
                    ? "bg-[#EBF3FF] text-[#2F88FF] border border-[#2F88FF]"
                    : "bg-transparent text-[#B8B8B8]"
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setActiveFilter("submitted")}
                className={`px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  activeFilter === "submitted"
                    ? "bg-[#EBF3FF] text-[#2F88FF] border border-[#2F88FF]"
                    : "bg-transparent text-[#B8B8B8]"
                }`}
              >
                Submitted
              </button>
            </div>
          </div>

          {/* Assignment List */}
          <div className="mt-4 space-y-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
              <AssignmentInfor
                setShowDialogBox={() => setShowDialogBox(true)}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Windows Version */}
      <div
        className={`hidden lg:block flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"} pt-15`}
      >
        <div className="backgroundColor1 min-h-screen">
          <div className="py-5 px-3">
            <p className="text-[#B8B8B8] font-bold text-sm">
              Student Dashboard /{" "}
              <span className="text-black text-xs"> Assignments</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
              <div>
                <p className="text-[10px] text-[#B8B8B8] mb-0 sm:mb-10 font-bold">
                  Submit work and track grading status
                </p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`w-25 h-10 border font-bold rounded-2xl transition-colors ${
                    activeFilter === "all"
                      ? "bg-[#EBF3FF] border-[#2F88FF] text-[#2F88FF]"
                      : "bg-transparent"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveFilter("pending")}
                  className={`w-25 h-10 font-bold rounded-2xl transition-colors ${
                    activeFilter === "pending"
                      ? "bg-[#EBF3FF] border border-[#2F88FF] text-[#2F88FF]"
                      : "bg-transparent"
                  }`}
                >
                  Pending
                </button>
                <button
                  onClick={() => setActiveFilter("submitted")}
                  className={`w-25 h-10 font-bold rounded-2xl transition-colors ${
                    activeFilter === "submitted"
                      ? "bg-[#EBF3FF] border border-[#2F88FF] text-[#2F88FF]"
                      : "bg-transparent"
                  }`}
                >
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

        {/* Dialog Box - Mobile Responsive */}
        {showDialogBox && (
          <div className="fixed z-40 top-0 right-0 left-0 bottom-0 bg-[#000000b4] flex justify-center items-center p-4">
            <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-150 gradient9 rounded-2xl pt-5 sm:pt-7 pb-6 sm:pb-8 gap-4">
              <div className="relative">
                <CloseIcon
                  className="h-8 p-2 absolute top-1 right-2 cursor-pointer hover:bg-white/10 rounded-full transition-colors"
                  onClick={() => setShowDialogBox(false)}
                />
                <p className="font-bold text-center text-lg sm:text-xl px-4">
                  Assignment Details
                </p>
              </div>

              <div className="px-4 sm:px-8 md:px-12 lg:px-30 mt-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 gap-1 sm:gap-0">
                  <p className="text-sm font-bold text-[#0A0332] w-full sm:w-auto">
                    Teacher's Name
                  </p>
                  <p className="textColor6 text-xs w-full sm:w-auto">
                    Mr Antwi Boasiako
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 gap-1 sm:gap-0">
                  <p className="text-sm font-bold text-[#0A0332] w-full sm:w-auto">
                    Course Title
                  </p>
                  <p className="textColor6 text-xs w-full sm:w-auto">
                    Mathematics
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 gap-1 sm:gap-0">
                  <p className="text-sm font-bold text-[#0A0332] w-full sm:w-auto">
                    Topic
                  </p>
                  <p className="textColor6 text-xs w-full sm:w-auto">
                    Algebra / General Questions
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 gap-1 sm:gap-0">
                  <p className="text-sm font-bold text-[#0A0332] w-full sm:w-auto">
                    Submission Date
                  </p>
                  <p className="textColor6 text-xs w-full sm:w-auto">
                    25/12/2025
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 gap-1 sm:gap-0">
                  <p className="text-sm font-bold text-[#0A0332] w-full sm:w-auto">
                    Assignment Type
                  </p>
                  <p className="textColor6 text-xs w-full sm:w-auto">
                    Written / Multiple Choice / Practical
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 gap-1 sm:gap-0">
                  <p className="text-sm font-bold text-[#0A0332] w-full sm:w-auto">
                    Total Questions
                  </p>
                  <p className="textColor6 text-xs w-full sm:w-auto">10</p>
                </div>

                {/* Mobile Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-0">
                  <button className="w-full sm:w-auto bg-[#2F88FF] text-white font-bold py-2 sm:py-3 px-6 rounded-xl text-sm hover:bg-[#1a6fd8] transition-colors">
                    Start Assignment
                  </button>
                  <button className="w-full sm:w-auto border border-[#D9D9D9] text-[#6B7280] font-bold py-2 sm:py-3 px-6 rounded-xl text-sm hover:bg-gray-50 transition-colors sm:ml-3">
                    Download Materials
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Dialog Box */}
      {showDialogBox && (
        <div className="lg:hidden fixed z-40 top-0 right-0 left-0 bottom-0 bg-[#000000b4] flex justify-center items-center p-4">
          <div className="w-full max-w-[95%] gradient9 rounded-2xl pt-5 pb-6">
            <div className="relative">
              <CloseIcon
                className="h-8 p-2 absolute top-1 right-2 cursor-pointer hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setShowDialogBox(false)}
              />
              <p className="font-bold text-center text-lg px-4">
                Assignment Details
              </p>
            </div>

            <div className="px-4 mt-4">
              <div className="flex flex-col items-start justify-between mt-3 gap-1">
                <p className="text-sm font-bold text-[#0A0332] w-full">
                  Teacher's Name
                </p>
                <p className="textColor6 text-xs w-full">Mr Antwi Boasiako</p>
              </div>

              <div className="flex flex-col items-start justify-between mt-3 gap-1">
                <p className="text-sm font-bold text-[#0A0332] w-full">
                  Course Title
                </p>
                <p className="textColor6 text-xs w-full">Mathematics</p>
              </div>

              <div className="flex flex-col items-start justify-between mt-3 gap-1">
                <p className="text-sm font-bold text-[#0A0332] w-full">Topic</p>
                <p className="textColor6 text-xs w-full">
                  Algebra / General Questions
                </p>
              </div>

              <div className="flex flex-col items-start justify-between mt-3 gap-1">
                <p className="text-sm font-bold text-[#0A0332] w-full">
                  Submission Date
                </p>
                <p className="textColor6 text-xs w-full">25/12/2025</p>
              </div>

              <div className="flex flex-col items-start justify-between mt-3 gap-1">
                <p className="text-sm font-bold text-[#0A0332] w-full">
                  Assignment Type
                </p>
                <p className="textColor6 text-xs w-full">
                  Written / Multiple Choice / Practical
                </p>
              </div>

              <div className="flex flex-col items-start justify-between mt-3 gap-1">
                <p className="text-sm font-bold text-[#0A0332] w-full">
                  Total Questions
                </p>
                <p className="textColor6 text-xs w-full">10</p>
              </div>

              {/* Mobile Action Buttons */}
              <div className="mt-6 flex flex-col gap-3">
                <button className="w-full bg-[#2F88FF] text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-[#1a6fd8] transition-colors">
                  Start Assignment
                </button>
                <button className="w-full border border-[#D9D9D9] text-[#6B7280] font-bold py-3 px-6 rounded-xl text-sm hover:bg-gray-50 transition-colors">
                  Download Materials
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssignmentPage;



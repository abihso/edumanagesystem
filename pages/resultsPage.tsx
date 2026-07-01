/* eslint-disable no-irregular-whitespace */
import type { HomeProps } from "../src/assets/types";
import PrintIcon from "@iconify-react/material-symbols/print";
import { useState } from "react";

const ResultsPage = ({ isSidebarCollapsed }: HomeProps) => {
  const [activeTerm, setActiveTerm] = useState("all");

  // Sample results data
  const resultsData = [
    {
      code: "CSM 252",
      subject: "English Language",
      classScore: 40,
      examScore: 40,
      total: 80,
      grade: "A",
      position: "1st",
      remarks: "Excellent",
    },
    {
      code: "CSM 253",
      subject: "Mathematics",
      classScore: 35,
      examScore: 38,
      total: 73,
      grade: "B+",
      position: "2nd",
      remarks: "Good",
    },
    {
      code: "CSM 254",
      subject: "Science",
      classScore: 30,
      examScore: 32,
      total: 62,
      grade: "B",
      position: "3rd",
      remarks: "Good",
    },
    {
      code: "CSM 255",
      subject: "Social Studies",
      classScore: 28,
      examScore: 30,
      total: 58,
      grade: "B-",
      position: "4th",
      remarks: "Average",
    },
    {
      code: "CSM 256",
      subject: "Ghanaian Language",
      classScore: 25,
      examScore: 28,
      total: 53,
      grade: "C+",
      position: "5th",
      remarks: "Average",
    },
    {
      code: "CSM 257",
      subject: "ICT",
      classScore: 42,
      examScore: 40,
      total: 82,
      grade: "A",
      position: "1st",
      remarks: "Excellent",
    },
    {
      code: "CSM 258",
      subject: "French",
      classScore: 20,
      examScore: 22,
      total: 42,
      grade: "D",
      position: "8th",
      remarks: "Needs Improvement",
    },
    {
      code: "CSM 259",
      subject: "Religious Education",
      classScore: 38,
      examScore: 35,
      total: 73,
      grade: "B+",
      position: "2nd",
      remarks: "Good",
    },
  ];


  return (
    <>
      {/* Mobile Version */}
      <div className="lg:hidden block backgroundColor1 min-h-screen pt-17">
        <div className="px-4">
          <p className="text-[#B8B8B8] font-bold text-xs">
            Student Dashboard /{" "}
            <span className="text-black text-[10px]">Results</span>
          </p>

          {/* Mobile Filter Tabs - Horizontal Scroll */}
          <div className="overflow-x-auto mt-3 pb-2 hide-scrollbar">
            <div className="flex gap-2 min-w-max">
              {["All", "1st term", "2nd term", "3rd term"].map((term) => (
                <button
                  key={term}
                  onClick={() => setActiveTerm(term.toLowerCase())}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                    activeTerm === term.toLowerCase()
                      ? "bg-[#EBF3FF] text-[#2F88FF] border border-[#2F88FF]"
                      : "bg-transparent text-[#B8B8B8]"
                  }`}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Results Table - Mobile */}
          <div className="mt-3 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl overflow-hidden">
            {/* Table Header - Mobile */}
            <div className="bg-[#468DFF] px-3 py-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white font-bold text-xs">
                    Academic Result
                  </p>
                  <p className="text-white text-[7px] opacity-80">
                    Current Academic Results for Student
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white text-[7px] font-bold">
                    2023/2024 | Term 2
                  </p>
                  <p className="text-white text-[7px] flex items-center justify-end gap-1">
                    <PrintIcon className="h-3" />
                    Print
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Results Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-[8px]">
                <thead>
                  <tr className="bg-[#468DFF]">
                    <th className="px-2 py-2 text-left text-white font-bold text-[8px]">
                      Subject
                    </th>
                    <th className="px-2 py-2 text-center text-white font-bold text-[8px]">
                      Total
                    </th>
                    <th className="px-2 py-2 text-center text-white font-bold text-[8px]">
                      Grade
                    </th>
                    <th className="px-2 py-2 text-center text-white font-bold text-[8px]">
                      Pos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {resultsData.map((item, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-[#EBF3FF]" : "bg-white"} border-b border-gray-100`}
                    >
                      <td className="px-2 py-2.5">
                        <p className="font-bold text-[8px]">{item.subject}</p>
                        <p className="text-[6px] textColor6">{item.code}</p>
                      </td>
                      <td className="px-2 py-2.5 text-center font-bold text-[9px]">
                        {item.total}
                      </td>
                      <td className="px-2 py-2.5 text-center">
                        <span
                          className={`px-1.5 py-0.5 rounded-full text-[7px] font-bold ${
                            item.grade === "A"
                              ? "bg-green-100 text-green-600"
                              : item.grade === "B+" || item.grade === "B"
                                ? "bg-blue-100 text-blue-600"
                                : item.grade === "B-" || item.grade === "C+"
                                  ? "bg-yellow-100 text-yellow-600"
                                  : "bg-red-100 text-red-600"
                          }`}
                        >
                          {item.grade}
                        </span>
                      </td>
                      <td className="px-2 py-2.5 text-center text-[8px] font-bold">
                        {item.position}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Table Summary */}
            <div className="bg-gray-50 px-3 py-2 border-t border-gray-200">
              <div className="flex justify-between items-center text-[7px] textColor6">
                <span>Showing {resultsData.length} subjects</span>
                <div className="flex gap-1">
                  <button className="px-2 py-1 bg-gray-200 rounded text-[7px]">
                    Prev
                  </button>
                  <button className="px-2 py-1 bg-[#2F88FF] text-white rounded text-[7px]">
                    1
                  </button>
                  <button className="px-2 py-1 bg-gray-200 rounded text-[7px]">
                    2
                  </button>
                  <button className="px-2 py-1 bg-gray-200 rounded text-[7px]">
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile GPA Summary */}
            <div className="bg-[#E4F0FF] px-3 py-3 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[8px] font-bold textColor6">
                    Cumulative GPA
                  </p>
                  <p className="text-base font-bold text-[#2F88FF]">3.7</p>
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-bold textColor6">Total Marks</p>
                  <p className="text-base font-bold text-[#2F88FF]">
                    523 / 800
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-bold textColor6">
                    Class Position
                  </p>
                  <p className="text-base font-bold text-[#2F88FF]">2nd</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Legend */}
          <div className="mt-3 flex flex-wrap gap-2 justify-center">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-green-100 rounded-full"></span>
              <span className="text-[7px] textColor6">A (Excellent)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-blue-100 rounded-full"></span>
              <span className="text-[7px] textColor6">B (Good)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-yellow-100 rounded-full"></span>
              <span className="text-[7px] textColor6">C (Average)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-red-100 rounded-full"></span>
              <span className="text-[7px] textColor6">
                D (Needs Improvement)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Windows/Desktop Version */}
      <div
        className={`hidden lg:block flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"} pt-15`}
      >
        <div className="backgroundColor1 min-h-screen">
          <div className="pl-3 pt-5 pr-3">
            <p className="text-[#B8B8B8] font-bold text-sm">
              Student Dashboard /{" "}
              <span className="text-black text-xs">Results</span>
            </p>

            <div className="flex justify-end gap-3">
              <div className="flex gap-3 border rounded-2xl p-1">
                {["All", "1st term", "2nd term", "3rd term"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setActiveTerm(term.toLowerCase())}
                    className={`text-xs font-bold w-20 rounded-2xl py-1 transition-colors ${
                      activeTerm === term.toLowerCase()
                        ? "bg-[#EBF3FF] text-[#2F88FF]"
                        : "bg-transparent"
                    }`}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <div className="py-5 px-10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl overflow-x-auto">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <p className="font-bold text-xs">Academic Result</p>
                    <p className="font-bold text-[8px] textColor6 mt-0.5">
                      Current Academic Results for Student
                    </p>
                  </div>
                  <p className="font-bold text-xs textColor6">
                    Academic Year : 2023/2024 | Academic Term : 2
                  </p>
                  <p className="flex items-center gap-2 text-xs textColor6 cursor-pointer hover:text-[#2F88FF] transition-colors">
                    <PrintIcon className="h-4 text-blue-800" />
                    Print Results
                  </p>
                </div>

                {/* Desktop Results Table */}
                <div className="min-w-200">
                  <div className="grid grid-cols-12 bg-[#468DFF] mt-7 h-10 rounded-md items-center mb-3">
                    <div className="col-span-2">
                      <p className="text-white font-bold text-[10px] text-center">
                        Subject code
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-white font-bold text-[10px] text-center">
                        Subject
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-white font-bold text-[10px] text-center">
                        Class Score (50)
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-white font-bold text-[10px] text-center">
                        Exam Score (50)
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-white font-bold text-[10px] text-center">
                        Total Marks (100)
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-white font-bold text-[10px] text-center">
                        Grade
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-white font-bold text-[10px] text-center">
                        Position
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-white font-bold text-[10px] text-center">
                        Remarks
                      </p>
                    </div>
                  </div>

                  {resultsData.map((item, index) => (
                    <div
                      key={index}
                      className={`grid grid-cols-12 ${index % 2 === 0 ? "bg-[#EBF3FF]" : "bg-white"} mt-2 h-10 rounded-md items-center`}
                    >
                      <div className="col-span-2">
                        <p className="text-[8px] text-center font-bold">
                          {item.code}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[8px] text-center">{item.subject}</p>
                      </div>
                      <div className="col-span-1">
                        <p className="text-[8px] text-center">
                          {item.classScore}
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p className="text-[8px] text-center">
                          {item.examScore}
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p className="text-[8px] text-center font-bold">
                          {item.total}
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p
                          className={`text-[8px] text-center font-bold ${
                            item.grade === "A"
                              ? "text-green-600"
                              : item.grade === "B+" || item.grade === "B"
                                ? "text-blue-600"
                                : item.grade === "B-" || item.grade === "C+"
                                  ? "text-yellow-600"
                                  : "text-red-600"
                          }`}
                        >
                          {item.grade}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[8px] text-center font-bold">
                          {item.position}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[8px] text-center">{item.remarks}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop Summary */}
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
                  <div className="flex gap-6">
                    <div>
                      <p className="text-[8px] textColor6 font-bold">
                        Cumulative GPA
                      </p>
                      <p className="text-sm font-bold text-[#2F88FF]">3.7</p>
                    </div>
                    <div>
                      <p className="text-[8px] textColor6 font-bold">
                        Total Marks
                      </p>
                      <p className="text-sm font-bold text-[#2F88FF]">
                        523 / 800
                      </p>
                    </div>
                    <div>
                      <p className="text-[8px] textColor6 font-bold">
                        Class Position
                      </p>
                      <p className="text-sm font-bold text-[#2F88FF]">2nd</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-gray-200 rounded text-[10px]">
                      Prev
                    </button>
                    <button className="px-3 py-1 bg-[#2F88FF] text-white rounded text-[10px]">
                      1
                    </button>
                    <button className="px-3 py-1 bg-gray-200 rounded text-[10px]">
                      2
                    </button>
                    <button className="px-3 py-1 bg-gray-200 rounded text-[10px]">
                      Next
                    </button>
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

export default ResultsPage;

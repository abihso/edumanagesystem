import type { HomeProps } from "../src/assets/types";
import { useState } from "react";

const SchedulePage = ({ isSidebarCollapsed }: HomeProps) => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedDay, setSelectedDay] = useState("monday");

  // Schedule data for better organization
  const scheduleData = [
    {
      time: "7:00 - 7:30 AM (30 min)",
      monday: "Assembly / Registration",
      tuesday: "Assembly / Registration",
      wednesday: "Career Technology",
      thursday: "Career Technology",
      friday: "Career Technology",
    },
    {
      time: "7:30 - 8:20 AM (50 min)",
      monday: "English",
      tuesday: "Science",
      wednesday: "Mathematics",
      thursday: "Social Studies",
      friday: "Ghanaian Language",
    },
    {
      time: "8:20 - 9:10 AM (50 min)",
      monday: "Mathematics",
      tuesday: "English",
      wednesday: "Science",
      thursday: "Ghanaian Language",
      friday: "Social Studies",
    },
    {
      time: "9:10 - 10:00 AM (50 min)",
      monday: "Social Studies",
      tuesday: "Mathematics",
      wednesday: "English",
      thursday: "Science",
      friday: "Career Technology",
    },
    {
      time: "10:00 - 10:30 AM (30 min)",
      monday: "Break",
      tuesday: "Break",
      wednesday: "Break",
      thursday: "Break",
      friday: "Break",
    },
    {
      time: "10:30 - 11:20 AM (50 min)",
      monday: "Science",
      tuesday: "Social Studies",
      wednesday: "Ghanaian Language",
      thursday: "Mathematics",
      friday: "English",
    },
    {
      time: "11:20 - 12:10 PM (50 min)",
      monday: "Career Technology",
      tuesday: "Ghanaian Language",
      wednesday: "Social Studies",
      thursday: "English",
      friday: "Mathematics",
    },
    {
      time: "12:10 - 1:00 PM (50 min)",
      monday: "French",
      tuesday: "French",
      wednesday: "French",
      thursday: "French",
      friday: "French",
    },
    {
      time: "1:00 - 2:00 PM (60 min)",
      monday: "Lunch Break",
      tuesday: "Lunch Break",
      wednesday: "Lunch Break",
      thursday: "Lunch Break",
      friday: "Lunch Break",
    },
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const dayKeys = ["monday", "tuesday", "wednesday", "thursday", "friday"];

  return (
    <>
      {/* Mobile Version */}
      <div className="lg:hidden block backgroundColor1 min-h-screen pt-17">
        <div className="px-4">
          <p className="text-[#B8B8B8] font-bold text-xs">
            Student Dashboard /{" "}
            <span className="text-black text-[10px]">
              Schedule and Time Table
            </span>
          </p>

          {/* Mobile Filter Tabs */}
          <div className="overflow-x-auto mt-4 pb-2 hide-scrollbar">
            <div className="flex gap-2 min-w-max">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  activeTab === "all"
                    ? "bg-[#EBF3FF] text-[#2F88FF] border border-[#2F88FF]"
                    : "bg-transparent text-[#B8B8B8]"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("schedule")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  activeTab === "schedule"
                    ? "bg-[#EBF3FF] text-[#2F88FF] border border-[#2F88FF]"
                    : "bg-transparent text-[#B8B8B8]"
                }`}
              >
                Schedule
              </button>
              <button
                onClick={() => setActiveTab("timetable")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  activeTab === "timetable"
                    ? "bg-[#EBF3FF] text-[#2F88FF] border border-[#2F88FF]"
                    : "bg-transparent text-[#B8B8B8]"
                }`}
              >
                Time Table
              </button>
            </div>
          </div>

          {/* Mobile Day Selector */}
          <div className="overflow-x-auto mt-3 pb-2 hide-scrollbar">
            <div className="flex gap-2 min-w-max">
              {days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDay(dayKeys[index])}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-colors ${
                    selectedDay === dayKeys[index]
                      ? "bg-[#2F88FF] text-white"
                      : "bg-gray-100 text-[#6B7280]"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Schedule Cards */}
          <div className="mt-4 space-y-3 pb-4">
            {scheduleData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] p-4"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-[#2F88FF]">
                      {item.time}
                    </p>
                    <p className="text-sm font-bold mt-1">
                      {item[selectedDay as keyof typeof item] || "Free Period"}
                    </p>
                  </div>
                  <span
                    className={`text-[8px] px-2 py-1 rounded-full font-semibold ml-2 whitespace-nowrap ${
                      item[selectedDay as keyof typeof item]?.includes("Break")
                        ? "bg-green-100 text-green-600"
                        : item[selectedDay as keyof typeof item]?.includes(
                              "Assembly",
                            )
                          ? "bg-purple-100 text-purple-600"
                          : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {item[selectedDay as keyof typeof item]?.includes("Break")
                      ? "Break"
                      : item[selectedDay as keyof typeof item]?.includes(
                            "Assembly",
                          )
                        ? "Assembly"
                        : "Class"}
                  </span>
                </div>
              </div>
            ))}
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
              <span className="text-black text-xs">
                Schedule and Time Table
              </span>
            </p>

            <div className="flex justify-end gap-3">
              <div className="flex gap-3 border rounded-2xl p-1">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`text-xs font-bold w-20 rounded-2xl py-1 transition-colors ${
                    activeTab === "all"
                      ? "bg-[#EBF3FF] text-[#2F88FF]"
                      : "bg-transparent"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab("schedule")}
                  className={`text-xs font-bold w-20 rounded-2xl py-1 transition-colors ${
                    activeTab === "schedule"
                      ? "bg-[#EBF3FF] text-[#2F88FF]"
                      : "bg-transparent"
                  }`}
                >
                  Schedule
                </button>
                <button
                  onClick={() => setActiveTab("timetable")}
                  className={`text-xs font-bold w-20 rounded-2xl py-1 transition-colors ${
                    activeTab === "timetable"
                      ? "bg-[#EBF3FF] text-[#2F88FF]"
                      : "bg-transparent"
                  }`}
                >
                  Time Table
                </button>
              </div>
            </div>

            <div className="mt-3">
              <div className="py-5 px-4 lg:px-10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl overflow-x-auto">
                <p className="font-bold text-xs">Junior High School</p>
                <p className="font-bold text-[8px] textColor6 mt-0.5">
                  JHS is more focused and prepares students for the BECE (Basic
                  Education Certificate Examination).
                </p>

                {/* Desktop Timetable */}
                <div className="min-w-150">
                  {/* Header */}
                  <div className="grid grid-cols-12 bg-[#468DFF] mt-7 h-10 rounded-md items-center mb-3">
                    <div className="col-span-2">
                      <p className="text-white font-bold text-[10px] text-center">
                        Time Slot
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-white font-bold text-[10px] text-center">
                        Monday
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-white font-bold text-[10px] text-center">
                        Tuesday
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-white font-bold text-[10px] text-center">
                        Wednesday
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-white font-bold text-[10px] text-center">
                        Thursday
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-white font-bold text-[10px] text-center">
                        Friday
                      </p>
                    </div>
                  </div>

                  {/* Schedule Rows */}
                  {scheduleData.map((item, index) => (
                    <div
                      key={index}
                      className={`grid grid-cols-12 ${index % 2 === 0 ? "bg-[#EBF3FF]" : ""} mt-2 h-10 rounded-md items-center`}
                    >
                      <div className="col-span-2">
                        <p className="text-[8px] text-center font-medium">
                          {item.time}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[8px] text-center">{item.monday}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[8px] text-center">{item.tuesday}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[8px] text-center">
                          {item.wednesday}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[8px] text-center">
                          {item.thursday}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[8px] text-center">{item.friday}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchedulePage;

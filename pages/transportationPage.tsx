import type { HomeProps } from "../src/assets/types";
import { useState } from "react";
import CloseIcon from "@iconify-react/material-symbols/close";
import BusIcon from "@iconify-react/lucide/bus";
import ProfileFillIcon from "@iconify-react/iconamoon/profile-fill";
import PhoneBrokenIcon from "@iconify-react/solar/phone-broken";
import LocationIcon from "@iconify-react/boxicons/location";
import TimeLineIcon from "@iconify-react/mingcute/time-line";

const Transportation = ({isSidebarCollapsed} : HomeProps) => {
   const [showDialogBox,setShowDialogBox] = useState(false)
 
  return (
    <div
      className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"} pt-15`}
    >
      <div className="backgroundColor1 min-h-screen">
        <div className=" py-5 px-3">
          <p className="text-[#B8B8B8] font-bold text-sm">
            Student Dashboard  /  {"  "}
            <span className="text-black text-xs"> Transportation</span>
          </p>
          <p className="text-[10px] font-semibold textColor6">
            Track your bus route and timing in real time
          </p>
          <div className="mt-3 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] min-h-40 px-7 py-4">
            <div className="flex items-center gap-2">
              <BusIcon className="h-5 w-5 text-[#0D99FF]" />
              <p className="font-bold text-xs">Bus-07</p>
            </div>
            <p className="text-[10px] textColor6">North Route</p>
            <div className="flex justify-between items-center gap-3">
              <div className=" flex items-center w-full h-12  bg-[#E4F0FF] rounded-md px-5 py-2 gap-1">
                <div className="flex justify-center items-center w-7">
                  <ProfileFillIcon className="h-5 w-5 text-[#0D99FF]" />
                </div>
                <div>
                  <p className="text-[10px] textColor6 font-bold">Driver</p>
                  <p className="text-xs font-bold">Robert Johnson</p>
                </div>
              </div>
              <div className=" flex items-center w-full gap-1 h-12  bg-[#E4F0FF] rounded-md px-5 py-2">
                <div className="flex justify-center items-center w-7">
                  <PhoneBrokenIcon className="h-5 w-5 text-[#0D99FF]" />
                </div>
                <div>
                  <p className="text-[10px] textColor6 font-bold">Contact</p>
                  <p className="text-xs font-bold">+233 55 574 7931</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3 gap-3">
              <div className="px-5 bg-[#E4F0FF] border w-full rounded-md py-3">
                <p className="textColor6 font-bold text-xs">Pickup Time</p>
                <p className=" font-bold text-xs mt-2">7:30 AM</p>
                <p className=" text-xs mt-1">Main Street Bus Stop</p>
              </div>
              <div className="px-5 bg-[#E4F0FF] border w-full rounded-md py-3">
                <p className="textColor6 font-bold text-xs">Return Time</p>
                <p className=" font-bold text-xs mt-2">7:30 AM</p>
                <p className=" text-xs mt-1">Main Street Bus Stop</p>
              </div>
            </div>
            <div className="px-2 mt-4 bg-[#E4F0FF] w-full rounded-md py-3">
              <div className="flex items-center gap-1">
                <div className="flex justify-center h-8">
                  <LocationIcon className="h-5 text-[#0D99FF]" />
                </div>
                <div>
                  <p className="text-xs font-bold">Current Location</p>
                  <p className="text-[10px] textColor6 font-bold">
                    Car Street & 5<sup>th</sup> Avenue
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-3 gap-1">
                <div className="flex justify-center h-8">
                  <TimeLineIcon className="h-5 text-[#0D99FF]" />
                </div>
                <div>
                  <p className="text-xs font-bold">Estimated Arrival</p>
                  <p className="text-[10px] textColor6 font-bold">15 minutes</p>
                </div>
              </div>
            </div>
            <button className="w-full text-xs text-white py-1 bg-blue-400 rounded-sm mt-5">
              Track Bus in Real-Time
            </button>
            <div className="px-10 mt-4 bg-[#E2FFF8] w-full rounded-md py-6">
              <p className="font-bold text-xs">Bus Status: On Time</p>
              <p className="text-[9px] textColor6">
                your bus is currently on route ETA 15 minutes
              </p>
            </div>
          </div>
          <div className="mt-5 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] min-h-40 px-7 py-4">
            <p className="font-bold mb-2 text-xs">Recent Notifications</p>
            <div className="h-13 rounded-md border px-5 py-2 bg-[#E4F0FF]">
              <p className="text-xs font-bold">Bus running on schedule today</p>
              <p className="text-[9px] text-blue-300">30mins ago</p>
            </div>
            <div className="h-13 rounded-md border mt-2 px-5 py-2 bg-[#FFF7EB]">
              <p className="text-xs font-bold">Bus running on schedule today</p>
              <p className="text-[9px] text-blue-300">30mins ago</p>
            </div>
            <div className="h-13 rounded-md border mt-2 px-5 py-2 bg-[#FFF7EB]">
              <p className="text-xs font-bold">Bus running on schedule today</p>
              <p className="text-[9px] text-blue-300">30mins ago</p>
            </div>
          </div>
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

export default Transportation;
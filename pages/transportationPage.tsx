import type { HomeProps } from "../src/assets/types";
import { useState } from "react";
import BusIcon from "@iconify-react/lucide/bus";
import ProfileFillIcon from "@iconify-react/iconamoon/profile-fill";
import PhoneBrokenIcon from "@iconify-react/solar/phone-broken";
import LocationIcon from "@iconify-react/boxicons/location";
import TimeLineIcon from "@iconify-react/mingcute/time-line";

const Transportation = ({ isSidebarCollapsed }: HomeProps) => {
  const [activeTab, setActiveTab] = useState("tracking");

  return (
    <>
      {/* Mobile Version */}
      <div className="lg:hidden block backgroundColor1 min-h-screen pt-17">
        <div className="px-4">
          <p className="text-[#B8B8B8] font-bold text-xs">
            Student Dashboard /{" "}
            <span className="text-black text-[10px]">Transportation</span>
          </p>
          <p className="text-[8px] font-semibold textColor6">
            Track your bus route and timing in real time
          </p>

          {/* Mobile Tab Navigation */}
          <div className="flex gap-2 mt-3 bg-white rounded-xl p-1 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]">
            <button
              onClick={() => setActiveTab("tracking")}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
                activeTab === "tracking"
                  ? "bg-[#0D99FF] text-white"
                  : "text-[#6B7280]"
              }`}
            >
              Tracking
            </button>
            <button
              onClick={() => setActiveTab("notifications")}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
                activeTab === "notifications"
                  ? "bg-[#0D99FF] text-white"
                  : "text-[#6B7280]"
              }`}
            >
              Notifications
            </button>
          </div>

          {/* Tracking Tab - Mobile */}
          {activeTab === "tracking" && (
            <div className="mt-3 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] min-h-40 px-4 py-4 bg-white">
              {/* Bus Header */}
              <div className="flex items-center gap-2">
                <BusIcon className="h-5 w-5 text-[#0D99FF]" />
                <p className="font-bold text-xs">Bus-07</p>
                <span className="ml-auto text-[8px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-bold">
                  On Time
                </span>
              </div>
              <p className="text-[9px] textColor6">North Route</p>

              {/* Driver & Contact - Mobile */}
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex items-center w-full h-12 bg-[#E4F0FF] rounded-md px-4 py-2 gap-2">
                  <ProfileFillIcon className="h-5 w-5 text-[#0D99FF] shrink-0" />
                  <div className="flex-1">
                    <p className="text-[8px] textColor6 font-bold">Driver</p>
                    <p className="text-[10px] font-bold">Robert Johnson</p>
                  </div>
                </div>
                <div className="flex items-center w-full h-12 bg-[#E4F0FF] rounded-md px-4 py-2 gap-2">
                  <PhoneBrokenIcon className="h-5 w-5 text-[#0D99FF] shrink-0" />
                  <div className="flex-1">
                    <p className="text-[8px] textColor6 font-bold">Contact</p>
                    <p className="text-[10px] font-bold">+233 55 574 7931</p>
                  </div>
                </div>
              </div>

              {/* Pickup & Return Times - Mobile */}
              <div className="flex flex-col gap-2 mt-3">
                <div className="px-4 bg-[#E4F0FF] border w-full rounded-md py-3">
                  <p className="textColor6 font-bold text-[9px]">Pickup Time</p>
                  <p className="font-bold text-xs mt-1">7:30 AM</p>
                  <p className="text-[9px] mt-1">Main Street Bus Stop</p>
                </div>
                <div className="px-4 bg-[#E4F0FF] border w-full rounded-md py-3">
                  <p className="textColor6 font-bold text-[9px]">Return Time</p>
                  <p className="font-bold text-xs mt-1">3:30 PM</p>
                  <p className="text-[9px] mt-1">Main Street Bus Stop</p>
                </div>
              </div>

              {/* Location & ETA - Mobile */}
              <div className="px-3 mt-3 bg-[#E4F0FF] w-full rounded-md py-3">
                <div className="flex items-center gap-2">
                  <LocationIcon className="h-5 text-[#0D99FF] shrink-0" />
                  <div className="flex-1">
                    <p className="text-[10px] font-bold">Current Location</p>
                    <p className="text-[8px] textColor6 font-bold">
                      Car Street & 5<sup>th</sup> Avenue
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-2 gap-2">
                  <TimeLineIcon className="h-5 text-[#0D99FF] shrink-0" />
                  <div className="flex-1">
                    <p className="text-[10px] font-bold">Estimated Arrival</p>
                    <p className="text-[8px] textColor6 font-bold">
                      15 minutes
                    </p>
                  </div>
                </div>
              </div>

              {/* Track Button - Mobile */}
              <button className="w-full text-xs text-white py-2.5 bg-[#0D99FF] rounded-md mt-4 font-bold hover:bg-[#0a7acc] transition-colors">
                Track Bus in Real-Time
              </button>

              {/* Bus Status - Mobile */}
              <div className="px-4 mt-4 bg-[#E2FFF8] w-full rounded-md py-4">
                <p className="font-bold text-xs">Bus Status: On Time</p>
                <p className="text-[8px] textColor6">
                  Your bus is currently on route ETA 15 minutes
                </p>
              </div>
            </div>
          )}

          {/* Notifications Tab - Mobile */}
          {activeTab === "notifications" && (
            <div className="mt-3 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] min-h-40 px-4 py-4 bg-white">
              <p className="font-bold text-sm mb-3">Recent Notifications</p>

              <div className="h-auto rounded-md border px-4 py-3 bg-[#E4F0FF]">
                <p className="text-xs font-bold">
                  Bus running on schedule today
                </p>
                <p className="text-[8px] text-blue-300 mt-1">30 mins ago</p>
              </div>

              <div className="h-auto rounded-md border mt-2 px-4 py-3 bg-[#FFF7EB]">
                <p className="text-xs font-bold">Bus delayed by 10 minutes</p>
                <p className="text-[8px] text-blue-300 mt-1">1 hour ago</p>
              </div>

              <div className="h-auto rounded-md border mt-2 px-4 py-3 bg-[#FFF7EB]">
                <p className="text-xs font-bold">
                  New bus route schedule available
                </p>
                <p className="text-[8px] text-blue-300 mt-1">2 hours ago</p>
              </div>

              <div className="h-auto rounded-md border mt-2 px-4 py-3 bg-[#E4F0FF]">
                <p className="text-xs font-bold">Bus maintenance completed</p>
                <p className="text-[8px] text-blue-300 mt-1">3 hours ago</p>
              </div>

              <button className="w-full text-xs text-[#0D99FF] font-bold py-2 mt-3">
                View All Notifications →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Windows/Desktop Version */}
      <div
        className={`hidden lg:block flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"} pt-15`}
      >
        <div className="backgroundColor1 min-h-screen">
          <div className="py-5 px-3">
            <p className="text-[#B8B8B8] font-bold text-sm">
              Student Dashboard /{" "}
              <span className="text-black text-xs">Transportation</span>
            </p>
            <p className="text-[10px] font-semibold textColor6">
              Track your bus route and timing in real time
            </p>

            <div className="grid grid-cols-12 gap-5 mt-3">
              {/* Tracking Section - Desktop */}
              <div className="col-span-8 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] min-h-40 px-7 py-4 bg-white">
                <div className="flex items-center gap-2">
                  <BusIcon className="h-5 w-5 text-[#0D99FF]" />
                  <p className="font-bold text-xs">Bus-07</p>
                  <span className="ml-auto text-[8px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-bold">
                    On Time
                  </span>
                </div>
                <p className="text-[10px] textColor6">North Route</p>

                <div className="flex justify-between items-center gap-3">
                  <div className="flex items-center w-full h-12 bg-[#E4F0FF] rounded-md px-5 py-2 gap-1">
                    <ProfileFillIcon className="h-5 w-5 text-[#0D99FF]" />
                    <div>
                      <p className="text-[10px] textColor6 font-bold">Driver</p>
                      <p className="text-xs font-bold">Robert Johnson</p>
                    </div>
                  </div>
                  <div className="flex items-center w-full h-12 bg-[#E4F0FF] rounded-md px-5 py-2 gap-1">
                    <PhoneBrokenIcon className="h-5 w-5 text-[#0D99FF]" />
                    <div>
                      <p className="text-[10px] textColor6 font-bold">
                        Contact
                      </p>
                      <p className="text-xs font-bold">+233 55 574 7931</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-3 gap-3">
                  <div className="px-5 bg-[#E4F0FF] border w-full rounded-md py-3">
                    <p className="textColor6 font-bold text-xs">Pickup Time</p>
                    <p className="font-bold text-xs mt-2">7:30 AM</p>
                    <p className="text-xs mt-1">Main Street Bus Stop</p>
                  </div>
                  <div className="px-5 bg-[#E4F0FF] border w-full rounded-md py-3">
                    <p className="textColor6 font-bold text-xs">Return Time</p>
                    <p className="font-bold text-xs mt-2">3:30 PM</p>
                    <p className="text-xs mt-1">Main Street Bus Stop</p>
                  </div>
                </div>

                <div className="px-2 mt-4 bg-[#E4F0FF] w-full rounded-md py-3">
                  <div className="flex items-center gap-1">
                    <LocationIcon className="h-5 text-[#0D99FF]" />
                    <div>
                      <p className="text-xs font-bold">Current Location</p>
                      <p className="text-[10px] textColor6 font-bold">
                        Car Street & 5<sup>th</sup> Avenue
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-3 gap-1">
                    <TimeLineIcon className="h-5 text-[#0D99FF]" />
                    <div>
                      <p className="text-xs font-bold">Estimated Arrival</p>
                      <p className="text-[10px] textColor6 font-bold">
                        15 minutes
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full text-xs text-white py-1.5 bg-[#0D99FF] rounded-sm mt-5 hover:bg-[#0a7acc] transition-colors">
                  Track Bus in Real-Time
                </button>

                <div className="px-10 mt-4 bg-[#E2FFF8] w-full rounded-md py-6">
                  <p className="font-bold text-xs">Bus Status: On Time</p>
                  <p className="text-[9px] textColor6">
                    Your bus is currently on route ETA 15 minutes
                  </p>
                </div>
              </div>

              {/* Notifications Section - Desktop */}
              <div className="col-span-4 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] min-h-40 px-5 py-4 bg-white">
                <p className="font-bold mb-3 text-sm">Recent Notifications</p>

                <div className="h-auto rounded-md border px-4 py-3 bg-[#E4F0FF]">
                  <p className="text-xs font-bold">
                    Bus running on schedule today
                  </p>
                  <p className="text-[8px] text-blue-300 mt-1">30 mins ago</p>
                </div>

                <div className="h-auto rounded-md border mt-2 px-4 py-3 bg-[#FFF7EB]">
                  <p className="text-xs font-bold">Bus delayed by 10 minutes</p>
                  <p className="text-[8px] text-blue-300 mt-1">1 hour ago</p>
                </div>

                <div className="h-auto rounded-md border mt-2 px-4 py-3 bg-[#FFF7EB]">
                  <p className="text-xs font-bold">
                    New bus route schedule available
                  </p>
                  <p className="text-[8px] text-blue-300 mt-1">2 hours ago</p>
                </div>

                <div className="h-auto rounded-md border mt-2 px-4 py-3 bg-[#E4F0FF]">
                  <p className="text-xs font-bold">Bus maintenance completed</p>
                  <p className="text-[8px] text-blue-300 mt-1">3 hours ago</p>
                </div>

                <button className="w-full text-xs text-[#0D99FF] font-bold py-2 mt-3 hover:underline">
                  View All Notifications →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transportation;

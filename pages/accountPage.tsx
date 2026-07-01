/* eslint-disable no-irregular-whitespace */
import type { HomeProps } from "../src/assets/types";
import Profile from "../pages/account/Profile";
import Security from "../pages/account/Security";
import LinkedTeachers from "../pages/account/LinkedTeachers";
import Notifications from "../pages/account/Notifications";
import { useState } from "react";
const AccountPage = ({ isSidebarCollapsed }: HomeProps) => {
  const [page, setPage] = useState("profile");
  const pageSelector = (p: string) => {
    if (p == "profile") {
      return <Profile />;
    } else if (p == "security") {
      return <Security />;
    } else if (p == "link-teachers") {
      return <LinkedTeachers />;
    } else if (p == "notifications") {
      return <Notifications />;
    } else {
      return <Profile />;
    }
  };
  return (
    <>
      {/* Mobile Version */}
      <div className="lg:hidden block backgroundColor1 min-h-screen pt-17">
        <div className="px-4">
          <p className="text-[#B8B8B8] font-bold text-xs">
            Student Dashboard /{" "}
            <span className="text-black text-[10px]">Account and Settings</span>
          </p>

          <div className="overflow-x-auto mt-4 pb-2 hide-scrollbar">
            <div className="flex gap-2 min-w-max">
              <button
                onClick={() => setPage("profile")}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  page === "profile"
                    ? "bg-[#2F88FF] text-white"
                    : "bg-gray-100 text-[#6B7280]"
                }`}
              >
                My Profile
              </button>
              <button
                onClick={() => setPage("security")}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  page === "security"
                    ? "bg-[#2F88FF] text-white"
                    : "bg-gray-100 text-[#6B7280]"
                }`}
              >
                Security
              </button>
              <button
                onClick={() => setPage("link-teachers")}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  page === "link-teachers"
                    ? "bg-[#2F88FF] text-white"
                    : "bg-gray-100 text-[#6B7280]"
                }`}
              >
                Linked Teachers
              </button>
              <button
                onClick={() => setPage("notifications")}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  page === "notifications"
                    ? "bg-[#2F88FF] text-white"
                    : "bg-gray-100 text-[#6B7280]"
                }`}
              >
                Notifications
              </button>
              <button className="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap bg-gray-100 text-[#6B7280]">
                Group & Members
              </button>
              <button className="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap bg-gray-100 text-[#6B7280]">
                Billing
              </button>
              <button className="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap bg-red-50 text-red-500">
                Delete Account
              </button>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="mt-4">{pageSelector(page)}</div>
        </div>
      </div>

      {/* Add CSS for hiding scrollbar */}
      <style>{`
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>
      {/* Windows Version */}
      <div
        className={`hidden lg:block flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"} pt-15`}
      >
        <div className="backgroundColor1 min-h-screen">
          <div className="pl-3 pt-5 pr-3">
            <p className="text-[#B8B8B8] font-bold text-sm">
              Student Dashboard  / {" "}
              <span className="text-black text-xs">Account and Settings</span>
            </p>
            <div className="flex justify-between mt-7 gap-7">
              <div className="min-h-screen w-60 mb-7 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] pl-4 pt-6 ">
                <p
                  onClick={() => setPage("profile")}
                  className="text-[#2F88FF]  text-xs font-bold bg-[#2f89ff2f] py-4 pl-3 w-[80%] rounded-2xl cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => setPage("security")}
                  className="textColor6 hover:text-[#2F88FF]! text-xs font-bold cursor-pointer py-4 pl-3 w-[80%] rounded-2xl"
                >
                  Security
                </p>
                <p
                  onClick={() => setPage("link-teachers")}
                  className="textColor6 hover:text-[#2F88FF]! text-xs font-bold cursor-pointer py-4 pl-3 w-[80%] rounded-2xl"
                >
                  Linked Teachers
                </p>
                <p
                  onClick={() => setPage("notifications")}
                  className="textColor6 hover:text-[#2F88FF]! text-xs font-bold cursor-pointer py-4 pl-3 w-[80%] rounded-2xl"
                >
                  Notification
                </p>

                <p className="textColor6 text-xs font-bold py-4 pl-3 w-[80%] rounded-2xl">
                  Group and Members
                </p>
                <p className="textColor6 text-xs font-bold py-4 pl-3 w-[80%] rounded-2xl">
                  Billing
                </p>
                <p className="textColor6 text-xs font-bold py-4 pl-3 w-[80%] rounded-2xl">
                  Delete Account
                </p>
              </div>
              {pageSelector(page)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;

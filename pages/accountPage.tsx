import type { HomeProps } from "../src/assets/types";
import Profile from "../pages/account/Profile"
import Security from "../pages/account/Security";
import LinkedTeachers from "../pages/account/LinkedTeachers";
import Notifications from "../pages/account/Notifications";
import { useState } from "react";
const AccountPage = ({ isSidebarCollapsed }: HomeProps) => {
  const [page,setPage] = useState("profile")
  const pageSelector = (p:String) => {
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
  } 
  return (
    <div
      className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"} pt-15`}
    >
      <div className="backgroundColor1 min-h-screen">
        <div className="pl-3 pt-5 pr-3">
          <p className="text-[#B8B8B8] font-bold text-sm">
            Student Dashboard /{" "}
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
  );
};

export default AccountPage;

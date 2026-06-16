import { useState } from "react";
import AccountGraduationIcon from "@iconify-react/mdi/account-graduation";
import ContentFilesNewspaperIcon from "@iconify-react/streamline-pixel/content-files-newspaper";
import CartIcon from "@iconify-react/mdi/cart";
import ScheduleIcon from "@iconify-react/material-symbols/schedule";
import PerformanceIcon from "@iconify-react/mdi/performance";
import GraphNewOutlineIcon from "@iconify-react/solar/graph-new-outline";
import MoneyPaymentsCurrencyEuroDollarExchangeIcon from "@iconify-react/streamline-pixel/money-payments-currency-euro-dollar-exchange";
import TransportIcon from "@iconify-react/arcticons/transport";
import AnalyticsReportIcon from "@iconify-react/fluent-mdl2/analytics-report";
import BooksIcon from "@iconify-react/mdi/books";
import ProfileFillIcon from "@iconify-react/iconamoon/profile-fill";
import HelpIcon from "@iconify-react/mdi/help";
import SettingsOutlineIcon from "@iconify-react/material-symbols/settings-outline";
import LogoutSolidIcon from "@iconify-react/basil/logout-solid";
import MessageIcon from "@iconify-react/mage/message";
import NotificationSolidIcon from "@iconify-react/clarity/notification-solid";
import MenuIcon from "@iconify-react/material-symbols/menu";
import DashboardIcon from "@iconify-react/material-symbols/dashboard";
import ArrowDropdownIcon from "@iconify-react/nrk/arrow-dropdown";
import SearchIcon from "@iconify-react/tdesign/search";
import CloseIcon from "@iconify-react/material-symbols/close";
import Images from "../assets/images";
import HomePage from "../../pages/homePage";
import CoursesPage from "../../pages/coursesPage";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [page, setPage] = useState("");
  const menuItems = [
    { icon: DashboardIcon, label: "Dashboard" },
    { icon: ContentFilesNewspaperIcon, label: "My Courses" },
    { icon: CartIcon, label: "Assignments" },
    { icon: ScheduleIcon, label: "Schedule" },
    { icon: PerformanceIcon, label: "Performance" },
    { icon: GraphNewOutlineIcon, label: "AI Learning Path" },
    {
      icon: MoneyPaymentsCurrencyEuroDollarExchangeIcon,
      label: "Fees and Payments",
    },
    { icon: TransportIcon, label: "Transportation" },
    { icon: AnalyticsReportIcon, label: "Analytics" },
    { icon: BooksIcon, label: "Books and Materials" },
    { icon: ContentFilesNewspaperIcon, label: "Results" },
    { icon: ProfileFillIcon, label: "Account" },
  ];

  const pageSelector = (p: String) => {
    if (p == "home") {
      return <HomePage isSidebarCollapsed={isSidebarCollapsed} />;
    } else if (p == "courses") {
      return <CoursesPage isSidebarCollapsed={isSidebarCollapsed} />;
    } else {
      return <HomePage isSidebarCollapsed={isSidebarCollapsed} />;
    }
  };

  return (
    <>
      
      <div className="hidden lg:block">
        
        <div className="fixed top-0 right-0 left-0 z-50 bg-white flex justify-between items-center">
          <div className="flex items-center gap-1 w-fit pl-3">
            <div className=" flex justify-center items-center h-9 w-9 rounded-md bg-[#3884FF] ">
              <AccountGraduationIcon className="h-7 text-white" />
            </div>
            <p className={`${isSidebarCollapsed && "hidden"} font-bold`}>
              EduManage
            </p>
          </div>
          <div className={`ml-auto  transition-all duration-300 w-full `}>
            <div className="bg-[#FFFFFF] h-15 flex justify-between items-center px-4">
              <div
                className={`flex items-center gap-3 ${!isSidebarCollapsed && "ml-23"}`}
              >
                <MenuIcon
                  className="h-6 cursor-pointer text-gray-600 hover:text-gray-900"
                  onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                />
                <div className="flex items-center">
                  <input
                    type="search"
                    name=""
                    placeholder="Search..."
                    className="border px-3 rounded-2xl text-sm py-0.5 border-[#CAEEF4]"
                    id=""
                  />
                  <SearchIcon className="h-3 -ml-7" />
                </div>
              </div>
              <div className="flex items-center gap-3 pr-3">
                <div className="flex items-center gap-2">
                  <NotificationSolidIcon className="h-5 textColor6" />
                  <MessageIcon className="h-5 textColor6" />
                </div>
                <div className="flex items-center rounded-2xl shadow-2xl">
                  <img src={Images[2]} alt="" />
                  <div className="min-w-30">
                    <p className="text-[12px] font-[1000]">Pwatiu solomon</p>
                    <p className="text-[9px]">Student</p>
                  </div>
                  <ArrowDropdownIcon className="h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          
          <div
            className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 z-40 ${isSidebarCollapsed ? "w-16" : "w-64"}`}
          >
            <div className="flex items-center justify-center h-15 px-3 border-b">
              <div
                className={`flex justify-center items-center gap-1 ${isSidebarCollapsed ? "w-full" : "w-full"}`}
              >
                <div className="h-8 w-8 bg-[#3884FF] rounded-md flex items-center justify-center shrink-0">
                  <AccountGraduationIcon className="text-white text-2xl" />
                </div>
                {!isSidebarCollapsed && (
                  <p className="font-extrabold text-sm ml-1">
                    EduManage System
                  </p>
                )}
              </div>
            </div>

            <div className="pl-3 overflow-y-auto h-[calc(100vh-60px)] pb-20">
              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} bg-[#3884FF] py-1 rounded-md mt-6 flex gap-3 items-center`}
              >
                <DashboardIcon className="h-5 text-white" />
                {!isSidebarCollapsed && (
                  <p className="text-white font-bold">Dashboard</p>
                )}
              </div>
              <div
                onClick={() => {
                  setPage("courses");
                }}
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center cursor-pointer`}
              >
                <ContentFilesNewspaperIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p className="font-bold textColor6 text-xs">My Courses</p>
                )}
              </div>
              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center`}
              >
                <CartIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p className="font-bold textColor6 text-xs">Assignments</p>
                )}
              </div>
              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center`}
              >
                <ScheduleIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p className="font-bold textColor6 text-xs">Schedule</p>
                )}
              </div>
              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center`}
              >
                <PerformanceIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p className="font-bold textColor6 text-xs">Performance</p>
                )}
              </div>
              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center`}
              >
                <GraphNewOutlineIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p className="font-bold textColor6 text-xs">
                    AI Learning Path
                  </p>
                )}
              </div>
              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center`}
              >
                <MoneyPaymentsCurrencyEuroDollarExchangeIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p className="font-bold textColor6 text-xs">
                    Fees and Payments
                  </p>
                )}
              </div>
              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center`}
              >
                <TransportIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p className="font-bold textColor6 text-xs">Transportation</p>
                )}
              </div>
              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center`}
              >
                <AnalyticsReportIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p className="font-bold textColor6 text-xs">Analytics</p>
                )}
              </div>
              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center`}
              >
                <BooksIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p className="font-bold textColor6 text-xs">
                    Books and Materials
                  </p>
                )}
              </div>
              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center`}
              >
                <ContentFilesNewspaperIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p className="font-bold textColor6 text-xs">Results</p>
                )}
              </div>
              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center`}
              >
                <ProfileFillIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p className="font-bold textColor6 text-xs">Account</p>
                )}
              </div>

              {!isSidebarCollapsed && (
                <>
                  <div className="gradient4 rounded-2xl mt-20 w-52 py-5 px-5">
                    <CloseIcon className="h-4 float-right textColor2" />
                    <div className="flex justify-center">
                      <img src={Images[1]} className="h-30" alt="" />
                    </div>
                    <p className="text-sm font-bold textColor6 text-center">
                      Unlock Pro
                    </p>
                    <p className="text-[9px] textColor6 text-center">
                      Get deeper analytics, unlimited <br /> features and system
                      support upgrade
                    </p>
                    <button className="w-42 py-3 rounded-4xl shadow-2xl font-bold text-[#3759E2]">
                      Upgrade plan
                    </button>
                  </div>
                  <div className="bg-[#F6F6F6] w-52 rounded-2xl p-2 mt-5 mb-10">
                    <div className="w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center cursor-pointer">
                      <HelpIcon className="h-5 textColor3" />
                      <p className="font-bold textColor6 text-xs">Help desk</p>
                    </div>
                    <div className="w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center cursor-pointer">
                      <SettingsOutlineIcon className="h-5 textColor3" />
                      <p className="font-bold textColor6 text-xs">Settings</p>
                    </div>
                    <div className="w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center cursor-pointer">
                      <LogoutSolidIcon className="h-5 textColor3" />
                      <p className="font-bold textColor6 text-xs">Logout</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          
          {pageSelector(page)}
        </div>
      </div>

      
      <div className="lg:hidden backgroundColor1 min-h-screen">
        
        <div className="bg-white fixed top-0 left-0 right-0 z-20 px-4 py-3 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-[#3884FF] rounded-md flex items-center justify-center">
              <AccountGraduationIcon className="text-white text-xl" />
            </div>
            <p className="font-extrabold text-sm">EduManage</p>
          </div>
          <div className="flex items-center gap-3">
            <NotificationSolidIcon className="h-5 textColor6" />
            <MessageIcon className="h-5 textColor6" />
            <MenuIcon className="h-6" onClick={() => setIsSidebarOpen(true)} />
          </div>
        </div>

        
        {isSidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-30"
              onClick={() => setIsSidebarOpen(false)}
            />
            <div className="fixed left-0 top-0 h-full w-72 bg-white z-40 shadow-xl overflow-y-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-[#3884FF] rounded-md flex items-center justify-center">
                    <AccountGraduationIcon className="text-white text-xl" />
                  </div>
                  <p className="font-extrabold text-sm">EduManage System</p>
                </div>
                <CloseIcon
                  className="h-5"
                  onClick={() => setIsSidebarOpen(false)}
                />
              </div>
              <div className="p-3">
                {menuItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full py-2 rounded-md mt-2 flex gap-3 pl-2 items-center cursor-pointer hover:bg-gray-50"
                  >
                    <item.icon className="h-5 textColor3" />
                    <p className="font-bold textColor6 text-sm">{item.label}</p>
                  </div>
                ))}
                <div className="gradient4 rounded-2xl mt-6 p-4">
                  <div className="flex justify-center">
                    <img src={Images[1]} className="h-24" alt="" />
                  </div>
                  <p className="text-sm font-bold textColor6 text-center">
                    Unlock Pro
                  </p>
                  <p className="text-[10px] textColor6 text-center">
                    Get deeper analytics, unlimited features
                  </p>
                  <button className="w-full py-2 rounded-3xl shadow-md font-bold text-[#3759E2] bg-white mt-2 text-sm">
                    Upgrade plan
                  </button>
                </div>
                <div className="mt-4 pb-8">
                  <div className="w-full py-2 rounded-md mt-2 flex gap-3 pl-2 items-center">
                    <HelpIcon className="h-5 textColor3" />
                    <p className="font-bold textColor6 text-sm">Help desk</p>
                  </div>
                  <div className="w-full py-2 rounded-md mt-2 flex gap-3 pl-2 items-center">
                    <SettingsOutlineIcon className="h-5 textColor3" />
                    <p className="font-bold textColor6 text-sm">Settings</p>
                  </div>
                  <div className="w-full py-2 rounded-md mt-2 flex gap-3 pl-2 items-center">
                    <LogoutSolidIcon className="h-5 textColor3" />
                    <p className="font-bold textColor6 text-sm">Logout</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        
        <div className="px-4 py-3 pb-24 overflow-y-auto mt-15">
          {/* Breadcrumb */}
          <p className="text-[#B8B8B8] font-bold text-xs">
            Student Dashboard / <span className="text-black">Overview</span>
          </p>

          
          <div className="gradient5 rounded-2xl p-4 mt-3 relative overflow-hidden">
            <div>
              <p className="font-bold text-xl">
                Welcome back, <span>Abih Solo</span>
              </p>
              <p className="text-[11px] font-semibold mt-1">
                you've completed 85% of your homeworks goals this month!
              </p>
            </div>
            <div className="absolute right-0 bottom-0">
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
      </div>
    </>
  );
};

export default Dashboard;

//0256436701
//0533111917

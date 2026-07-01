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
import AccountPage from "../../pages/accountPage";
import Performance from "../../pages/performancePage";
import AssignmentPage from "../../pages/assignmentPage";
import Transportation from "../../pages/transportationPage";
import AiLearningPath from "../../pages/aiLearningPathPage";
import FeesPage from "../../pages/feesPage";
import SchedulePage from "../../pages/schedulePage";
import ResultsPage from "../../pages/resultsPage";


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [page, setPage] = useState("");
  const menuItems = [
    { icon: DashboardIcon, label: "Dashboard", page: "home" },
    { icon: ContentFilesNewspaperIcon, label: "My Courses", page: "courses" },
    { icon: CartIcon, label: "Assignments", page: "assignment" },
    { icon: ScheduleIcon, label: "Schedule", page: "schedule" },
    { icon: PerformanceIcon, label: "Performance", page: "performance" },
    { icon: GraphNewOutlineIcon, label: "AI Learning Path", page: "ai" },
    {
      icon: MoneyPaymentsCurrencyEuroDollarExchangeIcon,
      label: "Fees and Payments",
      page: "fees",
    },
    {
      icon: TransportIcon,
      label: "Transportation",
      page: "transportation",
    },
    { icon: AnalyticsReportIcon, label: "Analytics", page: "home" },
    { icon: BooksIcon, label: "Books and Materials", page: "home" },
    { icon: ContentFilesNewspaperIcon, label: "Results", page: "results" },
    { icon: ProfileFillIcon, label: "Account", page: "account" },
  ];

  const pageSelector = (p: string) => {
    if (p == "home") {
      return <HomePage isSidebarCollapsed={isSidebarCollapsed} />;
    } else if (p == "courses") {
      return <CoursesPage isSidebarCollapsed={isSidebarCollapsed} />;
    } else if (p == "account") {
      return <AccountPage isSidebarCollapsed={isSidebarCollapsed} />;
    } else if (p == "schedule") {
      return <SchedulePage isSidebarCollapsed={isSidebarCollapsed} />;
    } else if (p == "assignment") {
      return <AssignmentPage isSidebarCollapsed={isSidebarCollapsed} />;
    } else if (p == "fees") {
      return <FeesPage isSidebarCollapsed={isSidebarCollapsed} />;
    } else if (p == "transportation") {
      return <Transportation isSidebarCollapsed={isSidebarCollapsed} />;
    } else if (p == "ai") {
      return <AiLearningPath isSidebarCollapsed={isSidebarCollapsed} />;
    } else if (p == "results") {
      return <ResultsPage isSidebarCollapsed={isSidebarCollapsed} />;
    } else if (p == "performance") {
      return <Performance isSidebarCollapsed={isSidebarCollapsed} />;
    } else {
      return <HomePage isSidebarCollapsed={isSidebarCollapsed} />;
    }
  };
  const [selectedPage, setSelectedPage] = useState("");

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
                <div className="flex items-center rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]">
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
                onClick={() => {
                  setPage("");
                  setSelectedPage("");
                }}
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
                  setSelectedPage("courses");
                }}
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center cursor-pointer`}
              >
                <ContentFilesNewspaperIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p
                    className={`font-bold ${selectedPage == "courses" ? "text-[#3884ff]" : "textColor6"} hover:text-[#3884ff]!  text-xs `}
                  >
                    My Courses
                  </p>
                )}
              </div>
              <div
                onClick={() => {
                  setPage("assignment");
                  setSelectedPage("assignment");
                }}
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center cursor-pointer`}
              >
                <CartIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p
                    className={`font-bold ${selectedPage == "assignment" ? "text-[#3884ff]" : "textColor6"} hover:text-[#3884ff]!  text-xs `}
                  >
                    Assignments
                  </p>
                )}
              </div>
              <div
                onClick={() => {
                  setPage("schedule");
                  setSelectedPage("schedule");
                }}
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center cursor-pointer`}
              >
                <ScheduleIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p
                    className={`font-bold ${selectedPage == "schedule" ? "text-[#3884ff]" : "textColor6"} hover:text-[#3884ff]! text-xs `}
                  >
                    Schedule
                  </p>
                )}
              </div>

              <div
                onClick={() => {
                  setPage("performance");
                  setSelectedPage("performance");
                }}
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center cursor-pointer`}
              >
                <PerformanceIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p
                    className={`font-bold ${selectedPage == "performance" ? "text-[#3884ff]" : "textColor6"} hover:text-[#3884ff]! text-xs `}
                  >
                    Performance
                  </p>
                )}
              </div>
              <div
                onClick={() => {
                  setPage("ai");
                  setSelectedPage("ai");
                }}
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center cursor-pointer`}
              >
                <GraphNewOutlineIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p
                    className={`font-bold ${selectedPage == "ai" ? "text-[#3884ff]" : "textColor6"} hover:text-[#3884ff]! text-xs `}
                  >
                    {" "}
                    AI Learning Path
                  </p>
                )}
              </div>
              <div
                onClick={() => {
                  setPage("fees");
                  setSelectedPage("fees");
                }}
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center cursor-pointer`}
              >
                <MoneyPaymentsCurrencyEuroDollarExchangeIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p
                    className={`font-bold ${selectedPage == "fees" ? "text-[#3884ff]" : "textColor6"} hover:text-[#3884ff]! text-xs `}
                  >
                    {" "}
                    Fees and Payments
                  </p>
                )}
              </div>

              <div
                onClick={() => {
                  setPage("transportation");
                  setSelectedPage("transportation");
                }}
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center cursor-pointer`}
              >
                <TransportIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p
                    className={`font-bold ${selectedPage == "transportation" ? "text-[#3884ff]" : "textColor6"} hover:text-[#3884ff]! text-xs `}
                  >
                    Transportation
                  </p>
                )}
              </div>

              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center`}
              >
                <AnalyticsReportIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p
                    className={`font-bold ${selectedPage == "couvrses" ? "text-[#3884ff]" : "textColor6"} hover:text-[#3884ff]! text-xs `}
                  >
                    Analytics
                  </p>
                )}
              </div>
              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center`}
              >
                <BooksIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p
                    className={`font-bold ${selectedPage == "coursecs" ? "text-[#3884ff]" : "textColor6"} hover:text-[#3884ff]! text-xs `}
                  >
                    Books and Materials
                  </p>
                )}
              </div>

              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center cursor-pointer`}
                onClick={() => {
                  setPage("results");
                  setSelectedPage("results");
                }}
              >
                <ContentFilesNewspaperIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p
                    className={`font-bold ${selectedPage == "results" ? "text-[#3884ff]" : "textColor6"} hover:text-[#3884ff]! text-xs `}
                  >
                    Results
                  </p>
                )}
              </div>
              <div
                className={`${isSidebarCollapsed ? "w-10 justify-center" : "w-40"} py-1 rounded-md mt-4 flex gap-3 items-center cursor-pointer`}
                onClick={() => {
                  setPage("account");
                  setSelectedPage("account");
                }}
              >
                <ProfileFillIcon className="h-5 textColor3" />
                {!isSidebarCollapsed && (
                  <p
                    className={`font-bold ${selectedPage == "account" ? "text-[#3884ff]" : "textColor6"} hover:text-[#3884ff]! text-xs `}
                  >
                    Account
                  </p>
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
                    <button className="w-42 py-3 rounded-4xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] font-bold text-[#3759E2]">
                      Upgrade plan
                    </button>
                  </div>
                  <div className="bg-[#F6F6F6] w-52 rounded-2xl p-2 mt-5 mb-10">
                    <div className="w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center cursor-pointer">
                      <HelpIcon className="h-5 textColor3" />
                      <p
                        className={`font-bold ${selectedPage == "coufrses" ? "text-[#3884ff]" : "textColor6"}  text-xs `}
                      >
                        Help desk
                      </p>
                    </div>
                    <div className="w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center cursor-pointer">
                      <SettingsOutlineIcon className="h-5 textColor3" />
                      <p
                        className={`font-bold ${selectedPage == "courwses" ? "text-[#3884ff]" : "textColor6"}  text-xs `}
                      >
                        Settings
                      </p>
                    </div>
                    <div className="w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center cursor-pointer">
                      <LogoutSolidIcon className="h-5 textColor3" />
                      <p
                        className={`font-bold ${selectedPage == "couarses" ? "text-[#3884ff]" : "textColor6"}  text-xs `}
                      >
                        Logout
                      </p>
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
                    onClick={() => {
                      setPage(item.page);
                      setIsSidebarOpen(false);
                    }}
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
        {pageSelector(page)}
      </div>
    </>
  );
};

export default Dashboard;


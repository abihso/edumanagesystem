import { useState } from 'react';
import AccountGraduationIcon from '@iconify-react/mdi/account-graduation';
import ContentFilesNewspaperIcon from '@iconify-react/streamline-pixel/content-files-newspaper';
import CartIcon from '@iconify-react/mdi/cart';
import ScheduleIcon from '@iconify-react/material-symbols/schedule';
import PerformanceIcon from '@iconify-react/mdi/performance';
import GraphNewOutlineIcon from '@iconify-react/solar/graph-new-outline';
import MoneyPaymentsCurrencyEuroDollarExchangeIcon from '@iconify-react/streamline-pixel/money-payments-currency-euro-dollar-exchange';
import TransportIcon from '@iconify-react/arcticons/transport';
import AnalyticsReportIcon from '@iconify-react/fluent-mdl2/analytics-report';
import BooksIcon from '@iconify-react/mdi/books';
import ProfileFillIcon from '@iconify-react/iconamoon/profile-fill';
import HelpIcon from '@iconify-react/mdi/help';
import SettingsOutlineIcon from '@iconify-react/material-symbols/settings-outline';
import LogoutSolidIcon from '@iconify-react/basil/logout-solid';
import MessageIcon from '@iconify-react/mage/message';
import NotificationSolidIcon from '@iconify-react/clarity/notification-solid';
import MenuIcon from '@iconify-react/material-symbols/menu';
import DashboardIcon from '@iconify-react/material-symbols/dashboard';
import ArrowDropdownIcon from '@iconify-react/nrk/arrow-dropdown';
import SearchIcon from '@iconify-react/tdesign/search';
import CloseIcon from '@iconify-react/material-symbols/close';
import HomeIcon from '@iconify-react/mdi/home';
import BookOpenIcon from '@iconify-react/mdi/book-open';
import CalendarIcon from '@iconify-react/mdi/calendar';
import ChartLineIcon from '@iconify-react/mdi/chart-line';
import Images from '../assets/images';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'courses', label: 'Courses', icon: BookOpenIcon },
    { id: 'schedule', label: 'Schedule', icon: CalendarIcon },
    { id: 'analytics', label: 'Stats', icon: ChartLineIcon },
  ];

  const menuItems = [
    { icon: DashboardIcon, label: 'Dashboard' },
    { icon: ContentFilesNewspaperIcon, label: 'My Courses' },
    { icon: CartIcon, label: 'Assignments' },
    { icon: ScheduleIcon, label: 'Schedule' },
    { icon: PerformanceIcon, label: 'Performance' },
    { icon: GraphNewOutlineIcon, label: 'AI Learning Path' },
    { icon: MoneyPaymentsCurrencyEuroDollarExchangeIcon, label: 'Fees and Payments' },
    { icon: TransportIcon, label: 'Transportation' },
    { icon: AnalyticsReportIcon, label: 'Analytics' },
    { icon: BooksIcon, label: 'Books and Materials' },
    { icon: ContentFilesNewspaperIcon, label: 'Results' },
    { icon: ProfileFillIcon, label: 'Account' },
  ];

  return (
    <>
      {/* Desktop and large screen versions */}
      <div className="hidden lg:grid grid-cols-12">
        <div className="min-h-screen col-span-2">
          <div className='flex items-center justify-between h-15'>
            <div className='flex justify-center items-center gap-1 w-full'>
              <div className='h-8 w-8 bg-[#3884FF] rounded-md flex items-center justify-center'>
                <AccountGraduationIcon className='text-white text-2xl' />
              </div>
              <p className="font-extrabold text-sm">EduManage System</p>
            </div>
            <MenuIcon className='h-8 mr-2' />
          </div>
          <div className='pl-3'>
            <div className='bg-[#3884FF] w-40 py-1 rounded-md mt-6 flex gap-3 pl-1 items-center'>
              <DashboardIcon className='h-5 text-white' />
              <p className='text-white font-bold'>Dashboard</p>
            </div>
            <div className='w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center'>
              <ContentFilesNewspaperIcon className='h-5 textColor3' />
              <p className='font-bold textColor6 text-xs'>My Courses</p>
            </div>
            <div className='w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center'>
              <CartIcon className='h-5 textColor3' />
              <p className='font-bold textColor6 text-xs'>Assignments</p>
            </div>
            <div className='w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center'>
              <ScheduleIcon className='h-5 textColor3' />
              <p className='font-bold textColor6 text-xs'>Schedule</p>
            </div>
            <div className='w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center'>
              <PerformanceIcon className='h-5 textColor3' />
              <p className='font-bold textColor6 text-xs'>Performance</p>
            </div>
            <div className='w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center'>
              <GraphNewOutlineIcon className='h-5 textColor3' />
              <p className='font-bold textColor6 text-xs'>AI Learning Path</p>
            </div>
            <div className='w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center'>
              <MoneyPaymentsCurrencyEuroDollarExchangeIcon className='h-5 textColor3' />
              <p className='font-bold textColor6 text-xs'>Fees and Payments</p>
            </div>
            <div className='w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center'>
              <TransportIcon className='h-5 textColor3' />
              <p className='font-bold textColor6 text-xs'>Transportation</p>
            </div>
            <div className='w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center'>
              <AnalyticsReportIcon className='h-5 textColor3' />
              <p className='font-bold textColor6 text-xs'>Analytics</p>
            </div>
            <div className='w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center'>
              <BooksIcon className='h-5 textColor3' />
              <p className='font-bold textColor6 text-xs'>Books and Materials</p>
            </div>
            <div className='w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center'>
              <ContentFilesNewspaperIcon className='h-5 textColor3' />
              <p className='font-bold textColor6 text-xs'>Results</p>
            </div>
            <div className='w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center'>
              <ProfileFillIcon className='h-5 textColor3' />
              <p className='font-bold textColor6 text-xs'>Account</p>
            </div>
            <div className='gradient4 rounded-2xl mt-20 w-52 py-5 px-5'>
              <CloseIcon className='h-4 float-right textColor2' />
              <div className='flex justify-center'>
                <img src={Images[1]} className='h-30' alt="" />
              </div>
              <p className='text-sm font-bold textColor6 text-center'>Unlock Pro</p>
              <p className='text-[9px] textColor6 text-center'>Get deeper analytics, unlimited <br /> features and system support upgrade</p>
              <button className='w-42 py-3 rounded-4xl shadow-2xl font-bold text-[#3759E2]'>Upgrade plan</button>
            </div>
            <div className='bg-[#F6F6F6] w-52 rounded-2xl p-2 mt-5 mb-10'>
              <div className='w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center cursor-pointer'>
                <HelpIcon className='h-5 textColor3' />
                <p className='font-bold textColor6 text-xs'>Help desk</p>
              </div>
              <div className='w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center cursor-pointer'>
                <SettingsOutlineIcon className='h-5 textColor3' />
                <p className='font-bold textColor6 text-xs'>Settings</p>
              </div>
              <div className='w-40 py-1 rounded-md mt-4 flex gap-3 pl-1 items-center cursor-pointer'>
                <LogoutSolidIcon className='h-5 textColor3' />
                <p className='font-bold textColor6 text-xs'>Logout</p>
              </div>
            </div>
          </div>
        </div>
        <div className="backgroundColor1 min-h-screen col-span-10">
          {/* Nav-Bar */}
          <div className='bg-[#FFFFFF] h-15 flex justify-between items-center'>
            <div className='ml-3'>
              <div className='flex items-center'>
                <input type="search" name="" placeholder='Search...' className='border px-3 rounded-2xl text-sm py-0.5 border-[#CAEEF4]' id="" />
                <SearchIcon className='h-3 -ml-7' />
              </div>
            </div>
            <div className='flex items-center gap-3 pr-3'>
              <div className='flex items-center gap-2'>
                <NotificationSolidIcon className='h-5 textColor6' />
                <MessageIcon className='h-5 textColor6' />
              </div>
              <div className='flex items-center rounded-2xl shadow-2xl'>
                <img src={Images[2]} alt="" />
                <div className='min-w-30'>
                  <p className='text-[12px] font-[1000]'>Pwatiu solomon</p>
                  <p className='text-[9px]'>Student</p>
                </div>
                <ArrowDropdownIcon className='h-5' />
              </div>
            </div>
          </div>
          <div className='pl-3 pt-5'>
            <p className='text-[#B8B8B8] font-bold text-sm'>Student Dashboard / <span className='text-black text-xs'>Overview</span></p>
            <div className='grid grid-cols-12 mt-3 gap-4'>
              <div className='col-span-8'>
                <div className='h-32 rounded-3xl gradient5 flex justify-between py-5 px-5'>
                  <div>
                    <p className='font-[1000] text-3xl'>Welcome back, <span>Abih Solo</span></p>
                    <p className='text-xs font-bold mt-2'>you've completed 85% of your homeworks goals this month! <br /> keep going to reach and improve even more</p>
                  </div>
                  <div>
                    <img className='h-50 -mt-30' src={Images[3]} alt="" />
                  </div>
                </div>
                <div className='grid grid-cols-12 gap-4 mt-4'>
                  <div className='col-span-6 rounded-2xl min-h-40 shadow-2xl'>
                    <div className='pl-3 pt-2 pb-3'>
                      <p className='font-bold'>Post for Notice</p>
                      <p className='text-[10px] text-[#AEAEAE]'>Overview of published and scheduled events in school</p>
                    </div>
                    <hr className='text-[#AEAEAE]' />
                    <div className='px-3 pb-3'>
                      <div className='flex justify-between gap-1 mt-3'>
                        <div className='flex gap-2 w-55'>
                          <button className='py-3 border-b-2 textColor3 font-bold text-xs w-full'>Latest post</button>
                          <button className='py-3 textColor6 font-bold text-xs w-full'>Latest post</button>
                        </div>
                        <p className='font-bold text-2xl'>...</p>
                      </div>
                      <div className='flex gap-3 mt-4'>
                        <div className='w-30 h-20 flex items-center'>
                          <p className='-rotate-90 -ml-5 font-bold textColor6 text-xs text-center w-full'>Dec 25</p>
                          <div className='w-full -ml-7 bg-[#D9D9D9] h-full rounded-2xl flex justify-center items-center'>
                            <img src={Images[4]} className='h-12 rounded-2xl' alt="" />
                          </div>
                        </div>
                        <div>
                          <p className='font-bold text-lg mt-2'>@Accountant</p>
                          <p className='text-[10px]'>+5% increase in next accademic year's fees</p>
                        </div>
                      </div>
                      <div className='flex gap-3 mt-4'>
                        <div className='w-30 h-20 flex items-center'>
                          <p className='-rotate-90 -ml-5 font-bold textColor6 text-xs text-center w-full'>Dec 25</p>
                          <div className='w-full -ml-7 bg-[#D9D9D9] h-full rounded-2xl flex justify-center items-center'>
                            <img src={Images[4]} className='h-12 rounded-2xl' alt="" />
                          </div>
                        </div>
                        <div>
                          <p className='font-bold text-lg mt-2'>@Accountant</p>
                          <p className='text-[10px]'>+5% increase in next accademic year's fees</p>
                        </div>
                      </div>
                      <div className='flex gap-3 mt-4'>
                        <div className='w-30 h-20 flex items-center'>
                          <p className='-rotate-90 -ml-5 font-bold textColor6 text-xs text-center w-full'>Dec 25</p>
                          <div className='w-full -ml-7 bg-[#D9D9D9] h-full rounded-2xl flex justify-center items-center'>
                            <img src={Images[4]} className='h-12 rounded-2xl' alt="" />
                          </div>
                        </div>
                        <div>
                          <p className='font-bold text-lg mt-2'>@Accountant</p>
                          <p className='text-[10px]'>+5% increase in next accademic year's fees</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-6 rounded-2xl min-h-40 shadow-2xl'>
                    <div className='pl-3 pt-2 pb-3'>
                      <p className='font-bold'>AI Personalized Recommendations</p>
                      <p className='text-[10px] text-[#AEAEAE]'>Machine learning for your academic success and carreer path</p>
                    </div>
                    <hr className='text-[#AEAEAE]' />
                    <div className='p-5'>
                      <div className='bg-[#EBF3FF] h-20 rounded-2xl px-5 py-2'>
                        <div className='flex gap-3 items-center'>
                          <p className='font-bold bg-[#D2DEFF] w-44 rounded-md py-1 px-2'>Study Suggestion</p>
                          <p className='text-xs'>87% confidence</p>
                        </div>
                        <p className='text-[10px] mt-2'>
                          Lorem ipsum, dolor sit amet io quis eveniet asperiores nisi fuga deleniti placeat non to
                        </p>
                      </div>
                      <div className='bg-[#EBF3FF] h-20 rounded-2xl mt-3 px-5 py-2'>
                        <div className='flex gap-3 items-center'>
                          <p className='font-bold bg-[#D2DEFF] w-44 rounded-md py-1 px-2'>Career Path</p>
                          <p className='text-xs'>87% confidence</p>
                        </div>
                        <p className='text-[10px] mt-2'>
                          Lorem ipsum, dolor sit amet io quis eveniet asperiores nisi fuga deleniti placeat non to
                        </p>
                      </div>
                      <div className='bg-[#EBF3FF] h-20 rounded-2xl mt-3 px-5 py-2'>
                        <div className='flex gap-3 items-center'>
                          <p className='font-bold bg-[#D2DEFF] w-44 rounded-md py-1 px-2'>Learning Resource</p>
                          <p className='text-xs'>87% confidence</p>
                        </div>
                        <p className='text-[10px] mt-2'>
                          Lorem ipsum, dolor sit amet io quis eveniet asperiores nisi fuga deleniti placeat non to
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 min-h-40 mt-7 mb-10 rounded-2xl shadow-2xl'>
                  <p className='font-bold'>Your Courses</p>
                  <p className='text-[10px] textColor6'>Courses are based on the current GES curriculum for all Basic Schools</p>
                  <div className='bg-[#EBF3FF] px-5 py-3 rounded-2xl mt-3'>
                    <p className='font-bold'>Mathematics</p>
                    <div className='flex justify-between pr-3'>
                      <p className='text-sm'>MATH303 | Sir Antwi Boasiako</p>
                      <p className='text-xs textColor6'>7/23 Lessons</p>
                    </div>
                    <progress 
                      value={40} 
                      max={100} 
                      className='w-full rounded-3xl h-2
                      [&::-webkit-progress-bar]:bg-gray-200 
                      [&::-webkit-progress-value]:bg-[#2F88FF]
                      [&::-webkit-progress-value]:rounded-3xl
                      [&::-moz-progress-bar]:bg-[#2F88FF]
                      [&::-moz-progress-bar]:rounded-3xl'
                    />
                  </div>
                  <div className='bg-[#EBF3FF] px-5 py-3 rounded-2xl mt-3'>
                    <p className='font-bold'>Integrated Science</p>
                    <div className='flex justify-between pr-3'>
                      <p className='text-sm'>SCS303 | Sir Kusi Boasiako</p>
                      <p className='text-xs textColor6'>3/13 Lessons</p>
                    </div>
                    <progress 
                      value={20} 
                      max={100} 
                      className='w-full rounded-3xl h-2
                      [&::-webkit-progress-bar]:bg-gray-200 
                      [&::-webkit-progress-value]:bg-[#2F88FF]
                      [&::-webkit-progress-value]:rounded-3xl
                      [&::-moz-progress-bar]:bg-[#2F88FF]
                      [&::-moz-progress-bar]:rounded-3xl'
                    />
                  </div>
                  <div className='bg-[#EBF3FF] px-5 py-3 rounded-2xl mt-3'>
                    <p className='font-bold'>Creative and Perform Art</p>
                    <div className='flex justify-between pr-3'>
                      <p className='text-sm'>CPA356 | Madam Lizy</p>
                      <p className='text-xs textColor6'>19/65 Lessons</p>
                    </div>
                    <progress 
                      value={78} 
                      max={100} 
                      className='w-full rounded-3xl h-2
                      [&::-webkit-progress-bar]:bg-gray-200 
                      [&::-webkit-progress-value]:bg-[#2F88FF]
                      [&::-webkit-progress-value]:rounded-3xl
                      [&::-moz-progress-bar]:bg-[#2F88FF]
                      [&::-moz-progress-bar]:rounded-3xl'
                    />
                  </div>
                  <div className='bg-[#EBF3FF] px-5 py-3 rounded-2xl mt-3'>
                    <p className='font-bold'>Religious and Moral Education</p>
                    <div className='flex justify-between pr-3'>
                      <p className='text-sm'>RME356 | Madam Vida</p>
                      <p className='text-xs textColor6'>83/100 Lessons</p>
                    </div>
                    <progress 
                      value={83} 
                      max={100} 
                      className='w-full rounded-3xl h-2
                      [&::-webkit-progress-bar]:bg-gray-200 
                      [&::-webkit-progress-value]:bg-[#2F88FF]
                      [&::-webkit-progress-value]:rounded-3xl
                      [&::-moz-progress-bar]:bg-[#2F88FF]
                      [&::-moz-progress-bar]:rounded-3xl'
                    />
                  </div>
                </div>
              </div>
              <div className='col-span-4 pr-4'>
                <div className='w-full h-110 gradient6 p-8 rounded-3xl'>
                  <p className='font-[1000]'>Academic Performance</p>
                  <div className='h-5/6 flex justify-center items-center'>
                    <div className='flex justify-center items-center w-[90%] h-[90%] rounded-full gradient7'>
                      <div className='flex justify-center items-center w-[80%] h-[80%] bg-[#EFEFEF] rounded-full'>
                        <div className='flex justify-center items-center w-[80%] h-[80%] bg-[#FFFFFF] rounded-full'>
                          <p className='font-bold text-4xl textColor1'>78%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between mt-3'>
                    <p className='font-bold bg-[#D2DEFF] px-3 rounded-md'>Current GPA : <span className='textColor6'>3.7</span></p>
                    <p className='text-[10px] font-bold text-[#00C06D]'>! +0.2 from last semester</p>
                  </div>
                </div>
                <div className='bg-[#F3FCF4] min-h-40 mt-5 rounded-2xl px-5 py-2'>
                  <div className='flex justify-between items-center'>
                    <p className='font-bold'>Linked Teachers</p>
                    <p className='text-[10px] text-[#9497FF] font-bold'>See all</p>
                  </div>
                  <div className='flex justify-center mt-2 items-center bg-[#D9D9D9] px-3 py-2 rounded-2xl'>
                    <img src={Images[2]} alt="" />
                    <div className='w-full'>
                      <p className='text-[12px] font-bold'>Mr Godfred Kusi(Subject Teacher)</p>
                      <p className='text-[10px]'>English</p>
                    </div>
                    <ArrowDropdownIcon className='h-7' />
                  </div>
                  <div className='flex justify-center items-center mt-3 bg-[#D9D9D9] px-3 py-2 rounded-2xl'>
                    <img src={Images[2]} alt="" />
                    <div className='w-full'>
                      <p className='text-[12px] font-bold'>Mr Godfred Kusi(Subject Teacher)</p>
                      <p className='text-[10px]'>English</p>
                    </div>
                    <ArrowDropdownIcon className='h-7' />
                  </div>
                </div>
                <div className='bg-[#F3FCF4] min-h-90 mt-5 rounded-2xl px-5 py-2 gradient8'>
                  <div className='flex justify-between items-center'>
                    <p className='font-bold'>Attendance</p>
                    <p className='text-[10px] text-[#9497FF] font-bold'>See all</p>
                  </div>
                  <p className='font-bold mt-1'>This Week/Week 2</p>
                  <div className='flex justify-between items-center mt-2'>
                    <p className='text-sm'>Today</p>
                    <div className='w-5 h-5 bg-[#64E727] rounded-md'></div>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <p className='text-sm'>Tuesday</p>
                    <div className='w-5 h-5 bg-[#64E727] rounded-md'></div>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <p className='text-sm'>Wednessday</p>
                    <div className='w-5 h-5 bg-[#64E727] rounded-md'></div>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <p className='text-sm'>Thursday</p>
                    <div className='w-5 h-5 bg-[#64E727] rounded-md'></div>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <p className='text-sm'>Friday</p>
                    <div className='w-5 h-5 bg-[#F41616] flex justify-center items-center rounded-full'>
                      <div className='w-4 h-4 bg-[#FFFFFF] flex justify-center items-center rounded-full'>
                        <div className='w-2 h-2 bg-[#F41616] rounded-full'></div>
                      </div>
                    </div>
                  </div>
                  <p className='mt-3 font-bold'>Last Week/Week 1</p>
                  <div className='flex justify-between items-center mt-2'>
                    <p className='text-sm'>Tuesday</p>
                    <div className='w-5 h-5 bg-[#64E727] rounded-md'></div>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <p className='text-sm'>Wednessday</p>
                    <div className='w-5 h-5 bg-[#64E727] rounded-md'></div>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <p className='text-sm'>Thursday</p>
                    <div className='w-5 h-5 bg-[#64E727] rounded-md'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile phones and smaller screen versions */}
      <div className="lg:hidden backgroundColor1 min-h-screen">
        {/* Mobile Header */}
        <div className="bg-white sticky top-0 z-20 px-4 py-3 flex justify-between items-center shadow-sm">
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

        {/* Mobile Sidebar Drawer */}
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
                <CloseIcon className="h-5" onClick={() => setIsSidebarOpen(false)} />
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
                  <p className="text-sm font-bold textColor6 text-center">Unlock Pro</p>
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

        {/* Mobile Main Content - Scrollable */}
        <div className="px-4 py-3 pb-24 overflow-y-auto">
          {/* Breadcrumb */}
          <p className="text-[#B8B8B8] font-bold text-xs">
            Student Dashboard / <span className="text-black">Overview</span>
          </p>

          {/* Welcome Card */}
          <div className="gradient5 rounded-2xl p-4 mt-3 relative overflow-hidden">
            <div>
              <p className="font-bold text-xl">Welcome back, <span>Abih Solo</span></p>
              <p className="text-[11px] font-semibold mt-1">
                you've completed 85% of your homeworks goals this month!
              </p>
            </div>
            <div className="absolute right-0 bottom-0">
              <img className="h-24 opacity-80" src={Images[3]} alt="" />
            </div>
          </div>

          {/* Search Bar */}
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

          {/* Academic Performance Card */}
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
              <p className="text-[10px] font-bold text-[#00C06D]">↑ +0.2 from last sem</p>
            </div>
          </div>

          {/* Notice & AI Recommendations as Scrollable Horizontal */}
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

          {/* Your Courses */}
          <div className="bg-white rounded-2xl p-3 mt-4 shadow-sm">
            <p className="font-bold">Your Courses</p>
            <p className="text-[9px] textColor6">
              Based on current GES curriculum
            </p>
            {[
              { name: 'Mathematics', code: 'MATH303', teacher: 'Sir Antwi Boasiako', progress: 40, lessons: '7/23' },
              { name: 'Integrated Science', code: 'SCS303', teacher: 'Sir Kusi Boasiako', progress: 20, lessons: '3/13' },
              { name: 'Creative and Perform Art', code: 'CPA356', teacher: 'Madam Lizy', progress: 78, lessons: '19/65' },
              { name: 'Religious and Moral Education', code: 'RME356', teacher: 'Madam Vida', progress: 83, lessons: '83/100' },
            ].map((course, idx) => (
              <div key={idx} className="bg-[#EBF3FF] rounded-xl p-3 mt-3">
                <p className="font-bold text-sm">{course.name}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs">{course.code} | {course.teacher}</p>
                  <p className="text-[10px] textColor6">{course.lessons} Lessons</p>
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

          {/* Linked Teachers & Attendance Grid */}
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
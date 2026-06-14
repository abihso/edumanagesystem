import AccountGraduationIcon from '@iconify-react/mdi/account-graduation';
import Images from '../assets/images'

const Login = () => {
  return (
    <div className='bg-[#f7fcff] min-h-screen p-3 sm:p-4 md:p-6 lg:p-8 overflow-x-hidden'>
        {/* Header */}
        <div className='flex items-center justify-center pt-3 sm:pt-5 md:pt-8 lg:pt-10 gap-2 sm:gap-3'>
            <img 
                src={Images[0]} 
                alt="Logo" 
                className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain' 
            />
            <p 
                className='textColor1 text-base sm:text-xl md:text-2xl lg:text-3xl tracking-tight' 
                style={{ fontWeight: 1000, fontFamily: 'inherit' }}
            >
                AltBit Softwares
            </p>
        </div>
        
        {/* Welcome Text */}
        <p className='textColor4 text-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 font-bold text-xs sm:text-sm md:text-base px-3 sm:px-4'>
            Welcome back, please sign-in to continue
        </p>
        
        {/* Main Content - Fully Responsive Layout */}
        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-2 sm:px-4 md:px-6'>
            
            {/* Left Section - Info Card */}
            <div className='w-full sm:w-auto max-w-md lg:max-w-lg rounded-2xl px-3 sm:px-4'>
                {/* Logo Section */}
                <div className='flex gap-3 sm:gap-4'>
                    <div className='h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 bg-[#7BAEFF] rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0'>
                        <AccountGraduationIcon className='text-white text-2xl sm:text-3xl md:text-4xl' />
                    </div>
                    <div className='flex-1'>
                        <p className='textColor1 font-bold text-base sm:text-lg md:text-xl break-words'>EduManage System</p>
                        <p className='textColor2 text-xs sm:text-sm break-words'>Basic School Management System</p>
                    </div>
                </div>
                
                {/* Description */}
                <p className='font-bold mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base'>Intelligent School Management System</p>
                <p className='textColor2 mt-2 sm:mt-3 md:mt-5 text-xs sm:text-sm leading-relaxed'>
                    Comprehensive platform with AI-powered predictions for academic performance, financial, and logistics Optimization
                </p>
                
                {/* Features List */}
                <div className='mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 space-y-1.5 sm:space-y-2'>
                    <p className='textColor2 text-xs sm:text-sm font-light flex items-start gap-1.5 sm:gap-2'>
                        <span className='text-blue-500 text-sm sm:text-base mt-0.5'>•</span>
                        <span className='flex-1 break-words'>Academic Management & AI-powered Predictions</span>
                    </p>
                    <p className='textColor2 text-xs sm:text-sm font-light flex items-start gap-1.5 sm:gap-2'>
                        <span className='text-blue-500 text-sm sm:text-base mt-0.5'>•</span>
                        <span className='flex-1 break-words'>Financial Planning & Smart Forecasting</span>
                    </p>
                    <p className='textColor2 text-xs sm:text-sm font-light flex items-start gap-1.5 sm:gap-2'>
                        <span className='text-blue-500 text-sm sm:text-base mt-0.5'>•</span>
                        <span className='flex-1 break-words'>Account & Supply Chain Optimization</span>
                    </p>
                    <p className='textColor2 text-xs sm:text-sm font-light flex items-start gap-1.5 sm:gap-2'>
                        <span className='text-blue-500 text-sm sm:text-base mt-0.5'>•</span>
                        <span className='flex-1 break-words'>Real-time Transportation & Route Planning</span>
                    </p>
                </div>
                
                {/* Stats Grid */}
                <div className='grid grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12'>
                    <div className='flex flex-col justify-center pl-3 sm:pl-5 h-16 sm:h-20 rounded-xl sm:rounded-2xl gradient2'>
                        <p className='font-bold textColor3 text-sm sm:text-base'>9+</p>
                        <p className='text-[10px] sm:text-xs font-bold'>User Roles</p>
                    </div>
                    <div className='flex flex-col justify-center pl-3 sm:pl-5 h-16 sm:h-20 rounded-xl sm:rounded-2xl gradient3'>
                        <p className='font-bold textColor3 text-xs sm:text-sm'>AI-Powered</p>
                        <p className='text-[10px] sm:text-xs font-bold'>Predictions</p>
                    </div>
                    <div className='flex flex-col justify-center pl-3 sm:pl-5 h-16 sm:h-20 rounded-xl sm:rounded-2xl gradient2'>
                        <p className='font-bold textColor3 text-xs sm:text-sm'>Real-time</p>
                        <p className='text-[10px] sm:text-xs font-bold'>Analytics</p>
                    </div>
                    <div className='flex flex-col justify-center pl-3 sm:pl-5 h-16 sm:h-20 rounded-xl sm:rounded-2xl gradient3'>
                        <p className='font-bold textColor3 text-sm sm:text-base'>360<sup>o</sup></p>
                        <p className='text-[10px] sm:text-xs font-bold'>Management</p>
                    </div>
                </div>
            </div>
            
            {/* Right Section - Login Form */}
            <div className='w-full sm:w-auto max-w-md rounded-2xl gradient1 shadow-xl px-4 sm:px-5 md:px-6 lg:px-7 py-4 sm:py-5'>
                <p className='font-bold text-base sm:text-lg'>Sign in</p>
                <p className='text-xs sm:text-sm mt-2 sm:mt-3 md:mt-4'>Select your role and credentials to access the dashboard</p>
                
                <form className='mt-2 sm:mt-4 md:mt-5'>
                    <label className='font-bold text-sm sm:text-base' htmlFor="role">Role</label>
                    <select 
                        id="role" 
                        className='w-full bg-[#dadada5d] p-2 sm:p-2.5 mb-2 rounded-xl mt-1.5 sm:mt-2 text-sm sm:text-base'
                    >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>
                    
                    <label className='font-bold text-sm sm:text-base' htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        placeholder='Enter username' 
                        id="username" 
                        className='w-full bg-[#dadada5d] p-2 sm:p-2.5 mb-2 rounded-xl mt-1.5 sm:mt-2 text-sm sm:text-base'
                    />
                    
                    <label className='font-bold text-sm sm:text-base' htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        placeholder='Enter password' 
                        id="password" 
                        className='w-full bg-[#dadada5d] p-2 sm:p-2.5 mb-2 rounded-xl mt-1.5 sm:mt-2 text-sm sm:text-base'
                    />

                    <input 
                        type="submit" 
                        value="Sign in" 
                        className='w-full bg-[#7B7B7B] py-2.5 sm:py-3 rounded-2xl text-white font-bold cursor-pointer hover:bg-[#6a6a6a] transition-colors text-sm sm:text-base'
                    />
                </form>
                
                <p className='text-xs text-center mt-2 sm:mt-4 textColor2 cursor-pointer hover:underline'>
                    Forgotten Password?
                </p>
                
                {/* Quick Demo Access - Fixed Position */}
                <div className='relative mt-3 sm:mt-7 md:mt-8'>
                    <hr className='textColor2' />
                    <p className='textColor2 font-bold absolute left-1/2 transform -translate-x-1/2 -top-3 bg-[#f2f4fc] w-fit px-3 sm:px-4 md:px-5 rounded-2xl text-[11px] sm:text-xs md:text-sm whitespace-nowrap'>
                        Quick Demo Access
                    </p>
                </div>
                
                <div className='grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-6'>
                    <button className='w-full border col-span-1 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border-[#818181] font-bold text-xs sm:text-sm hover:bg-gray-100 transition-colors'>
                        Headmaster
                    </button>
                    <button className='w-full border col-span-1 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border-[#818181] font-bold text-xs sm:text-sm hover:bg-gray-100 transition-colors'>
                        Teacher
                    </button>
                    <button className='w-full border col-span-1 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border-[#818181] font-bold text-xs sm:text-sm hover:bg-gray-100 transition-colors'>
                        Accountant
                    </button>
                    <button className='w-full border col-span-1 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border-[#818181] font-bold text-xs sm:text-sm hover:bg-gray-100 transition-colors'>
                        Student
                    </button>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className='mt-12 sm:mt-16 md:mt-20 px-3 sm:px-4'>
            <p className='textColor2 text-xs sm:text-sm font-light text-center'>
                © 2023 EduManageSystem. All rights reserved.
            </p>
            <p className='textColor2 text-xs sm:text-sm font-light text-center mt-1 sm:mt-2'>
                Policies || Support || Help || Terms of Service || Privacy Policy
            </p>
            <p className='textColor2 text-[10px] sm:text-xs font-light text-center mt-1 sm:mt-2 px-2 wrap-break-words'>
                EduManage(Basic School Management System(BSM)) version 1.0.0. Developed by AltBit Softwares.
            </p>
        </div>
    </div>
  )
}

export default Login
import AccountGraduationIcon from '@iconify-react/mdi/account-graduation';
import Images from '../assets/images'

const Login = () => {
  return (
    <div className='bg-[#f7fcff] min-h-screen p-4 sm:p-6 md:p-8'>
        {/* Header */}
        <div className='flex items-center justify-center pt-5 sm:pt-8 md:pt-10 gap-2 sm:gap-3'>
            <img src={Images[0]} alt="" className='w-5 h-5 sm:w-6 sm:h-6' />
            <p className='font-black text-xl sm:text-2xl md:text-3xl'>AltBit Softwares</p>
        </div>
        
        {/* Welcome Text */}
        <p className='text-center mt-6 sm:mt-8 md:mt-10 font-bold text-sm sm:text-base px-4'>
            Welcome back, please sign-in to continue
        </p>
        
        {/* Main Content - Responsive Layout */}
        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6'>
            
            {/* Left Section - Info Card - Original width min-w-150 */}
            <div className='w-40 min-h-125 min-w-150 rounded-2xl'>
                {/* Logo Section */}
                <div className='flex gap-3 sm:gap-4'>
                    <div className='h-16 w-16 sm:h-20 sm:w-20 bg-[#7BAEFF] rounded-2xl flex items-center justify-center flex-shrink-0'>
                        <AccountGraduationIcon className='text-white text-3xl sm:text-4xl' />
                    </div>
                    <div>
                        <p className='font-bold text-lg sm:text-xl'>EduManage System</p>
                        <p className='textColor2 text-xs sm:text-sm'>Basic School Management System</p>
                    </div>
                </div>
                
                {/* Description */}
                <p className='font-bold mt-4 sm:mt-5'>Intelligent School Management System</p>
                <p className='textColor2 mt-3 sm:mt-5 text-xs sm:text-sm'>
                    Comprehensive platform with AI-powered predictions for academic performance, financial, and logistics Optimization
                </p>
                
                {/* Features List */}
                <div className='mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-15 space-y-2'>
                    <p className='textColor2 text-xs sm:text-sm font-light flex items-start gap-2'>
                        <span className='text-blue-500 '>•</span>
                        Academic Management & AI-powered Predictions
                    </p>
                    <p className='textColor2 text-xs sm:text-sm font-light flex items-start gap-2 mt-2'>
                        <span className='text-blue-500 '>•</span>
                        Financial Planning & Smart Forecasting
                    </p>
                    <p className='textColor2 text-xs sm:text-sm font-light flex items-start gap-2 mt-2'>
                        <span className='text-blue-500 '>•</span>
                        Account & Supply Chain Optimization
                    </p>
                    <p className='textColor2 text-xs sm:text-sm font-light flex items-start gap-2 mt-2'>
                        <span className='text-blue-500 '>•</span>
                        Real-time Transportation & Route Planning
                    </p>
                </div>
                
                {/* Stats Grid */}
                <div className='grid grid-cols-2 gap-3 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-15'>
                    <div className='flex flex-col justify-center pl-5 h-20 rounded-2xl gradient2'>
                        <p className='font-bold textColor3'>9+</p>
                        <p className='text-xs font-bold'>User Roles</p>
                    </div>
                    <div className='flex flex-col justify-center pl-5 h-20 rounded-2xl gradient3'>
                        <p className='font-bold textColor3'>AI-Powered</p>
                        <p className='text-xs font-bold'>Predictions</p>
                    </div>
                    <div className='flex flex-col justify-center pl-5 h-20 rounded-2xl gradient2'>
                        <p className='font-bold textColor3'>Real-time</p>
                        <p className='text-xs font-bold'>Analytics</p>
                    </div>
                    <div className='flex flex-col justify-center pl-5 h-20 rounded-2xl gradient3'>
                        <p className='font-bold textColor3'>360<sup>o</sup></p>
                        <p className='text-xs font-bold'>Management</p>
                    </div>
                </div>
            </div>
            
            {/* Right Section - Login Form - Original width min-w-150 */}
            <div className='w-40 min-h-125 min-w-150 rounded-2xl gradient1 shadow-xl px-7 py-5'>
                <p className='font-bold'>Sign in</p>
                <p className='text-xs mt-4'>Select your role and credentials to access the dashboard</p>
                
                <form className='mt-5'>
                    <label className='font-bold' htmlFor="role">Role</label> <br />
                    <select 
                        id="role" 
                        className='w-full bg-[#dadada5d] p-2 mb-2 rounded-xl mt-3'
                    >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>
                    
                    <label className='font-bold' htmlFor="username">Username</label> <br />
                    <input 
                        type="text" 
                        placeholder='Enter username' 
                        id="username" 
                        className='w-full bg-[#dadada5d] p-2 mb-2 rounded-xl mt-3'
                    />
                    
                    <label className='font-bold' htmlFor="password">Password</label> <br />
                    <input 
                        type="password" 
                        placeholder='Enter password' 
                        id="password" 
                        className='w-full bg-[#dadada5d] p-2 mb-2 rounded-xl mt-3'
                    />

                    <input 
                        type="submit" 
                        value="Sign in" 
                        className='w-full bg-[#7B7B7B] py-3 rounded-2xl text-white font-bold cursor-pointer hover:bg-[#6a6a6a] transition-colors'
                    />
                </form>
                
                <p className='text-xs text-center mt-4 textColor2 cursor-pointer hover:underline'>
                    Forgotten Password?
                </p>
                
                <hr className='mt-8 textColor2' />
                
                <div className='relative'>
                    <p className='textColor2 font-bold left-1/2 transform -translate-x-1/2 -mt-3 bg-[#f2f4fc] w-fit px-5 rounded-2xl text-sm absolute whitespace-nowrap'>
                        Quick Demo Access
                    </p>
                </div>
                
                <div className='grid grid-cols-2 gap-3 mt-5'>
                    <button className='w-full border col-span-1 py-1 rounded-2xl border-[#818181] font-bold hover:bg-gray-100 transition-colors'>
                        Headmaster
                    </button>
                    <button className='w-full border col-span-1 py-1 rounded-2xl border-[#818181] font-bold hover:bg-gray-100 transition-colors'>
                        Teacher
                    </button>
                    <button className='w-full border col-span-1 py-1 rounded-2xl border-[#818181] font-bold hover:bg-gray-100 transition-colors'>
                        Accountant
                    </button>
                    <button className='w-full border col-span-1 py-1 rounded-2xl border-[#818181] font-bold hover:bg-gray-100 transition-colors'>
                        Student
                    </button>
                </div>
            </div>
        </div>

        <p className='textColor2 text-xs sm:text-sm font-light text-center mt-20'>
            © 2023 EduManageSystem. All rights reserved.
        </p>
        <p className='textColor2 text-xs sm:text-sm font-light text-center mt-2'>
            Policies || Support || Help || Terms of Service || Privacy Policy
        </p>
        <p className='textColor2 text-xs sm:text-sm font-light text-center mt-2'>
            EduManage(Basic School Management System(BSM)) version 1.0.0. Developed by AltBit Softwares.
        </p>
    </div>
  )
}

export default Login
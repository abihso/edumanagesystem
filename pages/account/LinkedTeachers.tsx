import Images from "../../src/assets/images";
import MailOutlineRoundedIcon from "@iconify-react/material-symbols/mail-outline-rounded";

const LinkedTeachers = () => {
  const teachers = [1, 2, 3, 4, 5, 6, 7, 8]; // Array for mapping

  return (
    <div className="w-full rounded-2xl">
      <p className="font-bold text-sm lg:text-base">My Profile</p>

      {/* Profile Header - Responsive */}
      <div className="shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl bg-[#EBF3FF] mt-3 flex flex-col sm:flex-row items-center p-4 sm:p-0">
        <div className="flex-shrink-0">
          <img src={Images[2]} className="h-24 sm:h-30 z-0" alt="" />
        </div>
        <div className="text-center sm:text-left mt-2 sm:mt-0 sm:ml-4">
          <p className="font-bold text-base sm:text-xl">
            Theophilus, Antwi Boasiako
          </p>
          <p className="textColor6 text-[8px] sm:text-[10px]">
            Jan, 20th, 2024
          </p>
          <p className="textColor6 text-[8px] sm:text-[10px]">
            Junior High School 3B
          </p>
          <p className="textColor6 text-[8px] sm:text-[10px]">Student</p>
        </div>
      </div>

      {/* Teachers Grid - Responsive */}
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 mb-7">
        {teachers.map((_, index) => (
          <div
            key={index}
            className="col-span-1 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl flex flex-col sm:flex-row p-3 sm:p-0"
          >
            <div className="flex justify-center sm:justify-start w-full sm:w-30">
              <div className="h-24 sm:h-30 flex justify-center items-center">
                <img src={Images[2]} className="h-14 sm:h-17" alt="" />
              </div>
            </div>
            <div className="pt-2 sm:pt-8 w-full pr-0 sm:pr-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0">
                <p className="font-bold text-sm">Mr Antwi Boasiako</p>
                <p className="text-[8px] sm:text-[10px] text-[#9497FF] font-bold">
                  See details
                </p>
              </div>
              <p className="text-[10px] sm:text-xs textColor6">
                Junior High School
              </p>
              <p className="text-[10px] sm:text-xs textColor6">
                Subject Teacher
              </p>
              <p className="text-[10px] sm:text-xs textColor6 flex items-center mt-2 sm:mt-4 gap-1 sm:gap-2">
                <span>
                  <MailOutlineRoundedIcon className="h-4 sm:h-5" />
                </span>
                antwiboasiako@gmail.com
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mt-2 sm:mt-4">
                <p className="w-full border py-1 border-[#D9D9D9] rounded-md text-center text-[10px] sm:text-xs">
                  +233 555747931
                </p>
                <p className="w-full border py-1 border-[#D9D9D9] rounded-md text-center text-[10px] sm:text-xs">
                  +233 555747931
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedTeachers;

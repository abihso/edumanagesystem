import Images from "../../src/assets/images";
import ShieldTickIcon from "@iconify-react/charm/shield-tick";

const Security = () => {
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

      <form>
        {/* Security Settings */}
        <div className="px-3 sm:px-7 py-4 sm:py-6 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] mt-8">
          <p className="font-bold text-sm sm:text-base">Security Settings</p>
          <p className="font-extrabold mt-6 sm:mt-9 text-sm sm:text-base">
            Create new password
          </p>
          <p className="text-[10px] sm:text-xs font-bold textColor6">
            Your current password must be different your previous used password
          </p>

          <div className="mt-6 sm:mt-8">
            <label
              htmlFor="cp"
              className="text-xs sm:text-sm textColor6 font-bold"
            >
              Current Password
            </label>
            <input
              type="password"
              name="cp"
              id="cp"
              className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
              placeholder="***********"
            />
          </div>

          <div className="mt-6 sm:mt-8">
            <label
              htmlFor="np"
              className="text-xs sm:text-sm textColor6 font-bold"
            >
              New Password
            </label>
            <input
              type="password"
              name="np"
              id="np"
              className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
              placeholder="***********"
            />
          </div>

          <div className="mt-6 sm:mt-8">
            <label
              htmlFor="cop"
              className="text-xs sm:text-sm textColor6 font-bold"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="cop"
              id="cop"
              className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
              placeholder="***********"
            />
          </div>

          {/* Buttons and Security Info - Responsive */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-0 mt-6 sm:mt-8">
            <div className="w-full lg:w-70 flex flex-col sm:flex-row gap-2 justify-between items-center">
              <button className="bg-[#2F88FF] text-xs sm:text-sm rounded-2xl text-white font-bold w-full h-12 sm:h-13">
                Save
              </button>
              <button className="rounded-2xl textColor6 text-xs sm:text-sm font-bold w-full h-12 sm:h-13">
                Cancel
              </button>
            </div>

            <div className="w-full gradient0 rounded-2xl p-3 sm:pt-3 flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-20 flex justify-center sm:justify-end mb-2 sm:mb-0">
                <ShieldTickIcon className="h-8 sm:h-10 text-[#CB6F86]" />
              </div>
              <div className="w-full pl-0 sm:pl-4 text-center sm:text-left">
                <p className="font-extrabold text-sm sm:text-base">
                  Secure Your Account
                </p>
                <p className="text-[8px] sm:text-[10px] xl:text-xs textColor6">
                  Two factor authentication adds extra layer of security to your
                  account. To log in, in addition you'll need to provide a 6
                  digit code.{" "}
                  <span className="underline font-bold text-blue-400">
                    Learn more
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Security;

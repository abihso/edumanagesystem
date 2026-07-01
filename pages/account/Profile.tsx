import Images from "../../src/assets/images";

const Profile = () => {
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
        {/* Personal Information */}
        <div className="px-3 sm:px-7 py-4 sm:py-6 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] mt-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <p className="font-bold text-sm sm:text-base">
              Personal Information
            </p>
            <button className="px-3 sm:px-2 text-xs border rounded-md py-1 w-full sm:w-20 border-[#D9D9D9]">
              Edit
            </button>
          </div>

          {/* Name Fields - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 mt-6">
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <label htmlFor="fname" className="text-xs sm:text-sm">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
                placeholder="eg. Kofi"
              />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <label htmlFor="mname" className="text-xs sm:text-sm">
                Middle Name
              </label>
              <input
                type="text"
                name="mname"
                id="mname"
                className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
                placeholder="eg. Kofi"
              />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <label htmlFor="lname" className="text-xs sm:text-sm">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                id="lname"
                className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
                placeholder="eg. Kofi"
              />
            </div>
          </div>

          {/* Contact Info - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 mt-6">
            <div className="col-span-1 sm:col-span-2 lg:col-span-6">
              <label htmlFor="dob" className="text-xs sm:text-sm">
                Date of birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="textColor6 px-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
              />
            </div>
            <div className="col-span-1 sm:col-span-1 lg:col-span-3">
              <label htmlFor="phone" className="text-xs sm:text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
                placeholder="0247234913"
              />
            </div>
            <div className="col-span-1 sm:col-span-1 lg:col-span-3">
              <label htmlFor="ophone" className="text-xs sm:text-sm">
                Other Number
              </label>
              <input
                type="text"
                name="ophone"
                id="ophone"
                className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
                placeholder="0234567890"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mt-5">
            <label htmlFor="email" className="text-xs sm:text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
              placeholder="ab_hs_lo@gmail.com"
            />
          </div>
        </div>
      </form>

      {/* Address and Parent/Guardian - Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-7">
        {/* Personal Address */}
        <div className="col-span-1 lg:col-span-6 border shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl px-3 sm:px-7 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <p className="text-sm sm:text-base">Personal Address</p>
            <button className="text-xs border-[#D9D9D9] border py-1 sm:py-2 px-3 sm:px-4 rounded-md w-full sm:w-auto">
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-6">
            <div className="col-span-1 sm:col-span-6">
              <label htmlFor="country" className="text-xs sm:text-sm">
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
                placeholder="eg. Ghana"
              />
            </div>
            <div className="col-span-1 sm:col-span-6">
              <label htmlFor="city" className="text-xs sm:text-sm">
                City/State
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
                placeholder="eg. Kofi"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-6">
            <div className="col-span-1 sm:col-span-6">
              <label htmlFor="address1" className="text-xs sm:text-sm">
                Address
              </label>
              <input
                type="text"
                name="address1"
                id="address1"
                className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
                placeholder="eg. AK-0000-0"
              />
            </div>
            <div className="col-span-1 sm:col-span-6">
              <label htmlFor="address2" className="text-xs sm:text-sm">
                Address 2
              </label>
              <input
                type="text"
                name="address2"
                id="address2"
                className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
                placeholder="eg. AK-0000-2"
              />
            </div>
          </div>
        </div>

        {/* Parent / Guardian */}
        <div className="col-span-1 lg:col-span-6 border shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl px-3 sm:px-7 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <p className="text-sm sm:text-base">Parent / Guardian</p>
            <button className="text-xs border-[#D9D9D9] border py-1 sm:py-2 px-3 sm:px-4 rounded-md w-full sm:w-auto">
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-6">
            <div className="col-span-1 sm:col-span-6">
              <label htmlFor="name" className="text-xs sm:text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
                placeholder="eg. Abih"
              />
            </div>
            <div className="col-span-1 sm:col-span-6">
              <label htmlFor="lname2" className="text-xs sm:text-sm">
                Last Name
              </label>
              <input
                type="text"
                name="lname2"
                id="lname2"
                className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
                placeholder="eg. Solo"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-6">
            <div className="col-span-1 sm:col-span-6">
              <label htmlFor="phone3" className="text-xs sm:text-sm">
                Phone
              </label>
              <input
                type="tel"
                name="phone3"
                id="phone3"
                className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
                placeholder="eg. 0234567890"
              />
            </div>
            <div className="col-span-1 sm:col-span-6">
              <label htmlFor="phone4" className="text-xs sm:text-sm">
                Phone 2
              </label>
              <input
                type="tel"
                name="phone4"
                id="phone4"
                className="textColor6 pl-3 py-2 sm:py-1 border border-[#D9D9D9] rounded-md mt-2 w-full text-sm"
                placeholder="eg. 0234567892"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

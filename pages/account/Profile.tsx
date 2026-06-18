import Images from "../../src/assets/images";

const Profile = () => {
  return (
    <div className="w-full rounded-2xl">
      <p className="font-bold">My Profile</p>
      <div className="h-35 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl bg-[#EBF3FF] mt-3 flex items-center ">
        <div>
          <img src={Images[2]} className="h-30 z-0" alt="" />
          {/* <div className="h-10 w-15 bg-[#010DE2] rounded-xl -mt-12 z-50 "></div> */}
        </div>
        <div>
          <p className="font-bold text-xl">Theophilus, Antwi Boasiako</p>
          <p className="textColor6 text-[10px]">Jan, 20th, 2024</p>
          <p className="textColor6 text-[10px]">Junior High School 3B</p>
          <p className="textColor6 text-[10px]">Student</p>
        </div>
      </div>
      <form>
        <div className="px-7 py-6 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] mt-5">
          <div className="flex justify-between">
            <p className="font-bold">Personal Information</p>
            <button className="px-2 text-xs border rounded-md py-1 w-20 border-[#D9D9D9]">
              Edit
            </button>
          </div>
          <div className="grid grid-cols-12 gap-3 mt-6">
            <div className="col-span-4">
              <label htmlFor="fname" className=" text-sm">
                First Name
              </label>{" "}
              <br />
              <input
                type="text"
                name="fname"
                id="fname"
                className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
                placeholder="eg. Kofi"
              />
            </div>
            <div className="col-span-4">
              <label htmlFor="mname" className=" text-sm">
                Middle Name
              </label>{" "}
              <br />
              <input
                type="text"
                name="mname"
                id="mname"
                className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
                placeholder="eg. Kofi"
              />
            </div>
            <div className="col-span-4">
              <label htmlFor="lname" className=" text-sm">
                Last Name
              </label>{" "}
              <br />
              <input
                type="text"
                name="lname"
                id="lname"
                className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
                placeholder="eg. Kofi"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 mt-6">
            <div className="col-span-6">
              <label htmlFor="dob" className=" text-sm">
                Date of birth
              </label>{" "}
              <br />
              <input
                type="date"
                name="dob"
                id="dob"
                className="textColor6 px-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
              />
            </div>
            <div className="col-span-3">
              <label htmlFor="phone" className=" text-sm">
                Phone Number
              </label>{" "}
              <br />
              <input
                type="tel"
                name="phone"
                id="phone"
                className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
                placeholder="0247234913"
              />
            </div>
            <div className="col-span-3">
              <label htmlFor="ophone" className=" text-sm">
                Other Number
              </label>{" "}
              <br />
              <input
                type="text"
                name="ophone"
                id="ophone"
                className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
                placeholder="0234567890"
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="email" className=" text-sm">
              Email
            </label>{" "}
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
              placeholder="ab_hs_lo@gmail.com"
            />
          </div>
        </div>
      </form>
      <div className="grid grid-cols-12 gap-5 my-7">
        <form className="col-span-6 border shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl px-7 py-6">
          <div className="flex justify-between">
            <p>Personal Address</p>
            <button className="text-xs border-[#D9D9D9] border py-2 px-4 rounded-md">
              Edit
            </button>
          </div>
          <div className="grid grid-cols-12 gap-3 mt-6">
            <div className="col-span-6">
              <label htmlFor="country" className=" text-sm">
                Country
              </label>
              <br />
              <input
                type="text"
                name="country"
                id="country"
                className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
                placeholder="eg. Ghana"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="city" className=" text-sm">
                City/State
              </label>{" "}
              <br />
              <input
                type="text"
                name="city"
                id="city"
                className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
                placeholder="eg. Kofi"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 mt-6">
            <div className="col-span-6">
              <label htmlFor="address1" className=" text-sm">
                Address
              </label>
              <br />
              <input
                type="text"
                name="address1"
                id="address1"
                className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
                placeholder="eg. AK-0000-0"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="address2" className=" text-sm">
                Address 2
              </label>{" "}
              <br />
              <input
                type="text"
                name="address2"
                id="address2"
                className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
                placeholder="eg.  AK-0000-2"
              />
            </div>
          </div>
        </form>
        <form className="col-span-6 border shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl px-7 py-6">
          <div className="flex justify-between">
            <p>Parent / Gaurdian</p>
            <button className="text-xs border-[#D9D9D9] border py-2 px-4 rounded-md">
              Edit
            </button>
          </div>
          <div className="grid grid-cols-12 gap-3 mt-6">
            <div className="col-span-6">
              <label htmlFor="name" className=" text-sm">
                Name
              </label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
                placeholder="eg. Abih "
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="lname2" className=" text-sm">
                Last Name
              </label>{" "}
              <br />
              <input
                type="text"
                name="lname2"
                id="lname2"
                className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
                placeholder="eg. Solo"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 mt-6">
            <div className="col-span-6">
              <label htmlFor="phone3" className=" text-sm">
                Phone
              </label>
              <br />
              <input
                type="tel"
                name="phone3"
                id="phone3"
                className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
                placeholder="eg. 0234567890"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="address2" className=" text-sm">
                Phone 2
              </label>{" "}
              <br />
              <input
                type="tel"
                name="phone4"
                id="phone4"
                className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
                placeholder="eg.  0234567892"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

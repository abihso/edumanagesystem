import Images from "../../src/assets/images";
import ShieldTickIcon from "@iconify-react/charm/shield-tick";
const Security = () => {
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
        <div className="px-7 py-6 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] mt-8">
          <p className="font-bold text-sm">Security Settings</p>
          <p className="font-extrabold mt-9">Create new password</p>
          <p className="text-xs font-bold textColor6">
            Your current password must be different your previous used password
          </p>
          <div className="mt-8">
            <label htmlFor="cp" className=" text-sm textColor6 font-bold">
              Current Password
            </label>{" "}
            <br />
            <input
              type="password"
              name="cp"
              id="cp"
              className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
              placeholder="***********"
            />
          </div>
          <div className="mt-8">
            <label htmlFor="np" className=" text-sm textColor6 font-bold">
              New Password
            </label>{" "}
            <br />
            <input
              type="password"
              name="np"
              id="np"
              className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
              placeholder="***********"
            />
          </div>
          <div className="mt-8">
            <label htmlFor="cop" className=" text-sm textColor6 font-bold">
              Confirm Password
            </label>{" "}
            <br />
            <input
              type="password"
              name="cop"
              id="cop"
              className="textColor6 pl-3 py-1 border border-[#D9D9D9] rounded-md mt-2 w-full"
              placeholder="***********"
            />
          </div>
          <div className="flex items-center mt-8">
            <div className="w-70 flex gap-2 justify-between items-center">
              <button className="bg-[#2F88FF] text-sm rounded-2xl text-white font-bold w-full h-13">
                Save
              </button>
              <button className="rounded-2xl textColor6 text-sm font-bold w-full h-13">
                Cancel
              </button>
            </div>
            <div className="w-full gradient0 h-20 rounded-2xl pt-3 flex">
              <div className="w-20 flex justify-end">
                <ShieldTickIcon className="h-10 text-[#CB6F86]" />
              </div>
              <div className="w-full pl-4">
                <p className="font-extrabold">Secure Your Account</p>
                <p className="text-[10px] xl:text-xs textColor6">
                  Two factor authentication adds extra layer of security to your
                  acount.To log in, in addtion you'll need to provide a 6 digit
                  code.{" "}
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

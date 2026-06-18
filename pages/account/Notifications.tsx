import { useState } from "react";
import Images from "../../src/assets/images";
import { Checkbox } from "../../@/components/ui/checkbox";
const Notifications = () => {
  const [allNotifications, setAllNotification] = useState(false);
  return (
    <div className="w-full rounded-2xl">
      <p className="font-bold">My Profile</p>
      <div className="h-35 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl bg-[#EBF3FF] mt-3 flex items-center ">
        <div>
          <img src={Images[2]} className="h-30 z-0" alt="" />
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
          <div className="flex justify-between items-center">
            <p className="font-bold">Notifications</p>
            <div
              onClick={() => setAllNotification((p) => !p)}
              className={`w-10 h-5 px-0.5 bg-[#2F88FF] rounded-md flex items-center ${allNotifications && `justify-end`}`}
            >
              <div className="h-4 w-4 bg-white rounded-full"></div>
            </div>
          </div>
          <p className="font-bold text-xs mt-10">
            Exams/Assignments notification
          </p>
          <div className="flex justify-between mt-3 items-center">
            <p className="text-[12px]">Notifications</p>
            <Checkbox className="bg-[#2F88FF]! rounded-none " />
          </div>
          <div className="flex justify-between mt-3 items-center">
            <p className="text-[12px]">Exams notification</p>
            <Checkbox className="bg-[#2F88FF]! rounded-none " />
          </div>
          <div className="flex justify-between mt-3 items-center">
            <p className="text-[12px]">Assignment notification</p>
            <Checkbox className="bg-[#2F88FF]! rounded-none " />
          </div>
          <div className="flex justify-between mt-3 items-center">
            <p className="text-[12px]">Class notification</p>
            <Checkbox className="bg-[#2F88FF]! rounded-none " />
          </div>
          <p className="font-bold text-xs mt-10">Schedules</p>
          <div className="flex justify-between mt-3 items-center">
            <p className="text-[12px]">Performance notification</p>
            <Checkbox className="bg-[#2F88FF]! rounded-none " />
          </div>
          <div className="flex justify-between mt-3 items-center">
            <p className="text-[12px]">News notification</p>
            <Checkbox className="bg-[#2F88FF]! rounded-none " />
          </div>
          <p className="font-bold text-xs mt-10">Schedules</p>
          <div className="flex justify-between mt-3 items-center">
            <p className="text-[12px]">Performance notification</p>
            <Checkbox className="bg-[#2F88FF]! rounded-none " />
          </div>
          <div className="flex justify-between mt-3 items-center">
            <p className="text-[12px]">News notification</p>
            <Checkbox className="bg-[#2F88FF]! rounded-none " />
          </div>
          <div className="flex justify-between mt-3 items-center">
            <p className="text-[12px]">Billing notification</p>
            <Checkbox className="bg-[#2F88FF]! rounded-none " />
          </div>
          <div className="flex justify-between mt-3 items-center">
            <p className="text-[12px]">Attendance notification</p>
            <Checkbox className="bg-[#2F88FF]! rounded-none " />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Notifications;

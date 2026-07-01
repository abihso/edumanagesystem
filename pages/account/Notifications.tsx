import { useState } from "react";
import Images from "../../src/assets/images";
import { Checkbox } from "../../@/components/ui/checkbox";

const Notifications = () => {
  const [allNotifications, setAllNotification] = useState(false);
  const [notificationStates, setNotificationStates] = useState({
    notifications: false,
    exams: false,
    assignments: false,
    classes: false,
    performance: false,
    news: false,
    billing: false,
    attendance: false,
  });

  const toggleAllNotifications = () => {
    const newState = !allNotifications;
    setAllNotification(newState);
    setNotificationStates({
      notifications: newState,
      exams: newState,
      assignments: newState,
      classes: newState,
      performance: newState,
      news: newState,
      billing: newState,
      attendance: newState,
    });
  };

  const toggleCheckbox = (key: keyof typeof notificationStates) => {
    setNotificationStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
        {/* Notifications Settings */}
        <div className="px-3 sm:px-7 py-4 sm:py-6 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <p className="font-bold text-sm sm:text-base">Notifications</p>
            <div
              onClick={toggleAllNotifications}
              className={`w-10 h-5 px-0.5 bg-[#2F88FF] rounded-md flex items-center cursor-pointer transition-all ${
                allNotifications ? "justify-end" : "justify-start"
              }`}
            >
              <div className="h-4 w-4 bg-white rounded-full shadow-md transition-all"></div>
            </div>
          </div>

          {/* Notification Groups */}
          <p className="font-bold text-[10px] sm:text-xs mt-8 sm:mt-10">
            Exams/Assignments notification
          </p>

          <div className="flex justify-between mt-3 items-center">
            <p className="text-[11px] sm:text-[12px]">Notifications</p>
            <Checkbox
              checked={notificationStates.notifications}
              onCheckedChange={() => toggleCheckbox("notifications")}
              className="border-2 border-gray-300 data-[state=checked]:bg-[#2F88FF] data-[state=checked]:border-[#2F88FF] h-5 w-5 rounded"
            />
          </div>

          <div className="flex justify-between mt-3 items-center">
            <p className="text-[11px] sm:text-[12px]">Exams notification</p>
            <Checkbox
              checked={notificationStates.exams}
              onCheckedChange={() => toggleCheckbox("exams")}
              className="border-2 border-gray-300 data-[state=checked]:bg-[#2F88FF] data-[state=checked]:border-[#2F88FF] h-5 w-5 rounded"
            />
          </div>

          <div className="flex justify-between mt-3 items-center">
            <p className="text-[11px] sm:text-[12px]">
              Assignment notification
            </p>
            <Checkbox
              checked={notificationStates.assignments}
              onCheckedChange={() => toggleCheckbox("assignments")}
              className="border-2 border-gray-300 data-[state=checked]:bg-[#2F88FF] data-[state=checked]:border-[#2F88FF] h-5 w-5 rounded"
            />
          </div>

          <div className="flex justify-between mt-3 items-center">
            <p className="text-[11px] sm:text-[12px]">Class notification</p>
            <Checkbox
              checked={notificationStates.classes}
              onCheckedChange={() => toggleCheckbox("classes")}
              className="border-2 border-gray-300 data-[state=checked]:bg-[#2F88FF] data-[state=checked]:border-[#2F88FF] h-5 w-5 rounded"
            />
          </div>

          <p className="font-bold text-[10px] sm:text-xs mt-8 sm:mt-10">
            Performance & Updates
          </p>

          <div className="flex justify-between mt-3 items-center">
            <p className="text-[11px] sm:text-[12px]">
              Performance notification
            </p>
            <Checkbox
              checked={notificationStates.performance}
              onCheckedChange={() => toggleCheckbox("performance")}
              className="border-2 border-gray-300 data-[state=checked]:bg-[#2F88FF] data-[state=checked]:border-[#2F88FF] h-5 w-5 rounded"
            />
          </div>

          <div className="flex justify-between mt-3 items-center">
            <p className="text-[11px] sm:text-[12px]">News notification</p>
            <Checkbox
              checked={notificationStates.news}
              onCheckedChange={() => toggleCheckbox("news")}
              className="border-2 border-gray-300 data-[state=checked]:bg-[#2F88FF] data-[state=checked]:border-[#2F88FF] h-5 w-5 rounded"
            />
          </div>

          <p className="font-bold text-[10px] sm:text-xs mt-8 sm:mt-10">
            Account & System
          </p>

          <div className="flex justify-between mt-3 items-center">
            <p className="text-[11px] sm:text-[12px]">Billing notification</p>
            <Checkbox
              checked={notificationStates.billing}
              onCheckedChange={() => toggleCheckbox("billing")}
              className="border-2 border-gray-300 data-[state=checked]:bg-[#2F88FF] data-[state=checked]:border-[#2F88FF] h-5 w-5 rounded"
            />
          </div>

          <div className="flex justify-between mt-3 items-center">
            <p className="text-[11px] sm:text-[12px]">
              Attendance notification
            </p>
            <Checkbox
              checked={notificationStates.attendance}
              onCheckedChange={() => toggleCheckbox("attendance")}
              className="border-2 border-gray-300 data-[state=checked]:bg-[#2F88FF] data-[state=checked]:border-[#2F88FF] h-5 w-5 rounded"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Notifications;

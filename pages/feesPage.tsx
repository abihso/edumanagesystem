import type { HomeProps } from "../src/assets/types";
import TimeLineIcon from "@iconify-react/mingcute/time-line";
import CashBagGiveIcon from "@iconify-react/streamline-cyber/cash-bag-give";
import DotsThreeCircleDuotoneIcon from "@iconify-react/ph/dots-three-circle-duotone";
import CloseIcon from "@iconify-react/material-symbols/close";
import { useState } from "react";
import { Checkbox } from "../@/components/ui/checkbox";
import StatsComponent from "../src/components/stats-component";
import PaymentPage from "../pages/fees/paymentPage";
import StudentDetails from "../pages/fees/studentDetails";

const FeesPage = ({ isSidebarCollapsed }: HomeProps) => {
  const stats = [
    {
      icon: <CashBagGiveIcon className="h-5 sm:h-7 text-[#FF928A]" />,
      title: "Total Paid",
      data: <>$14,500</>,
      description1: "This semester",
      description2: "",
    },
    {
      icon: (
        <DotsThreeCircleDuotoneIcon className="h-5 sm:h-7 text-[#FF928A]" />
      ),
      title: "Pending",
      data: <>$300</>,
      description1: "Due Nov 15",
      description2: "",
    },
    {
      icon: <TimeLineIcon className="h-5 sm:h-7 text-[#FF928A]" />,
      title: "Total Due",
      data: <>$14,800</>,
      description1: "This semester",
      description2: "",
    },
  ];

  const [showDialogBox, setShowDialogBox] = useState(false);
  const [showPage, setShowPage] = useState("main");
  const [showComfirmDialogBox, setShowComfirmDialogBox] = useState(false);

  const handleComfirmPayment = () => {
    setShowComfirmDialogBox(false);
    setShowPage("creditCardPage");
  };

  // Sample fee data
  const feeBreakdowns = [
    {
      date: "23 - 02 - 2024",
      year: "2023/2024",
      term: "1",
      bank: "Prudential Bank",
      receipt: "80115580324",
      description: "Tuition",
      remarks: "-",
      bill: "2105.00",
      penalty: "-",
      payment: "",
    },
    {
      date: "23 - 02 - 2024",
      year: "2023/2024",
      term: "1",
      bank: "Prudential Bank",
      receipt: "80115580324",
      description: "Tuition",
      remarks: "-",
      bill: "2105.00",
      penalty: "-",
      payment: "",
    },
    {
      date: "23 - 02 - 2024",
      year: "2023/2024",
      term: "1",
      bank: "Prudential Bank",
      receipt: "80115580324",
      description: "Tuition",
      remarks: "-",
      bill: "2105.00",
      penalty: "-",
      payment: "",
    },
    {
      date: "23 - 02 - 2024",
      year: "2023/2024",
      term: "1",
      bank: "Prudential Bank",
      receipt: "80115580324",
      description: "Tuition",
      remarks: "-",
      bill: "2105.00",
      penalty: "-",
      payment: "",
    },
    {
      date: "23 - 02 - 2024",
      year: "2023/2024",
      term: "1",
      bank: "Prudential Bank",
      receipt: "80115580324",
      description: "Tuition",
      remarks: "-",
      bill: "2105.00",
      penalty: "-",
      payment: "",
    },
    {
      date: "23 - 02 - 2024",
      year: "2023/2024",
      term: "1",
      bank: "Prudential Bank",
      receipt: "80115580324",
      description: "Tuition",
      remarks: "-",
      bill: "2105.00",
      penalty: "-",
      payment: "",
    },
    {
      date: "23 - 02 - 2024",
      year: "2023/2024",
      term: "1",
      bank: "Prudential Bank",
      receipt: "80115580324",
      description: "Tuition",
      remarks: "-",
      bill: "2105.00",
      penalty: "-",
      payment: "",
    },
  ];

  const paymentHistory = [
    { title: "Tuition Fee", date: "Paid on: 2025-09-01", match: "95% match" },
    { title: "Library Fee", date: "Paid on: 2025-09-01", match: "95% match" },
  ];


  return (
    <>
      {showPage == "main" ? (
        <>
          {/* Mobile Version */}
          <div className="lg:hidden block backgroundColor1 min-h-screen pt-17">
            <div className="px-4">
              <p className="text-[#B8B8B8] font-bold text-xs">
                Student Dashboard /{" "}
                <span className="text-black text-[10px]">Fees and Payment</span>
              </p>

              {/* Stats Cards - Mobile */}
              <div className="mt-3 space-y-3">
                {stats.map((item, index) => (
                  <StatsComponent
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    data={item.data}
                    description1={item.description1}
                    description2={item.description2}
                    className="w-full h-auto gradient5 p-4 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]"
                  />
                ))}

                {/* Action Buttons - Mobile */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => setShowDialogBox(true)}
                    className="text-xs border w-full sm:w-auto px-4 py-2 rounded-md font-black bg-[#2F88FF] text-white"
                  >
                    Make Payment
                  </button>
                  <button className="text-xs border w-full sm:w-auto px-4 py-2 rounded-md font-black">
                    Print Statement
                  </button>
                </div>
              </div>

              {/* Fees Breakdown - Mobile Table */}
              <div className="py-3 px-2 mt-5 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl overflow-hidden">
                <div className="flex justify-between items-center px-2">
                  <p className="font-bold text-xs">Fees Breakdown</p>
                  <p className="font-bold text-[7px] text-blue-400">See all</p>
                </div>

                {/* Mobile Table */}
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-[8px]">
                    <thead>
                      <tr className="bg-[#468DFF] text-white">
                        <th className="px-2 py-2 text-left font-bold">Date</th>
                        <th className="px-2 py-2 text-left font-bold">
                          Description
                        </th>
                        <th className="px-2 py-2 text-left font-bold">Bill</th>
                        <th className="px-2 py-2 text-left font-bold">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeBreakdowns.slice(0, 8).map((item, index) => (
                        <tr
                          key={index}
                          className={`${index % 2 === 0 ? "bg-[#EBF3FF]" : "bg-white"} border-b border-gray-100`}
                        >
                          <td className="px-2 py-2.5">{item.date}</td>
                          <td className="px-2 py-2.5">{item.description}</td>
                          <td className="px-2 py-2.5 font-bold text-[#2F88FF]">
                            GH₵ {item.bill}
                          </td>
                          <td className="px-2 py-2.5">
                            <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-600 text-[7px] font-bold">
                              Paid
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Table Footer */}
                <div className="flex justify-between items-center px-2 mt-2 pt-2 border-t border-gray-200">
                  <p className="text-[7px] textColor6">
                    Showing 8 of {feeBreakdowns.length} entries
                  </p>
                  <div className="flex gap-1">
                    <button className="px-2 py-1 bg-gray-100 rounded text-[7px]">
                      Prev
                    </button>
                    <button className="px-2 py-1 bg-[#2F88FF] text-white rounded text-[7px]">
                      1
                    </button>
                    <button className="px-2 py-1 bg-gray-100 rounded text-[7px]">
                      2
                    </button>
                    <button className="px-2 py-1 bg-gray-100 rounded text-[7px]">
                      Next
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment History - Mobile */}
              <div className="py-3 px-3 mt-3 mb-5 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-xs">Payment History</p>
                    <p className="text-[8px] textColor6">
                      Curated materials based on your courses
                    </p>
                  </div>
                  <p className="font-bold text-[7px] text-blue-400">See all</p>
                </div>

                {/* Mobile Payment History Table */}
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-[8px]">
                    <thead>
                      <tr className="bg-[#468DFF] text-white">
                        <th className="px-2 py-2 text-left font-bold">Title</th>
                        <th className="px-2 py-2 text-left font-bold">Date</th>
                        <th className="px-2 py-2 text-left font-bold">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentHistory.map((item, index) => (
                        <tr
                          key={index}
                          className="bg-[#EBF3FF] border-b border-gray-100"
                        >
                          <td className="px-2 py-2.5">
                            <p className="font-bold text-[9px]">{item.title}</p>
                            <p className="text-[6px] textColor6">
                              {item.match}
                            </p>
                          </td>
                          <td className="px-2 py-2.5 text-[7px]">
                            {item.date}
                          </td>
                          <td className="px-2 py-2.5">
                            <button className="text-[7px] px-3 py-1 rounded-sm bg-black text-white">
                              Access
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Windows/Desktop Version */}
          <div
            className={`hidden lg:block flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"} pt-15`}
          >
            <div className="backgroundColor1 min-h-screen">
              <div className="pl-3 pt-5 pr-3">
                <p className="text-[#B8B8B8] font-bold text-sm">
                  Student Dashboard /{" "}
                  <span className="text-black text-xs">Fees and Payment</span>
                </p>
                <div className="col-span-9">
                  <div className="rounded-3xl grid grid-cols-12 gap-3 py-4">
                    {stats.map((item, index) => (
                      <StatsComponent
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        data={item.data}
                        description1={item.description1}
                        description2={item.description2}
                        className="col-span-3 h-35 gradient5 p-3 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]"
                      />
                    ))}
                    <div className="col-span-3 h-30 p-3 grid justify-end items-start">
                      <button
                        onClick={() => setShowDialogBox(true)}
                        className="text-[10px] border w-30 p-0.5 rounded-md font-black"
                      >
                        Make Payment
                      </button>
                      <button className="text-[10px] -mt-8 border w-30 p-0.5 rounded-md font-black">
                        Print Statement
                      </button>
                    </div>
                  </div>

                  {/* Desktop Fees Breakdown Table */}
                  <div className="py-2 px-5 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl overflow-x-auto">
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-xs">Fees Breakdown</p>
                      <p className="font-bold text-[8px] text-blue-400">
                        See all
                      </p>
                    </div>

                    <div className="min-w-200 mt-2">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-[#468DFF] h-10 rounded-md">
                            <th className="text-white font-bold text-[10px] text-center px-2">
                              Payment Date
                            </th>
                            <th className="text-white font-bold text-[10px] text-center px-2">
                              Academic Year
                            </th>
                            <th className="text-white font-bold text-[10px] text-center px-2">
                              Term
                            </th>
                            <th className="text-white font-bold text-[10px] text-center px-2">
                              Payment ID
                            </th>
                            <th className="text-white font-bold text-[10px] text-center px-2">
                              E-Receipt No
                            </th>
                            <th className="text-white font-bold text-[10px] text-center px-2">
                              Description
                            </th>
                            <th className="text-white font-bold text-[10px] text-center px-2">
                              Remarks
                            </th>
                            <th className="text-white font-bold text-[10px] text-center px-2">
                              Bill (GH)
                            </th>
                            <th className="text-white font-bold text-[10px] text-center px-2">
                              Penalty
                            </th>
                            <th className="text-white font-bold text-[10px] text-center px-2">
                              Payment (GH)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {feeBreakdowns.map((item, index) => (
                            <tr
                              key={index}
                              className={`${index % 2 === 0 ? "bg-[#EBF3FF]" : "bg-white"} h-10 rounded-md`}
                            >
                              <td className="text-[8px] text-center px-2">
                                {item.date}
                              </td>
                              <td className="text-[8px] text-center px-2">
                                {item.year}
                              </td>
                              <td className="text-[8px] text-center px-2">
                                {item.term}
                              </td>
                              <td className="text-[8px] text-center px-2">
                                {item.bank}
                              </td>
                              <td className="text-[8px] text-center px-2">
                                {item.receipt}
                              </td>
                              <td className="text-[8px] text-center px-2">
                                {item.description}
                              </td>
                              <td className="text-[8px] text-center px-2">
                                {item.remarks}
                              </td>
                              <td className="text-[8px] text-center px-2 font-bold text-[#2F88FF]">
                                {item.bill}
                              </td>
                              <td className="text-[8px] text-center px-2">
                                {item.penalty}
                              </td>
                              <td className="text-[8px] text-center px-2">
                                {item.payment}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Desktop Payment History */}
                  <div className="py-2 mt-3 px-5 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-xs">Payment History</p>
                        <p className="text-[10px] textColor6">
                          Curated materials based on your courses
                        </p>
                      </div>
                      <p className="font-bold text-[8px] text-blue-400">
                        See all
                      </p>
                    </div>

                    {paymentHistory.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-[#EBF3FF] py-2 px-5 mt-3"
                      >
                        <div>
                          <p className="text-xs font-bold">{item.title}</p>
                          <p className="text-[10px]">{item.date}</p>
                          <p className="text-[8px]">{item.match}</p>
                        </div>
                        <button className="text-[10px] w-30 rounded-sm bg-black text-white py-0.5">
                          Access
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dialog Boxes - Mobile Responsive */}
          {showDialogBox && (
            <StudentDetails
              setShowDialogBox={setShowDialogBox}
              setShowComfirmDialogBox={setShowComfirmDialogBox}
            />
          )}

          {/* Confirm Dialog - Mobile Responsive */}
          {showComfirmDialogBox && (
            <div className="fixed z-40 top-0 right-0 left-0 bottom-0 bg-[#000000b4] flex justify-center items-center p-4">
              <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[600px] lg:w-150 gradient9 rounded-2xl py-4 px-4 sm:px-5 gap-4 max-h-[90vh] overflow-y-auto">
                <CloseIcon
                  className="h-7 p-2 float-right -mt-2 cursor-pointer"
                  onClick={() => setShowComfirmDialogBox(false)}
                />
                <p className="font-bold text-xs sm:text-sm">
                  Confirm you want to make Payment for this particular Student
                </p>
                <p className="text-[8px] sm:text-[10px] textColor6">
                  Enter your Student you used in creating your account
                </p>

                <form className="mt-3" onSubmit={handleComfirmPayment}>
                  <label
                    htmlFor="name"
                    className="text-[9px] sm:text-[10px] font-bold"
                  >
                    Student Name
                  </label>
                  <input
                    type="text"
                    className="border w-full rounded-sm text-[9px] sm:text-[10px] p-2 mt-1"
                    placeholder="Antwi-Boasiako Theophilus"
                  />

                  <div className="flex flex-col sm:flex-row justify-between gap-2 mt-2">
                    <div className="w-full">
                      <label
                        htmlFor="paymentType"
                        className="text-[9px] sm:text-[10px] font-bold"
                      >
                        Payment Type
                      </label>
                      <select className="border w-full rounded-sm text-[9px] sm:text-[10px] p-2 mt-1">
                        <option value="">Select Payment Type</option>
                        <option value="">School Fee</option>
                        <option value="">Feeding Fee</option>
                        <option value="">Books Fee</option>
                        <option value="">Sports Fee</option>
                        <option value="">Examination Fee</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="dob"
                        className="text-[9px] sm:text-[10px] font-bold"
                      >
                        Date Of Birth
                      </label>
                      <input
                        type="date"
                        className="border w-full rounded-sm text-[9px] sm:text-[10px] p-2 mt-1"
                      />
                    </div>
                  </div>

                  <div className="w-full mt-2">
                    <label
                      htmlFor="studentId"
                      className="text-[9px] sm:text-[10px] font-bold"
                    >
                      Student ID
                    </label>
                    <input
                      type="text"
                      className="border w-full rounded-sm text-[9px] sm:text-[10px] p-2 mt-1"
                      placeholder="STUBTECH6210750"
                    />
                  </div>

                  <div className="w-full mt-2">
                    <label
                      htmlFor="parentName"
                      className="text-[9px] sm:text-[10px] font-bold"
                    >
                      Student Parent Name
                    </label>
                    <input
                      type="text"
                      className="border w-full rounded-sm text-[9px] sm:text-[10px] p-2 mt-1"
                      placeholder="Parent Name"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
                    <div className="flex gap-2 items-start">
                      <Checkbox className="border! border-black rounded-sm mt-0.5" />
                      <p className="text-[7px] sm:text-[8.5px] textColor6 font-bold">
                        Are you sure the details above is you and wants to make
                        payment for the student? If the details are correct
                        click on the submit button else click on cancel and type
                        in the correct{" "}
                        <span className="text-red-600">Index Number</span>
                      </p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button className="flex h-9 items-center border py-2 px-3 rounded-md text-white bg-[#FF725E] text-xs w-23 justify-center">
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex h-9 items-center border py-2 px-3 rounded-md text-white bg-[#2F88FF] text-xs w-23 justify-center"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </form>
                <p className="text-red-700 font-bold text-[8px] sm:text-[10px] mt-3">
                  Money paid is non-refundable
                </p>
              </div>
            </div>
          )}
        </>
      ) : (
        <PaymentPage isSidebarCollapsed={isSidebarCollapsed} />
      )}
    </>
  );
};

export default FeesPage;

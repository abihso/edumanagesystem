import type { HomeProps } from "../src/assets/types";
import TimeLineIcon from "@iconify-react/mingcute/time-line";
import CashBagGiveIcon from "@iconify-react/streamline-cyber/cash-bag-give";
import DotsThreeCircleDuotoneIcon from "@iconify-react/ph/dots-three-circle-duotone";
import MoneyPaymentsCurrencyEuroDollarExchangeIcon from "@iconify-react/streamline-pixel/money-payments-currency-euro-dollar-exchange";
import CloseIcon from "@iconify-react/material-symbols/close";
import { useState } from "react";
import { Checkbox } from "../@/components/ui/checkbox";
import IdCardRoundedIcon from "@iconify-react/material-symbols/id-card-rounded";
import VisaLineIcon from "@iconify-react/ri/visa-line";
const FeesPage = ({ isSidebarCollapsed }: HomeProps) => {
  const [showDialogBox, setShowDialogBox] = useState(false);
  const [showPage, setShowPage] = useState("main");
  const [showComfirmDialogBox, setShowComfirmDialogBox] = useState(false);
  const handleSubmit = () => {
    setShowDialogBox(false);
    setShowComfirmDialogBox(true);
  };
  const handleComfirmPayment = () => {
    setShowComfirmDialogBox(false);
    setShowPage("creditCardPage");
  };
  return (
    <>
      {showPage == "main" ? (
        <div
          className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"} pt-15`}
        >
          <div className="backgroundColor1 min-h-screen">
            <div className="pl-3 pt-5 pr-3">
              <p className="text-[#B8B8B8] font-bold text-sm">
                Student Dashboard  / {" "}
                <span className="text-black text-xs">Fees and Payment</span>
              </p>
              <div className="col-span-9">
                <div className=" rounded-3xl grid grid-cols-12 gap-3 py-4">
                  <div className=" col-span-3 h-30 gradient5 p-3 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] ">
                    <span className="flex gap-1 items-center">
                      <CashBagGiveIcon className="h-7 text-[#FF928A]" />
                      <p className="textColor6 font-bold text-sm">Total Paid</p>
                    </span>
                    <p className="mt-3 textColor6 font-bold text-xs">$14,500</p>
                    <p className="text-[10px] textColor6 font-bold mt-4 ">
                      This semester
                    </p>
                  </div>
                  <div className=" col-span-3 h-30 gradient5 p-3 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] ">
                    <span className="flex gap-1 items-center">
                      <DotsThreeCircleDuotoneIcon className="h-7 text-[#FF928A]" />
                      <p className="textColor6 font-bold text-sm">Pending</p>
                    </span>
                    <p className="mt-3 textColor6 font-bold text-xs">$300</p>
                    <p className="text-[10px] textColor6 font-bold mt-4 ">
                      Due Nov 15
                    </p>
                  </div>
                  <div className=" col-span-3 h-30 gradient5 p-3 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] ">
                    <span className="flex gap-1 items-center">
                      <TimeLineIcon className="h-7 text-[#FF928A]" />
                      <p className="textColor6 font-bold text-sm">Total Due</p>
                    </span>
                    <p className="mt-3 textColor6 font-bold text-xs">$14,800</p>
                    <p className="text-[10px] textColor6 font-bold mt-4 ">
                      This semester
                    </p>
                  </div>
                  <div className=" col-span-3 h-30  p-3 grid justify-end items-start ">
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
                <div className="py-2 px-5 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-xs">Fees Breakdown</p>
                    <p className="font-bold text-[8px] text-blue-400">
                      See all
                    </p>
                  </div>
                  <div className="grid grid-cols-12 bg-[#468DFF] mt-2 h-10 rounded-md items-center mb-3">
                    <div className="col-span-2">
                      <p className="text-white font-bold text-[10px] text-center ">
                        Payment Date
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-white font-bold text-[10px] text-center ">
                        Academic Year
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-white font-bold text-[10px] text-center ">
                        Term
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-white font-bold text-[10px] text-center ">
                        Payment ID
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-white font-bold text-[10px] text-center ">
                        E- Receipt No
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-white font-bold text-[10px] text-center ">
                        Description
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-white font-bold text-[10px] text-center ">
                        Remarks
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-white font-bold text-[10px] text-center ">
                        Bill (GH)
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-white font-bold text-[10px] text-center ">
                        Penalty
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-white font-bold text-[10px] text-center ">
                        Payment (GH)
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 bg-[#EBF3FF] mt-2 h-10 rounded-md items-center">
                    <div className="col-span-2">
                      <p className="  text-[8px] text-center ">
                        23 - 02 - 2024
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">2023/2024</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">1</p>
                    </div>
                    <div className="col-span-2">
                      <p className="  text-[8px] text-center ">
                        Prudential Bank
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">80115580324</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">Tuittion</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">-</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">2105.00</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">-</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center "></p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 mt-2 h-10 rounded-md items-center">
                    <div className="col-span-2">
                      <p className="  text-[8px] text-center ">
                        23 - 02 - 2024
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">2023/2024</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">1</p>
                    </div>
                    <div className="col-span-2">
                      <p className="  text-[8px] text-center ">
                        Prudential Bank
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">80115580324</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">Tuittion</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">-</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">2105.00</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">-</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center "></p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 bg-[#EBF3FF] mt-2 h-10 rounded-md items-center">
                    <div className="col-span-2">
                      <p className="  text-[8px] text-center ">
                        23 - 02 - 2024
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">2023/2024</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">1</p>
                    </div>
                    <div className="col-span-2">
                      <p className="  text-[8px] text-center ">
                        Prudential Bank
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">80115580324</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">Tuittion</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">-</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">2105.00</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">-</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center "></p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 mt-2 h-10 rounded-md items-center">
                    <div className="col-span-2">
                      <p className="  text-[8px] text-center ">
                        23 - 02 - 2024
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">2023/2024</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">1</p>
                    </div>
                    <div className="col-span-2">
                      <p className="  text-[8px] text-center ">
                        Prudential Bank
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">80115580324</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">Tuittion</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">-</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">2105.00</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">-</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center "></p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 bg-[#EBF3FF] mt-2 h-10 rounded-md items-center">
                    <div className="col-span-2">
                      <p className="  text-[8px] text-center ">
                        23 - 02 - 2024
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">2023/2024</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">1</p>
                    </div>
                    <div className="col-span-2">
                      <p className="  text-[8px] text-center ">
                        Prudential Bank
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">80115580324</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">Tuittion</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">-</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">2105.00</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">-</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center "></p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 mt-2 h-10 rounded-md items-center">
                    <div className="col-span-2">
                      <p className="  text-[8px] text-center ">
                        23 - 02 - 2024
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">2023/2024</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">1</p>
                    </div>
                    <div className="col-span-2">
                      <p className="  text-[8px] text-center ">
                        Prudential Bank
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">80115580324</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">Tuittion</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">-</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">2105.00</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">-</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center "></p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 bg-[#EBF3FF] mt-2 h-10 rounded-md items-center">
                    <div className="col-span-2">
                      <p className="  text-[8px] text-center ">
                        23 - 02 - 2024
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">2023/2024</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">1</p>
                    </div>
                    <div className="col-span-2">
                      <p className="  text-[8px] text-center ">
                        Prudential Bank
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">80115580324</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">Tuittion</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">-</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">2105.00</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center ">-</p>
                    </div>
                    <div className="col-span-1">
                      <p className="  text-[8px] text-center "></p>
                    </div>
                  </div>
                </div>
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
                  <div className="flex justify-between items-center bg-[#EBF3FF] py-2 px-5 mt-3">
                    <div>
                      <p className="text-xs font-bold">Tuition Fee</p>
                      <p className="text-[10px]">Paid on: 2025-09-01</p>
                      <p className="text-[8px]">95% match</p>
                    </div>
                    <button className="text-[10px] w-30 rounded-sm bg-black text-white py-0.5">
                      Access
                    </button>
                  </div>
                  <div className="flex justify-between items-center bg-[#EBF3FF] py-2 px-5 mt-3">
                    <div>
                      <p className="text-xs font-bold">Library Fee</p>
                      <p className="text-[10px]">Paid on: 2025-09-01</p>
                      <p className="text-[8px]">95% match</p>
                    </div>
                    <button className="text-[10px] w-30 rounded-sm bg-black text-white py-0.5">
                      Access
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showDialogBox && (
            <div className="fixed z-40 top-0 right-0 left-0 bottom-0 bg-[#000000b4] flex justify-center items-center ">
              <div className="h-100 w-100 gradient9 rounded-2xl py-3 px-5 gap-4">
                <CloseIcon
                  className="h-7 p-2 float-right -mt-2 "
                  onClick={() => setShowDialogBox(false)}
                />
                <p className="font-bold  text-xs">Make Payment</p>
                <p className="text-[8px]">
                  Enter your Student you used in creating your account
                </p>
                <form onSubmit={handleSubmit} className="mt-3">
                  <label htmlFor="name" className="text-[10px] font-bold">
                    Student Name
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border w-full rounded-sm text-[10px] p-2"
                    placeholder="Antwi-Boasiako Theophilus"
                  />
                  <div className="flex justify-between gap-2 mt-2 items-center">
                    <div
                      className="w-full
                "
                    >
                      <label htmlFor="name" className="text-[10px] font-bold">
                        Payment Type
                      </label>{" "}
                      <br />
                      <select
                        name=""
                        id=""
                        className="border w-full rounded-sm text-[10px] p-2"
                      >
                        <option value=""></option>
                        <option value="">School Fee</option>
                        <option value="">Feeding Fee</option>
                        <option value="">Books Fee</option>
                        <option value="">Sports Fee</option>
                        <option value="">Examination Fee</option>
                      </select>
                    </div>
                    <div
                      className="w-full
                "
                    >
                      <label htmlFor="name" className="text-[10px] font-bold">
                        Date Of Birth
                      </label>{" "}
                      <br />
                      <input
                        type="date"
                        name=""
                        id=""
                        className="border w-full rounded-sm text-[10px] p-2"
                        placeholder="20/01/2025"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-2 mt-2 items-center">
                    <div
                      className="w-full
                "
                    >
                      <label htmlFor="name" className="text-[10px] font-bold">
                        Student ID
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border w-full rounded-sm text-[10px] p-2"
                        placeholder="20/01/2025"
                      />
                    </div>
                    <div
                      className="w-full
                "
                    >
                      <label htmlFor="name" className="text-[10px] font-bold">
                        Class
                      </label>{" "}
                      <br />
                      <select
                        name=""
                        id=""
                        className="border w-full rounded-sm text-[10px] p-2"
                      >
                        <option value=""></option>
                        <option value="">Junior High School 3C</option>
                        <option value="">Junior High School 3B</option>
                        <option value="">Junior High School 3A</option>
                        <option value="">Junior High School 2C</option>
                        <option value="">Junior High School 2B</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-center mt-5">
                    <button className="flex border py-1 px-3 rounded-md text-white bg-[#01032D] text-xs ">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {showComfirmDialogBox && (
            <div className="fixed z-40 top-0 right-0 left-0 bottom-0 bg-[#000000b4] flex justify-center items-center ">
              <div className="h-100 w-150 gradient9 rounded-2xl py-3 px-5 gap-4">
                <CloseIcon
                  className="h-7 p-2 float-right -mt-2 "
                  onClick={() => setShowComfirmDialogBox(false)}
                />
                <p className="font-bold  text-xs">
                  Confirm you want make Payment for this particular Student
                </p>
                <p className="text-[8px]">
                  Enter your Student you used in creating your account
                </p>
                <form className="mt-3" onSubmit={handleComfirmPayment}>
                  <label htmlFor="name" className="text-[10px] font-bold">
                    Student Name
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border w-full rounded-sm text-[10px] p-2"
                    placeholder="Antwi-Boasiako Theophilus"
                  />
                  <div className="flex justify-between gap-2 mt-2 items-center">
                    <div
                      className="w-full
                "
                    >
                      <label htmlFor="name" className="text-[10px] font-bold">
                        Payment Type
                      </label>{" "}
                      <br />
                      <select
                        name=""
                        id=""
                        className="border w-full rounded-sm text-[10px] p-2"
                      >
                        <option value=""></option>
                        <option value="">School Fee</option>
                        <option value="">Feeding Fee</option>
                        <option value="">Books Fee</option>
                        <option value="">Sports Fee</option>
                        <option value="">Examination Fee</option>
                      </select>
                    </div>
                    <div
                      className="w-full
                "
                    >
                      <label htmlFor="name" className="text-[10px] font-bold">
                        Date Of Birth
                      </label>{" "}
                      <br />
                      <input
                        type="date"
                        name=""
                        id=""
                        className="border w-full rounded-sm text-[10px] p-2"
                        placeholder="20/01/2025"
                      />
                    </div>
                  </div>
                  <div
                    className="w-full
                "
                  >
                    <label htmlFor="name" className="text-[10px] font-bold">
                      Student ID
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border w-full rounded-sm text-[10px] p-2"
                      placeholder="20/01/2025"
                    />
                  </div>
                  <div
                    className="w-full
                "
                  >
                    <label htmlFor="name" className="text-[10px] font-bold">
                      Student Parent Name
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border w-full rounded-sm text-[10px] p-2"
                      placeholder="STUBTECH6210750"
                    />
                  </div>
                  <div className="flex justify-between gap-2 mt-5">
                    <div className="flex gap-2 ">
                      <Checkbox className="border! border-black rounded-sm" />
                      <p className="text-[8.5px] textColor6 font-bold">
                        Are you sure the details above is you and wants to make
                        payment for the student? If the details are correct
                        click on the submit button else click on cancel and type
                        in the correct{" "}
                        <span className="text-red-600">Index Number</span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex h-9 items-center border py-2 px-3 rounded-md text-white bg-[#FF725E] text-xs w-23 justify-center">
                        Cancel
                      </button>
                      <button className="flex h-9 items-center border py-2 px-3 rounded-md text-white bg-[#2F88FF] text-xs w-23 justify-center">
                        Comfirm
                      </button>
                    </div>
                  </div>
                </form>
                <p className="text-red-700 font-bold text-[10px] mt-3 ml-6">
                  Money paid is non - refundable
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"} pt-15`}
        >
          <div className="backgroundColor1 min-h-screen">
            <div className="pl-3 pt-5 pr-3">
              <p className="text-[#B8B8B8] font-bold text-sm">
                Student Dashboard  / {" "}
                <span className="text-black text-xs">
                  Fees and Payment  / Make Payment
                </span>
              </p>
            </div>
            <div className="flex justify-center items-center mt-10">
              <div className="w-[80%] shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]  px-10 py-10 rounded-2xl  ">
                <p className="font-bold">Select Payment Method</p>
                <div className="flex mt-4 justify-between gap-3">
                  <div className="w-full">
                    <div className="h-25 bg-[#468DFF] rounded-4xl flex justify-between items-center px-5">
                      <IdCardRoundedIcon className="text-white h-10" />
                      <p className="text-white font-bold mr-3">Credit Card</p>
                      <Checkbox className="border-2" />
                    </div>
                    <p className="font-bold my-10">Enter Card Details</p>
                    <div>
                      <label
                        htmlFor="creditCard"
                        className="font-bold textColor6 text-xs"
                      >
                        Credit card
                      </label>{" "}
                      <br />
                      <div className="flex">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="642 ..... ..... ...."
                          className="border-b-3 textColor6 w-full p-3 font-bold"
                        />
                        <VisaLineIcon className="h-10 -ml-12" />
                      </div>
                      <div className="flex my-10 gap-4 justify-between">
                        <div className="">
                          <label
                            className="font-bold textColor6 text-xs"
                            htmlFor="validthru"
                          >
                            Valid thru
                          </label>{" "}
                          <br />
                          <div className="flex justify-between gap-3">
                            <input
                              type="text"
                              name=""
                              className="w-full p-3 textColor6 border-b-2"
                              id=""
                            />
                            <input
                              type="text"
                              name=""
                              className="w-full p-3 textColor6 border-b-2"
                              id=""
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="cvv"
                            className="font-bold textColor6 text-xs"
                          >
                            cvv
                          </label>
                          <input
                            type="password"
                            name=""
                            placeholder="........"
                            className="w-full p-3 border-b-2"
                            id=""
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="name"
                          className="font-bold textColor6 text-xs"
                        >
                          Card holder’s name
                        </label>
                        <br />
                        <input
                          type="password"
                          name=""
                          placeholder="Abih Solo"
                          className="w-full p-3 border-b-2"
                          id=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="h-25 bg-[#468dff8c] rounded-4xl flex justify-between items-center px-5">
                      <MoneyPaymentsCurrencyEuroDollarExchangeIcon className="text-white h-10" />
                      <p className="text-white font-bold mr-3">Mobile Money</p>
                      <Checkbox className="border-2" />
                    </div>
                    <p className="font-bold my-10">
                      Enter Mobile Money Details
                    </p>
                    <label
                      htmlFor="number"
                      className="font-bold textColor6 text-xs"
                    >
                      Mobile number
                    </label>{" "}
                    <br />
                    <input
                      type="password"
                      name=""
                      placeholder="059 .... .... 82"
                      className="w-full p-3 border-b-2"
                      id=""
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-10">
                  <div className="flex gap-2 w-full">
                    <Checkbox className="border! border-black rounded-sm" />
                    <p className="text-[8.5px] textColor6 font-bold">
                      YOU ARE ABOUT TO MAKE PAYMENT. ARE SURE OF THE DETAILS?{" "}
                      <span className="text-red-600">
                        Money paid is non - refundable
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2 w-full justify-center">
                    <button className="flex h-9 items-center border py-2 px-3 rounded-md text-white bg-[#FF725E] text-xs w-23 justify-center">
                      Cancel
                    </button>
                    <button className="flex h-9 items-center border py-2 px-3 rounded-md text-white bg-[#2F88FF] text-xs w-23 justify-center">
                      Comfirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeesPage;

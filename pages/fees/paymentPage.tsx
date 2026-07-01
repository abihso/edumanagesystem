/* eslint-disable no-irregular-whitespace */
import { useState } from "react";
import IdCardRoundedIcon from "@iconify-react/material-symbols/id-card-rounded";
import { Checkbox } from "../../@/components/ui/checkbox";
import type { HomeProps } from "../../src/assets/types";
import VisaLineIcon from "@iconify-react/ri/visa-line";
import MoneyPaymentsCurrencyEuroDollarExchangeIcon from "@iconify-react/streamline-pixel/money-payments-currency-euro-dollar-exchange";

const PaymentPage = ({ isSidebarCollapsed }: HomeProps) => {
  const [selectPaymentMethod, setSelectMethod] = useState("credit");
  const [momo, setMomo] = useState("");
  const [comfirmPayment, setComfirmPayment] = useState(false);
  const [visaData, setVisaData] = useState({
    creditCardNumber: "",
    cvv: "",
    valid_thru1: "",
    valid_thru2: "",
    name: "",
  });

  return (
    <>
      {/* Mobile Version */}
      <div className="lg:hidden block backgroundColor1 min-h-screen pt-17">
        <div className="px-4">
          <p className="text-[#B8B8B8] font-bold text-xs">
            Student Dashboard /{" "}
            <span className="text-black text-[10px]">
              Fees and Payment / Make Payment
            </span>
          </p>
        </div>

        <div className="flex justify-center items-center mt-5 px-4">
          <div className="w-full shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] px-4 py-6 rounded-2xl">
            <p className="font-bold text-sm">Select Payment Method</p>

            {/* Payment Method Selection - Mobile */}
            <div className="flex flex-col mt-4 gap-3">
              {/* Credit Card Option */}
              <div
                className={`h-20 ${selectPaymentMethod == "credit" ? "bg-[#468DFF]" : "bg-[#468dff8c]"} rounded-2xl flex justify-between items-center px-4`}
              >
                <IdCardRoundedIcon className="text-white h-8" />
                <p className="text-white font-bold text-sm flex-1 ml-3">
                  Credit Card
                </p>
                <Checkbox
                  className="border border-white! bg-transparent! h-5 w-5"
                  checked={selectPaymentMethod == "credit"}
                  onCheckedChange={() => setSelectMethod("credit")}
                />
              </div>

              {/* Mobile Money Option */}
              <div
                className={`h-20 ${selectPaymentMethod == "momo" ? "bg-[#468DFF]" : "bg-[#468dff8c]"} rounded-2xl flex justify-between items-center px-4`}
              >
                <MoneyPaymentsCurrencyEuroDollarExchangeIcon className="text-white h-8" />
                <p className="text-white font-bold text-sm flex-1 ml-3">
                  Mobile Money
                </p>
                <Checkbox
                  className="border border-white! bg-transparent! h-5 w-5"
                  checked={selectPaymentMethod == "momo"}
                  onCheckedChange={() => setSelectMethod("momo")}
                />
              </div>
            </div>

            {/* Credit Card Details - Mobile */}
            {selectPaymentMethod == "credit" && (
              <div className="mt-6">
                <p className="font-bold text-sm mb-4">Enter Card Details</p>

                <div>
                  <label
                    htmlFor="creditCard"
                    className="font-bold textColor6 text-xs"
                  >
                    Credit card
                  </label>
                  <div className="relative mt-1">
                    <input
                      type="text"
                      disabled={selectPaymentMethod != "credit"}
                      value={visaData.creditCardNumber}
                      onChange={(e) =>
                        setVisaData({
                          ...visaData,
                          creditCardNumber: e.target.value,
                        })
                      }
                      placeholder="642 ..... ..... ...."
                      className="border-b-2 textColor6 w-full p-3 font-bold text-sm pr-12"
                    />
                    <VisaLineIcon className="h-8 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div className="flex flex-col gap-4 my-6">
                  <div>
                    <label
                      className="font-bold textColor6 text-xs"
                      htmlFor="validthru"
                    >
                      Valid thru
                    </label>
                    <div className="flex gap-3 mt-1">
                      <input
                        type="text"
                        className="w-full p-3 textColor6 border-b-2 text-sm"
                        disabled={selectPaymentMethod != "credit"}
                        value={visaData.valid_thru1}
                        onChange={(e) =>
                          setVisaData({
                            ...visaData,
                            valid_thru1: e.target.value,
                          })
                        }
                        placeholder="MM"
                        maxLength={2}
                      />
                      <input
                        type="text"
                        className="w-full p-3 textColor6 border-b-2 text-sm"
                        disabled={selectPaymentMethod != "credit"}
                        value={visaData.valid_thru2}
                        onChange={(e) =>
                          setVisaData({
                            ...visaData,
                            valid_thru2: e.target.value,
                          })
                        }
                        placeholder="YY"
                        maxLength={2}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cvv"
                      className="font-bold textColor6 text-xs"
                    >
                      CVV
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full p-3 border-b-2 text-sm mt-1"
                      disabled={selectPaymentMethod != "credit"}
                      value={visaData.cvv}
                      onChange={(e) =>
                        setVisaData({
                          ...visaData,
                          cvv: e.target.value,
                        })
                      }
                      maxLength={4}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="font-bold textColor6 text-xs"
                  >
                    Card holder's name
                  </label>
                  <input
                    type="text"
                    placeholder="Abih Solo"
                    className="w-full p-3 border-b-2 text-sm mt-1"
                    disabled={selectPaymentMethod != "credit"}
                    value={visaData.name}
                    onChange={(e) =>
                      setVisaData({
                        ...visaData,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            )}

            {/* Mobile Money Details - Mobile */}
            {selectPaymentMethod == "momo" && (
              <div className="mt-6">
                <p className="font-bold text-sm mb-4">
                  Enter Mobile Money Details
                </p>
                <label
                  htmlFor="number"
                  className="font-bold textColor6 text-xs"
                >
                  Mobile number
                </label>
                <input
                  type="tel"
                  placeholder="059 .... .... 82"
                  className="w-full p-3 border-b-2 text-sm mt-1"
                  disabled={selectPaymentMethod != "momo"}
                  value={momo}
                  onChange={(e) => setMomo(e.target.value)}
                />

                {/* Mobile Money Network Selection */}
                <div className="mt-4">
                  <label className="font-bold textColor6 text-xs">
                    Network Provider
                  </label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {["MTN", "Vodafone", "AirtelTigo", "Glo"].map((network) => (
                      <button
                        key={network}
                        className="border rounded-lg py-2 text-xs font-bold hover:border-[#2F88FF] transition-colors"
                      >
                        {network}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Confirmation Section - Mobile */}
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex gap-2 items-start">
                <Checkbox
                  className="border bg-transparent! text-black! border-black rounded-sm h-5 w-5 mt-0.5 flex-shrink-0"
                  checked={comfirmPayment}
                  onCheckedChange={() => setComfirmPayment((pre) => !pre)}
                />
                <p className="text-[8px] textColor6 font-bold leading-tight">
                  YOU ARE ABOUT TO MAKE PAYMENT. ARE YOU SURE OF THE DETAILS?{" "}
                  <span className="text-red-600">
                    Money paid is non-refundable
                  </span>
                </p>
              </div>

              <div className="flex gap-2 w-full">
                <button className="flex-1 h-10 items-center border py-2 px-3 rounded-md text-white bg-[#FF725E] text-xs font-bold justify-center">
                  Cancel
                </button>
                <button className="flex-1 h-10 items-center border py-2 px-3 rounded-md text-white bg-[#2F88FF] text-xs font-bold justify-center">
                  Confirm
                </button>
              </div>
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
              <span className="text-black text-xs">
                Fees and Payment / Make Payment
              </span>
            </p>
          </div>

          <div className="flex justify-center items-center mt-10">
            <div className="w-[80%] shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] px-10 py-10 rounded-2xl">
              <p className="font-bold">Select Payment Method</p>

              <div className="flex mt-4 justify-between gap-3">
                {/* Credit Card - Desktop */}
                <div className="w-full">
                  <div
                    className={`h-25 ${selectPaymentMethod == "credit" ? "bg-[#468DFF]" : "bg-[#468dff8c]"} rounded-4xl flex justify-between items-center px-5`}
                  >
                    <IdCardRoundedIcon className="text-white h-10" />
                    <p className="text-white font-bold mr-3">Credit Card</p>
                    <Checkbox
                      className="border border-white! bg-transparent!"
                      checked={selectPaymentMethod == "credit"}
                      onCheckedChange={() => setSelectMethod("credit")}
                    />
                  </div>

                  <p className="font-bold my-10">Enter Card Details</p>
                  <div>
                    <label
                      htmlFor="creditCard"
                      className="font-bold textColor6 text-xs"
                    >
                      Credit card
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        disabled={selectPaymentMethod != "credit"}
                        value={visaData.creditCardNumber}
                        onChange={(e) =>
                          setVisaData({
                            ...visaData,
                            creditCardNumber: e.target.value,
                          })
                        }
                        placeholder="642 ..... ..... ...."
                        className="border-b-3 textColor6 w-full p-3 font-bold pr-12"
                      />
                      <VisaLineIcon className="h-10 absolute right-3 top-1/2 -translate-y-1/2" />
                    </div>

                    <div className="flex my-10 gap-4 justify-between">
                      <div className="flex-1">
                        <label
                          className="font-bold textColor6 text-xs"
                          htmlFor="validthru"
                        >
                          Valid thru
                        </label>
                        <div className="flex justify-between gap-3">
                          <input
                            type="text"
                            className="w-full p-3 textColor6 border-b-2"
                            disabled={selectPaymentMethod != "credit"}
                            value={visaData.valid_thru1}
                            onChange={(e) =>
                              setVisaData({
                                ...visaData,
                                valid_thru1: e.target.value,
                              })
                            }
                            placeholder="MM"
                          />
                          <input
                            type="text"
                            className="w-full p-3 textColor6 border-b-2"
                            disabled={selectPaymentMethod != "credit"}
                            value={visaData.valid_thru2}
                            onChange={(e) =>
                              setVisaData({
                                ...visaData,
                                valid_thru2: e.target.value,
                              })
                            }
                            placeholder="YY"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="cvv"
                          className="font-bold textColor6 text-xs"
                        >
                          CVV
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full p-3 border-b-2"
                          disabled={selectPaymentMethod != "credit"}
                          value={visaData.cvv}
                          onChange={(e) =>
                            setVisaData({
                              ...visaData,
                              cvv: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="font-bold textColor6 text-xs"
                      >
                        Card holder's name
                      </label>
                      <input
                        type="text"
                        placeholder="Abih Solo"
                        className="w-full p-3 border-b-2"
                        disabled={selectPaymentMethod != "credit"}
                        value={visaData.name}
                        onChange={(e) =>
                          setVisaData({
                            ...visaData,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile Money - Desktop */}
                <div className="w-full">
                  <div
                    className={`h-25 ${selectPaymentMethod == "momo" ? "bg-[#468DFF]" : "bg-[#468dff8c]"} rounded-4xl flex justify-between items-center px-5`}
                  >
                    <MoneyPaymentsCurrencyEuroDollarExchangeIcon className="text-white h-10" />
                    <p className="text-white font-bold mr-3">Mobile Money</p>
                    <Checkbox
                      className="border border-white! bg-transparent!"
                      checked={selectPaymentMethod == "momo"}
                      onCheckedChange={() => setSelectMethod("momo")}
                    />
                  </div>

                  <p className="font-bold my-10">Enter Mobile Money Details</p>
                  <label
                    htmlFor="number"
                    className="font-bold textColor6 text-xs"
                  >
                    Mobile number
                  </label>
                  <input
                    type="tel"
                    placeholder="059 .... .... 82"
                    className="w-full p-3 border-b-2"
                    disabled={selectPaymentMethod != "momo"}
                    value={momo}
                    onChange={(e) => setMomo(e.target.value)}
                  />

                  <div className="mt-4">
                    <label className="font-bold textColor6 text-xs">
                      Network Provider
                    </label>
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      {["MTN", "Vodafone", "AirtelTigo", "Glo"].map(
                        (network) => (
                          <button
                            key={network}
                            className="border rounded-lg py-2 text-xs font-bold hover:border-[#2F88FF] transition-colors"
                          >
                            {network}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirmation Section - Desktop */}
              <div className="flex justify-between mt-10">
                <div className="flex gap-2 w-full">
                  <Checkbox
                    className="border bg-transparent! text-black! border-black rounded-sm"
                    checked={comfirmPayment}
                    onCheckedChange={() => setComfirmPayment((pre) => !pre)}
                  />
                  <p className="text-[8.5px] textColor6 font-bold">
                    YOU ARE ABOUT TO MAKE PAYMENT. ARE YOU SURE OF THE DETAILS?{" "}
                    <span className="text-red-600">
                      Money paid is non-refundable
                    </span>
                  </p>
                </div>
                <div className="flex gap-2 w-full justify-center">
                  <button className="flex h-9 items-center border py-2 px-3 rounded-md text-white bg-[#FF725E] text-xs w-23 justify-center">
                    Cancel
                  </button>
                  <button className="flex h-9 items-center border py-2 px-3 rounded-md text-white bg-[#2F88FF] text-xs w-23 justify-center">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;

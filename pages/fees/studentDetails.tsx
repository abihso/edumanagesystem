import CloseIcon from "@iconify-react/material-symbols/close";

const StudentDetails = ({
  setShowDialogBox,
  setShowComfirmDialogBox,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}:any) => {
  const handleSubmit = () => {
    setShowDialogBox(false);
    setShowComfirmDialogBox(true);
  };
  return (
    <div className="fixed z-40 top-0 right-0 left-0 bottom-0 bg-[#000000b4] flex justify-center items-center ">
      <div className="h-100 w-100 gradient9 rounded-2xl py-3 px-5 gap-4">
        <CloseIcon
          className="h-7 p-2 float-right -mt-2 "
          onClick={() => setShowDialogBox(false)}
        />
        <p className="font-bold  text-xs">Make Payment</p>
        <p className="text-[8px]">
          Enter your Student details you used in creating your account
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
  );
};

export default StudentDetails
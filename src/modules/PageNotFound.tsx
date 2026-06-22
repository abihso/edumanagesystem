import Images from "../assets/images"

const PageNotFound = () => {
  return (
    <div className="gradient20 h-screen p-12 ">
      <p className="font-black text-xl flex items-center gap-2 ">
        {" "}
        <span>
          {" "}
          <img src={Images[0]} className="h-6" alt="" />{" "}
        </span>{" "}
        AltBit Softwares
      </p>
      <div className="grid justify-center ">
        <img src={Images[5]} className="h-130" alt="" />
        <div className="flex justify-center">
          <p className="font-bold">Page Not Found</p>
        </div>
        <div className="flex justify-center">
          <p className="textColor6 text-[10px] mt-2 w-90">
            Sorry, the page you’re looking for does not exist or has been moved
            please go back to the Home paage
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#00AEE0] w-150 rounded-2xl py-3 mt-3 text-white text-[12px]">Go back Home</button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound
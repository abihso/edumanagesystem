import UploadFillIcon from "@iconify-react/ph/upload-fill";
import DownloadFillIcon from "@iconify-react/ph/download-fill";
interface AssignmentInforProps {
  setShowDialogBox: (v: Boolean) => void;
}
const AssignmentInfor = ({ setShowDialogBox }: AssignmentInforProps) => {
  return (
    <div className=" min-h-40 bg-[#EBF3FF] rounded-2xl mt-5 px-5 py-4 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] ">
      <div className="flex justify-between">
        <p className="font-bold text-[12px]">Mathematics</p>
        <p className="font-semibold text-[9px]">Awaiting Grade</p>
      </div>
      <p className="mt-3 text-[10px] font-bold">MATH303 | Sir Antwi Boasiako</p>
      <p className="mt-4 textColor6 font-bold text-xs">Algebra Problem</p>
      <div className="flex justify-between mt-5 items-center">
        <div className="flex gap-3 ">
          <button onClick={() => {
             setShowDialogBox(true);
          }} className="w-55 border rounded-md py-1 text-xs font-bold bg-[#EBF3FF]">
            View Details
          </button>
          <button className="w-55 border rounded-md py-1 text-xs font-bold bg-[#00032E] text-white flex gap-1 justify-center items-center ">
            <UploadFillIcon className="h-4" />
            Submit Work
          </button>
          <button className="w-55 border rounded-md py-1 text-xs font-bold bg-[#EBF3FF]  flex gap-1 justify-center items-center">
            <DownloadFillIcon className="h-4" />
            Download Work
          </button>
        </div>
        <div className="flex gap-3">
          <p className="text-xs textColor6">Time over</p>
          <p className="text-red-600 text-xs">close</p>
        </div>
      </div>
    </div>
  );
};

export default AssignmentInfor;

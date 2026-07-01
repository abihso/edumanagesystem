import UploadFillIcon from "@iconify-react/ph/upload-fill";
import DownloadFillIcon from "@iconify-react/ph/download-fill";

interface AssignmentInforProps {
  setShowDialogBox: (v: boolean) => void;
}

const AssignmentInfor = ({ setShowDialogBox }: AssignmentInforProps) => {
  return (
    <div className="min-h-40 bg-[#EBF3FF] rounded-2xl mt-5 px-3 sm:px-5 py-4 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]">
      {/* Header - Course and Status */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0">
        <p className="font-bold text-[11px] sm:text-[12px]">Mathematics</p>
        <p className="font-semibold text-[8px] sm:text-[9px] text-yellow-600">
          Awaiting Grade
        </p>
      </div>

      {/* Course Code and Teacher */}
      <p className="mt-2 sm:mt-3 text-[9px] sm:text-[10px] font-bold">
        MATH303 | Sir Antwi Boasiako
      </p>

      {/* Topic */}
      <p className="mt-3 sm:mt-4 textColor6 font-bold text-[10px] sm:text-xs">
        Algebra Problem
      </p>

      {/* Actions and Status */}
      <div className="flex flex-col sm:flex-row justify-between mt-4 sm:mt-5 items-start sm:items-center gap-3 sm:gap-0">
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <button
            onClick={() => setShowDialogBox(true)}
            className="flex-1 sm:flex-none sm:w-40 lg:w-55 border rounded-md py-1.5 sm:py-1 text-[10px] sm:text-xs font-bold bg-[#EBF3FF] hover:bg-[#dce8f5] transition-colors"
          >
            View Details
          </button>
          <button className="flex-1 sm:flex-none sm:w-40 lg:w-55 border rounded-md py-1.5 sm:py-1 text-[10px] sm:text-xs font-bold bg-[#00032E] text-white flex gap-1 justify-center items-center hover:bg-[#1a1f4e] transition-colors">
            <UploadFillIcon className="h-3 sm:h-4" />
            Submit Work
          </button>
          <button className="flex-1 sm:flex-none sm:w-40 lg:w-55 border rounded-md py-1.5 sm:py-1 text-[10px] sm:text-xs font-bold bg-[#EBF3FF] flex gap-1 justify-center items-center hover:bg-[#dce8f5] transition-colors">
            <DownloadFillIcon className="h-3 sm:h-4" />
            Download Work
          </button>
        </div>

        <div className="flex gap-3 items-center w-full sm:w-auto justify-end">
          <p className="text-[10px] sm:text-xs textColor6">Time over</p>
          <p className="text-red-600 text-[10px] sm:text-xs font-semibold">
            Close
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssignmentInfor;

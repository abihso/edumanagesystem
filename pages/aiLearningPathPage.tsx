import type { HomeProps } from "../src/assets/types";
import StarFourPointsIcon from "@iconify-react/mdi/star-four-points";
import GraphBoxOutlineIcon from "@iconify-react/mdi/graph-box-outline";
import TimeLineIcon from "@iconify-react/mingcute/time-line";
import GraphNewOutlineIcon from "@iconify-react/solar/graph-new-outline";

const AiLearningPath = ({ isSidebarCollapsed }: HomeProps) => {
  return (
    <div
      className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-64"} pt-15`}
    >
      <div className="backgroundColor1 min-h-screen">
        <div className="pl-3 pt-5 pr-3">
          <p className="text-[#B8B8B8] font-bold text-sm">
            Student Dashboard  / {" "}
            <span className="text-black text-xs">AI Learning Path</span>
          </p>
          <div className="col-span-9">
            <div className=" rounded-3xl grid grid-cols-12 gap-3 py-4">
              <div className=" col-span-3 h-30 gradient5 p-3 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] ">
                <span className="flex gap-1 items-center">
                  <GraphBoxOutlineIcon className="h-7 text-[#FF928A]" />
                  <p className="textColor6 font-bold text-sm">AI Prediction</p>
                </span>
                <p className="mt-3 textColor6 font-bold text-xs">3</p>
                <p className="text-[10px] textColor6 font-bold mt-4 ">
                  Compared To Last Semester
                </p>
              </div>
              <div className=" col-span-3 h-30 gradient5 p-3 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] ">
                <span className="flex gap-1 items-center">
                  <GraphNewOutlineIcon className="h-7 text-[#FF928A]" />
                  <p className="textColor6 font-bold text-sm">Predicted GPA</p>
                </span>
                <p className="mt-3 textColor6 font-bold text-xs">3.7</p>
                <p className="text-[10px] textColor6 font-bold mt-4 ">
                  Next semester
                </p>
              </div>
              <div className=" col-span-3 h-30 gradient5 p-3 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] ">
                <span className="flex gap-1 items-center">
                  <TimeLineIcon className="h-7 text-[#FF928A]" />
                  <p className="textColor6 font-bold text-sm">Success Rate</p>
                </span>
                <p className="mt-3 textColor6 font-bold text-xs">Top 92%</p>
                <p className="text-[10px] textColor6 font-bold mt-4 ">
                  AI confidence
                </p>
              </div>
              <div className=" col-span-3 h-30 gradient5 p-3 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] ">
                <span className="flex gap-1 items-center">
                  <GraphBoxOutlineIcon className="h-7 text-[#FF928A]" />
                  <p className="textColor6 font-bold text-sm">
                    {" "}
                    Possible Carrer Path
                  </p>
                </span>
                <p className="mt-3 textColor6 font-bold text-xs">
                  Enginneering
                </p>
                <p className="text-[10px] textColor6 font-bold mt-4 ">
                  Academic Strenght
                </p>
              </div>
            </div>
            <div className="py-2 px-10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl">
              <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center">
                  <StarFourPointsIcon className="h-5 textColor3" />
                  <p className="font-bold text-xs">
                    Personalized Recommendations
                  </p>
                </div>
                <p className="font-bold text-[8px] text-blue-400">See all</p>
              </div>
              <p className="text-[10px] mt-1 textColor6 font-bold">
                Machine Learning insight for your academic and carrer path
              </p>
              <div className="mt-5 bg-[#EBF3FF] min-h-30 py-3 px-5 rounded-md">
                <div className="flex gap-2 items-center">
                  <p className="font-bold text-sm bg-[#D2DEFF] w-40 rounded-sm pl-1">
                    Study Suggestion
                  </p>
                  <p className="text-[10px] textColor6">87% confidence</p>
                </div>
                <p className="text-[11px] mt-2">
                  Your performance in Religious and Moral Education is trending
                  down. Consider scheduling study session for more religious
                  concepts
                </p>
                <progress
                  value={30}
                  max={100}
                  className="w-full rounded-3xl h-2 mt-4
                          [&::-webkit-progress-bar]:bg-gray-200 
                          [&::-webkit-progress-value]:bg-[#4541FF]
                          [&::-webkit-progress-value]:rounded-3xl
                          [&::-moz-progress-bar]:bg-[#4541FF]
                          [&::-moz-progress-bar]:rounded-3xl"
                />
              </div>
              <div className="mt-5 bg-[#EBF3FF] min-h-30 py-3 px-5 rounded-md">
                <div className="flex gap-2 items-center">
                  <p className="font-bold text-sm bg-[#D2DEFF] w-40 rounded-sm pl-1">
                    Career Path
                  </p>
                  <p className="text-[10px] textColor6">92% confidence</p>
                </div>
                <p className="text-[11px] mt-2">
                  Based on your strong performance in Mathematics, science and
                  Computing, consider exploring Software Engineering roles.
                </p>
                <progress
                  value={90}
                  max={100}
                  className="w-full rounded-3xl h-2 mt-4
                          [&::-webkit-progress-bar]:bg-gray-200 
                          [&::-webkit-progress-value]:bg-[#4541FF]
                          [&::-webkit-progress-value]:rounded-3xl
                          [&::-moz-progress-bar]:bg-[#4541FF]
                          [&::-moz-progress-bar]:rounded-3xl"
                />
              </div>
              <div className="mt-5 bg-[#EBF3FF] min-h-30 py-3 px-5 rounded-md">
                <div className="flex gap-2 items-center">
                  <p className="font-bold text-sm bg-[#D2DEFF] w-40 rounded-sm pl-1">
                    Learning Resource
                  </p>
                  <p className="text-[10px] textColor6">84% confidence</p>
                </div>
                <p className="text-[11px] mt-2">
                  AI suggests additional video tutorials for Database
                  Normalization concepts.
                </p>
                <progress
                  value={84}
                  max={100}
                  className="w-full rounded-3xl h-2 mt-4
                          [&::-webkit-progress-bar]:bg-gray-200 
                          [&::-webkit-progress-value]:bg-[#4541FF]
                          [&::-webkit-progress-value]:rounded-3xl
                          [&::-moz-progress-bar]:bg-[#4541FF]
                          [&::-moz-progress-bar]:rounded-3xl"
                />
              </div>
            </div>
            <div className="py-2 px-10 my-4 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl">
              <div className="flex justify-between items-center">
                <p className="font-bold text-xs">
                  Recommended Learning Resources
                </p>
                <p className="font-bold text-[8px] text-blue-400">See all</p>
              </div>
              <p className="text-[10px] mt-1 textColor6 font-bold">
                Curated materials based on your courses. Courses are based on
                the current GES curriculum for all Basic Schools
              </p>
              <div className="px-5 bg-[#E4F0FF] mt-2 border w-full rounded-md py-3">
                <p className=" font-bold text-xs mt-2">
                  Advanced religious and Moral Education
                </p>
                <p className=" text-xs mt-2">RME301. Video</p>
                <p className="textColor6 font-bold text-xs mt-1">95% match</p>
              </div>
              <div className="px-5 bg-[#E4F0FF] my-3 border w-full rounded-md py-3">
                <p className=" font-bold text-xs mt-2">
                  Tree Algorithms Practice Problems
                </p>
                <p className=" text-xs mt-2">CS202 • Exercise</p>
                <p className="textColor6 font-bold text-xs mt-1">95% match</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiLearningPath;

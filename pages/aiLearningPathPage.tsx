/* eslint-disable no-irregular-whitespace */
import type { HomeProps } from "../src/assets/types";
import StarFourPointsIcon from "@iconify-react/mdi/star-four-points";
import GraphBoxOutlineIcon from "@iconify-react/mdi/graph-box-outline";
import TimeLineIcon from "@iconify-react/mingcute/time-line";
import GraphNewOutlineIcon from "@iconify-react/solar/graph-new-outline";
import StatsComponent from "../src/components/stats-component";
import ProgressComponent from "../src/components/progress-component";

const AiLearningPath = ({ isSidebarCollapsed }: HomeProps) => {
  const stats = [
    {
      icon: <GraphBoxOutlineIcon className="h-5 sm:h-7 text-[#FF928A]" />,
      title: "AI Prediction",
      data: <>3</>,
      description1: "Compared To Last Semester",
      description2: "",
    },
    {
      icon: <GraphNewOutlineIcon className="h-5 sm:h-7 text-[#FF928A]" />,
      title: "Predicted GPA",
      data: <>3.7</>,
      description1: "Next semester",
      description2: "",
    },
    {
      icon: <TimeLineIcon className="h-5 sm:h-7 text-[#FF928A]" />,
      title: "Success Rate",
      data: <>Top 92%</>,
      description1: "AI confidence",
      description2: "",
    },
    {
      icon: <GraphBoxOutlineIcon className="h-5 sm:h-7 text-[#FF928A]" />,
      title: "Possible Career Path",
      data: <>Engineering</>,
      description1: "Academic Strength",
      description2: "",
    },
  ];

  const recommendations = [
    {
      title: "Study Suggestion",
      confidence: "87% confidence",
      description:
        "Your performance in Religious and Moral Education is trending down. Consider scheduling study session for more religious concepts",
      progress: 30,
    },
    {
      title: "Career Path",
      confidence: "92% confidence",
      description:
        "Based on your strong performance in Mathematics, science and Computing, consider exploring Software Engineering roles.",
      progress: 67,
    },
    {
      title: "Learning Resource",
      confidence: "84% confidence",
      description:
        "AI suggests additional video tutorials for Database Normalization concepts.",
      progress: 2,
    },
  ];

  const resources = [
    {
      title: "Advanced religious and Moral Education",
      type: "RME301. Video",
      match: "95% match",
    },
    {
      title: "Tree Algorithms Practice Problems",
      type: "CS202 • Exercise",
      match: "95% match",
    },
  ];

  return (
    <>
      {/* Mobile Version */}
      <div className="lg:hidden block backgroundColor1 min-h-screen pt-17">
        <div className="px-4">
          <p className="text-[#B8B8B8] font-bold text-xs">
            Student Dashboard /{" "}
            <span className="text-black text-[10px]">AI Learning Path</span>
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
          </div>

          {/* Personalized Recommendations - Mobile */}
          <div className="py-4 px-4 mt-5 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl">
            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <StarFourPointsIcon className="h-4 textColor3" />
                <p className="font-bold text-xs">
                  Personalized Recommendations
                </p>
              </div>
              <p className="font-bold text-[7px] text-blue-400">See all</p>
            </div>
            <p className="text-[8px] mt-1 textColor6 font-bold">
              Machine Learning insight for your academic and career path
            </p>

            {/* Recommendation Cards */}
            {recommendations.map((item, index) => (
              <div
                key={index}
                className="mt-4 bg-[#EBF3FF] min-h-30 py-3 px-4 rounded-md"
              >
                <div className="flex flex-wrap gap-2 items-center">
                  <p className="font-bold text-xs sm:text-sm bg-[#D2DEFF] px-2 py-0.5 rounded-sm">
                    {item.title}
                  </p>
                  <p className="text-[8px] textColor6">{item.confidence}</p>
                </div>
                <p className="text-[10px] mt-2">{item.description}</p>
                <ProgressComponent
                  value={item.progress}
                  max={100}
                  className="w-full rounded-3xl h-2 mt-3
                    [&::-webkit-progress-bar]:bg-gray-200 
                    [&::-webkit-progress-value]:bg-[#4541FF]
                    [&::-webkit-progress-value]:rounded-3xl
                    [&::-moz-progress-bar]:bg-[#4541FF]
                    [&::-moz-progress-bar]:rounded-3xl"
                />
              </div>
            ))}
          </div>

          {/* Recommended Learning Resources - Mobile */}
          <div className="py-4 px-4 my-5 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl">
            <div className="flex justify-between items-center">
              <p className="font-bold text-xs">
                Recommended Learning Resources
              </p>
              <p className="font-bold text-[7px] text-blue-400">See all</p>
            </div>
            <p className="text-[8px] mt-1 textColor6 font-bold">
              Curated materials based on your courses. Courses are based on the
              current GES curriculum for all Basic Schools
            </p>

            {resources.map((item, index) => (
              <div
                key={index}
                className="px-4 bg-[#E4F0FF] mt-3 border w-full rounded-md py-3"
              >
                <p className="font-bold text-xs mt-1">{item.title}</p>
                <p className="text-[10px] mt-1">{item.type}</p>
                <p className="textColor6 font-bold text-[10px] mt-1">
                  {item.match}
                </p>
              </div>
            ))}
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
              <span className="text-black text-xs">AI Learning Path</span>
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
              </div>

              {/* Personalized Recommendations - Desktop */}
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
                  Machine Learning insight for your academic and career path
                </p>

                {recommendations.map((item, index) => (
                  <div
                    key={index}
                    className="mt-5 bg-[#EBF3FF] min-h-30 py-3 px-5 rounded-md"
                  >
                    <div className="flex gap-2 items-center">
                      <p className="font-bold text-sm bg-[#D2DEFF] w-40 rounded-sm pl-1">
                        {item.title}
                      </p>
                      <p className="text-[10px] textColor6">
                        {item.confidence}
                      </p>
                    </div>
                    <p className="text-[11px] mt-2">{item.description}</p>
                    <ProgressComponent
                      value={item.progress}
                      max={100}
                      className="w-full rounded-3xl h-2 mt-4
                        [&::-webkit-progress-bar]:bg-gray-200 
                        [&::-webkit-progress-value]:bg-[#4541FF]
                        [&::-webkit-progress-value]:rounded-3xl
                        [&::-moz-progress-bar]:bg-[#4541FF]
                        [&::-moz-progress-bar]:rounded-3xl"
                    />
                  </div>
                ))}
              </div>

              {/* Recommended Learning Resources - Desktop */}
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

                {resources.map((item, index) => (
                  <div
                    key={index}
                    className="px-5 bg-[#E4F0FF] mt-2 border w-full rounded-md py-3"
                  >
                    <p className="font-bold text-xs mt-2">{item.title}</p>
                    <p className="text-xs mt-2">{item.type}</p>
                    <p className="textColor6 font-bold text-xs mt-1">
                      {item.match}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiLearningPath;

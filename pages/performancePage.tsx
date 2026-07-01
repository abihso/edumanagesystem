/* eslint-disable no-irregular-whitespace */
import type { HomeProps } from "../src/assets/types";
import { ChartTooltip } from "../@/components/ui/chart";
import { ChartContainer, ChartTooltipContent } from "../@/components/ui/chart";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import GraphBoxOutlineIcon from "@iconify-react/mdi/graph-box-outline";
import TimeLineIcon from "@iconify-react/mingcute/time-line";
import GraphNewOutlineIcon from "@iconify-react/solar/graph-new-outline";
import StatsComponent from "../src/components/stats-component";

const Performance = ({ isSidebarCollapsed }: HomeProps) => {
  const stats = [
    {
      icon: <GraphBoxOutlineIcon className="h-5 sm:h-7 text-[#FF928A]" />,
      title: "Current GPA",
      data: (
        <>
          <span className="font-[1000] text-black text-base sm:text-xl">
            3.7
          </span>{" "}
          / 4.0
        </>
      ),
      description1: "Compared To Last Semester",
      description2: "+0.2 from last semester",
    },
    {
      icon: <TimeLineIcon className="h-5 sm:h-7 text-[#FF928A]" />,
      title: "Credit Earned",
      data: (
        <>
          <span className="font-[1000] text-black text-base sm:text-xl">
            120
          </span>{" "}
          / 144
        </>
      ),
      description1: "Compared To Last Semester",
      description2: "+0.2 from last semester",
    },
    {
      icon: <GraphNewOutlineIcon className="h-5 sm:h-7 text-[#FF928A]" />,
      title: "Credit Earned",
      data: (
        <>
          <span className="font-[1000] text-black text-base sm:text-xl">
            12
          </span>{" "}
          / 44
        </>
      ),
      description1: "Compared To Last Semester",
      description2: "+0.2 from last semester",
    },
  ];

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  };

  const skillsData = [
    { name: "Communication", value: 35 },
    { name: "Problem Solving", value: 30 },
    { name: "Teamwork", value: 20 },
    { name: "Creativity", value: 15 },
  ];

  const SKILL_COLORS = ["#8979FF", "#FF928A", "#60a5fa", "#FFD166"];

  return (
    <>
      {/* Mobile Version */}
      <div className="lg:hidden block backgroundColor1 min-h-screen pt-17">
        <div className="px-4">
          <p className="text-[#B8B8B8] font-bold text-xs">
            Student Dashboard /{" "}
            <span className="text-black text-[10px]">Performance</span>
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

          {/* Bar Chart - Mobile */}
          <div className="px-3 py-4 mt-5 mb-5 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]">
            <p className="font-bold text-sm">
              Your Grade Point Assessment Point Trend
            </p>
            <p className="text-[8px] textColor6">
              your academic performance over time
            </p>
            <div className="w-full h-64 mt-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="month" tick={{ fontSize: 8 }} />
                  <YAxis tick={{ fontSize: 8 }} />
                  <Bar
                    dataKey="desktop"
                    fill="#8979FF"
                    radius={[8, 8, 8, 8]}
                    barSize={20}
                  />
                  <Bar
                    dataKey="mobile"
                    fill="#FF928A"
                    radius={[8, 8, 8, 8]}
                    barSize={20}
                  />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: "10px" }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Line Chart - Mobile */}
          <div className="px-3 py-4 mt-5 mb-5 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]">
            <p className="font-bold text-sm">Performance Trend</p>
            <p className="text-[8px] textColor6">your progress over time</p>
            <div className="w-full h-64 mt-3">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="month" tick={{ fontSize: 8 }} />
                  <YAxis tick={{ fontSize: 8 }} />
                  <Line
                    type="monotone"
                    dataKey="desktop"
                    stroke="#8979FF"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="mobile"
                    stroke="#FF928A"
                    strokeWidth={2}
                  />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: "10px" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart - Mobile */}
          <div className="w-full gradient6 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] p-4 rounded-3xl mt-5">
            <p className="font-[1000] text-sm">Skills Assessment</p>
            <p className="text-[8px] text-[#4615CC] font-bold">
              Overview of top skills
            </p>
            <div className="w-full h-64 mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={skillsData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ name, percent }) =>
                      `${name} ${(percent != null ? (percent * 100).toFixed(0) : 0)}%`
                    }
                    labelLine={false}
                  >
                    {skillsData.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={SKILL_COLORS[index % SKILL_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: "10px" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Attendance Performance - Mobile */}
          <div className="bg-[#F3FCF4] shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] min-h-40 mt-5 rounded-2xl px-4 py-3">
            <div className="flex justify-between items-center">
              <p className="font-bold text-sm">Attendance Performance</p>
              <p className="text-[8px] text-[#9497FF] font-bold">See all</p>
            </div>

            {["Science", "Mathematics", "Computing"].map((subject, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[8px] textColor6 font-bold mt-3">
                    {subject}
                  </p>
                  <p className="text-[7px] textColor6">7/23 Lessons</p>
                </div>
                <progress
                  value={60}
                  max={100}
                  className="w-full rounded-3xl h-2
                    [&::-webkit-progress-bar]:bg-gray-200 
                    [&::-webkit-progress-value]:bg-[#2F88FF]
                    [&::-webkit-progress-value]:rounded-3xl
                    [&::-moz-progress-bar]:bg-[#2F88FF]
                    [&::-moz-progress-bar]:rounded-3xl"
                />
              </div>
            ))}
          </div>

          {/* Academic Performance - Mobile */}
          <div className="w-full mt-5 mb-10 gradient6 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] p-6 rounded-3xl">
            <p className="font-[1000] text-sm">Academic Performance</p>
            <div className="flex justify-center items-center mt-6">
              <div className="w-48 h-48 rounded-full gradient7 overflow-hidden flex items-center justify-center">
                <div className="w-4/5 h-4/5 flex items-center justify-center bg-[#EFEFEF] rounded-full overflow-hidden">
                  <div className="w-3/4 h-3/4 flex items-center justify-center bg-[#FFFFFF] rounded-full">
                    <p className="font-bold text-2xl textColor1">78%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 mt-6">
              <p className="font-bold bg-[#D2DEFF] px-4 py-1 rounded-md text-xs">
                Current GPA : <span className="textColor6">3.7</span>
              </p>
              <p className="text-[10px] font-bold text-[#00C06D]">
                ↑ +0.2 from last semester
              </p>
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
              <span className="text-black text-xs">Performance</span>
            </p>

            <div className="grid grid-cols-12 mt-3 gap-4">
              <div className="col-span-9">
                <div className="rounded-3xl grid grid-cols-12 gap-3 py-4 px-5">
                  {stats.map((item, index) => (
                    <StatsComponent
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      data={item.data}
                      description1={item.description1}
                      description2={item.description2}
                      className="col-span-4 h-35 gradient5 p-3 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]"
                    />
                  ))}
                </div>

                {/* Bar Graph - Desktop */}
                <div className="px-4 py-3 min-h-90 mt-5 mb-10 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]">
                  <p className="font-bold">
                    Your Grade Point Assessment Point Trend
                  </p>
                  <p className="text-[10px] textColor6">
                    your academic performance over time
                  </p>
                  <ChartContainer config={chartConfig} className="w-full h-90">
                    <BarChart data={chartData}>
                      <Bar
                        dataKey="desktop"
                        fill="#8979FF"
                        radius={[8, 8, 8, 8]}
                        width={5}
                      />
                      <Bar
                        dataKey="mobile"
                        fill="#FF928A"
                        radius={[10, 10, 10, 10]}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </BarChart>
                  </ChartContainer>
                </div>

                {/* Line Chart - Desktop */}
                <div className="px-4 py-3 min-h-90 mt-7 mb-10 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]">
                  <p className="font-bold">Performance Trend</p>
                  <p className="text-[10px] textColor6">
                    your progress over time
                  </p>
                  <ChartContainer config={chartConfig} className="w-full h-90">
                    <LineChart data={chartData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Line
                        type="monotone"
                        dataKey="desktop"
                        stroke="#8979FF"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="mobile"
                        stroke="#FF928A"
                        strokeWidth={2}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </LineChart>
                  </ChartContainer>
                </div>
              </div>

              {/* Right side - Desktop */}
              <div className="col-span-3 pr-4">
                <div className="w-full min-h-110 gradient6 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] p-4 rounded-3xl">
                  <p className="font-[1000]">Skills Assessment</p>
                  <p className="text-[10px] text-[#4615CC] font-bold">
                    Overview of top skills
                  </p>
                  <ChartContainer
                    config={chartConfig}
                    className="w-full h-56 sm:h-64 md:h-72 lg:h-80 mt-3"
                  >
                    <PieChart>
                      <Pie
                        data={skillsData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        label
                      >
                        {skillsData.map((_entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={SKILL_COLORS[index % SKILL_COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={24} />
                    </PieChart>
                  </ChartContainer>
                </div>

                <div className="bg-[#F3FCF4] shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] min-h-40 mt-5 rounded-2xl px-5 py-2">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-sm">Attendance Performance</p>
                    <p className="text-[10px] text-[#9497FF] font-bold">
                      See all
                    </p>
                  </div>

                  {["Science", "Mathematics", "Computing"].map(
                    (subject, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-[8px] textColor6 font-bold mt-3">
                            {subject}
                          </p>
                          <p className="text-[7px] textColor6">7/23 Lessons</p>
                        </div>
                        <progress
                          value={60}
                          max={100}
                          className="w-full rounded-3xl h-2
                          [&::-webkit-progress-bar]:bg-gray-200 
                          [&::-webkit-progress-value]:bg-[#2F88FF]
                          [&::-webkit-progress-value]:rounded-3xl
                          [&::-moz-progress-bar]:bg-[#2F88FF]
                          [&::-moz-progress-bar]:rounded-3xl"
                        />
                      </div>
                    ),
                  )}
                </div>

                <div className="w-full min-h-110 mt-5 mb-10 gradient6 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] p-8 rounded-3xl">
                  <p className="font-[1000]">Academic Performance</p>
                  <div className="flex justify-center items-center mt-10 xl:mt-0">
                    <div className="w-full max-w-md h-4/6 xl:h-80 xl:w-80 flex justify-center items-center">
                      <div className="w-full max-w-56 sm:max-w-[16rem] md:max-w-[20rem] lg:max-w-[24rem] xl:max-w-md aspect-square rounded-full gradient7 overflow-hidden flex items-center justify-center">
                        <div className="w-4/5 h-4/5 flex items-center justify-center bg-[#EFEFEF] rounded-full overflow-hidden">
                          <div className="w-3/4 h-3/4 flex items-center justify-center bg-[#FFFFFF] rounded-full">
                            <p className="font-bold text-sm sm:text-xl lg:text-2xl textColor1">
                              78%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-10 xl:mt-3">
                    <p className="font-bold bg-[#D2DEFF] xl:px-3 rounded-md text-[10px] xl:text-sm">
                      Current GPA : <span className="textColor6">3.7</span>
                    </p>
                    <p className="text-[10px] font-bold text-[#00C06D]">
                      ↑ +0.2 from last semester
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;

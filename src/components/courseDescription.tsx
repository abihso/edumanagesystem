import BooksIcon from '@iconify-react/tabler/books';
import BookOpenIcon from '@iconify-react/boxicons/book-open';
import AnalyticsReportIcon from '@iconify-react/fluent-mdl2/analytics-report';
interface CourseDescriptionProps {
  setShowDialogBox : (v : Boolean) => void
  courseCode : String
  setCode : (v : String) => void
}
const CourseDescription = ({setShowDialogBox, courseCode, setCode}:CourseDescriptionProps) => {
  
  return (
   <div className="h-30 border col-span-6 rounded-2xl bg-[#EBF3FF] px-3 py-2">
                    <div className="flex justify-between items-center " >
                      <p className="text-[10px] font-bold" >Mathematics</p>
                      <a onClick={() => {
                        setShowDialogBox(true)
                        setCode(courseCode)
                      }} className="text-[7px] text-[#3884FF] cursor-pointer" >See Course Details</a>
                    </div>
                    <p className="text-[8px]">
                      MATH303 | Sir Antwi Boasiako {courseCode}
                    </p>
                        <div className='flex justify-between items-center'>
                          <p className='text-[8px] textColor6 font-bold mt-3'>Courses Progress</p>
                          <p className='text-[7px] textColor6'>7/23 Lessons</p>
                        </div>
                        <progress 
                          value={60} 
                          max={100} 
                          className='w-full rounded-3xl h-2
                          [&::-webkit-progress-bar]:bg-gray-200 
                          [&::-webkit-progress-value]:bg-[#2F88FF]
                          [&::-webkit-progress-value]:rounded-3xl
                          [&::-moz-progress-bar]:bg-[#2F88FF]
                          [&::-moz-progress-bar]:rounded-3xl'
                        />
                        <div className="flex justify-between items-center gap-1 mt-1" >
                            <button className='flex justify-center w-full gap-1 border rounded-md' >
                              <BooksIcon className='h-5' />
                              <span className='text-[12px] font-bold' >Materials</span>
                            </button>
                            <button className='flex justify-center w-full gap-1 border rounded-md' >
                              <BookOpenIcon className='h-5' />
                              <span className='text-[12px] font-bold' >Assignment</span>
                            </button>
                            <button className='flex justify-center w-full gap-1 border rounded-md' >
                              <AnalyticsReportIcon className='h-5' />
                              <span className='text-[12px] font-bold' >Grades</span>
                            </button>
                        </div>
                  </div>
  )
}

export default CourseDescription
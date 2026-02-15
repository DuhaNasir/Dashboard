import Welcome from './Cards/Welcome';
import QuickDraft from './Cards/QuickDraft';
import YearlyTargets from './Cards/YearlyTargets';
import TicketsStatistics from './Cards/TicketsStatistics';
import LatestNews from './Cards/LatestNews';
import LatestTasks from './Cards/LatestTasks';
import TopSearchItems from './Cards/TopSearchItems';
import LatestUploads from './Cards/LatestUploads';
import ProjeLastProjectProgressct from './Cards/LastProjectProgress';
import Reminders from './Cards/Reminders';
import LatestPost from './Cards/LatestPost';
import SocialMediaStats from './Cards/SocialMediaStats';
import Projects from './Cards/Projects'
export default function Dashboard(){
return (

<div className="  bg-[#f1f5f9] min-h-screen flex flex-col my-19 ">

<h1 className=" my-4 mx-5  font-medium font-sans text-3xl"> Dashboard</h1>
<progress className=" [&::-webkit-progress-bar]:bg-white  [&::-webkit-progress-value]:bg-black  h-1 mx-5  "  value={25} max={100} />


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:gap-4 px-4 my-7" >

<Welcome/>
<QuickDraft/>
<YearlyTargets/>


<TicketsStatistics/>
<LatestNews/>
<LatestTasks/>

<TopSearchItems/>
<LatestUploads/>
<ProjeLastProjectProgressct/>

<Reminders/>
<LatestPost/>
<SocialMediaStats/>

<div className="md:col-span-2 lg:col-span-3">
  <Projects />
</div></div>




</div>




    )




}
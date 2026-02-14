import Welcome1 from './Cards/Welcome1';
import Quick2 from './Cards/Quick2';
import Yearly3 from './Cards/Yearly3'
import Tickets4 from './Cards/Tickets4'
import News5 from './Cards/News5'
import Tasks6 from './Cards/Tasks6'
import Top7 from './Cards/Top7'
import Uploads8 from './Cards/Uploads8';
import Project9 from './Cards/Project9';
import Reminders10 from './Cards/Reminders10'
export default function Dashboard(){
return (

<div className="  bg-[#f1f5f9] min-h-screen flex flex-col my-19 ">

<h1 className=" my-4 mx-5  font-medium font-sans text-3xl"> Dashboard</h1>
<progress className=" [&::-webkit-progress-bar]:bg-white  [&::-webkit-progress-value]:bg-black  h-1 mx-5  "  value={25} max={100} />


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:gap-4 px-4 my-7" >

<Welcome1/>
<Quick2/>
<Yearly3/>


<Tickets4/>
<News5/>
<Tasks6/>

<Top7/>
<Uploads8/>
<Project9/>

<Reminders10/>

</div>




</div>




    )




}
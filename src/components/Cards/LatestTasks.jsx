import Card from '../CardTamplates/Card'
import TasksSt from '../CardTamplates/TasksSt'

export default function LatestTasks(){

return(
<Card title="Latest Tasks"  >
 <TasksSt title="Record One New Video"  text="Record Python Create Exe Project"/>

 <hr className='text-[#cac9c972]'/>

 <TasksSt title="Write Article"  text="Write Low Level vs High Level Languages"/>

 <hr className='text-[#cac9c972]'/>

 <TasksSt title="Finish Project"  text="Publish Academy Programming Project"/>

 <hr className='text-[#cac9c972]'/>

 <TasksSt title="Attend The Meeting "  text="Attend The Project Business Analysis Meeting"/>
 <hr className='text-[#cac9c972]'/>


 <TasksSt title="Finish Lesson"  text="Finish Teaching Flex Box"/>


</Card>





);

}

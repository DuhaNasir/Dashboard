import Card from '../CardTamplates/Card'
import ProjectsStyle from '../CardTamplates/ProjectsStyle';
export default function Projects(){

return(

    <div className=" bg-white rounded-2xl  w-full ">

<header className=" pt-3 h-20 rounded-t-lg  ">
<h1 className="font-medium md:text-xl mx-4 ">Projects</h1>
</header>




    <div className="overflow-x-auto p-6 ">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        
        {/* Header */}
        <thead className="bg-gray-100">
          <tr className='text-left  text-sm font-semibold'>
            <th className="px-4 py-3 ">Name</th>
            <th className="px-4 py-3 "> Finsh</th>
            <th className="px-4 py-3 ">Client</th>
            <th className="px-4 py-3 ">Price</th>
            <th className="px-4 py-3 ">Team</th>
            <th className="px-4 py-3 ">Status</th>

          </tr>
        </thead>

        {/* Body */}
        <ProjectsStyle name='Ministry Wikipedia' finsh='10 May 2022' client='Ministry' price='$5300' 
         team={<> 
          <img src="/imgs/team-01.png" alt="" className=" size-6 rounded-full border border-white " />
          <img src="/imgs/team-02.png" alt="" className=" size-6 rounded-full border border-white " />
          <img src="/imgs/team-03.png" alt="" className=" size-6 rounded-full border border-white " />
          <img src="/imgs/team-05.png" alt="" className=" size-6 rounded-full border border-white "  /> 
          </>}   statusColor='bg-amber-400' status='Pending'/>

      



              <ProjectsStyle name='Elzero Shop ' finsh='12 Oct 2021' client='Elzero Company' price='$1500' 
         team={<> 
          <img src="/imgs/team-01.png" alt="" className=" size-6 rounded-full border border-white " />
          <img src="/imgs/team-02.png" alt="" className=" size-6 rounded-full border border-white " />
          <img src="/imgs/team-05.png" alt="" className=" size-6 rounded-full border border-white "  /> 
          </>}   statusColor='bg-blue-600' status='In Progress'/>

      


      
              <ProjectsStyle name='Bouba App ' finsh='05 Sep 2021' client='Bouba' price='$800' 
         team={<> 
          <img src="/imgs/team-02.png" alt="" className=" size-6 rounded-full border border-white " />
          <img src="/imgs/team-03.png" alt="" className=" size-6 rounded-full border border-white "  /> 
          </>}   statusColor='bg-green-500' status='Completed'/>


          
              <ProjectsStyle name='Mahmoud Website ' finsh='22 May 2021' client='Mahmoud' price='$600' 
         team={<> 
          <img src="/imgs/team-01.png" alt="" className=" size-6 rounded-full border border-white " />
          <img src="/imgs/team-02.png" alt="" className=" size-6 rounded-full border border-white "  /> 
          </>}   statusColor='bg-green-500' status='Completed'/>


       <ProjectsStyle name='Sayed Website ' finsh='24 May 2021' client='Sayed' price='$300' 
         team={<> 
          <img src="/imgs/team-01.png" alt="" className=" size-6 rounded-full border border-white " />
          <img src="/imgs/team-03.png" alt="" className=" size-6 rounded-full border border-white "  /> 
          </>}   statusColor='bg-red-500' status='Rejected'/>


  
              <ProjectsStyle name='Arena Application ' finsh='01 Mar 2021' client='Arena Company' price='$2600' 
         team={<> 
          <img src="/imgs/team-01.png" alt="" className=" size-6 rounded-full border border-white " />
          <img src="/imgs/team-02.png" alt="" className=" size-6 rounded-full border border-white "  /> 
          <img src="/imgs/team-03.png" alt="" className=" size-6 rounded-full border border-white "  /> 
          <img src="/imgs/team-04.png" alt="" className=" size-6 rounded-full border border-white "  /> 

          </>}   statusColor='bg-green-500' status='Completed'/>


      </table>

    </div>















 







</div>





)

}

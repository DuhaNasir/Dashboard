import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaDiagramProject } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { CiFileOn } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { MdLinearScale } from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";
import Styleitems from "./CardTamplates/Styleitems"
import { FaGripLines } from "react-icons/fa6";
import { GoX } from "react-icons/go";



export default function Sidebar({isSidebarOpen, toggleSidebar}){
      if (!isSidebarOpen) return null;

return (

<div className="  flex ">
    



<aside className=" md:w-44 w-20 shadow-2xl rounded-s-lg z-50 ">
<GoX className="absolute  md:top-3 md:left-8 md:size-5 top-3 left-1  " onClick={toggleSidebar} />
<h1 className="   flex justify-center py-3 font-bold font-sans md:text-[15px] text-[12px] mx-1" onClick={toggleSidebar}> Elzero</h1>


    
<Styleitems icon={AiOutlineBarChart} name="Dashboard"/>

<Styleitems icon={IoMdSettings} name="Setting"/>

<Styleitems icon={IoPersonOutline} name="Profile"/>

<Styleitems icon={FaDiagramProject} name="Project"/>

<Styleitems icon={FaGraduationCap} name="Courses"/>

<Styleitems icon={CgProfile} name="Friends"/>

<Styleitems icon={CiFileOn} name="Files"/>

<Styleitems icon={MdOutlinePayment} name="Plans"/>



</aside>
</div>








    )




}



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


export default function Sidebar(){
return (

<div className="  flex ">




<aside className="   md:w-44 w-15 shadow-2xl rounded-s-lg z-50">

<h1 className="   flex justify-center py-3 font-bold font-sans  "> Elzero</h1>
<hr className="w-20 p-2 mx-11 px-10 hidden  md:inline"></hr>

<div className="flex gap-2 bg-[#f7f3f385] rounded-md mx-3 md:mx-6 my-1 py-2  px-1">
<AiOutlineBarChart className="scale-120  "  />
<a className="text-xs hidden  md:inline py-1 font-sans"> Dashboard </a>
</div>




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



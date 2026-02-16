

import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { FiList } from "react-icons/fi";
import { GoX } from "react-icons/go";


export default function Header({ isSidebarOpen, toggleSidebar }){
return (
<header className="  relative z-60 h-2 bg-white  ">
 
{!isSidebarOpen && (
<FiList className="size-6 absolute left-4 top-4 " onClick={toggleSidebar} /> )}
<div className=" flex justify-between bg-white px-4 pt-3  ml-12">

{/*input search */}
<div className=" flex items-center  gap-1   ">
<div className="relative ">
<input type="search" placeholder="Type A Keyword" className="border-2 border-[#c2c1c185] rounded-lg md:px-7 h-10 w-35  text-[10px] md:w-44 px-7  md:text-[14px] "  ></input>
<IoMdSearch className=" absolute top-3 left-2 size-4 md:size-5  text-[#868686]" />
</div>

</div>



{/*Avatar and Notifications */}
<div className=" flex gap-1 items-center"> 
<IoMdNotificationsOutline className=" size-6 "/>
<img src="/imgs/avatar.png"  alt="avatar" className=" size-6 "/>
</div>



</div>
</header>

    )




}




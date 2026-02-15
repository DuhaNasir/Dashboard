

import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";


export default function Header(){
return (
<header className=" absolute top-0 md:right-0 md:left-44 right-0 left-12 z-40  ">
<div className=" flex bg-white  p-3   relative  ">


{/*input search */}
<div className="flex mx-3 ">
<input type="search" placeholder="Type A Keyword" className="border-2 border-[#c2c1c185] rounded-lg px-7 relative h-10  w-44 text-[14px] "  ></input>
<IoMdSearch className=" absolute inset-x-8 inset-y-6 size-5  text-[#868686]" />

</div>

{/*Avatar and Notifications */}
<div className=" flex gap-1 mx-4 my-2  absolute right-0 ">
<IoMdNotificationsOutline className="size-6"/>
<img src="/imgs/avatar.png"  alt="avatar" className="size-6 "/>
</div>




</div>
</header>

    )




}




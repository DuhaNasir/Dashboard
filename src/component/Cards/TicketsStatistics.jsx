import Cards from '../CardTemplates/Cards'
import { FaRegRectangleList } from "react-icons/fa6";
import { TbCircleDotted } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiSquareRemove } from "react-icons/ci";


export default function Tickets4(){

return(
<Cards title="Tickets Statistics" text="Everything About Support Tickets" >
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-4'>


<div className="border border-[#dbd4d4] rounded-lg w-auto h-24 flex flex-col items-center  ">
<FaRegRectangleList className=" mt-4 size-6 text-amber-500" />
<h1 className="font-bold"> 2500</h1>
<p className='text-[11px] text-[#969696]'>Total</p>
</div>

 
<div className="border border-[#dbd4d4] rounded-lg w-auto h-24 flex flex-col items-center ">
<TbCircleDotted  className=" mt-4 size-6 text-blue-600" />
<h1 className="font-bold"> 500</h1>
<p className='text-[11px] text-[#969696]'>Pending</p>
</div>



<div className="border border-[#dbd4d4] rounded-lg w-auto h-24 flex flex-col items-center ">
<IoIosCheckmarkCircleOutline className=" mt-4 size-6 text-green-700" />
<h1 className="font-bold"> 1900</h1>
<p className='text-[11px] text-[#969696]'>Closed</p>
</div>


<div className="border border-[#dbd4d4] rounded-lg w-auto h-24 flex flex-col items-center ">
<CiSquareRemove   className=" mt-4 size-6 text-red-600" />
<h1 className="font-bold"> 100</h1>
<p className='text-[11px] text-[#969696]'>Deleted</p>
</div>

</div>


</Cards>




);

}

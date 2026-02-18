import Card from '../CardTamplates/Card'
import { TbCurrencyDollar } from "react-icons/tb";
import { IoCodeSlash } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";


export default function YearlyTargets(){

return(
<Card title="Yearly Targets " text="Targets Of The Year" >



<div className='mb-6'>




<div className='flex ' > 

<div className="bg-[#cce3ff]  w-16 h-16 relative ml-4 shrink-0 ">
<TbCurrencyDollar className="text-[#217bff] absolute left-5 top-5 size-6"/>
</div>

<div className='mt-2 mx-3 flex-1 ' >
<p className="text-[10px]  text-[#9c9b9b] ">Money</p>
<p className="text-[12px] mt-1 font-bold  ">$20.000</p>

<div className="relative h-1 bg-blue-100 w-full  mt-1 ">
              <div className="absolute left-0 top-0 h-full bg-blue-500" style={{ width: '80%' }}>
                <div className="absolute -right-3 -top-7 bg-blue-500 text-white text-xs px-1 py-0.5 rounded-sm">
                  80%
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-blue-500"></div>
                </div>
              </div>
            </div>
</div>



</div>





<div className='flex mt-4' > 
<div className="bg-[#fdecce]  w-16 h-16 relative shrink-0 ml-4">
<IoCodeSlash className="absolute text-[#f5a125] left-5 top-5 size-6" />
</div>
<div className='mt-2 mx-3 flex-1'>
<p className="text-[10px] text-[#9c9b9b] ">Projects</p>
<p className="text-[12px] font-bold  mt-1">24</p>


<div className="relative h-1 bg-blue-100 w-full mt-1">
              <div className="absolute left-0 top-0 h-full bg-[#f5a125]" style={{ width: '55%' }}>
                <div className="absolute -right-3 -top-7 bg-[#f5a125] text-white text-xs px-1 py-0.5 rounded-sm">
                  55%
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#f5a125]"></div>
                </div>
              </div>
            </div>


</div>




</div>







<div className='flex mt-4'  > 
<div className="bg-[#d3f3df]  w-16 h-16 relative shrink-0 ml-4">
<IoPerson  className="absolute  text-[#22c55e] left-5 top-5 size-6" />
</div>
<div className='mt-2 mx-3 flex-1 '>
<p className="text-[10px] text-[#9c9b9b] ">Team</p>
<p className="text-[12px] font-bold  mt-1">12</p>



<div className="relative h-1 bg-blue-100 w-full -1 ">
              <div className="absolute left-0 top-0 h-full bg-[#22c55e]" style={{ width: '75%' }}>
                <div className="absolute -right-3 -top-7 bg-[#22c55e] text-white text-xs px-1 py-0.5 rounded-sm">
                  75%
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#22c55e]"></div>
                </div>
              </div>
            </div>



</div>




</div>




</div>

</Card>





);

}



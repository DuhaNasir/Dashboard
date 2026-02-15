import Card from '../CardTamplates/Card.jsx'


export default function Reminders(){

return(
<Card title="Reminders"  >
 



<div className='flex gap-3 m-4 '>{/*الهيكل العام  */}


<div className='rounded-full bg-blue-500 size-3 my-3' />{/*الدائره */}
<div className='border-l-2 border-blue-500 '   />{/*الخط الفاصل */}


<div>{/*النص */}
<h1 className='font-medium text-sm'>Check My Tasks List</h1>
<p className='text-[12px] text-[#9c9b9b] '>28/09/2022 - 12:00am</p>
</div>
</div>


<div className='flex gap-3 m-4 '>{/*الهيكل العام  */}

<div className='rounded-full bg-green-500 size-3 my-3' />{/*الدائره */}
<div className='border-l-2 border-green-500 '   />{/*الخط الفاصل */}

<div>{/*النص */}
<h1 className='font-medium text-sm'>Check My Projects</h1>
<p className='text-[12px] text-[#9c9b9b] '>26/10/2022 - 12:00am</p>
</div>
</div>


<div className='flex gap-3 m-4 '>{/*الهيكل العام  */}

<div className='rounded-full bg-amber-400 size-3 my-3' />{/*الدائره */}
<div className='border-l-2 border-amber-400 '   />{/*الخط الفاصل */}

<div>{/*النص */}
<h1 className='font-medium text-sm'>Call All My Clients</h1>
<p className='text-[12px] text-[#9c9b9b] '>05/11/2022 - 12:00am</p>
</div>
</div>


<div className='flex gap-3 m-4 '>{/*الهيكل العام  */}

<div className='rounded-full bg-red-500 size-3 my-3' />{/*الدائره */}
<div className='border-l-2 border-red-500 '   />{/*الخط الفاصل */}

<div>{/*النص */}
<h1 className='font-medium text-sm'>Finish The Development Workshop</h1>
<p className='text-[12px] text-[#9c9b9b] '>20/12/2022 - 12:00am</p>
</div>
</div>

</Card>




);

}

import Card from '../CardTamplates/Card';
import { FaCircle } from "react-icons/fa";
import { GoCircle } from "react-icons/go";


export default function LastProjectProgress(){

return(
<Card title="Last Project Progress"  >

{/*التغيير الوحيد في الكود رقم التوب الي حاطته لكل دائره  */}



<div className='flex flex-col'>


 <div className='flex flex-row mx-4'>   
{/*الهيكل العام  */}
<div className=' flex flex-col items-center  relative'>
<GoCircle className='text-blue-500 size-6   '/>
< FaCircle  className=' text-blue-500 size-4 absolute top-1 mx-1 ' />{/*الدائره */}
<div className=' border-l-2 border-blue-500 flex-1  '  />{/*الخط الفاصل */}

</div>

{/*النص */}
<h1 className=' mb-5 mx-3'>Got The Project</h1>
</div>






 <div className='flex flex-row mx-4'>   
{/*الهيكل العام  */}
<div className=' flex flex-col items-center relative'>
<GoCircle className='text-blue-500 size-6   '/>
< FaCircle  className=' text-blue-500 size-4 absolute top-1 mx-1 ' />{/*الدائره */}
<div className=' border-l-2 border-blue-500 flex-1  '  />{/*الخط الفاصل */}

</div>

{/*النص */}
<h1 className=' mb-5 mx-3'>Got The Project</h1>
</div>







 <div className='flex flex-row mx-4'>   
{/*الهيكل العام  */}
<div className=' flex flex-col items-center relative'>
<GoCircle className='text-blue-500 size-6   '/>
< FaCircle  className=' text-blue-500 size-4 absolute top-1 mx-1 ' />{/*الدائره */}
<div className=' border-l-2 border-blue-500 flex-1  '  />{/*الخط الفاصل */}

</div>

{/*النص */}
<h1 className=' mb-5 mx-3'>Started The Project</h1>
</div>







 <div className='flex flex-row mx-4'>   
{/*الهيكل العام  */}
<div className=' flex flex-col items-center relative'>
<GoCircle className='text-blue-500 size-6   '/>
< FaCircle  className=' text-blue-500 size-4 absolute top-1 mx-1 animate-pulse ' />{/*الدائره */}
<div className=' border-l-2 border-blue-500 flex-1  '  />{/*الخط الفاصل */}

</div>

{/*النص */}
<h1 className=' mb-5 mx-3'>The Project About To Finish</h1>
</div>







 <div className='flex flex-row mx-4'>   
{/*الهيكل العام  */}
<div className=' flex flex-col items-center '>
<GoCircle className='text-blue-500 size-6   '/>

</div>

{/*النص */}
<h1 className=' mb-5 mx-3'>Finish The Project &Get Money</h1>
</div>

<div className='flex justify-end'>
<img src='/imgs/project.png' className='size-30 md:mask-x-from-2 md:block  hidden '/>
</div>


</div>



</Card>




);
}
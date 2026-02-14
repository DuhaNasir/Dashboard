import Cards from '../Props/Cards'
import { FaCircle } from "react-icons/fa";
import { GoCircle } from "react-icons/go";


export default function Project9(){

return(
<Cards title="Last Project Progress"  >

<div>


 <div className='flex flex-row'>   
{/*الهيكل العام  */}
<div className='mx-4 flex flex-col items-center'>
<GoCircle className='text-blue-500 size-6   '/>
< FaCircle  className=' text-blue-500 size-4 absolute top-1 mx-1 ' />{/*الدائره */}
<div className=' border-l-2 border-blue-500 flex-1  '  />{/*الخط الفاصل */}

</div>



<div>{/*النص */}
<h1 className='my-3'>Got The Project</h1>
</div>
</div>






 <div className='flex flex-row'>   
{/*الهيكل العام  */}
<div className='mx-4 flex flex-col items-center'>
<GoCircle className='text-blue-500 size-6   '/>
< FaCircle  className=' text-blue-500 size-4   absolute  bottom-9  mx-1 ' />{/*الدائره */}
<div className=' border-l-2 border-blue-500 flex-1   '  />{/*الخط الفاصل */}

</div>



<div>{/*النص */}
<h1 className=' my-3'>Started The Project</h1>
</div>
</div>




 <div className='flex flex-row'>   
{/*الهيكل العام  */}
<div className='mx-4 flex flex-col items-center'>
<GoCircle className='text-blue-500 size-6   '/>
< FaCircle  className=' text-blue-500 size-4 absolute top-1 mx-1 ' />{/*الدائره */}
<div className=' border-l-2 border-blue-500 flex-1  '  />{/*الخط الفاصل */}

</div>



<div>{/*النص */}
<h1 className='my-3'>Got The Project</h1>
</div>
</div>






 <div className='flex flex-row'>   
{/*الهيكل العام  */}
<div className='mx-4 flex flex-col items-center'>
<GoCircle className='text-blue-500 size-6   '/>
< FaCircle  className=' text-blue-500 size-4   absolute  bottom-9  mx-1 ' />{/*الدائره */}
<div className=' border-l-2 border-blue-500 flex-1  '  />{/*الخط الفاصل */}

</div>



<div>{/*النص */}
<h1 className=' my-3'>Started The Project</h1>
</div>
</div>



</div>
</Cards>




);
}
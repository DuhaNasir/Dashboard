
import { FaRegTrashAlt } from "react-icons/fa";

export default function TasksSt(props){

return(
 




<div className='mb-5 '>

 <div className='flex  justify-between  m-3'>

{/* title and text */}

    
<div className='ml-4 flex flex-col  '>
<h1 className='font-bold text-sm ' >{props.title }</h1>
<p className='text-[13px] text-[#9c9b9b] '>{props.text}</p>
</div>

{/* Icon */}

 <FaRegTrashAlt className=" my-3 mx-4"/>









 </div>

</div>






);

}


import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from 'react'

export default function TasksSt(props){
    const [isDeleted,setisDeleted] = useState(false)

function handleDelete  () {
  if (isDeleted===true){
    setisDeleted(false)
    }else{ setisDeleted(true)}
  }


return(
 




<div className='mb-5 '>

 <div className='flex  justify-between  m-3' >

{/* title and text */}

    
<div className={`ml-4 flex flex-col  ${isDeleted ? 'line-through text-gray-400' : null}`}>
<h1 className="font-bold text-sm ">{props.title}</h1>
<p className='text-[13px] text-[#9c9b9b] '>{props.text}</p>
</div>

{/* Icon */}

 <FaRegTrashAlt className={`my-3 mx-4 ${isDeleted ? 'text-gray-500' : null}`} onClick={handleDelete} />









 </div>

</div>






);

}

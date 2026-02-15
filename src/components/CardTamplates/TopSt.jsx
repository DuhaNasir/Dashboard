

export default function TopSt(props){

return(
 





 <div className='flex  justify-between  mx-8 my-5'>

{/* title  */}
<h1 className='  ' >{props.title }</h1>


{/* num */}

 <p className=' bg-[#cac9c972]   h-6 w-12 rounded-sm   flex justify-center text-[#1e1d1d]  text-[12px] '> {props.days}</p>


 </div>








);

}

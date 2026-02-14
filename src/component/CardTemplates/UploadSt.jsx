import Cards from './Cards'


export default function UploadSt(props){

return(
 



<div className='m-5 '>

 <div className='flex flex-row justify-between items-center m-3'>

{/*img title and text */}
<div className='flex  '>
<img src={props.img}   className='h-11  rounded-sm '/>
<div className='flex  flex-col  mx-4'>
<h1 className={"text-sm  "+" "+props.classH} >{props.title }</h1>
<p className='text-[13px] text-[#9c9b9b]  '>{props.text}</p>
 </div>
</div>



{/*num*/}
 <p className=' bg-[#cac9c972]  h-6 w-12 rounded-sm   flex justify-center text-[#1e1d1d]  text-[12px] '> {props.days}</p>



 </div>

</div>








);

}

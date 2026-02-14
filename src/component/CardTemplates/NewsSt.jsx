import Cards from './Cards'


export default function NewsSt(props){

return(
 



<div className='mb-5 '>

 <div className='flex  flex-col md:flex-row  md:justify-between items-center m-3'>

{/*img title and text */}
<div className='flex flex-col md:flex-row items-center '>
<img src={props.img}  className='md:h-11  rounded-sm '/>
<div className='flex flex-col  items-center md:items-start mx-4'>
<h1 className={"text-sm  "+" "+props.classH} >{props.title }</h1>
<p className='text-[13px] text-[#9c9b9b]  '>{props.text}</p>
 </div>
</div>



{/*num of days*/}
 <p className=' bg-[#cac9c972]   w-15 rounded-sm mt-3 mr-6 flex justify-center text-[#625f5f]  text-[10px] '> {props.days}</p>



 </div>

</div>








);

}

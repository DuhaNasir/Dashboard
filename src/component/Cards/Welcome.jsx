import Cards from '../SharedUi/Cards'


export default function Welcome1(){

return(
<Cards title="Welcom" text="Elzero" color=" bg-[#e6e3e396]" imgHe={ <img src='/imgs/welcome.png' className='absolute md:h-18 top-2 lg:left-3/5 md:left-30 left-24  h-16 hidden md:block ' /> }   imgAv={<img src='/imgs/avatar.png' className='size-11 absolute border-3 rounded-full border-white shadow-sm  left-1/2 md:left-4 md:top-16 '/>}>

<div className='flex flex-col items-center my-20'>{/**globl div */}

<div className='  border-b w-full border-neutral-300'/> 

<div className='flex flex-col gap-5 my-8 md:flex-row' >{/**عشان اوسط النصوص */}

<div className=' flex flex-col text-center gap-2'>
<h1 className=' '>Osama Elzero</h1>
<p className='text-[13px] text-center  text-gray-500'>Developer</p>
</div>

<div className=' flex flex-col text-center gap-2'>
<h1 className=' '>80</h1>
<p className='text-[13px]  text-gray-500'>Projects</p>
</div>


<div className=' flex flex-col gap-2 text-center'>
<h1 className=' '>$8500</h1>
<p className='text-[13px]  text-gray-500'>Earned</p>
</div>

</div>
<div className='  border-b w-full border-neutral-300'/> 




</div>


<div className='flex justify-end my-4'>
<button type="submit" className="  text-white  bg-blue-600 hover:bg-blue-700 rounded-sm w-14  mx-5 my-2 text-sm">Profile</button>
</div>






</Cards>




)

}


 







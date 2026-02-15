import Card from '../CardTamplates/Card'
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa6";


export default function LatestPost(){

return(
<Card title="Latest Post">


<div className='flex flex-col m-5 gap-4'>{/**global div */}


{/**Header( Avtar-thename-hours )*/}

<header className='flex flex-row '>

<img src="/imgs/avatar.png" className='size-10' />
<div className='mx-4  '>
<h1 className='font-medium'>Osama Elzero</h1>
<p className='py-1 text-[#9c9b9b] text-sm'>About 3 Hours Ago</p>
</div>
</header>


<hr className='text-[#9c9b9b75]'/>



{/**Main */}
<main> 
<p className='text-sm py-2'> You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.</p>
</main>

<hr className='text-[#9c9b9b75]'/>



{/**Fotter */}
<footer className='flex justify-between mx-2'>

<div className='flex flex-row gap-1 items-center'>
<FaRegHeart  className='text-[#9c9b9b]' />
<p className='text-[14px] text-[#9c9b9b]' >1.8k</p>
</div>

<div className='flex flex-row gap-1 items-center'> 
<FaRegComments  className='text-[#9c9b9b]'/>
<p className='text-[14px] text-[#9c9b9b]' >500</p>

</div>
</footer>


</div>

</Card>
); 

}
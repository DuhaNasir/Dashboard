import Cards from '../Props/Cards'
import TopSt from '../Props/TopSt';

export default function Top7(){

return(
<Cards title="Top Search Items"  >
 
<div className='flex justify-between mx-7'>
<p className='text-[#9c9b9b] text-sm'>Keyword</p>
<p className='text-[#9c9b9b] text-sm '>Search Count</p>

</div>


<TopSt title="Programming"   days="220"/>

<TopSt title="JavaScript"   days="180"/>


<TopSt title="PHP"   days="160"/>

<TopSt title="Code"   days="145"/>

<TopSt title="Design"   days="110"/>

<TopSt title="Logic"   days="95"/>

</Cards>




);

}

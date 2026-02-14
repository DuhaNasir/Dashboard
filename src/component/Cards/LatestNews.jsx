import Cards from '../SharedUi/Cards'
import NewsSt from '../SharedUi/NewsSt';

export default function News5(){

return(
<Cards title="Top Search Items"  >
<NewsSt  title="Created SASS Section"  text="New SASS Examples & Tutorials"  days="3 Days Ago" img="/imgs/news-01.png" classH="font-bold"/>
 <hr className='text-[#cac9c972]'/>


<NewsSt  title="Changed The Design"  text="A Brand New Website Design"  days="5 Days Ago" img="/imgs/news-02.png" classH="font-bold"/>
 <hr className='text-[#cac9c972]'/>

    
<NewsSt  title="Team Increased"  text="3 Developers Joined The Team"  days="7 Days Ago" img="/imgs/news-03.png" classH="font-bold"/>
 <hr className='text-[#cac9c972]'/>


<NewsSt  title="Added Payment Gateway"  text="Many New Payment Gateways Added"  days="9 Days Ago" img="/imgs/news-04.png" classH="font-bold"/>

</Cards>
); 

}




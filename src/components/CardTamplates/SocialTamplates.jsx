
import Card from '../CardTamplates/Card';
import { TiSocialTwitter } from "react-icons/ti";


export default function SocialTamplates({icon,iconColor,background,text,textColor,button, buttonColor}){
    const Icon=icon;

return(


<div>
<div className={'m-5 flex flex-row'+' '+background}>{/**الهيكل العام للشكل الواحد */}


{/**icon*/}
<div className={' md:size-15 size-10 flex justify-center items-center '+' ' +iconColor}>
<Icon className='text-white md:size-10  size-5' />
</div>


{/**text*/}
<div className='flex  items-center justify-between w-full m-3 text-[11px] md:text-[15px] '>
<p className={textColor}> {text}</p>
<button className={' text-white   rounded-md px-3 md:h-7  h-4'+' ' +buttonColor}>{button}</button>

</div>

</div>


</div>





)


}
export default function Styleitems({icon,name}){
const Icon=icon;
return(

<div className="flex gap-2  hover:bg-[#f7f3f385]  rounded-md mx-3 md:mx-6 my-1 py-2  px-1">
<Icon className="scale-120 md:scale-120   " />
<a className="text-xs hidden  md:inline py-1  font-sans"> {name} </a>
</div>

);


}
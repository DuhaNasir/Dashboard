
export default function Styleitems({icon,name}){



const Icon=icon;
return(

  <div className="flex gap-2  hover:bg-[#f7f3f385]  rounded-md mx-4 md:mx-6 my-1 py-2  px-3  ">
    <Icon className="  md:scale-150 scale-120" />
    <a className="text-xs  py-1 font-sans  hidden  md:inline"> {name}  </a>
    </div>
)


}
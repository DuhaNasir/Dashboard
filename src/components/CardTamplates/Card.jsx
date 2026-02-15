
export default function Card(props){

return(
<div className=" bg-white rounded-2xl  flex flex-col h-auto ">


<header className={" pt-3 h-25 rounded-t-lg relative "+" "+ props.color}>
<h1 className="font-medium md:text-xl mx-4 ">{props.title}</h1>
<p className="mx-4 text-[#9c9b9b] text-[12px] mt-1  ">{props.text}</p>
{props.imgAv}
{props.imgHe}

</header>


<div className="relative">
{props.children}

</div>



</div>
)



}
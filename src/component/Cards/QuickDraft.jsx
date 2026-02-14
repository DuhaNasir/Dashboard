import Cards from '../Props/Cards'


export default function Quick2(){

return(
<Cards title="Quick Draft" text="Write A Draft For Your Ideas" >
<div className=" m-2  flex justify-center flex-col " >
<input  text="text" placeholder="Title" className=" bg-[#e6e3e396]  rounded-sm w-auto  py-1 px-2 text-[13px] m-3 "      />
<textarea  placeholder="Your Thought " className=" bg-[#e6e3e396]  rounded-sm w-auto h-52 text-[13px]  pl-2 m-3 pt-2 "      />
</div>
<div className='flex justify-end my-4'>
<button type="submit" className="  text-white  bg-blue-600 hover:bg-blue-700 rounded-sm w-14 px-3 mx-5 my-2 text-sm">Save</button>
</div>
</Cards>




);

}


 
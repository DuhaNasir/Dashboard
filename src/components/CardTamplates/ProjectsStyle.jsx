



export default function ProjectsStyle(props){

return(
 <>
        

        {/* Body */}
        <tbody className="border border-gray-100">

          <tr className="hover:bg-gray-100 text-sm border border-gray-100 " >
            
            <td className="px-4 py-3">{props.name}</td>
            <td className="px-4 py-3 ">{props.finsh} </td>
            <td className="px-4 py-3 ">{props.client}</td>
             <td className="px-4 py-3 ">{props.price}</td>

            <td className='flex -space-x-3 overflow-hidden my-6'>
                {props.team}
         
          </td>

        <td className="px-4 py-3   text-white "> <div className={' flex rounded-md  h-6 items-center justify-center text-[10px]  px-2 '+' '+props.statusColor }>{props.status}</div> </td>

         </tr>


        </tbody>

    
    </>







)

}
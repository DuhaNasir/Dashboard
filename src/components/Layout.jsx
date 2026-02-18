import Header from './Header'
import Sidebar from './Sidebar';
import { useState } from "react"; 

export default function Layout({children}){
{/** Business logic */}
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

function toggleSidebar() {
if (isSidebarOpen === true) {
setIsSidebarOpen(false);
} else {
setIsSidebarOpen(true);
}}


{/** UI logic */}

return(
<div className=" grid grid-cols-[auto_1fr]">
<Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

<div className="flex flex-col"> 
<Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
{children}

  </div>
  



</div>
);



}
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"

import { useState } from "react"; 
function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    function toggleSidebar() {
if (isSidebarOpen === true) {
setIsSidebarOpen(false);
} else {
setIsSidebarOpen(true);
}}
  return (
    <div className=" grid grid-cols-[auto_1fr]">
<Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
<div className="flex flex-col"> 
     <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
     <Dashboard/>
  </div>
</div>  
)
}

export default App

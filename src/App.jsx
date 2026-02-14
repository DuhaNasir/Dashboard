import Sidebar from "./component/Sidebar"
import Header from "./component/Header"
import Dashboard from "./component/Dashboard"

function App() {
  

  return (
    <div className=" grid grid-cols-[auto_1fr]">
<Sidebar/>
<Header/>
<Dashboard/>

</div>  
)
}

export default App

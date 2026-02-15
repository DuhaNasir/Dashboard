import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"

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

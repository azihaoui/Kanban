import Board from "./components/Board/Board"
import Sidenav from "./components/SideNav/Sidenav"
import Navbar from "./components/Navbar/Navbar"
import CreateTicket from "./components/CreateTicket/CreateTicket"
import { useState } from "react"

function App() {
  const [showAddTicket, setAddShowTicket] = useState(false)
console.log('hej')
  return (
    <div className="App">
      <Navbar setAddShowTicket={setAddShowTicket} />
      <main>
          <Sidenav />
          <Board />
      </main> 
      {showAddTicket &&
          <CreateTicket setAddShowTicket={setAddShowTicket} />}
    </div>
  )
}

export default App

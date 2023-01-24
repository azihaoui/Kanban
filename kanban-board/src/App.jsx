import Board from "./components/Board/Board"
import Sidenav from "./components/SideNav/Sidenav"
import Navbar from "./components/Navbar/Navbar"
import CreateTicket from "./components/CreateTicket/CreateTicket"

function App() {
 

  return (
    <div className="App">
      <Navbar />
      <main>
          <Sidenav />
          <Board />
      </main>
      <CreateTicket />
    </div>
  )
}

export default App

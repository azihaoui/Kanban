import Board from "./components/Board/Board"
import Sidenav from "./components/SideNav/Sidenav"
import Navbar from "./components/Navbar/Navbar"

function App() {
 

  return (
    <div className="App">
      <Navbar />
      <main>
          <Sidenav />
          <Board />
      </main>
    </div>
  )
}

export default App

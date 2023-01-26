import Board from "./components/Board/Board";
import Sidenav from "./components/SideNav/Sidenav";
import Navbar from "./components/Navbar/Navbar";
import CreateTicket from "./components/CreateTicket/CreateTicket";
import { useState } from "react";
import ProjectsDropDown from "./components/ProjectsDropDown/ProjectsDropDown";

function App() {
  const [showAddTicket, setAddShowTicket] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="App">
      <Navbar
        setShowAddTicket={setAddShowTicket}
        setShowDropDown={setShowDropDown}
      />
      <main>
        <Sidenav />
        <Board />
      </main>
      {showAddTicket && <CreateTicket setAddShowTicket={setAddShowTicket} />}
      {showDropDown && <ProjectsDropDown setShowDropDown={setShowDropDown} />}
    </div>
  );
}

export default App;

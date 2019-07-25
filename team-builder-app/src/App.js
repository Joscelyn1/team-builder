import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header.js";
import NewEmployee from "./components/NewEmployee.js";
import ListOfEmployees from "./components/ListOfEmployees.js";
import Footer from "./components/Footer.js";
import { people } from "./data.js";

function App() {
  const [members, setMembers] = useState(people);

  const id = members[members.length - 1].id + 1;
  //console.log("app rendering", members);

  function addToMembers(person) {
    setMembers([...members, person]);
  }

  return (
    <div className="App">
      <Header />
      <NewEmployee id={id} members={members} addToMembers={addToMembers} />
      <ListOfEmployees members={members} addToMembers={addToMembers} />
      <Footer />
    </div>
  );
}

export default App;

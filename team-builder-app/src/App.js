import React, { useState } from "react";
import "./App.css";

import PageHeader from "./components/PageHeader.js";
import NewEmployee from "./components/NewEmployee.js";
import Employee from "./components/Employee.js";
import ListOfEmployees from "./components/ListOfEmployees.js";
import Footer from "./components/Footer.js";
import { people } from "./data.js";
import { Route, Link } from "react-router-dom";

function App() {
  const [members, setMembers] = useState(people);

  const id = members[members.length - 1].id + 1;
  //console.log("app rendering", members);

  function addToMembers(person) {
    setMembers([...members, person]);
  }

  function removeFromMembers(index) {
    const newMembers = members.splice(index, 1);
    setMembers([...newMembers]);
  }

  const editPerson = editedPerson => {
    const peopleCopy = [...members];
    console.log("peopleCopy", peopleCopy);
    console.log("editedPerson", editedPerson);
    const oldPerson = peopleCopy.find(
      person => person.id.toString() === editedPerson.id
    );
    console.log("oldPerson", oldPerson);
    oldPerson.name = editedPerson.name;
    oldPerson.email = editedPerson.email;
    oldPerson.role = editedPerson.role;
    setMembers(peopleCopy);
  };

  return (
    <div className="App">
      <PageHeader />
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/add">
        Add Person
      </Link>

      <Route
        path="/"
        exact
        render={props => (
          <ListOfEmployees
            {...props}
            members={members}
            removeFromMembers={removeFromMembers}
            addToMembers={addToMembers}
            id={id}
          />
        )}
      />

      <Route
        path="/add"
        render={props => (
          <NewEmployee
            {...props}
            id={id}
            members={members}
            addToMembers={addToMembers}
          />
        )}
      />

      <Route
        path="/edit/:id"
        render={props => {
          console.log("line 76 props", props);
          const person = members.find(
            individual => individual.id.toString() === props.match.params.id
          );
          console.log("person", person);
          return (
            <NewEmployee
              {...props}
              initialPerson={person}
              addToMembers={editPerson}
              id={props.match.params.id}
            />
          );
        }}
      />

      <Footer />
    </div>
  );
}

export default App;

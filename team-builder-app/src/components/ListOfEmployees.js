import React from "react";
import Employee from "./Employee.js";
import { people } from "../data.js";

function ListOfEmployees() {
  const employees = people.map(person => (
    <Employee key={person.id} info={person} />
  ));
  return (
    <div>
      <button>Add new employee</button>
      <div className="list-of-employees">{employees}</div>
    </div>
  );
}

export default ListOfEmployees;

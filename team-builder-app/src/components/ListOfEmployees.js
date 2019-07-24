import React from "react";
import Employee from "./Employee.js";
import { people } from "../data.js";

function ListOfEmployees() {
  const employees = people.map(person => (
    <Employee
      key={person.id}
      name={person.name}
      email={person.email}
      role={person.role}
    />
  ));
  return (
    <div>
      <div className="list-of-employees">{employees}</div>
    </div>
  );
}

export default ListOfEmployees;

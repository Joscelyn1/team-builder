import React, { useState } from "react";
import Employee from "./Employee.js";

function ListOfEmployees(props) {
  const employees = props.members.map(person => (
    <Employee
      key={person.id}
      name={person.name}
      email={person.email}
      role={person.role}
      id={person.id}
      removeFromMembers={props.removeFromMembers}
    />
  ));
  return (
    <div>
      <div className="list-of-employees">{employees}</div>
    </div>
  );
}

export default ListOfEmployees;

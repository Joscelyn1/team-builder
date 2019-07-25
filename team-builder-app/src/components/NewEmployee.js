import React, { useState } from "react";
import Employee from "./Employee";
import { Card, Form, Button } from "semantic-ui-react";

function NewEmployee(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(event) {
    const newPerson = {
      name: name,
      email: email,
      role: role,
      id: props.id
    };

    props.addToMembers(newPerson);
    event.preventDefault();
  }

  return (
    <Card className="new-employee-form">
      <Form onSubmit={event => handleSubmit(event)}>
        <Form.Field>
          <label>Name</label>
          <input
            onChange={event => setName(event.target.value)}
            type="text"
            id="name"
            placeholder="Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            onChange={event => setEmail(event.target.value)}
            type="text"
            id="email"
            placeholder="name@email.com"
          />
        </Form.Field>
        <Form.Field>
          <label>Role</label>
          <input
            onChange={event => setRole(event.target.value)}
            type="text"
            id="role"
            placeholder="role"
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Card>
  );
}

export default NewEmployee;

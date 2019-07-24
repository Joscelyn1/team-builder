import React from "react";
import { Card, List } from "semantic-ui-react";

function Employee(props) {
  return (
    <Card className="employee-card">
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <List>
          <List.Item>Role: {props.role}</List.Item>
          <List.Item>Email: {props.email}</List.Item>
        </List>
      </Card.Content>
    </Card>
  );
}

export default Employee;

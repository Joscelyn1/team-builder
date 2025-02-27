import React from "react";
import { Card, List, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Employee(props) {
  /*onClick={props.removeFromMembers(props.id)}*/
  return (
    <Card className="employee-card">
      <Card.Content>
        <Card.Header id="buttons">
          <Link to={`/edit/${props.id}`}>
            <Icon name="edit" />
          </Link>
          <Icon name="close" />
        </Card.Header>
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

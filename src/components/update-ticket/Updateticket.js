import React from "react";
import { Form, Button } from "react-bootstrap";

export const Updateticket = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Reply</Form.Label>
        <Form.Control
          as="textarea"
          rows="5"
          name="details"
          placeholder="enter text here...."
        />
      </Form.Group>
      <div className="text-right">
        <Button variant="dark" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};

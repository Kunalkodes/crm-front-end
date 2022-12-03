import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Messagehistory } from "../../message-history/Messagehistory";
import tickets from "../../../assets/data/dummy-tickets.json";
import { Updateticket } from "../../update-ticket/Updateticket";
export const Ticket = () => {
  const ticket = tickets[0];
  return (
    <Container>
      <Row>
        <Col>The breadcrumb shall be placed over here:-</Col>
        <hr />
      </Row>

      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">subject:xxxxxxxxxx</div>
          <div className="date">date:xxxxxxxxxxxxx</div>
          <div className="status">status:xxxxxxxxxxx</div>
        </Col>

        <Col className="text-right">
          <Button variant="outline-dark"> Close</Button>
        </Col>
      </Row>
      <Messagehistory msg={ticket.history} />
      <Row>
        <Col>
          <Updateticket />
        </Col>
      </Row>
    </Container>
  );
};

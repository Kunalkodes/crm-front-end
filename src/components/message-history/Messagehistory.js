import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

import { Proptypes } from "react-bootstrap/esm/Image";
import "./messagehistory.css";
export const Messagehistory = ({ msg }) => {
  return msg.map((row, i) => (
    <div className="history mt-5">
      <div key={i} className="send font-weight-bold text-secondary">
        <div className="sender">{row.messageby}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
};
// Messagehistory.propTypes={
//   msg:Proptypes.object.isRequired,
// }

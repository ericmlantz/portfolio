import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function App() {
  const renderTooltip = props => (
    <Tooltip {...props}>Tooltip for the register button</Tooltip>
  );

  return (
    <div className="App">
      <OverlayTrigger placement="top" overlay={renderTooltip}>
        <Button>Register</Button>
      </OverlayTrigger>
    </div>
  );
}
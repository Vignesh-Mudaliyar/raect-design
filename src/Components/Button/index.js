import react from "react";
import { Button } from "react-bootstrap";
import "./button.css";

export default function CustomButton(props) {
  const { text, style } = props;
  return (
    <button className="btn-primary" style={style}>
      {text}
    </button>
  );
}

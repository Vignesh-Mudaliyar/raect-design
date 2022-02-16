import React from "react";
import "./container.css";
import Button from "../Components/Button";
import LaptopImg from "../assets/laptop.png";

export default function FirstContainer() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column flex-wrap content1">
      <div className="content-head">Lightning fast prototyping</div>
      <div className="content-body">
        Most calendars are designed for teams. Slate is designed for freelancers
      </div>
      <Button text="Try For Free" style={{ padding: "15px 39px" }} />
      <img src={LaptopImg} className="laptop-img" alt="laptop" />
      <hr className="hr-class" />
    </div>
  );
}

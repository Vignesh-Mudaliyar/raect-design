import React from "react";
import "./card.css";

export default function Card({ imgSrc, title }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center card">
      <img src={imgSrc} alt="card-img-1" />
      <div className="card-title">{title}</div>
      <div className="card-body">
        Slate helps you see how many more days you need to work to reach your
        financial goal
      </div>
      <div className="card-btn">Learn more</div>
    </div>
  );
}

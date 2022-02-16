import React from "react";
import Card from "../Components/Card";
import CardImage1 from "../assets/card-img-1.png";
import CardImage2 from "../assets/card-img-2.png";
import CardImage3 from "../assets/card-img-3.png";

export default function SecondContainer() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column flex-wrap content2">
      <div className="heading">AMAZING FEATURES</div>
      <div className="content-body text-color">
        Most calendars are designed for teams. Slate is designed for freelancers
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        <Card imgSrc={CardImage1} title="Gorgeous design" />
        <Card imgSrc={CardImage2} title="Performance" />
        <Card imgSrc={CardImage3} title="Content" />
      </div>
    </div>
  );
}

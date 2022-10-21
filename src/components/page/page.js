import React from "react";
import "./page.css";
import Amount from "./amount";
import AboutThis from "./aboutThis";
import ForThis from "./forThis";
import Button from "./button";

function Page(props) {
  return (
    <div>
      <div className="Page">
        <Amount />
        <AboutThis />
        <ForThis />
      </div>
      <Button />
    </div>
  );
}

export default Page;

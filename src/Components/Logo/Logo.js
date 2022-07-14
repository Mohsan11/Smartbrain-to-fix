import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";
const Logo = () => {
  return (
    <div className=" ma4 nt0">
      <Tilt className="Tilt  Tilt2 br2  shadow-2" options={{ max: 55 }}>
        <div className="Tlt-inner pa3 ">
          <img style={{ paddingTop: "5px" }} src={brain} alt="brain.jpg" />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;

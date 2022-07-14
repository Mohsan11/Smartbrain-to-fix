import React from "react";
import "./FaceRecognition.css";

const Facerecognition = ({ imageUr, box }) => {
  return (
    <div className="center pa2 br3 ">
      <div className="absolute pa2 nt2 ">
        <img
          id="faceimage"
          src={imageUr}
          alt="URL_picture"
          width="500px"
          height="auto"
        />
        <div
          className="Displaybox pointer"
          style={{
            top: box.topRow,
            left: box.leftCol,
            right: box.rightCol,
            bottom: box.bottomRow,
          }}
        ></div>
      </div>
    </div>
  );
};
export default Facerecognition;

import React, { Component } from "react";
import "./App.css";
import Navigator from "./Components/Navigator/Navigator";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Facerecognition from "./Components/Facerecognition/Facerecognition";
import Rank from "./Components/Rank/Rank";
import Particlee from "./Components/Particles/Particles";
import Clarifai from "clarifai";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";

const app = new Clarifai.App({
  apiKey: "67ff28bc6c9b44f7b2349eb336d13d39",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "SignIn",
      IsSignedIn: false,
    };
  }
  CalculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("faceimage");
    const height = Number(image.height);
    const width = Number(image.width);
    console.log("width: ", width, "height: ", height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  OnRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ IsSignedIn: false });
    } else if (route === "home") {
      this.setState({ IsSignedIn: true });
    }
    this.setState({ route: route });
  };
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    console.log("click");
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((Response) =>
        this.displayFaceBox(this.CalculateFaceLocation(Response))
      )
      .catch((err) => console.log(err));
  };
  render() {
    const { IsSignedIn, imageUrl, box } = this.state;
    return (
      <div>
        <Particlee />
        <Navigator OnRouteChange={this.OnRouteChange} IsSignedIn={IsSignedIn} />
        {this.state.route === "home" ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmit={this.onButtonSubmit}
            />
            <Facerecognition box={box} imageUr={imageUrl} />
          </div>
        ) : this.state.route === "SignIn" ? (
          <SignIn OnRouteChange={this.OnRouteChange} />
        ) : (
          <Register OnRouteChange={this.OnRouteChange} />
        )}
      </div>
    );
  }
}
export default App;

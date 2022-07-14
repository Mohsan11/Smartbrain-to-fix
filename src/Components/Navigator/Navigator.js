import React from "react";
const Navigator = ({ OnRouteChange, IsSignedIn }) => {
  if (IsSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => {
            OnRouteChange("signout");
          }}
          className="f3 dim link pointer underline pa3  "
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => {
            OnRouteChange("SignIn");
          }}
          className="f3 dim link pointer underline pa3  "
        >
          Sign in
        </p>
        <p
          onClick={() => {
            OnRouteChange("register");
          }}
          className="f3 dim link pointer underline pa3  "
        >
          Register
        </p>
      </nav>
    );
  }
};
export default Navigator;

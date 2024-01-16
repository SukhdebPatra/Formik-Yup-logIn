import React from "react";

const Container = (children) => {
  return (
    <div
      className="Login"
      style={{
        // ...StyleS,
        width: 360,
        height: 800,
        position: "relative",
        background: "#F0F9FE",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >{children}</div>
  );
};

export default Container;

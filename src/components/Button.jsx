import React from "react";

function Button({ text, styles ,btntextstyle}) {
    console.log(styles);
  return (
    <button
      className="Group50"
      style={{ width: 284, height: 50, border: "none", position: "relative" }}
    >
      <div
        className="Rectangle4"
        style={{
          ...styles,
          width: 284,
          height: 50,
          left: 0,
          top: 0,
          position: "absolute",
          boxShadow: "0px 0px 14px 4px rgba(11, 205, 134, 0.36)",
          borderRadius: 25,
        }}
      />
      <div
        // className="Login"
        style={{
          ...btntextstyle,
          left: 120,
          top: 13,
          position: "absolute",
          color: "white",
          fontSize: 16,
          fontFamily: "Poppins",
          fontWeight: "600",
          wordWrap: "break-word",
        }}
      >
        {text}
      </div>
    </button>
  );
}

export default Button;

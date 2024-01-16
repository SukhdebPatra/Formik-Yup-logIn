import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footerTag">
        <div
          style={{
            padding: "10px",
            display: "flex",
            textAlign: "center",
            bottom: "0",
            position: "fixed",
            width:'100%'
          }}
        >
          <div style={{ width: "100%" }}>
            <i class="bi bi-house-door-fill "></i> <br /> Home
          </div>
          <div style={{ width: "100%" }}>
            <i class="bi bi-bag-fill"></i> <br /> Subscription
          </div>
          <div style={{ width: "100%" }}>
            <i class="bi bi-cart2"></i> <br /> Cart
          </div>
        </div>

        {/* <p style={{ marginTop: "10px", color: "#666" }}>© 2022 Your Website</p> */}
      </footer>
    </>
  );
};

export default Footer;

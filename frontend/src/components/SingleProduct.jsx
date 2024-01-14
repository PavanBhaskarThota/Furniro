import React from "react";
import arrow from "../Assets/singleProduct/dashicons_arrow-up-alt2.svg";

export const SingleProduct = () => {
  return (
    <div>
      <div
        style={{
          height: "100px",
          width: "100%",
          background: "#F9F1E7",
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <p style={{ marginLeft: "50px" }}>Home</p>
        <dir>
          <img src={arrow} alt="" />
        </dir>
        <p>Shop</p>
        <dir>
          <img src={arrow} alt="" />
        </dir>
        <p>Asgaard sofa</p>
      </div>
    </div>
  );
};

import React from "react";
import styled from "styled-components";

import arrow from "../Assets/singleProduct/dashicons_arrow-up-alt2.svg";
import arrow from "../Assets/singleProduct/";

export const SingleProduct = () => {
  return (
    <Single>
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

      <div>
        <div></div>
        <div></div>
      </div>
    </Single>
  );
};

const Single = styled.div``;

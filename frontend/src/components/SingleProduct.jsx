import React from "react";
import styled from "styled-components";

import arrow from "../Assets/singleProduct/dashicons_arrow-up-alt2.svg";
import img1 from "../Assets/singleProduct/Asgaard sofa 3.png";
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

      <div
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "10%",
          }}
        >
          <div style={{ width: "100%", background: "#F9F1E7" , borderRadius:'10px'}}>
            <img style={{ width: "100%" }} src={img1} alt="" />
          </div>
          <div style={{ width: "100%", background: "#F9F1E7" , borderRadius:'10px'}}>
            <img style={{ width: "100%" }} src={img1} alt="" />
          </div>
          <div style={{ width: "100%", background: "#F9F1E7" }}>
            <img style={{ width: "100%" }} src={img1} alt="" />
          </div>
          <div style={{ width: "100%", background: "#F9F1E7" , borderRadius:'10px'}}>
            <img style={{ width: "100%" }} src={img1} alt="" />
          </div>
        </div>
        <div>
          <div style={{ background: "#F9F1E7" , borderRadius:'10px'}}>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </Single>
  );
};

const Single = styled.div``;

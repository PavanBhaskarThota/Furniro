import React from "react";
import { Section1 } from "../components/home/Section1";
import { Section2 } from "../components/home/Section2";
import { Section3 } from "../components/home/Section3";

export const HomePage = () => {
  console.log("home");
  return (
    <div>
      <Section1 />
      <Section2 />
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "700",
            fontStyle: "normal",
            color: "var(--Font-Color1, #3A3A3A)",
            lineHeight: "120%",
          }}
        >
          Our Products
        </h1>
        <Section3 />
      </div>
    </div>
  );
};

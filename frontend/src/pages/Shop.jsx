import React from "react";
import styled from "styled-components";
import shop from "../components/home/homepage/shop1.jpg";
import filters from "../Assets/shop/system-uicons_filtering.svg";
import lists from "../Assets/shop/bi_view-list.svg";
import round from "../Assets/shop/ci_grid-big-round.svg";
import { Section3 } from "../components/home/Section3";

export const Shop = () => {
  return (
    <Div>
      <div id="shoptop">
        <h1>Shop</h1>
        <p>
          Home <span style={{ fontWeight: "700" }}>{`>`}</span>{" "}
          <span style={{ fontWeight: "300" }}>Shop</span>
        </p>
      </div>

      <div id="sort">
        <div className="sort1">
          <div>
            <img src={filters} alt="" />
          </div>
          <p>Filters</p>
          <div>
            <img src={round} alt="" />
          </div>
          <div>
            <img src={lists} alt="" />
          </div>
          <div
            style={{ height: "37px", width: "2px", background: "black" }}
          ></div>
          <p>Showing 1-16 of 32 results</p>
        </div>

        <div className="sort2">
          <p>Show</p>
          <p
            style={{
              width: "55px",
              height: "55px",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9F9F9F",
            }}
          >
            16
          </p>
          <p>Sort by</p>
          <p
            style={{
              width: "158px",
              height: "55px",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              paddingLeft: "25px",
              color: "#9F9F9F",
            }}
          >
            Default
          </p>
        </div>
      </div>
      <div style={{marginTop:'80px', marginBottom:'80px'}}>

      <Section3 shop="shop" />
      </div>
    </Div>
  );
};

const Div = styled.div`
  #shoptop {
    width: 100%;
    height: 316px;
    background-image: url(${shop});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #shoptop h1 {
    margin: 0;
    color: #000;
    font-family: "Poppins";
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #shoptop p {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 10px;
  }

  #sort {
    height: 100px;
    background-color: #f9f1e7;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #sort .sort1 {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-left: 80px;
  }

  #sort .sort2 {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-right: 80px;
  }
`;

const Shopproducts = styled.div``;

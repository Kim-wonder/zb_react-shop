import React, { useContext, useState } from "react";
import { DataContext } from "../store/Data";
import "./PutinCart.scss";
import { Link } from "react-router-dom";

export default function PutinCart(itemInfo) {
  return (
    <>
      <button className="cart-btn">장바구니에 담기</button>
    </>
  );
}

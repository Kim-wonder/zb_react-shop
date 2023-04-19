import React from "react";
import "./GotoCart.scss";
import { Link } from "react-router-dom";

export default function GotoCart() {
  return (
    <>
      <Link to={"/cart"}>
        <button className="cart-btn2">장바구니로 이동</button>
      </Link>
    </>
  );
}

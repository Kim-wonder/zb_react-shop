import React from "react";
import "./Cart.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DataContext } from "../store/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cart() {
  return (
    <>
      <Header></Header>
      <div className="headBox"></div>
      <div>로컬스토리지에 담긴 상품 보여주기</div>

      <Footer></Footer>
    </>
  );
}

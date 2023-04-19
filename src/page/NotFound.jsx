import React from "react";
import "./NotFound.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigation = useNavigate();

  return (
    <>
      <Header></Header>
      <div className="headBox"></div>
      <div className="wrapper2">
        <p className="notFound">Not Found</p>
        <p onClick={() => navigation("/")} className="goToHome">
          Go to Home
        </p>
      </div>

      <Footer></Footer>
    </>
  );
}

import React from "react";
import "./Main.scss";
import Header from "../components/Header";
import CarouselView from "../components/CarouselView";
import MainProduct from "../components/MainProduct";

export default function Main() {
  return (
    <>
      <Header></Header>
      <CarouselView></CarouselView>
      <MainProduct></MainProduct>
    </>
  );
}

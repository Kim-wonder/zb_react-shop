import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../store/Data";
import "./Product.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import PutinCart from "../components/PutinCart";
import GotoCart from "../components/GotoCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function Product() {
  // const value = useContext(DataContext);
  const value = JSON.parse(localStorage.getItem("data"));
  const [origin, setOrigin] = useState(value);

  const params = useParams();
  const paramId = params.itemId;
  const itemInfo = value[paramId - 1];
  const title = itemInfo.title;
  const price = itemInfo.price;
  const num = Math.round(price * 1);

  const getCartInfo = JSON.parse(localStorage.getItem("item")) || [];
  const addCartInfo = (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    const cartInfo = {
      title: title,
      price: price,
    };
    const originalCartInfo = getCartInfo;
    localStorage.setItem(
      "item",
      JSON.stringify([...originalCartInfo, cartInfo])
    );
  };

  // useEffect(() => {
  //   setOrigin(value);
  // }, [origin]);

  return (
    <>
      <Header></Header>
      <div className="headBox"></div>
      <div className="wrapper">
        <div className="topNav">{itemInfo.title}</div>
        <div className="info-box">
          <div className="img-box">
            <img src={itemInfo.image} className="item-Img" />
          </div>
          <div className="itemDescription">
            <div className="title">{itemInfo.title}</div>
            <div className="sub-title">{itemInfo.description}</div>
            <div className="star-rating">
              <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="evalue">
                {itemInfo.rating.rate} / {itemInfo.rating.count} 참여
              </div>
            </div>
            <div className="price">$ {num}</div>
            <div className="btn-box">
              <PutinCart
                onClick={() => {
                  addCartInfo();
                }}
              ></PutinCart>
              <GotoCart></GotoCart>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

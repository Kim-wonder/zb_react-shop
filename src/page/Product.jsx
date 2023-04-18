import React, { useContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import { DataContext } from "../store/Data";
import "./Product.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DatailItem from "../components/DatailItem";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import PutinCart from "../components/PutinCart";
import GotoCart from "../components/GotoCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function Product() {
  const [data, setData] = useState([]);

  const value = useContext(DataContext);
  // const value = data;
  const params = useParams();
  const paramId = params.itemId;
  const itemInfo = value[paramId - 1];
  const loca = useLocation();
  const refer = document.referrer;
  const price = itemInfo.price;
  const num = Math.round(price * 1);
  const value2 = useMemo(() => {
    useContext(DataContext);
  });
  // console.log(value);
  // console.log(itemInfo);

  // useEffect(() => {
  //   useContext(DataContext);
  // }, []);

  useEffect(() => {
    const shopDate = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      console.log(result);
      return result.data;
    };

    shopDate().then((res) => {
      setData(res);
    });
  }, []);
  console.log(data);

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
              </div>
              <div className="evalue">
                {itemInfo.rating.rate} / {itemInfo.rating.count} 참여
              </div>
            </div>
            <div className="price">$ {num}</div>
            <div className="btn-box">
              <PutinCart></PutinCart>
              <GotoCart></GotoCart>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

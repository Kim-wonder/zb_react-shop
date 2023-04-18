import React, { useContext } from "react";
import "./Accessory.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../store/Data";

export default function Accessory() {
  const value = useContext(DataContext);

  const products = value.filter((item) => item.category === "jewelery");
  // console.log(products);
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <div className="headBox"></div>
      <div className="topNav"> 홈 {">"} 액세서리 </div>
      <div className="cateContainer">
        <label className="pageName"> 액세서리</label>
        <div className="itemContainers">
          {products.map((item, i) => (
            <div key={item.id} className="itemCards">
              <div
                onClick={() => navigate(`/product/${item.id}`)}
                className="item"
              >
                <div className="itemImgBoxs">
                  <img src={item.image} className="itemImgs" />
                </div>
                <label className="itemDescripts">
                  <span className="itemTitles">{item.title}</span>
                  <span className="itemPrices">$ {item.price}</span>
                </label>
              </div>
              {/* <Link to={`product/${item.id}`} className="item">
                <div className="itemImgBoxs">
                  <img src={item.image} className="itemImgs" />
                </div>
                <label className="itemDescripts">
                  <span className="itemTitles">{item.title}</span>
                  <span className="itemPrices">$ {item.price}</span>
                </label>
              </Link> */}
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

import React, { useContext } from "react";
import "./Fashion.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../store/Data";

export default function Fashion() {
  const value = useContext(DataContext);

  const filterItem = value.filter((item) => item.category === "men's clothing");
  const filterItems = value.filter(
    (item) => item.category === "women's clothing"
  );
  const products = filterItem.concat(filterItems);
  // console.log(products);

  const navigate = useNavigate();

  return (
    <>
      <Header></Header>
      <div className="headBox"></div>
      <div className="topNav"> 홈 {">"} 패션 </div>
      <div className="cateContainer">
        <label className="pageName">패션</label>
        <div className="itemContainers">
          {products.map((item, i) => (
            <div key={item.id} className="itemCards">
              <Link to={`/product/${item.id}`} className="item">
                <div className="itemImgBoxs">
                  <img src={item.image} className="itemImgs" />
                </div>
                <label className="itemDescripts">
                  <span className="itemTitles">{item.title}</span>
                  <span className="itemPrices">$ {item.price}</span>
                </label>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

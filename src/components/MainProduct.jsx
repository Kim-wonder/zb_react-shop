import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../store/Data";
import "./MainProduct.scss";

export default function MainProduct() {
  const value = useContext(DataContext);

  return (
    <div className="main-item-list">
      <div className="categoryContainer">
        <label>패션</label>
        <div className="itemContainer">
          {value
            .filter((item) => item.category === "men's clothing")
            .map(
              (item, i) =>
                i < 4 && (
                  <div key={item.id} className="itemCard">
                    <Link to={`product/${item.id}`} className="item">
                      <div className="itemImgBox">
                        <img src={item.image} className="itemImg" />
                      </div>
                      <label className="itemDescript">
                        <span className="itemTitle">{item.title}</span>
                        <span className="itemPrice">$ {item.price}</span>
                      </label>
                    </Link>
                  </div>
                )
            )}
        </div>
      </div>
      <div className="categoryContainer">
        <label>액세서리</label>
        <div className="itemContainer">
          {value
            .filter((item) => item.category === "jewelery")
            .map(
              (item, i) =>
                i < 4 && (
                  <div key={item.id} className="itemCard">
                    <Link to={`product/${item.id}`} className="item">
                      <div className="itemImgBox">
                        <img src={item.image} className="itemImg" />
                      </div>
                      <label className="itemDescript">
                        <span className="itemTitle">{item.title}</span>
                        <span className="itemPrice">$ {item.price}</span>
                      </label>
                    </Link>
                  </div>
                )
            )}
        </div>
      </div>
      <div className="categoryContainer">
        <label>디지털</label>
        <div className="itemContainer">
          {value
            .filter((item) => item.category === "electronics")
            .map(
              (item, i) =>
                i < 4 && (
                  <div key={item.id} className="itemCard">
                    <Link to={`product/${item.id}`} className="item">
                      <div className="itemImgBox">
                        <img src={item.image} className="itemImg" />
                      </div>
                      <label className="itemDescript">
                        <span className="itemTitle">{item.title}</span>
                        <span className="itemPrice">$ {item.price}</span>
                      </label>
                    </Link>
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainSlide.scss";
import moon from "../assets/moon-regular.svg";
import cart from "../assets/bag-shopping-solid.svg";
import bar from "../assets/bars-solid.svg";

export default function MainSlide() {
  return (
    <>
      <div className="sider">
        <div className="side-menu">
          <div className="menu">
            <Link to="/fashion" className="header-item">
              패션
            </Link>
            <Link to="/accessory" className="header-item">
              액세서리
            </Link>
            <Link to="/digital" className="header-item">
              디지털
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

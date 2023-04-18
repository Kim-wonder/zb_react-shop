import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Main from "../page/Main";
import MainSlide from "./MainSlide";
import moon from "../assets/moon-regular.svg";
import cart from "../assets/bag-shopping-solid.svg";
import bar from "../assets/bars-solid.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  const toggleSide = () => {
    setClose(true);
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
    setClose(false);
  };

  //다크모드 아이콘 변경
  // function ThemeToggle({ toggle, mode }) {
  //   return (
  //     <button onClick={toggle} mode={mode}>
  //       {mode === 'dark' ? '🌚' : '🌝'}
  //     </button>
  //   );
  // }
  // background-color: ${props => props.theme.bgColor};
  // border: ${props => props.theme.borderColor};
  // font-size: 20px;

  return (
    <div className="topHeader">
      {open ? (
        <div className="side" onClick={toggleSide}>
          {close ? true : <MainSlide></MainSlide>}
        </div>
      ) : (
        false
      )}

      <div className="header">
        <div className="header-left">
          <div className="side-bar" onClick={handleClick}>
            <img src={bar} className="bar" />
          </div>
          <Link to="/" className="header-logo">
            React Shop
          </Link>
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
        <div className="header-right">
          <a>
            <img src={moon} className="header_icon theme_dark_mode " />
          </a>
          <input
            className="header_input theme_dark_input "
            placeholder="검색"
          />
          <a>
            <img src={cart} className="header_icon theme_dark_cart " />
          </a>
        </div>
      </div>
    </div>
  );
}

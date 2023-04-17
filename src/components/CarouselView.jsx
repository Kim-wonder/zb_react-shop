import React from "react";
import { Link } from "react-router-dom";
import "./CarouselView.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import digital from "../assets/img_shop_digital.jpeg";
import fashion from "../assets/img_shop_fashion.jpeg";
import grocery from "../assets/img_shop_grocery.jpeg";
import Button_ from "./BaroButton";

export default function CarouselView() {
  return (
    <div className="carousel-container">
      <div className="carousel-header"></div>
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div className="ad">
          <img src={fashion} />
          <div className="ad_ment">
            <p className="title">물 빠진 청바지!</p>
            <p className="sub-title">
              이제 막 도착한 패션 청바지를 구경해보세요.
            </p>
            <Link to="/fashion">
              <Button_></Button_>
            </Link>
          </div>
        </div>
        <div className="ad">
          <img src={grocery} />
          <div className="ad_ment">
            <p className="title">신선한 식품!</p>
            <p className="sub-title">
              농작 직배송으로 더욱 신선한 식품을 만나보세요.
            </p>
            <Link to="/notfound">
              <Button_></Button_>
            </Link>
          </div>
        </div>
        <div className="ad">
          <img src={digital} />
          <div className="ad_ment">
            <p className="title">신속한 업무처리!</p>
            <p className="sub-title">다양한 디지털 상품을 둘러보세요.</p>
            <Link to="/digital">
              <Button_></Button_>
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

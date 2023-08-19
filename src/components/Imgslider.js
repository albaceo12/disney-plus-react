import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";
import { imgslider } from "../data";
function Imgslider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const [imgs] = useState(imgslider);
  return (
    <Carouser {...settings}>
      {imgs.map((img) => (
        <Wrapper key={uuidv4()}>
          <img src={img.src} alt="" />
        </Wrapper>
      ))}
    </Carouser>
  );
}
export default Imgslider;
const Carouser = styled(Slider)`
margin-top:11vh;
.slick-slide{
  padding: 2vh 2vh;
  // height:40vh;
  // @media screen and (min-width: 375px) and (max-width: 550px) {
  //   height: 35vh;
  // }
  // @media screen and (min-width: 280px) and (max-width: 374px) {
  //   height: 30vh;
  // }
}
   .slick-list{
      border-radius:10px;
      background-color: #040714;
    }
ul li button{
    ::before{
        font-size:10px;
        color:rgb(150,158,171) !important;
        @media screen and (max-width: 365px) {
           display:none;
        }

    }
}
li.slick-active button:before{
        color:white !important;
    }
}
> button{
    z-index:1400;
    opacity:1;
}
 .slick-prev{
   left:2%;
 }
 .slick-next{
   right:2%;
 }
 .slick-next:before,
 .slick-prev:before {
   color: white;
 }



`;
const Wrapper = styled.div`
  padding: 0px;
  height: 40vh;
  @media screen and (min-width: 375px) and (max-width: 550px) {
    height: 35vh;
  }
  @media screen and (min-width: 280px) and (max-width: 374px) {
    height: 30vh;
  }
  cursor: pointer;
  object-position: center;
  img {
    object-fit: fill;
    border: 4px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    width: 100%;
    height: 100%;
    box-shadow: rgba(0 0 0 /69%) 0px 26px 30px,
      rgba(0 0 0 /73%) 0px 16px 10px -10px;
    :hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

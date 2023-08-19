import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { selectpopular } from "./features/movie/movieslice";
// import { selsectmovies } from "../features/movie/movieslice";
function Popular() {
  const movies = useSelector(selectpopular);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
      { breakpoint: 425, settings: { slidesToShow: 1 } },
    ],
  };
  //   const movies = useSelector(selsectmovies);
  // console.log(movies);
  return (
    <Container>
      {movies.length ? <h1>popular disney</h1> : null}

      <Carouser {...settings}>
        {movies &&
          movies.map((movie) => (
            <Wrap key={uuidv4()}>
              <NavLink to={`/detail/${movie.id}`}>
                <img src={movie.CardImg} />
              </NavLink>
            </Wrap>
          ))}
      </Carouser>
      {/* <Content>
        {movies &&
          movies.map((movie, index) => {
            return (
              <Wrap key={index}>
                <Link to={`/detail/${movie.id}`}>
                  <img src={movie.CardImg} />
                </Link>
              </Wrap>
            );
          })}
      </Content> */}
    </Container>
  );
}
export default Popular;
const Container = styled.div`
  padding: 0.5rem 0;
  h1 {
    font-size: 1.7rem;
    text-transform: uppercase;
    font-wieght: 300 !important;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.1);
    margin: 2vh 0 1vh 2rem;
    @media screen and (max-width: 991px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 550px) {
      font-size: 1.3rem;
    }
  }
`;
// const Content = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, minmax(0, 1fr));
//   grid-gap: 25px;
// `;
const Carouser = styled(Slider)`
.slick-slide{
  height: auto;
  padding:2vh 2vh;
}
  .slick-list{
       background-color: #040714;
      border-radius:10px;
    }
 ul li button{
     ::before{
         font-size:10px;
        color:rgb(150,158,171) !important;
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
 `;

const Wrap = styled.div`
  padding: 3px;

  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: 0px 26px 30px -10px rgba(0 0 0 /69%),
    0px 16px 10px -10px rgba(0 0 0 /73%);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 20vh;
    object-fit: fill;
    opacity: 1;
    z-index: 1400;
    position: relative;
    @media screen and (max-width: 991px) {
      height: auto;
      object-fit: cover;
    }
  }
  &:hover {
    padding: 0;
    opacity: 1;
    z-index: 2000;
    position: relative;
    box-shadow: 0px 40px 58px -16px rgba(0 0 0 /80%),
      0px 30px 22px -10px rgba(0 0 0 /72%);
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

// const Wrapper = styled.div`
//   padding: 1px;
//   height: 270px;
//   cursor: pointer;
//   object-position: center;
//   img {
//     object-fit: fill;
//     border: 4px solid transparent;
//     border-radius: 4px;
//     width: 100%;
//     height: 100%;
//     box-shadow: rgba(0 0 0 /69%) 0px 26px 30px,
//       rgba(0 0 0 /73%) 0px 16px 10px -10px;
//     :hover {
//       border: 4px solid rgba(249, 249, 249, 0.8);
//     }
//   }
// `;

// import React from "react";

// function NewtoDisney() {
//   return <div>NewtoDisney 🔴🔴🔴</div>;
// }

// export default NewtoDisney;

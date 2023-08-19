import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { useParams } from "react-router-dom";
import db from "../firebase/firebase";
import play_icon_black from "../assets-img-video/images/play-icon-black.png";
import play_icon_white from "../assets-img-video/images/play-icon-white.png";
import group_icon from "../assets-img-video/images/group-icon.png";
function Detail() {
  const { id } = useParams();
  const [movie, setmovie] = useState();
  useEffect(() => {
    db.collection("Movies")
      .doc(id)
      .get()
      .then((doc) => {
        //
        if (doc.exists) {
          setmovie(doc.data());
        } else {
          console.log("detail can not be Fetched");
        }
      });
  }, [id]);
  return (
    <>
      {!movie ? (
        <div style={{ height: "11vh" }}></div>
      ) : (
        <>
          <Background
            style={{
              background: `linear-gradient(
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.4)
              ), url(${movie.BackgroundImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Container>
              <Content>
                <Imgtitle>
                  <img src={movie.TitleImg} alt="" />
                </Imgtitle>
                <h2>{movie.Genres}</h2>
                <p>{movie.Description}</p>
                <Controls>
                  <div className="playtrail">
                    <Playbtn>
                      <img src={play_icon_black} />
                      <span>PLAY</span>
                    </Playbtn>
                    <Trailerbtn>
                      <img src={play_icon_white} />
                      <span>trailer</span>
                    </Trailerbtn>
                  </div>
                  <div className="addgp">
                    <Addbtn>
                      <AiOutlinePlus className="plusmark" />
                    </Addbtn>
                    <Gpwatch>
                      <img src={group_icon} />
                    </Gpwatch>
                  </div>
                </Controls>
              </Content>
            </Container>
          </Background>
        </>
      )}
    </>
  );
}
export default Detail;
const Background = styled.main`
  margin-top: 11vh;
  // background:
  //   url("https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc3eiwbu-nD4fIQIVQ1U09rVReNG3YpVJWTmNSzmRJRB7sk4q3H4NnTIEa2Uz314j1Kj6VIApFCa3_ySFdivdH8pYjvu.jpg?r=d0f
  // ")
  //     center/cover no-repeat;
  height: 100vh;
  min-width: 280px;
  overflow-x: hidden;
  @media screen and (min-width: 991px) and (max-width: 1200px) {
    height: 72vh;
  }
  @media screen and (min-width: 550px) and (max-width: 990px) {
    height: 65vh;
  }
  @media screen and (max-width: 549px) {
    height: 55vh;
    object-fit: fill;
  }
`;
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  height: auto;
`;
const Content = styled.div`
  min-width: 280px;
  height: 95vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    height: 72vh;
  }
  @media screen and (min-width: 550px) and (max-width: 990px) {
    height: 65vh;
  }
  @media screen and (max-width: 549px) {
    height: 55vh;
    object-fit: fill;
  }
  h2 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500 !important;
    @media screen and (min-width: 768px) and (max-width: 1200px) {
      font-size: 1.3rem;
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      font-size: 1.1rem;
    }
    @media screen and (max-width: 374px) {
      font-size: 1rem;
      max-width: 250px;
    }
  }
  p {
    min-width: 280px;
    line-height: 1.4;
    font-size: 1.2rem;
    padding: 1rem 0;
    color: #f9f9f9;
    width: 100%;
    max-width: 650px;
    height: auto;
    @media screen and (min-width: 768px) and (max-width: 1200px) {
      font-size: 1.1rem;
      max-width: 550px;
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      padding: 0.5rem 0;
      font-size: 1rem;
      max-width: 400px;
    }
    @media screen and (max-width: 374px) {
      padding: 0.3rem 0;
      font-size: 0.9rem;
      max-width: 400px;
    }
  }
`;
const Imgtitle = styled.div`
  width: 95%;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (min-width: 550px) and (max-width: 1200px) {
    max-width: 325px;
  }
  @media screen and (min-width: 375px) and (max-width: 549px) {
    max-width: 250px;
  }
  @media screen and (max-width: 374px) {
    max-width: 150px;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  // padding:50px 0;
  min-width: 280px;
  @media screen and (max-width: 320px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Playbtn = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0.5rem 1.2rem;
  margin-right: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgb(249, 249, 249);
  border: none;
  :hover {
    background-color: rgb(198, 198, 198);
  }
  @media screen and (min-width: 550px) and (max-width: 1200px) {
    padding: 0.5rem 1.1rem;
  }
  @media screen and (min-width: 375px) and (max-width: 549px) {
    padding: 0.5rem 1rem;
  }
  @media screen and (max-width: 374px) {
    border-radius: 2px;
    padding: 0.4rem 0.8rem;
    margin-right: 13px;
    background: #f9f9f9;
  }
  img {
    width: 32px;
    height: auto;
    opacity: 1;
    z-index: 1400;
    object-fit: contain;
    @media screen and (min-width: 550px) and (max-width: 1200px) {
      width: 27px;
    }
    @media screen and (max-width: 549px) {
      width: 24px;
    }
  }
  span {
    // margin-top: 0.1rem;
    color: #000;
    font-size: 1.2rem;
    font-weight: 400 !important;
    text-transform: uppercase;
    line-height: 1.08;
    letter-spacing: 1px;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      font-size: 1.1rem;
    }
    @media screen and (min-width: 375px) and (max-width: 549px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 374px) {
      font-size: 0.9rem;
    }
  }
`;
const Trailerbtn = styled(Playbtn)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: white;
  text-transform: uppercase;
  span {
    letter-spacing: 1.1px;
    color: white;
    font-weight: 400 !important;
  }
`;
const Addbtn = styled.button`
  margin-right: 16px;
  width: 41px;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  @media screen and (min-width: 550px) and (max-width: 1200px) {
    width: 37px;
    height: 37px;
  }
  @media screen and (max-width: 549px) {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
  // @media screen and (max-width: 310px) {
  //   display: none;
  // }
`;
const Gpwatch = styled(Addbtn)`
  background-color: rgb(0, 0, 0);
`;

// span {
//   background-color: rgb(249, 249, 249);
//   :first-child {
//     height: 2px;
//     width: 16px;
//     transform: translate(1px, -0.3px) rotate(0deg);
//     @media screen and (max-width: 550px) {
//       width: 15px;
//     }
//   }
//   :nth-child(2) {
//     height: 16px;
//     width: 2px;
//     transform: translate(-8px, 0px) rotate(0deg);
//     @media screen and (max-width: 550px) {
//       height: 15px;
//     }
//   }

//   @media screen and (min-width: 550px) and (max-width: 1200px) {
//     font-size: 30px;
//   }
//   @media screen and (max-width: 549px) {
//     font-size: 28px;
//   }
//   // height: 100%;
//   color: white;
//   display: inline-block;
// }

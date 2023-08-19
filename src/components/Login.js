import React from "react";
import styled from "styled-components";
import Stream from "./Stream";
import Downloadnew from "./Downloadnow";
import Groupwatch from "./Groupwatch";
import Marvelstudio from "./Marvelstudio";
import Gridtheme from "./Gridtheme";
import Devices from "./Devices";
import Advertise from "./Advertise";
import ctalogo_one from "../assets-img-video/images/cta-logo-one.svg";
import ctalogo_two from "../assets-img-video/images/cta-logo-two.png";
function Login() {
  return (
    <>
      <Container>
        <Cta>
          <Ctalogo1 src={ctalogo_one} />
          <Signup>Get The Disney Bundle </Signup>
          <h4>Steam Now:Terms Apply</h4>
          <Description>
            The screenplay was written by Qui Nguyen and Adele Lim, both of whom
            also wrote the story with Hall, Estrada, Paul Briggs, John Ripa,
            Kiel Murray and Dean Wellins, based on story ideas by Bradley
            Raymond and additional story contributions by Helen Kalafatic.
          </Description>
          <Ctalogo2 src={ctalogo_two} />
          <button type="button" className="link">
            Sign UP for Disney+ Only
          </button>
          <button type="button" className="link text-gray">
            $7.99/month or $79.99/year
          </button>
        </Cta>
      </Container>
      <Stream />
      <Groupwatch />
      <Marvelstudio />
      <Gridtheme />
      <Downloadnew />
      <Advertise />
      <Devices />
    </>
  );
}
export default Login;
const Container = styled.div`
  position: relative;
  height: calc(100vh);
  //height: auto;
  //width: auto;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    height: calc(93vh);
  }
  @media screen and (min-width: 280px) and (max-width: 767px) {
    height: calc(88vh);
  }
  h4 {
    color: #fff;
    font-weight: 600;
    margin-bottom: 2px;
  }
  button {
    outline: none;
    border: none;
    background: transparent;
    font-size: 19px;
    color: #f9f9f9;
    margin-top: 1vh;
    @media screen and (min-width: 280px) and (max-width: 549px) {
      font-size: 15px;
    }
  }
  button.text-gray {
    margin-top: 0.3vh;
    color: gray;
  }
  ::before {
    background-image: url("/disney-plus-react/static/media/login-background.05b1a1b3088cbb458939.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;
const Cta = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 11vh;
  align-items: center;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    max-width: 550px;
  }
  @media screen and (min-width: 550px) and (max-width: 767px) {
    max-width: 450px;
  }
  @media screen and (min-width: 375px) and (max-width: 549px) {
    max-width: 350px;
  }
  @media screen and (min-width: 280px) and (max-width: 374px) {
    max-width: auto;
  }
`;
const Ctalogo1 = styled.img`
  width: 100%;
  // height: auto;
  // display: block;
  max-width: 600px;
  object-fit: content;
`;
const Signup = styled.a`
  width: 100%;
  min-width: 240px;
  background-color: #0063e5;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 10px;
  transition: all 250ms ease-in-out;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  :hover {
    background-color: #0483ee;
  }
  @media screen and (min-width: 550px) and (max-width: 1200px) {
    padding: 10px 0;
    font-size: 15px;
  }
  @media screen and (min-width: 280px) and (max-width: 549px) {
    padding: 5px 0;
    font-size: 14px;
  }
`;
const Description = styled.p`
  font-size: 17px;
  letter-spacing: 1.5px;
  line-height: 1.5;
  text-align: center;
  min-width: 275px;
  @media screen and (min-width: 991px) and (max-width: 1200px) {
    font-size: 16px;
    line-height: 1.4;
  }
  @media screen and (min-width: 550px) and (max-width: 990px) {
    font-size: 15px;
    line-height: 1.3;
  }
  @media screen and (min-width: 375px) and (max-width: 549px) {
    font-size: 14px;
    line-height: 1.2;
  }
  @media screen and (min-width: 280px) and (max-width: 374px) {
    font-size: 13px;
    line-height: 1.1;
  }
`;
const Ctalogo2 = styled(Ctalogo1)`
  margin-top: 5px;
  width: 90%;
`;

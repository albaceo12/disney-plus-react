import React from "react";
import styled from "styled-components";
import jugle from "../assets-img-video/images/image/jugle.jpg";
function Stream() {
  return (
    <Section>
      <Container>
        <Textinfo>
          <h1 className="disney-title">Stream with Premier Access the </h1>
          <h1 className="disney-title">same day its in theaters</h1>
          <p>
            Coming May 28. Get Premier Access to Cruella for $29.99 with a
            Disney+ Subscription, and watch as many times as you like before its
            available to all Disney+ Subscription at a later date{" "}
          </p>
          <button className="disney-theme">Preorder</button>
        </Textinfo>
        <Imaginfo>
          <img src={jugle} alt="" />
        </Imaginfo>
      </Container>
    </Section>
  );
}
const Section = styled.section`
  padding: 50px 5%;
  position: relative;
  background: transparent;
  min-width: 280px;
  @media screen and (max-width: 991px) {
    padding: 35;
  }
  @media screen and (max-width: 767px) {
    padding: 25px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;
const Textinfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1400;
  position: relative;
  @media screen and (max-width: 991px) {
    padding: 0;
    width: 100%;
  }
  p {
    font-size: 1rem;
    font-weight: 100;
    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.85rem;
      line-height: 1rem;
    }
    @media screen and (min-width: 280px) and (max-width: 374px) {
      font-size: 0.7rem;
      line-height: 1rem;
      margin-top: 1vh;
    }
  }
`;
const Imaginfo = styled.div`
  flex: 0 auto;
  opacity: 1;
  z-index: 1400;
  position: relative;
  img {
    width: 100%;
    height: auto;
    // object-fit: contain;
    max-width: 600px;
    @media screen and (min-width: 500px) and (max-width: 1200px) {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    @media screen and (min-width: 280px) and (max-width: 499px) {
      width: 31vh;
      height: auto;
      object-fit: contain;
    }
  }
`;

export default Stream;

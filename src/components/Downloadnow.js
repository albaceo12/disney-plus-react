import React from "react";
import styled from "styled-components";

function Downloadnew() {
  return (
    <Section>
      <Container>
        <Textinfo>
          <h1 className="disney-title">Stream Now or Download Now</h1>
          <h1 className="disney-title">Explore US More on Disney</h1>
          <p>
            Stream on 4 Devices at Once or Download Your Fvourites to Watch
            Later. With dozens of titles i stunning 4K UHD, you can watch the
            way you always wished
          </p>
          <button className="disney-theme">Preorder</button>
        </Textinfo>
        <Imaginfo>
          <img src="/images/image/Devices.png" alt="" />
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
  flex-direction: row;
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
  //   text-align: center;
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
    object-fit: contain;
    max-width: 600px;
    @media screen and (min-width: 500px) and (max-width: 1200px) {
      width: 100%;
      height: inherit;
      object-fit: contain;
      margin-top: 3vh;
    }
    @media screen and (min-width: 280px) and (max-width: 499px) {
      width: 31vh;
      height: auto;
      object-fit: contain;
      margin-top: 3vh;
    }
  }
`;

export default Downloadnew;

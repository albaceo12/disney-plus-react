import React from "react";
import styled from "styled-components";
import cta_logo_one from "../assets-img-video/images/cta-logo-one.svg";
function Advertise() {
  return (
    <>
      <Section>
        <Container>
          <IMGinfo>
            <img src={cta_logo_one} alt="" />
          </IMGinfo>
          <Textinfo>
            <p>
              Get The Disney Bundle to Stream the best movies, shows, and sports
              with Disney+, HULU and ESPN+.Term Apply
            </p>
            <button className="disney-theme">Get This Disney Bundle</button>
          </Textinfo>
        </Container>
      </Section>
    </>
  );
}
const Section = styled.section`
  position: relative;
  padding: 35px 5%;
  background: transparent;
  min-width: 280px;
`;
const Container = styled.div`
  display: flex;
  padding: 35px 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #f9f9f9;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    padding: 25px 35px;
    justify-content: center;
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    padding: 25px 15px;
  }
`;
const IMGinfo = styled.div`
    width:48%;
    flex: 0 auto;
  opacity: 1;
  z-index: 1400;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
     img{
     width:100%;
      max-width:600px;
     height:auto;
     object-fit:contain;
     object-position:center:

  //   }
`;
const Textinfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1400;

  @media screen and (max-width: 991px) {
    width: 100%;
    text-align: center;
  }
  p {
    font-size: 1rem;
    @media screen and (max-width: 550px) {
      font-size: 0.95rem;
    }
  }
`;
export default Advertise;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo_footer from "../assets-img-video/images/logo.svg";
function Footer() {
  return (
    <>
      <Section>
        <Container>
          <Footerband>
            <img src={logo_footer} alt="" />
          </Footerband>
          <Nav>
            <li>
              <p>English</p>
            </li>
            <li>
              <p>Subscriber Agreement</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Your California Privacy</p>
            </li>
            <li>
              <p>Do Not Sell My Info</p>
            </li>
            <li>
              <p>Childrens Online Privacy Policy </p>
            </li>
            <li>
              <p>Closed Captioning</p>
            </li>
            <li>
              <p>Interest-Based-Ads</p>
            </li>
            <li>
              <p>Supported Devices</p>
            </li>
            <li>
              <p>Help</p>
            </li>
            <li>
              <p>Gift Disney+</p>
            </li>
            <li>
              <p>About US</p>
            </li>
            <li>
              <p>Disney+ Partner Program</p>
            </li>
            <li>
              <p>Premier Access</p>
            </li>
            <li>
              <p>The Disney Bundle</p>
            </li>
          </Nav>
          <Copyright>
            <p>© DisneyPlus-JSStack All Rights Reserved 2021</p>
          </Copyright>
        </Container>
      </Section>
    </>
  );
}
export default Footer;
const Section = styled.section`
  overflow-x: hidden;
  padding: 2rem 0;
  min-width: 280px;
  @media screen and (max-width: 550px) {
    padding: 1rem 0;
  }
`;
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const Footerband = styled.div`
  text-align: center;
  img {
    width: 10rem;
    height: auto;
    object-fit: fill;
    @media screen and (max-width: 550px) {
      width: 7rem;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 0;
  flex-grow: initial;
  justify-content: center;
  li {
    list-style: none;
    display: block;
    p {
      padding: 0.5rem;
      font-size: 0.9rem;
      margin-right: 0.3rem;
      @media screen and (max-width: 550px) {
        padding: 0.1rem;
        font-size: 0.75rem;
      }
    }
  }
`;
const Copyright = styled.div`
  text-align: center;
  p {
    margin-top: 1vh;
    font-weight: 400 !important;
    @media screen and (max-width: 550px) {
      font-size: 0.95rem;
    }
  }
`;

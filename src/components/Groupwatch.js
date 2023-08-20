import React from "react";
import styled from "styled-components";
import soul_Groupwatch from "../assets-img-video/images/image/Soul_Groupwatch.jpg";
function Groupwatch() {
  const groupsrc = soul_Groupwatch;
  return (
    <>
      <Section src={groupsrc}>
        <Container>
          <Content>
            <h1 className="disney-title">Virtual Movie Nights With</h1>
            <h1 className="disney-title">GroupWatch</h1>
            <li>Watch together, even when apart</li>
            <li>Stream with up to 6 friends</li>
            <li>Pause, rewind, react together</li>
            <li>Easy setup and sharing</li>
          </Content>
        </Container>
      </Section>
    </>
  );
}
const Section = styled.section`
  position: relative;
  height: 95vh;
  ::before {
    background-image: url(${(e) => e.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: -1;
  }
  min-width: 280px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    height: 85vh;
  }
  @media screen and (min-width: 280px) and (max-width: 767px) {
    height: 79vh;
  }
`;
const Container = styled.div`
  width: 91%;
  margin: 0 auto;
  @media screen and (min-width: 280px) and (max-width: 991px) {
    width: 85%;
  }
`;
const Content = styled.div`
  margin-top: 17vh;
  @media screen and (min-width: 280px) and (max-width: 1200px) {
    margin-top: 13vh;
  }
  li {
    font-size: 0.9rem;
    font-weight: 300 !important;
  }
`;
export default Groupwatch;

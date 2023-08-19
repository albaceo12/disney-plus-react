import React from "react";
import styled from "styled-components";
function Marvelstudio() {
  return (
    <>
      <Section>
        <Container>
          <Content>
            <h1 className="disney-title">Endless Entertainment</h1>
            <p style={{ fontSize: "1rem" }}>
              Disney classics, Pixar adventures, Marvel epics, Star Wars
              sagas,National Geogrphich explorations, and more.
            </p>
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
    background-image: url("/disney-plus-react/static/media/BlackPanther.3a4b0fd7dd678782dbb6.jpg");
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  display: flex;
  flex-direction: column;
  text-align: end;
  @media screen and (min-width: 280px) and (max-width: 1200px) {
    margin-top: 13vh;
  }
`;

export default Marvelstudio;

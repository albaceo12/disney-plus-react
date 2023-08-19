import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { gridthemes } from "../data";
function Gridtheme() {
  const [Imges] = useState(gridthemes);
  return (
    <Section>
      <Container>
        <Title>
          <h1 className="disney-title">Stream Exclusive Disney+ Originals</h1>
          <p>New Stories from our incredible family of studios</p>
        </Title>
        <Gridimg>
          {Imges.map((Img) => (
            <Image key={uuidv4()}>
              <img src={Img.src} alt="" />
            </Image>
          ))}
        </Gridimg>
        <Getbundlebtn>
          <button type="button" className="disney-theme">
            Get The Disney Bundles
          </button>
        </Getbundlebtn>
      </Container>
    </Section>
  );
}
const Section = styled.section`
  position: relative;
  padding: 5vh 0;
  min-width: 280px;
`;
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const Title = styled.div`
  text-align: center;
  margin-bottom: 3vh;
  p {
    font-size: 1rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 0.8rem;
  }
`;
const Gridimg = styled.div`
  display: grid;
  gap: 15px 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Image = styled.div`
  width: 100%;
  padding: 0;
  border-radius: 0.245rem;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -1 rgba(0 0 0 / 73%) 0px 16px 10px -1;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.245rem;
  }
`;
const Getbundlebtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1vh 0;
`;
export default Gridtheme;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { gridImg } from "../data";
function Devices() {
  const [Imges, setImges] = useState(gridImg);
  return (
    <>
      <Section>
        <Container>
          <Title>
            <h1 className="disney-title">
              Available Stream on Your Favourite Devices
            </h1>
          </Title>
          <Gridimg>
            {Imges.map((Img) => (
              <Image key={uuidv4()}>
                <img src={Img.src} alt="" />
                <h2>{Img.title}</h2>
              </Image>
            ))}
          </Gridimg>
        </Container>
      </Section>
    </>
  );
}

const Section = styled.section`
  position: relative;
  padding: 3vh 0 0vh 0;
  min-width: 280px;
`;
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const Title = styled.div`
  text-align: center;
  margin: 0 0 4vh 0;
`;
const Gridimg = styled.div`
  display: grid;
  gap: 15px 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media screen and (min-width: 280px) and (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
  border-radius: 4px;
  text-align: center;
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }
  img {
    width: 100%;
    height: 115px;
    object-fit: contain;
    border-radius: 0.245rem;
    @media screen and (min-width: 768px) and (max-width: 991px) {
      height: 85px;
    }
    @media screen and (min-width: 550px) and (max-width: 767px) {
      height: 75px;
    }
    @media screen and (min-width: 280px) and (max-width: 549px) {
      height: 55px;
    }

    h2 {
      font-weight: 500 !important;
      @media screen and (min-width: 280px) and (max-width: 550px) {
        font-size: 0.9rem;
      }
    }
  }
`;
export default Devices;

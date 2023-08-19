import React, { useState } from "react";
import styled from "styled-components";
import { viewer } from "../data";
import { v4 as uuidv4 } from "uuid";
function Viewers() {
  const [viewrwrap] = useState(viewer);
  return (
    <Container>
      {viewrwrap.map((item) => (
        <Wrap key={uuidv4()}>
          <img src={item.imgsrc} />
          <video autoPlay loop playsInline muted>
            <source src={item.videosrc} type="video/mp4"></source>
          </video>
        </Wrap>
      ))}
    </Container>
  );
}
export default Viewers;
const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  padding: 30px 0px 26px;
  grid-gap: 25px;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 15px;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 11px;
  }
`;
const Wrap = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: 0px 26px 30px -10px rgba(0 0 0 /69%),
    0px 16px 10px -10px rgba(0 0 0 /73%);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  object-position: center;
  img {
    opacity: 1;
    z-index: 1400;
    inset: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: opacity 500ms ease-in-out 0s;
    position: absolute;
    top: 0;
  }
  video {
    opacity: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  :hover {
    box-shadow: 0px 40px 58px -16px rgba(0 0 0 /80%),
      0px 30px 22px -10px rgba(0 0 0 /72%);
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
      z-index: 2000;
      position: absolute;
      top: 0;
    }
  }
`;

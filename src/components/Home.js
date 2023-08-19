import React, { useEffect, useState } from "react";
import styled from "styled-components";
import db from "../firebase/firebase";
import Imgslider from "./Imgslider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import { useDispatch } from "react-redux";
import { setmovies } from "../features/movie/movieslice";
import NewtoDisney from "../NewtoDisney";
import Trending from "../Trending";
import Hollywood from "../Hollywood";
import DisneyKid from "../DisneyKid";
import Popular from "../Popular";
function Home() {
  let dispatch = useDispatch();
  let popular = [];
  let hollywood = [];
  let newTo = [];
  let kidsTv = [];
  let original = [];
  let trending = [];
  useEffect(() => {
    // db.collection("movies").onSnapshot(snapshot=>{
    db.collection("Movies")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          switch (doc.data().type) {
            case "popular":
              popular = [...popular, { id: doc.id, ...doc.data() }];
              break;
            case "newTo":
              newTo = [...newTo, { id: doc.id, ...doc.data() }];
              break;
            case "hollywood":
              hollywood = [...hollywood, { id: doc.id, ...doc.data() }];
              break;
            case "kidsTv":
              kidsTv = [...kidsTv, { id: doc.id, ...doc.data() }];
              break;
            case "original":
              original = [...original, { id: doc.id, ...doc.data() }];
              break;
            case "trending":
              trending = [...trending, { id: doc.id, ...doc.data() }];
              break;
            default:
              break;
          }
        });
        dispatch(
          setmovies({
            popular: popular,
            kidsTv: kidsTv,
            original: original,
            newTo: newTo,
            hollywood: hollywood,
            trending: trending,
          })
        );
      });
  }, []);
  return (
    <Container>
      <Imgslider />
      <Viewers />
      <Movies />
      <NewtoDisney />
      <Trending />
      <Hollywood />
      <DisneyKid />
      <Popular />
    </Container>
  );
}
export default Home;
const Container = styled.main`
  min-height: calc(88vh);
  min-width: 280px;
  padding: 2vh calc(2.5vw + 5px);
  position: relative;
  ::before {
    background: url("/disney-plus-react/static/media/home-background.a0c4bdd961442f1bc8b1.png")
      center / cover no-repeat fixed;
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

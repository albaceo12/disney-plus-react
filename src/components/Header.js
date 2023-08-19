import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setsignout,
  setlogin,
  selectusername,
  selectuserphoto,
} from "../features/user/userslice";
import { auth, provider } from "../firebase/firebase";
import { NavLink, useNavigate } from "react-router-dom";
function Header() {
  const username = useSelector(selectusername);
  const photo = useSelector(selectuserphoto);
  const [showpop, setshowpop] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showpopup = () => {
    setshowpop((pre) => !pre);
  };
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setlogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/home");
        // setphoto(user.photoURL);
      }
    });
  }, []);
  const signin = () => {
    auth.signInWithPopup(provider).then((res) => {
      // console.log(res);
      let user = res.user;
      dispatch(
        setlogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      // navigate("/");
    });
  };
  const signout = () => {
    auth.signOut().then(() => {
      dispatch(setsignout());
      navigate("/login");
    });
  };
  return (
    <Nav>
      <Logo>
        <NavLink to="/">
          <img src="/images/logo.svg" alt="" />
        </NavLink>
      </Logo>
      {!username ? (
        //
        <Logincontainer>
          <Userlogin onClick={signin}>Log in</Userlogin>
        </Logincontainer>
      ) : (
        <>
          <Navmenu>
            <li>
              <NavLink to="/" className="nav-link">
                <img src="/images/home-icon.svg" />
                <span>HOME</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="nav-link">
                <img src="/images/search-icon.svg" />
                <span>SEARCH</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="nav-link">
                <img src="/images/watchlist-icon.svg" />
                <span>WATCHLIST</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="nav-link">
                <img src="/images/original-icon.svg" />
                <span>ORIGINALS</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="nav-link">
                <img src="/images/movie-icon.svg" />
                <span>MOVIES</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="nav-link">
                <img src="/images/series-icon.svg" />
                <span>SERIES</span>
              </NavLink>
            </li>
          </Navmenu>
          {/* <Userimg src="https://lh3.googleusercontent.com/a/AEdFTp6yeSkcnNr79LZZnrsXSrN02s6PEol81UOKwDxv-w=s96-c-rg-br100"/> */}
          {/* <Userimg onClick={signout} src={photo} /> */}
          <Userauth onClick={showpopup}>
            <img src={photo} alt="" />
          </Userauth>
        </>
      )}
      {/* {showpop && ( */}
      <Popupmenu show={showpop}>
        <li>
          <NavLink
            to="/"
            className="nav-link"
            onClick={() => setshowpop(false)}
          >
            <img src="/images/home-icon.svg" />
            <span>HOME</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to=""
            className="nav-link"
            onClick={() => {
              signout();
              setshowpop(false);
            }}
          >
            <img
              src="/images/image/shutdown.svg"
              style={{ width: "1rem", height: "1rem" }}
            />
            <span>Sign Out</span>
          </NavLink>
        </li>
      </Popupmenu>
      {/* )} */}
    </Nav>
  );
}
export default Header;
const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 9999;
  height: 11vh;
  width: 100vw;
  min-width: 280px;
  background-color: #090b13;
  // background-color: darkred;
  justify-content: space-between;
  display: flex;

  align-items: center;
  padding: 0.25rem 2rem;
  // padding-top: 0.3rem;
`;
const Logo = styled.div`
  width: 105px;

  @media screen and (max-width: 320px) {
    // margin-right: 30%;
    margin-left: -4vw;
  }
  height: 100%;
  object-position: center;
  padding-top: 0.4vh;
  // padding-bottom: 1vh;
  img {
    // min-width: 101px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Navmenu = styled.div`
  @media screen and (max-width: 991px) {
    display: none;
  }
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-right: auto;
  margin-left: 3rem;
  li {
    list-style: none;
    > .nav-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;
      img {
        width: 1.3rem;
        height: 1.3rem;
        object-fit: contain;
      }
      span {
        color: #fff;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.08;
        padding: 0.5rem;
        margin-top: 5px;
        position: relative;

        ::after {
          content: "";
          height: 2px;
          background-color: #f9f9f9;
          position: absolute;
          top: 100%;
          right: 0;
          left: 0;
          transform-origin: left center;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: scaleX(0);
          opacity: 0;
        }
      }
    }
    :hover {
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const Userlogin = styled.div`
  border: 1px solid #f9f9f9;
  font-size: 1.2rem;
  padding: 6px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  @media screen and (max-width: 550px) {
    font-size: 0.8rem;
    padding: 4px 13px;
  }
  cursor: pointer;
  :hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const Logincontainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const Userauth = styled.div`
  // @media screen and (max-width: 320px) {
  //   margin-right: -1vh;
  // }
  height: 54px;
  width: 54px;
  object-position: center;
  position: relative;
  img {
    position: absolute;
    top: 0px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 100%;
    cursor: pointer;
  }
`;
const Popupmenu = styled.div`
  position: absolute;
  top: 8vh;
  right: 4.5rem;
  padding: 0.5rem 0.5rem;
  padding-top: 0rem;
  background-color: #040714;
  border-radius: 0.345rem;
  border: 1.3px solid rgba(151, 151, 151, 1);
  box-shadow: rgba(0 0 0 /50%) 0px 0px 18px 0px;
  display: ${(e) => (e.show ? "flex" : "none")};
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  li {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1.3px solid rgba(151, 151, 151, 1);
    list-style: none;
    > .nav-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;
      img {
        width: 1.3rem;
        height: 1.3rem;
        object-fit: contain;
      }
      span {
        color: #fff;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.08;
        padding: 0.5rem;
        margin-top: 5px;
        position: relative;
      }
    }
  }
`;

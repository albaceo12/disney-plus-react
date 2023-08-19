import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
{
  /* <div className="divtest">
<img
  className="imgtest"
  src="/images/image/DSNY_STAR_LOGO_LIGHT_RGB.png"
/>
<img
  className="imgtest1"
  src="/images/image/DSNY_STAR_LOGO_LIGHT_RGB.png"
/>
</div> */
}

// 2017 | All | 2 Seasons | TV Comedies
// Strong, whip-smart Grizzy rules a Canadian forest, where he has his paws full with a family of frolicsome lemmings.

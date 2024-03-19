import React from "react";
import Home from "./app/pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Blogs } from "./app/pages/Blogs";

import "aos/dist/aos.css";
import { Our_work } from "./app/pages/OurWork";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="our-work" element={<Our_work />} />
        {/* <h1>hello</h1> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;

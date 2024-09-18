import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Demo from "./Pages/Demo/Demo";
import About from "./Pages/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/about' element={<About/>}/> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

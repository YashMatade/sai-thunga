import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Demo from "./Pages/Demo/Demo";
import About from "./Pages/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Doctors from "./Pages/Doctors/Doctors";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import DoctorProfile from "./Pages/DoctorProfile/DoctorProfile";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/docprofile/:docname" element={<DoctorProfile />} />
      </Routes>
    </div>
  );
};

export default App;

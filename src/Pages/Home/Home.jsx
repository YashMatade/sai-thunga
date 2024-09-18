import React from "react";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import FAQ from "../../Components/FAQ/FAQ";
import ContainerBg from "/BG.png"; // Ensure this path is correct
import ADImage from "/ad_img.png"; // Ensure this path is correct
import LatestBlogs from "../../Components/LatestBlogs/LatestBlogs";
import Chooseus from "../../Components/Chooseus/Chooseus";
import Analytics from "../../Components/Analytics/Analytics";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Depart from "../../Components/Depart/Depart";
import HomeDocs from "../../Components/HomeDocs/HomeDocs";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import VideoTestimonials from "../../Components/VideoTestimonials/VideoTestimonials";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <div>
        <Banner />
        <HomeDocs />
        <Analytics />
        <Chooseus />
        <Depart />
        <Testimonials />
        <LatestBlogs />
        <VideoTestimonials />

        {/* Video Testimonails */}
        <div className="container-fluid">
          <div
            className="ad_Container"
            // style={{ backgroundImage: `url(${ContainerBg})` }}
          >
            <div className="main_ad_contents">
              <div className="ad_container_content">
                <h3>
                  Prioritize your health:Make your health a top
                  priority and take proactive steps to maintain it.
                </h3>
                <p>
                  We use only the best quality materials on the market in order
                  to provide the best products to our patients.
                </p>
                <button>Learn More</button>
              </div>

              <div className="ad_container_image">
                <img src={ADImage} alt="ADImage" />
              </div>
            </div>
          </div>
        </div>

        <FAQ />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

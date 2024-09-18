import React from 'react';
import './About.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ChooseusSection from '../../Components/AboutChooseus/ChooseusSection';
import Cta1 from '/about/cta1.png';
import Cta2 from '/about/cta2.png';
import Cta3 from '/about/cta3.png';
import Cta4 from '/about/cta4.png';
import Cta5 from '/about/cta5.png';
import Cta6 from '/about/cta6.png';
import T1 from '/about/t1.png';
import T2 from '/about/t2.png';
import Top1 from '/about/about_top_1.png';
import Top2 from '/about/about_top_2.png';
import Top3 from '/about/about_top_3.png';


import { FaArrowRightLong } from "react-icons/fa6";
import Slider from 'react-slick';

const CtaContents = [
  { CtaIcon: Cta1, ctatext: "24x7 Emergency Call" },
  { CtaIcon: Cta2, ctatext: "Surgery Support" },
  { CtaIcon: Cta3, ctatext: "Home Care Services" },
  { CtaIcon: Cta4, ctatext: "Find a Doctor" },
  { CtaIcon: Cta5, ctatext: "Book Health Check-Up" },
  { CtaIcon: Cta6, ctatext: "Find a Hospital" },
];

const Teams = [
  { name: "Anurag Sharma", designation: "India CEO", img: T1 },
  { name: "Anurag Sharma", designation: "India CEO", img: T2 },
  { name: "Anurag Sharma", designation: "India CEO", img: T1 },
  { name: "Anurag Sharma", designation: "India CEO", img: T2 },
  { name: "Anurag Sharma", designation: "India CEO", img: T1 },
  { name: "Anurag Sharma", designation: "India CEO", img: T2 },
];


const mission = [
  {
    title: "Our Mission & Vision",
    description:
      "At Medi Docs, we know how important it is to provide high quality, affordable health care in the community. That’s why we’ve made it our mission to create a community where people can access first aid, medical attention, and more from the comfort of their own homes.",
    analytics: [
      { count: "95%", counttext: "Successful Emergency Cases Handled" },
      { count: "90%", counttext: "Patient Satisfaction" },
      { count: "100%", counttext: "Service Experience" },
    ],
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 4,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
  ],
};


const TopContents=[
  {
    title:"Providing compassionate, quality healthcare to the community.",
    bannerImage:Top1,
    SideListImage:Top2,
    list:[
      {
        listText:"Sai Thunga Hospital is a leading healthcare provider committed to delivering compassionate, quality care to the community. Established in [Year], our hospital has a rich history of serving patients in every state."
      },
      {
        listText:"Our mission is to provide comprehensive healthcare solutions using the latest medical technology and a team of highly skilled professionals. We are dedicated to patient satisfaction and strive to create a welcoming and healing environment."
      }
    ],
    LInkItems:[
      {
title:"Precision Medicine Redefined",
img:Top3,
buttonText:"Learn More"
      }
    ]
  }
]

const teamSettings = {
  dots: false,
  infinite: Teams.length,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const About = () => {
  return (
    <div className='about ' style={{overflow:"hidden"}}>
      <Header />

      <section className="top_section container-fluid">
      {TopContents.map((content, index) => (
        <div className="top_content_wrapper" key={index}>
          {/* Banner Image and Title */}
          <div className="top_banner">
          <h2><span>About Sai Thunga:</span>{content.title}</h2>

<div className="Top_section_contents">
  <img src={content.bannerImage} alt="Banner" className="top_banner_img" />


  <div className="banner_section_Info">
{/* List Section */}
<div className="top_list_wrapper">
            <div className="side_list_image">
              <img src={content.SideListImage} alt="Side List" />
            </div>
            <div className="top_list">
              <ul>
                {content.list.map((item, listIndex) => (
                  <li key={listIndex}>{item.listText}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Link Items Section */}
          <div className="top_link_items">
            {content.LInkItems.map((linkItem, linkIndex) => (
              <div className="link_item" key={linkIndex}>
                <img src={linkItem.img} alt={linkItem.title} />
                <p>{linkItem.title}</p>
                <FaArrowRightLong  size={40}/>
                <button>{linkItem.buttonText}</button>
              </div>
            ))}
          </div>
  </div>
</div>
          </div>

          

          
        </div>
      ))}
    </section>

      {/* Cta Contents */}
      <section className='container-fluid all_Cta'>
        <Slider {...settings}>
          {CtaContents.map((CtaContent, index) => (
            <div className="single_cta" key={index}>
              <div className="single_Cta_img">
                <img src={CtaContent.CtaIcon} alt={CtaContent.ctatext} />
              </div>
              <p className="text-black">{CtaContent.ctatext}</p>
              <FaArrowRightLong />
            </div>
          ))}
        </Slider>
      </section>

      {/* Choose us */}
<section className="aboutchoose ">
<ChooseusSection />
</section>


      {/* Mission and Vision */}
      <section className="mission_section container-fluid">
        {mission.map((item, index) => (
          <div key={index} className="mission_vision">
            <div className="row missioncon">
              <div className="col-lg-4">
                <div className="mission_vision_info">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="analytics_section">
                  {item.analytics.map((analytic, aIndex) => (
                    <div key={aIndex} className="analytics_item">
                      <h3>{analytic.count}</h3>
                      <p>{analytic.counttext}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Testimonials */}

      {/* Team Section */}
      <section className="team_section">
        <div className="team_intro">
        <h2>Our Team</h2>
        <p>Reassure potential donors with a clear explanation of the process</p>
        </div>
       
        <Slider {...teamSettings}>
          {Teams.map((teamMember, index) => (
            <div className="team_member" key={index}>
              <div className="team_member_img">
              <img src={teamMember.img} alt={teamMember.name} />

              </div>
              <div className="team_member_info">
              <h3>{teamMember.name}</h3>
              <p>{teamMember.designation}</p>
              </div>
              
            </div>
          ))}
        </Slider>
      </section>

      <Footer />
    </div>
  );
};

export default About;

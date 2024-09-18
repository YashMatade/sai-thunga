import React from "react";
import Slider from "react-slick";
import "./HomeDocs.css"; // Make sure this path is correct
import V1 from "/v1.png";
import V2 from "/v2.png";
import V3 from "/v3.png";
import Doc from "/doc.png";
import { FaSearch } from "react-icons/fa";

const doctors = [
  {
    img: Doc,
    name: "Dr. Chintan Mehta",
    designation: "Eye Surgeon",
    experience: "15y Experience",
    qualifications: "DNB(Opthal), MNAMS FPOS, FICO(UK)",
  },
  {
    img: Doc,
    name: "Dr. Chintan Mehta",
    designation: "Eye Surgeon",
    experience: "15y Experience",
    qualifications: "DNB(Opthal), MNAMS FPOS, FICO(UK)",
  },
  {
    img: Doc,
    name: "Dr. Chintan Mehta",
    designation: "Eye Surgeon",
    experience: "15y Experience",
    qualifications: "DNB(Opthal), MNAMS FPOS, FICO(UK)",
  },
  {
    img: Doc,
    name: "Dr. Chintan Mehta",
    designation: "Eye Surgeon",
    experience: "15y Experience",
    qualifications: "DNB(Opthal), MNAMS FPOS, FICO(UK)",
  },
  {
    img: Doc,
    name: "Dr. Chintan Mehta",
    designation: "Eye Surgeon",
    experience: "15y Experience",
    qualifications: "DNB(Opthal), MNAMS FPOS, FICO(UK)",
  },
  {
    img: Doc,
    name: "Dr. Chintan Mehta",
    designation: "Eye Surgeon",
    experience: "15y Experience",
    qualifications: "DNB(Opthal), MNAMS FPOS, FICO(UK)",
  },
  {
    img: Doc,
    name: "Dr. Chintan Mehta",
    designation: "Eye Surgeon",
    experience: "15y Experience",
    qualifications: "DNB(Opthal), MNAMS FPOS, FICO(UK)",
  },
];

const settings = {
  dots: true,
  infinite: doctors.length,
  autoplay: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const HomeDocs = () => {
  return (
    <div>
      <div className="search_suggestions_container">
        <div className="search_bar">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for Hospital, Doctor’s and Specialities..."
          />
          <FaSearch className="search_icon" />
        </div>
        <div className="suggestion_container">
          <div className="suggestion_btns">
            <button>Our Services</button>
            <button>Our Doctors</button>
            <button>Contact Us</button>
          </div>
        </div>
      </div>

      <div className="doctors_Section">
        <div className="row">
          <div className="col-lg-4">
            <div className="top_content ">
              <h3>
                Compassionate Care,<span>Experienced Physicians</span>
              </h3>
              <p>A team of dedicated physicians committed to your health</p>
              <div className="icons_Cta">
                <img src={V1} alt="Icon 1" />
                <img src={V2} alt="Icon 2" />
                <img src={V3} alt="Icon 3" />
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <Slider {...settings} className="py-2">
              {doctors.map((doctor, index) => (
                <div className="doctor_profile_card" key={index}>
                  <div className="doctor_profile_card_con">
                    <div className="doctor_image">
                      <img src={doctor.img} alt="Doctor" />
                    </div>
                    <div className="doctor_info">
                      <h4>{doctor.name}</h4>
                      <p className="designation">{doctor.designation}</p>
                      <p className="exp">{doctor.experience}</p>
                      <div className="spl">
                        <p>{doctor.qualifications}</p>
                      </div>
                      <div className="home_Doc_Cta">
                        <button className="bookNow">Book Appointment</button>
                        <button className="call_now_home_doc">Call</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDocs;

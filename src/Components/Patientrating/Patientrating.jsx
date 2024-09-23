import React from 'react';
import './PatientRating.css';
import Followup from '/procedure.png';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PatientRating = () => {

  const generateRandomStarCount = () => {
    return Math.floor(Math.random() * 6); 
  };

 

  const sliderSettings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 3000,
    slidesToShow:3,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  

  return (
    <div>
      <div className="container">
        <div className="follow-container">
          <img src={Followup} alt="followup" title='followup' />
        </div>

        {/* <div className="patient-rating-container">
          <div className="patient_rating-header">
            <h3>Our Patients Love Us</h3>
            <p>Based on 1760 Recommendations | Rated 5 Out of 5</p>
          </div>


<div className="ratings-container">
<Slider {...sliderSettings}>
            {ratings.map((rating, index) => (

              <div className="rating-info" key={index}>
                <div className="patient-review">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} style={{ color: i < rating.stars ? '#F3CD03' : '#E4E5E9' }} />
                  ))}
                  <p>{rating.Review}</p>
                </div>
                <div className="patient-info">
                  <img src={rating.patientImg} alt="" />
                  <div className="patient-info_detail">
                    <h5>{rating.patientName}</h5>
                    <p>{rating.designation}</p>
                  </div>
                </div>
                <div className="elements">
                  <img src={Elli} alt="" />
                  <img src={Quote} alt="" className='' />
                </div>
              </div>
            ))}
          </Slider>
</div>
         

          <div className="ratings_controls">
            <button className='viewreview'>View All Reviews</button>
            <button className='writereview'>Write a Review</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PatientRating;

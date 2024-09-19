import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DocTestimonials.css"; // Assuming you place the CSS here

const DocTestimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    centerMode: false,
    centerPadding: "0px",
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Reduced number of slides for smaller screens
          arrows: false,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Yash",
      title: "UI/UX Designer",
      review:
        "I recently underwent a major surgery at Sai Thunga Hospital and was extremely impressed with the care I received...",
      stars: 5,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Jatin Chopane",
      title: "UI/UX Designer",
      review:
        "I recently underwent a major surgery at Sai Thunga Hospital and was extremely impressed with the care I received...",
      stars: 5,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Vinod",
      title: "UI/UX Designer",
      review:
        "I recently underwent a major surgery at Sai Thunga Hospital and was extremely impressed with the care I received...",
      stars: 5,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Hanish",
      title: "UI/UX Designer",
      review:
        "I recently underwent a major surgery at Sai Thunga Hospital and was extremely impressed with the care I received...",
      stars: 5,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Vijay",
      title: "UI/UX Designer",
      review:
        "I recently underwent a major surgery at Sai Thunga Hospital and was extremely impressed with the care I received...",
      stars: 5,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Jatin Chopane",
      title: "UI/UX Designer",
      review:
        "I recently underwent a major surgery at Sai Thunga Hospital and was extremely impressed with the care I received...",
      stars: 5,
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="container-fluid my-5">
      <Slider {...settings} style={{ marginTop: "10px" }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div
              className={"mx-3 shodow"}
              style={{
                borderRadius: "15px",
                padding: "20px",
                textAlign: "left",
              }}
            >
              <div>
                <div className="mb-3">
                  {Array.from({ length: testimonial.stars }, (_, index) => (
                    <span key={index} role="img" aria-label="star">
                      ⭐
                    </span>
                  ))}
                </div>
                <p style={{ fontSize: "16px", color: "#555" }}>
                  {testimonial.review}
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-left mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "15px",
                  }}
                />
                <div>
                  <h5 style={{ margin: 0 }}>{testimonial.name}</h5>
                  <p style={{ margin: 0, fontSize: "14px", color: "#888" }}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DocTestimonials;

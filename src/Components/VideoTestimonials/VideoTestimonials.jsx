import React from "react";
import "./VideoTestimonials.css";
import Slider from "react-slick";

const VideoTestimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Testing",
      title: "UI/UX Designer",
      review:
        "The doctors and nurses were incredibly caring and compassionate. They made me feel comfortable and informed throughout my stay. Absolutely! I had a wonderful experience and would highly recommend this hospital.",
      stars: 5,
      image: "https://via.placeholder.com/50",
      designation: "Founder",
      link: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=ZWpf1s9uzECOtrb1",
    },
    {
      id: 2,
      name: "Testing two",
      title: "UI/UX Designer",
      review:
        "The doctors and nurses were incredibly caring and compassionate. They made me feel comfortable and informed throughout my stay. Absolutely! I had a wonderful experience and would highly recommend this hospital.",
      stars: 5,
      image: "https://via.placeholder.com/50",
      designation: "Founder",
      link: "https://www.youtube.com/embed/LXb3EKWsInQ?si=VsFBidEgVbcGKaYN",
    },
  ];

  return (
    <div className="container-fluid mt-5">
      <h3 className="text-center">Video Testimonials</h3>
      <Slider {...settings} style={{ marginTop: "10px" }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="row">
              <div className="col-lg-6">
                <iframe
                  width="100%"
                  height="315"
                  style={{ borderRadius: "20px" }}
                  src={testimonial.link}
                  title={testimonial.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-lg-6">
                <div className="text-start">
                  <h5 className="mt-3">{testimonial.name}</h5>
                  <p className="mt-2">{testimonial.review}</p>
                  <div className="mt-4 d-flex">
                    <div>
                      <img
                        src={testimonial.image}
                        style={{ width: "50px", height: "50px" }}
                        className="img-fluid rounded-circle"
                        alt={testimonial.name}
                      />
                    </div>
                    <div className="ms-3">
                      <b>{testimonial.name}</b> <br />
                      <small>{testimonial.designation}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoTestimonials;

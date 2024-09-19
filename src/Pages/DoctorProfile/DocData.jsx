import React from "react";
import { FaLocationPin, FaThumbsUp } from "react-icons/fa6";
import BookingForm from "../../Components/BookingForm/BookingForm";
import { FaStar } from "react-icons/fa";
import Testimonials from "../../Components/Testimonials/Testimonials";
import DocTestimonials from "./DocTestimonials";
const DocData = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-3 text-center">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.K2DTSmCqf_9Lr7VR4TZ6LwHaJ5&pid=Api&P=0&h=180"
                  alt=""
                  style={{
                    width: "250px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-9">
                <h3 className="mt-4">Dr. Shrikant K P</h3> <span>MBBS, MD</span>
                <div className="mt-2">Pediatrician, Gastroenterologist</div>
                <div className="mt-2">
                  <small>55 year’s Experience overall</small>
                  <small className="ms-3">
                    <FaLocationPin color="red" /> Domlur, Bangalore
                  </small>
                </div>
                <div className="mt-2">
                  <span style={{ fontWeight: "500", fontSize: "18px" }}>
                    Rs.500 Consultation fees
                  </span>
                </div>
                <div className="mt-2">
                  <span className="badge bg-success">
                    <FaThumbsUp size={10} /> &nbsp; 96%
                  </span>
                  <span className="ms-2">33 patient Stories</span>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <button
                    className="btn btn-outline-danger"
                    style={{ fontWeight: "500" }}
                  >
                    Call Us: 9326612010
                  </button>
                  <button
                    className="btn  text-white"
                    style={{ fontWeight: "500", backgroundColor: "#36306E" }}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-4">
                  <p>
                    <FaStar color="orange" /> 18 Years as specialist
                  </p>
                </div>
                <div className="col-lg-4">
                  <p>
                    <FaStar color="orange" /> Laparoscopic Surgeon (Obs & Gyn)
                  </p>
                </div>

                <div className="col-lg-4">
                  <p>
                    <FaStar color="orange" /> Infertility Specialist
                  </p>
                </div>
                <div className="col-lg-4">
                  <p>
                    <FaStar color="orange" /> Guinness Book of World's Record{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h4>About</h4>
              <p>
                Dr. Kamal Bachani is an expert and highly experienced orthopedic
                surgeon with overall 33 years of experience. Dr. Kamal Bachani
                has performed 10000+(ten thousand plus) Arthroscopy,
                Arthroplasty & Reverse Shoulder surgeries. His areas of
                exc ellence are joint replacement(knee, hip, and shoulder),
                ligament reconstruction, instability, rotator cuff
                repair(shoulder), cartilage reconstruction, sports surgery, etc.
              </p>
            </div>
            <div className="mt-4">
              <h4>Experience</h4>
              <ul>
                <li>Head of Ortho Team at Fortis Hospital, Vasanth Kunj</li>
                <li>Head of Ortho Team at Fortis Hospital, Vasanth Kunj</li>
                <li>Head of Ortho Team at Fortis Hospital, Vasanth Kunj</li>
                <li>Head of Ortho Team at Fortis Hospital, Vasanth Kunj</li>
                <li>Head of Ortho Team at Fortis Hospital, Vasanth Kunj</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4>Qualification</h4>
              <p>
                M CH.(Ortho), MS(Ortho), OCM Fellowship-adult Reconstruction and
                Arthroscopy (Germany ) International Shoulder Reconstruction
                Fellowship(South Korea), Fellowship(AIIMS, ND),
                Arthroscopy-Arthroplasty Tr (Australia, Singapore G-H). MS
                (Orthopedics)-Lady Hardinge Medical College, New Delhi-1994
                MBBS-GSVM Medical College Kanpur-1998 MD (Medicine)-GSVM Medical
                College Kanpur-2003{" "}
              </p>
            </div>
            <div className="mt-4">
              <h4>Membership</h4>
              <p>
                Shoulder And Elbow Society Of India Indian Arthroplasty
                Association Indian Orthopaedic Association Association Of
                Physicians Of India Indian Arthroscopy Society Delhi Orthopedic
                Association
              </p>
            </div>
            <div className="mt-4">
              <h4>Dr. Kamal Bachani is Best known for</h4>
              <ul className="">
                <li>Best experience in the field</li>
                <li>Best experience in the field</li>
                <li>Best experience in the field</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4>Top Treatments By Dr. Kamal Bachani</h4>
              <div className="row">
                <div className="col-lg-2 col-6 mt-2">
                  <button className="btn btn-outline-primary w-100">
                    Spinal Fusion
                  </button>
                </div>
                <div className="col-lg-2 col-6 mt-2">
                  <button className="btn btn-outline-primary w-100">
                    Spinal Fusion
                  </button>
                </div>
                <div className="col-lg-2 col-6 mt-2">
                  <button className="btn btn-outline-primary w-100">
                    Spinal Fusion
                  </button>
                </div>
                <div className="col-lg-2 col-6 mt-2">
                  <button className="btn btn-outline-primary w-100">
                    Spinal Fusion
                  </button>
                </div>
                <div className="col-lg-2 col-6 mt-2">
                  <button className="btn btn-outline-primary w-100">
                    Spinal Fusion
                  </button>
                </div>
                <div className="col-lg-2 col-6 mt-2">
                  <button className="btn btn-outline-primary w-100">
                    Spinal Fusion
                  </button>
                </div>
                <div className="col-lg-2 col-6 mt-2">
                  <button className="btn btn-outline-primary w-100">
                    Spinal Fusion
                  </button>
                </div>
                <div className="col-lg-2 col-6 mt-2">
                  <button className="btn btn-outline-primary w-100">
                    Spinal Fusion
                  </button>
                </div>
                <div className="col-lg-2 col-6 mt-2">
                  <button className="btn btn-outline-primary w-100">
                    Spinal Fusion
                  </button>
                </div>
                <div className="col-lg-2 col-6 mt-2">
                  <button className="btn btn-outline-primary w-100">
                    Spinal Fusion
                  </button>
                </div>
                <div className="col-lg-2 col-6 mt-2">
                  <button className="btn btn-outline-primary w-100">
                    Spinal Fusion
                  </button>
                </div>
                <div className="col-lg-2 col-6 mt-2">
                  <button className="btn btn-outline-primary w-100">
                    Spinal Fusion
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h4>Patient Reviews for Dr. Kamal Bachani</h4>
                <DocTestimonials />
              </div>
            </div>
          </div>
          <div className="col-lg-4 ps-3 pe-3">
            <div style={{ position: "sticky", top: "20px" }}>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocData;

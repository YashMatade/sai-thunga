import React, { useEffect, useState } from "react";
import "./DoctorsList.css"; // Optional: Custom CSS for additional styling
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import slugify from "slugify";
import { Link, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [openDoctorId, setOpenDoctorId] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="row" style={{ overflowX: "hidden" }}>
      <div className="col-lg-1"></div>
      <div className="col-lg-10">
        {isLoading ? (
          <>
            <SkeletonTheme color="#e0e0e0" highlightColor="#f0f0f0">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div
                    className="row mb-4 p-2 bg-white shadow"
                    style={{
                      borderRadius: "20px",
                      border: "1.5px solid #2B82CC",
                    }}
                    key={index}
                  >
                    <div className="text-center pt-1 col-sm-12 col-lg-3 col-md-3 my-auto">
                      <Skeleton circle={true} height={100} width={100} />
                    </div>
                    <div className="col-sm-12 col-md-9">
                      <Skeleton height={30} width={`60%`} />
                      <Skeleton height={20} width={`80%`} />
                      <Skeleton height={20} width={`40%`} />
                      <Skeleton height={20} width={`70%`} />
                      <Skeleton height={20} width={`50%`} />
                      <Skeleton height={40} width={`30%`} />
                      <Skeleton height={40} width={`30%`} />
                    </div>
                  </div>
                ))}
            </SkeletonTheme>
          </>
        ) : (
          <>
            <div
              className="row mb-4 p-2 bg-white shadow"
              style={{
                borderRadius: "20px",
                border: "1.5px solid #3B3576",
                margin: "10px",
              }}
              key={doctor._id}
            >
              <div className="text-center pt-1 col-sm-12 col-lg-3 col-md-3 my-auto">
                <div className="d-flex justify-content-center text-align-center ">
                  <img
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                      top: "100px",
                    }}
                    src={doctor.doctor_image}
                    className="rounded rounded-3 img-fluid "
                    alt="offer_slider"
                    title="offer_slider"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-9">
                <div className="text-start">
                  <Link
                    to={`/docprofile/${doctor?.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        fontWeight: "700",
                        fontSize: "24px",
                        color: "black",
                      }}
                      className="text-start fw-bold"
                    >
                      {doctor.name}
                    </div>
                  </Link>
                  <div
                    className="mb-2"
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#505257",
                    }}
                  >
                    {doctor.qualification?.map((degree, index) => (
                      <span key={index} className="me-2">
                        {degree.degree}
                        {degree.year === null || undefined || "" ? (
                          <></>
                        ) : (
                          <span>({degree.year})</span>
                        )}
                        ,
                      </span>
                    ))}
                  </div>
                  <div className="d-flex">
                    <div
                      className=""
                      style={{
                        fontWeight: "",
                        fontSize: "14px",
                        color: "#3B3576",
                      }}
                    >
                      <>{`Experience - ${doctor.experience || 3} Years `}</>
                    </div>
                    <div
                      style={{
                        fontWeight: "",
                        fontSize: "14px",
                      }}
                      className="ms-4"
                    >
                      <>
                        <FaMapMarkerAlt />{" "}
                        {doctor.region ? doctor.region : "Indranagar"}
                      </>
                    </div>
                  </div>
                  <div
                    className="mt-3"
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#1376F8",
                    }}
                  ></div>
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
                  <div className="mt-3 d-flex justify-content-between">
                    <div>
                      <button
                        className="btn ps-3 pe-3 pt-2 pb-2 me-2"
                        onClick={() => navigate(`/docprofile/${doctor.slug}`)}
                        style={
                          window.innerWidth < 576
                            ? {
                                fontWeight: "400",
                                fontSize: "14px",
                                border: "2px solid #1376F8",
                              }
                            : {
                                fontWeight: "400",
                                fontSize: "14px",
                                border: "2px solid #1376F8",
                              }
                        }
                      >
                        View Profile
                      </button>
                    </div>
                    <div>
                      <button
                        className="btn ps-3 pe-3 pt-2 pb-2 shadow"
                        onClick={() =>
                          handleButtonClick(doctor._id, doctor.region)
                        }
                        style={
                          window.innerWidth < 576
                            ? {
                                fontWeight: "400",
                                fontSize: "14px",
                                color: "white",
                                background: "red",
                              }
                            : {
                                fontWeight: "400",
                                fontSize: "14px",
                                color: "white",
                                background: "red",
                              }
                        }
                      >
                        {openDoctorId === doctor._id
                          ? "Cancel"
                          : "Book appointment"}{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="col-lg-1"></div>
    </div>
  );
};

const DoctorsList = () => {
  const doctorsData = [
    {
      id: 1,
      name: "Dr. Srikanth K P",
      specialization: "Pediatrician, Gastroenterologist",
      experience: "55 Years' Experience Overall",
      qualification: [
        {
          degree: "MBBS",
          year: "2012",
        },
      ],
      consultationFee: "$500",
      patientStories: 33,
      rating: 96,
      location: "Domlur, Bangalore",
      availability: "Available Tomorrow",
      doctor_image:
        "https://tse4.mm.bing.net/th?id=OIP.K2DTSmCqf_9Lr7VR4TZ6LwHaJ5&pid=Api&P=0&h=180",
      slug: "doctor-shrikant",
    },
    {
      id: 2,
      name: "Dr. Srikanth K P",
      specialization: "Pediatrician, Gastroenterologist",
      experience: "55 Years' Experience Overall",
      qualification: [
        {
          degree: "MBBS",
          year: "2012",
        },
      ],
      consultationFee: "$500",
      patientStories: 33,
      rating: 96,
      location: "Domlur, Bangalore",
      availability: "Available Tomorrow",
      doctor_image:
        "https://tse4.mm.bing.net/th?id=OIP.K2DTSmCqf_9Lr7VR4TZ6LwHaJ5&pid=Api&P=0&h=180",
      slug: "doctor-shrikant",
    },
  ];
  return (
    <div className="container-fluid mt-5">
      {doctorsData?.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorsList;

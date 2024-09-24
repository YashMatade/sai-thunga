import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import DeptDoctorCard from "../DeptDoctorCard/DeptDoctorCard";
import "./DeptDoctors.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const DeptDoctors = () => {
  const api = import.meta.env.VITE_API;
  const { dname } = useParams();
  const navigate = useNavigate();
  const [allDoctors, setAllDoctors] = useState([]);
  const [treatmentDoctors, setTreatmentDoctors] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [doctorsPerSlide, setDoctorsPerSlide] = useState(6);
  const sliderRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      localStorage.setItem("Dname", dname);
      try {
        const [doctorRes, departmentRes] = await Promise.all([
          axios.get(`${api}/doctorbydepartment/${dname}`),
          axios.get(`${api}/department/get_departmentone/${dname}`),
        ]);

        const doctors = doctorRes.data.data;
        const uniqueDoctorLocations = Array.from(
          new Set(doctors.map((doctor) => formatLocation(doctor.region)))
        );

        setAllDoctors(doctors);
        setLocation(uniqueDoctorLocations);

        if (departmentRes.data && departmentRes.data.data) {
          setTitle(departmentRes.data.data.department);
        } else {
          console.error("Response data is missing or empty");
        }

        setTreatmentDoctors(doctors.slice(0, doctorsPerSlide));
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [api, dname, doctorsPerSlide]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDoctorsPerSlide(4);
      } else {
        setDoctorsPerSlide(6);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const slideWidth = 100 / doctorsPerSlide;
    document.documentElement.style.setProperty(
      "--doctors-per-slide",
      doctorsPerSlide
    );
  }, [doctorsPerSlide]);

  const formatLocation = (region) => {
    const filteredWords = region
      .split(/[\s,]+/)
      .map((word) => word.trim().toLowerCase())
      .filter((word) => !/bangalore/i.test(word));

    const uniqueWords = [...new Set(filteredWords)];

    return uniqueWords
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .replace(/,\s*$/, "");
  };

  const filterDoctorsByRegion = (region) => {
    setSelectedRegion(region);
    setCurrentSlide(0);
    if (region) {
      const filteredDoctors = allDoctors.filter(
        (doctor) => formatLocation(doctor.region) === region
      );
      setTreatmentDoctors(filteredDoctors.slice(0, doctorsPerSlide));
    } else {
      setTreatmentDoctors(allDoctors.slice(0, doctorsPerSlide));
    }
  };

  const resetFilter = () => {
    setSelectedRegion(null);
    setCurrentSlide(0);
    setTreatmentDoctors(allDoctors.slice(0, doctorsPerSlide));
    sliderRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNext = () => {
    const nextSlide = currentSlide + 1;
    const startIndex = nextSlide * doctorsPerSlide;
    const filteredDoctors = selectedRegion
      ? allDoctors.filter(
          (doctor) => formatLocation(doctor.region) === selectedRegion
        )
      : allDoctors;
    if (startIndex < filteredDoctors.length) {
      setCurrentSlide(nextSlide);
      setTreatmentDoctors(
        filteredDoctors.slice(startIndex, startIndex + doctorsPerSlide)
      );
      sliderRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      const prevSlide = currentSlide - 1;
      const startIndex = prevSlide * doctorsPerSlide;
      const filteredDoctors = selectedRegion
        ? allDoctors.filter(
            (doctor) => formatLocation(doctor.region) === selectedRegion
          )
        : allDoctors;
      setCurrentSlide(prevSlide);
      setTreatmentDoctors(
        filteredDoctors.slice(startIndex, startIndex + doctorsPerSlide)
      );
      sliderRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredDoctors = selectedRegion
    ? allDoctors.filter(
        (doctor) => formatLocation(doctor.region) === selectedRegion
      )
    : allDoctors;
  const canShowControls = filteredDoctors.length > doctorsPerSlide;
  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled =
    (currentSlide + 1) * doctorsPerSlide >= filteredDoctors.length;

  return (
    <div className="dept_doctor-section">
      <div className="container">
     

        <div className="doctors-box">
          {treatmentDoctors.length > 0 ? (
            <>
              <div
                style={{ fontSize: "20px", fontWeight: "800" }}
                className="de_name"
              >
                <h3 style={{ marginBottom: "1em" }}>
                  Best Doctors For {title}
                </h3>
              </div>
              <div className="doctors_all" ref={sliderRef}>
                {treatmentDoctors.map((doctor, index) => (
                  <DeptDoctorCard key={index} doctor={doctor} />
                ))}
              </div>
              {canShowControls && (
                <div className="doctor_controls">
                  <IoIosArrowDropleft
                    style={{
                      fontSize: "2em",
                      cursor: isPrevDisabled ? "not-allowed" : "pointer",
                      color: isPrevDisabled ? "#ccc" : "inherit",
                    }}
                    onClick={!isPrevDisabled ? handlePrev : undefined}
                  />
                  <IoIosArrowDropright
                    style={{
                      fontSize: "2em",
                      cursor: isNextDisabled ? "not-allowed" : "pointer",
                      color: isNextDisabled ? "#ccc" : "inherit",
                    }}
                    onClick={!isNextDisabled ? handleNext : undefined}
                  />
                </div>
              )}
            </>
          ) : (
            <p
              style={{ textAlign: "center", fontSize: "20px" }}
              className="no_doctor"
            >
              No Doctors available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeptDoctors;
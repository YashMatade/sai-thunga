import React, { useEffect, useState, useRef } from "react";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import "./TreatmentDoctor.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const TreatmentDoctor = () => {
  const api = import.meta.env.VITE_API;
  const navigate = useNavigate();
  const { tname } = useParams();

  const [treatmentDoctors, setTreatmentDoctors] = useState([]);
  const [title, setTitle] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [doctorsPerSlide, setDoctorsPerSlide] = useState(6);
  const sliderRef = useRef(null);

  useEffect(() => {
    const getDoctor = async () => {
      try {
        const res = await axios.get(`${api}/doctorbydepartment/${localStorage.getItem("Dname")}`);

        const uniqueDoctorIds = [...new Set(res.data.data.map((doctor) => doctor._id))];
        const uniqueDoctors = res.data.data.filter((doctor) => uniqueDoctorIds.includes(doctor._id));

        setTreatmentDoctors(uniqueDoctors);
      } catch (e) {
        console.error(e);
      }
    };

    getDoctor();
  }, [api]);

  useEffect(() => {
    const getTreatmentHeaderContent = async () => {
      try {
        const res = await axios.get(`${api}/department/get_subdepartmentone/${tname}`);
        if (res && res.data && res.data.data) {
          setTitle(res.data.data);
        } else {
          console.error("Response data is missing or empty");
        }
      } catch (error) {
        console.error(error?.response && error?.response?.name);
      }
    };

    getTreatmentHeaderContent();
  }, [api, tname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDoctorsPerSlide(4);
      } else {
        setDoctorsPerSlide(6);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    const nextSlide = currentSlide + 1;
    const startIndex = nextSlide * doctorsPerSlide;
    if (startIndex < treatmentDoctors.length) {
      setCurrentSlide(nextSlide);
      sliderRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      const prevSlide = currentSlide - 1;
      const startIndex = prevSlide * doctorsPerSlide;
      setCurrentSlide(prevSlide);
      sliderRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const canShowControls = treatmentDoctors.length > doctorsPerSlide;
  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = (currentSlide + 1) * doctorsPerSlide >= treatmentDoctors.length;

  return (
    <div className="container treatmentdoctors_box">
      <div className="row">
        <div className="col t_name">
          <div className="treatment-doctor-title" style={{ marginBottom: "1em" }}>
            <h3>Best Doctor’s for {title.sub_department_name}</h3>
          </div>

          <div className="doctors-box">
            {treatmentDoctors.length > 0 ? (
              <>
                <div className="doctors_all" ref={sliderRef} style={{ overflow: 'hidden' }}>
                  {treatmentDoctors.slice(currentSlide * doctorsPerSlide, (currentSlide + 1) * doctorsPerSlide).map((doctor, index) => (
                    <DoctorCard key={index} doctor={doctor} />
                  ))}
                </div>

                {canShowControls && (
                  <div className="doctor_controls">
                    <IoIosArrowDropleft
                      style={{
                        fontSize: '2em',
                        cursor: isPrevDisabled ? 'not-allowed' : 'pointer',
                        color: isPrevDisabled ? '#ccc' : 'inherit'
                      }}
                      onClick={!isPrevDisabled ? handlePrev : undefined}
                    />
                    <IoIosArrowDropright
                      style={{
                        fontSize: '2em',
                        cursor: isNextDisabled ? 'not-allowed' : 'pointer',
                        color: isNextDisabled ? '#ccc' : 'inherit'
                      }}
                      onClick={!isNextDisabled ? handleNext : undefined}
                    />
                  </div>
                )}
              </>
            ) : (
              <p style={{ textAlign: "center" }} className="no_doctor treatmentnodoctor">No doctors available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDoctor;
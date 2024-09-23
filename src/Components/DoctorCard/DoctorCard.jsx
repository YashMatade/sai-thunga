import React, { useState } from 'react';
import './DoctorCard.css';
import { IoLocationSharp } from "react-icons/io5";
import { HiStar } from "react-icons/hi";
import { FaUserMd } from 'react-icons/fa';
import { Link,Navigate, useNavigate } from 'react-router-dom';

const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')  
    .replace(/^-+|-+$/g, '');    
};

const DoctorCard = ({ doctor }) => {
  const [showAllSpecialities, setShowAllSpecialities] = useState(false);
const navigate=useNavigate()
  const Callback = () => {
    const phoneNumber = doctor.phone_number;
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };

  const doctorNameSlug = generateSlug(doctor.name);

  return (
    <div className='dept-doctor-card-container'>
      <div className='dept-doctor-card'>
        <div className='card-content'>
          <div className="top_card_content">
            <div className='doctor-image-container'>
              <img src={doctor?.doctor_image} className='doctor-image' alt={doctor?.name} title={doctor?.name} loading='lazy' />
            </div>
            <div className="others_info_doc">
              <Link to={`/docprofile/${doctor.slug}`} style={{textDecoration:"none"}}>
              <div className='doctor-name'>
                <p>{doctor?.name}</p>
              </div></Link>
              {doctor?.qualification && doctor?.qualification.length > 0 &&
                <div className='doctor-degree'>
                  <p>{doctor?.qualification[0]?.degree} {doctor?.qualification[0]?.year}</p>
                </div>
              }
              <div className='free-consultation'>
                <p>Free Consultation</p>
              </div>
            </div>
          </div>
          <div className='doctor-details'>
            <div className='doctor-rating'>
              <p><HiStar fontSize={15} color='#ffd700' /> {doctor?.rating || "Rating"}</p>
            </div>
            <div className='doctor-experience'>
              <p><FaUserMd fontSize={15} /> {doctor?.experience || ""}+yrs</p>
            </div>
           
          </div>

          <div className="doctor_speciality mb-2">
          <div className=" d_spl">
            {doctor?.speciality?.slice(0, showAllSpecialities ? doctor.speciality.length : 1).map((specialization, i) => (
              <div
                key={i}
                className='single-spl ps-3 my-auto pe-3 pt-1 pb-1 m-1 text-center ps-2 pe-2 mb-1'
                style={{ color: "#505257", fontSize: "12px", fontWeight: "400", backgroundColor: " #51BFE733", border: "1px solid #e7e7e7", textTransform: "capitalize" }}
              >
                {specialization}
              </div>
            ))}
            {doctor?.speciality?.length > 1 && (
              <div className="show-more-btn-container ">
                <p className="show-more-btn" onClick={() => setShowAllSpecialities(!showAllSpecialities)}>
                  {showAllSpecialities ? 'Show Less' : `+${doctor.speciality.length - 1} More`}
                </p>
              </div>
            )}
          </div>
        </div>
          <div className='doctor-location'>
              <p><IoLocationSharp fontSize={15} color='red' /> {doctor?.region || ""}</p>
            </div>
      
          <div className='call-to-action'>
            <button onClick={Callback} className='btn-border-to-bg'>Contact</button>
            <button onClick={() => navigate(`/doctors`)} className='btn-bg-change'>Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;

    
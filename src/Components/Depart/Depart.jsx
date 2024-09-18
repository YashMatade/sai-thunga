import React, { useState } from 'react';
import './Depart.css';
import DepartImg from '/image.png'; // Adjust the path as needed
import TreatmentImage from '/treat.png'; // Adjust the path as needed
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import Slider from 'react-slick';
import { FaArrowRight } from 'react-icons/fa6';
const Department = [
  {
    name: "Orthopedics",
    DepartmentImg: DepartImg,
    description: "In Thunga Hospital, our orthopedics department is one of the best in the country.",
    Treatments: [
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Carpal Tunnel Syndrome",
        Route: "/CarpalTunnelSyndrome"
      },
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Joint Replacement",
        Route: "/JointReplacement"
      },
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Joint Replacement",
        Route: "/JointReplacement"
      }, {
        treatmentImage: TreatmentImage,
        treatmentname: "Joint Replacement",
        Route: "/JointReplacement"
      }, {
        treatmentImage: TreatmentImage,
        treatmentname: "Joint Replacement",
        Route: "/JointReplacement"
      }, {
        treatmentImage: TreatmentImage,
        treatmentname: "Joint Replacement",
        Route: "/JointReplacement"
      }, {
        treatmentImage: TreatmentImage,
        treatmentname: "Joint Replacement",
        Route: "/JointReplacement"
      },
      , {
        treatmentImage: TreatmentImage,
        treatmentname: "Joint Replacement",
        Route: "/JointReplacement"
      },
    ]

  },
  {
    name: "Cardiology",
    DepartmentImg: DepartImg,
    description: "Our cardiology department offers the most advanced care for heart diseases.",
    Treatments: [
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Angioplasty",
        Route: "/Angioplasty"
      },
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Coronary Bypass Surgery",
        Route: "/CoronaryBypass"
      }
    ]
  },
  {
    name: "Neurology",
    DepartmentImg: DepartImg,
    description: "Our neurology department is equipped with state-of-the-art technologies.",
    Treatments: [
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Stroke Treatment",
        Route: "/StrokeTreatment"
      },
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Brain Tumor Surgery",
        Route: "/BrainTumorSurgery"
      }
    ]
  },
  {
    name: "Pediatrics",
    DepartmentImg: DepartImg,
    description: "We provide comprehensive care for infants, children, and adolescents.",
    Treatments: [
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Neonatal Care",
        Route: "/NeonatalCare"
      },
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Pediatric Surgery",
        Route: "/PediatricSurgery"
      }
    ]
  },
  {
    name: "Dermatology",
    DepartmentImg: DepartImg,
    description: "Our dermatology department addresses a wide range of skin issues.",
    Treatments: [
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Acne Treatment",
        Route: "/AcneTreatment"
      },
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Psoriasis Treatment",
        Route: "/PsoriasisTreatment"
      }
    ]
  },
  {
    name: "Ophthalmology",
    DepartmentImg: DepartImg,
    description: "We offer advanced eye care services for various eye conditions.",
    Treatments: [
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Cataract Surgery",
        Route: "/CataractSurgery"
      },
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Laser Vision Correction",
        Route: "/LaserVisionCorrection"
      }
    ]
  },
  {
    name: "Gastroenterology",
    DepartmentImg: DepartImg,
    description: "Our gastroenterology department provides expert care for digestive disorders.",
    Treatments: [
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Endoscopy",
        Route: "/Endoscopy"
      },
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Colon Cancer Screening",
        Route: "/ColonCancerScreening"
      }
    ]
  },
  {
    name: "Urology",
    DepartmentImg: DepartImg,
    description: "We offer comprehensive urological care with advanced techniques.",
    Treatments: [
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Kidney Stone Removal",
        Route: "/KidneyStoneRemoval"
      },
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Prostate Surgery",
        Route: "/ProstateSurgery"
      }
    ]
  },
  {
    name: "Oncology",
    DepartmentImg: DepartImg,
    description: "Our oncology department offers cutting-edge cancer treatments.",
    Treatments: [
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Chemotherapy",
        Route: "/Chemotherapy"
      },
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Radiation Therapy",
        Route: "/RadiationTherapy"
      }
    ]
  },
  {
    name: "Gynecology",
    DepartmentImg: DepartImg,
    description: "We provide expert care for women's health in our gynecology department.",
    Treatments: [
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Prenatal Care",
        Route: "/PrenatalCare"
      },
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Gynecological Surgery",
        Route: "/GynecologicalSurgery"
      }
    ]
  },
  {
    name: "Psychiatry",
    DepartmentImg: DepartImg,
    description: "Our psychiatry department provides mental health care and counseling services.",
    Treatments: [
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Cognitive Behavioral Therapy",
        Route: "/CBT"
      },
      {
        treatmentImage: TreatmentImage,
        treatmentname: "Addiction Treatment",
        Route: "/AddictionTreatment"
      }
    ]
  }
];





const Depart = () => {
  const [selectedDepartmentIndex, setSelectedDepartmentIndex] = useState(0); 

  const handleDepartmentClick = (index) => {
    setSelectedDepartmentIndex(index);
  };

  const selectedDepartment = Department[selectedDepartmentIndex]; 

  return (
    <div className="container mb-3">
      <div className="depT_Intro">
      <p>We are Doing Great</p>
      <h3>Our Departments</h3>
      </div>

      <div className="container-fluid">
        <div className="dept_show">




<div className="row">
  <div className="col-lg-6">
  <div className="single_dept">
              <img
              src={selectedDepartment.DepartmentImg}
              alt={selectedDepartment.name}
              className="department-img"
            />
            
            <h4 className="department-name">{selectedDepartment.name}</h4>
            <p className="department-description">{selectedDepartment.description}</p>
            </div>
  </div>

  <div className="col-lg-6">
  <div className="treatment_list">
            {selectedDepartment.Treatments.map((treatment, index) => (
                              <Link to={treatment.Route} key={index} className="treatment-link" style={{textDecoration:"none"}}>

              <div  className="treatment-item">
                <div className="T_image">
                <img
                  src={treatment.treatmentImage}
                  alt={treatment.treatmentname}
                  className="treatment-img"
                />
                </div>
                
                <h5 className="treatment-name">{treatment.treatmentname}</h5>
                  <span className="arrow-icon"><FaArrowRight/></span>
              </div>
              </Link>

            ))}
         
          </div>
  </div>
</div>
           
            

            {/* Showing treatment image, name, and link */}
         
        </div>


        <div className="department-list">

          {Department.map((dept, index) => (
            <div
              key={index}
              className={`department-list-item ${index === selectedDepartmentIndex ? 'active' : ''}`}
              onClick={() => handleDepartmentClick(index)}
            >
              <img src={dept.DepartmentImg} alt="" />
              <p>{dept.name}</p>
            </div>
          ))}
        </div>
    
      </div>
    </div>
  );
};

export default Depart;

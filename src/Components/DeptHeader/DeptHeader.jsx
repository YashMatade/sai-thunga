import React, { useState, useEffect } from "react";
import "./DeptHeader.css";
import { FaCalendarAlt, FaUserMd, FaCut } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";



const ImageSlider = ({deptImg,deptname}) => {
  const api = "https://api.medidocs.online";

 

  
  return (
    <div className="">
        <img
          src={deptImg}
          alt={`Dept`}
          className="dept_image"
          loading="lazy"
          title={deptname}
        />
      
    </div>
  );
};

const DeptHeader = () => {
  const api = import.meta.env.VITE_API;
 
  const [submittedOtp, setSubmittedOtp] = useState("");
  const[image,setImage]=useState('')
  const [cta, setCta] = useState([]);
  const { dname } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [title, settitle] = useState([]);
 const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  useEffect(() => {
    const getTreatmentHeaderContent = async () => {
      try {
        const res = await axios.get(`${api}/department/get_departmentone/${dname}`);
        if (res && res.data && res.data.data) {
          settitle(res.data.data);
          setImage(res.data.data.department_image)
          console.log(image)
        } else {
          console.error("Response data is missing or empty");
        }
      } catch (error) {
        console.error(error?.response && error?.response?.name);
      }
    };

    // fields = cta_icon, cta_icon_name for treatment Header cta

    getTreatmentHeaderContent();
  }, [dname]);







  
  
useEffect(() => {
  const getCtaContent = async () => {
    try {
      const res = await axios.get(`${api}/getdepartmentctaiconbydepartmnet/${dname}`);
      if (res && res.data && res.data.data) {
        setCta(res.data.data);
        console.log(res.data.data,"deptdata");
      } else {
        console.error("Response data is missing or empty");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getCtaContent();
}, [api, dname]);
  
  const sendOtp = () => {
    setOtpSent(true);
  };

  const changeMobileNumber = () => {
    setFormData({
      ...formData,
      email_id: "",
    });
    setOtpSent(false);
    setSubmittedOtp("");
    setOtpVerified(false);
  };

  const verifyOtp = () => {
    if (submittedOtp === otp) {
      setOtpVerified(true);
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const resendOtp = () => {
    sendOtp();
    setSubmittedOtp("");
    setOtpVerified(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowPhoneNumber((prevState) => !prevState);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // const locations = ["Koramangala", "Halasuru", "Indira Nagar"];

 





  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };




 

 
 

  const Callback = () => {
    const phoneNumber = 6364464508;
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };






  return (
    <div className="container header">
     


      <div className="header-content ">
        <div className="row">
          <div className="col-lg-6 col-md-4">
            <div className="content">
              <h1>Specialized center for {title?.department}</h1>
<div>
    
      <>
      <p className="" style={{textAlign:"justify"}}>
        {showFullDescription
          ? title?.department_description
          : title?.department_description?.slice(0, 500)}
        {title?.department_description?.length > 500 && (
          <span onClick={toggleDescription} className="header-read-more">
            {showFullDescription ? "Show Less..." : "Read More..."}
          </span>
        )}
      </p>
      </>
       
    </div>              <button onClick={Callback}>Call Us</button>
            </div>
          </div>

          <div className=" col-lg-6 col-md-4">
            <div className="">
              
              <div className="dept_images_main">
                <ImageSlider className="" deptImg={image} deptname={title?.department} />
              </div>
            </div>
          </div>

          {/* <div className="col-lg-4 form-box">
  

  
</div> */}



        </div>
      </div>
      {/* <div className="bottom_header-content">
  <div className="row">
    <div className="col-lg-12">
      <div className="bottom-content">
        <h3>Book Free Appointments With Our Expert Doctors Near You</h3>
        <div className="icons-container">
          {cta.map((icon, index) => (
            <div className="icon-box" key={icon?._id}>
              <img src={icon?.department_cta_icon} alt={icon?.department_icon_name} loading="lazy"  title={icon?.department_icon_name}/>
              <p>{icon?.department_icon_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div> */}

    

    </div>
  );
};

export default DeptHeader;

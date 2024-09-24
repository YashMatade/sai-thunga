import React, { useState, useEffect } from "react";
import "./Treatment.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TreatmentHeader from "../../Components/TreatmentHeader/TreatmentHeader";
import TreatmentDoctor from "../../Components/TreatmentDoctor/TreatmentDoctor";
import Treatmentfaq from "../../Components/TreatmentFAQ/TreatmentFAQ";
import TreatmentLocation from "../../Components/TreatmentLocation/TreatmentLocation";
import TreatmentContent from "../../Components/TreatmentContent/TreatmentContent";

import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
// import AboutSearchbar from "../../components/AboutSearchbar/AboutSearchbar";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  patient_name: z.string().min(1, "Patient Name is required"),
  email_id: z.string().email("Invalid email address"),
  contact_number: z.string().regex(/^[0-9]{10}$/, "Contact Number must be a 10-digit number"),
  address: z.string().min(1, "Address is required"),
  disease: z.string().min(1, "Disease is required"),
});

const Treatments = () => {
  const api = import.meta.env.VITE_API;
  const navigate = useNavigate();
  const { tname } = useParams();

  const [formData, setFormData] = useState({
    patient_name: "",
    email_id: "",
    contact_number: "",
    address: "",
    disease: "",
    page_name: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFromList, setSelectedFromList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allLocation, setAllLocation] = useState([]);
  const [locations, setLocation] = useState([]);
  const [meta, setMeta] = useState([]);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData,
  });

  useEffect(() => {
    const getLocations = async () => {
      try {
        const res = await axios.get(`${api}/region/get_popularregion`);
        const locations = res.data.data;
        if (res.data && Array.isArray(res.data.data)) {
          setAllLocation(locations);
          const popular = locations.filter(
            (location) => location.popular_region === true
          );
          setLocation(popular);
        } else {
          console.error("Invalid response data:", res.data);
        }
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    getLocations();
  }, [api]);

  useEffect(() => {
    const getDeptId = async () => {
      try {
        const res = await axios.get(
          `${api}/department/get_subdepartmentone/${tname}`
        );
        if (res && res.data && res.data.data) {
          const pageName = res.data.data.sub_department_name;
          setMeta(res.data.data);
          // Update the form field directly using setValue
          setValue("page_name", pageName);
        } else {
          console.error("Response data is missing or empty");
        }
      } catch (error) {
        console.error(error?.response && error?.response?.name);
      }
    };

    getDeptId();
  }, [api, tname, setValue]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update form values directly
    setValue(name, value);
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const requestData = {
        patient_name: data.patient_name,
        email_id: data.email_id,
        contact_number: data.contact_number,
        address: data.address,
        disease: data.disease,
        page_name: meta?.sub_department_name,
      };

      const response = await axios.post(
        `${api}/booking/create_booking`,
        requestData
      );

      if (response.status === 200) {
        reset();
        navigate("/doctors");
        toast.success("Our Team will connect with you soon.");
      } else {
        toast.error("Failed to submit data. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting form data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLocationClick = (selectedLocation) => {
    const newAddress = selectedLocation.region_name;

    setValue("address", newAddress);
    setSelectedFromList(true);
  };

  return (
    <>
      <Helmet>
        <title>{meta?.meta_name || ""}</title>
        <meta name="description" content={meta?.meta_description || ""} />
        <meta property="og:title" content={meta?.meta_name || ""} />
        <meta property="og:description" content={meta?.meta_description || ""} />
        <meta name="keywords" content={meta?.meta_tag?.join(", ") || ""} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div
        className={`app-container treatments ${isModalOpen ? "blurred-background" : ""}`}
      >
        <div className="treatment_nav">
          <Header />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <TreatmentHeader />
              <TreatmentDoctor />
              <TreatmentContent openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen} />
              <Treatmentfaq />
            </div>

            <div className="col-lg-4 sticky-col">
              <div className="desktop_form">
                <div className="header-form_dept form_treatment">
                  <h3>
                    Book <span>FREE</span> Doctor <br /> Appointment
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="header-form_getintouch">
                    <div className="header_form-inputs">
                      <input
                        type="text"
                        {...register("patient_name")}
                        placeholder="Patient Name"
                      />
                      {errors.patient_name && <p className="error-message">{errors.patient_name.message}</p>}
                      
                      <input
                        type="number"
                        {...register("contact_number")}
                        placeholder="Contact Number"
                      />
                      {errors.contact_number && <p className="error-message">{errors.contact_number.message}</p>}
                      
                      <input
                        type="email"
                        {...register("email_id")}
                        placeholder="Email id"
                      />
                      {errors.email_id && <p className="error-message">{errors.email_id.message}</p>}
                      
                      <input
                        type="text"
                        {...register("page_name")}
                        readOnly
                        className="page_field"
                      />
                      
                      <input
                        type="text"
                        {...register("disease")}
                        placeholder="Disease(s) (comma separated)"
                      />
                      {errors.disease && <p className="error-message">{errors.disease.message}</p>}
                      
                      {selectedFromList ? (
                        <div className="all-location">
                          <input
                            type="text"
                            className="selectedfrmalllocation"
                            value={formData.address}
                            readOnly
                            placeholder="Selected Location"
                          />
                        </div>
                      ) : (
                        <select
                          {...register("address")}
                          className="drop"
                        >
                          <option value="" disabled hidden>
                            Select your Location
                          </option>
                          {locations.map((location, index) => (
                            <option value={location.region_name} key={index}>
                              {location.region_name}
                            </option>
                          ))}
                        </select>
                      )}
                      
                      <div className="locations">
                        {allLocation.map((location, index) => (
                          <div
                            className={`location ${formData.address === location.region_name ? " active" : ""}`}
                            key={index}
                            onClick={() => handleLocationClick(location)}
                          >
                            {location.region_name}
                          </div>
                        ))}
                      </div>

                      <button type="submit" className="book-now">
                        {loading ? "Booking..." : "Book Free Appointment"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile_form container">
          <div className="header-form_dept form_treatment">
            <h3>
              Book <span>FREE</span> Doctor <br /> Appointment
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="header-form_getintouch">
              <div className="header_form-inputs">
                <input
                  type="text"
                  {...register("patient_name")}
                  placeholder="Patient Name"
                />
                {errors.patient_name && <p className="error-message">{errors.patient_name.message}</p>}
                
                <input
                  type="number"
                  {...register("contact_number")}
                  placeholder="Contact Number"
                />
                {errors.contact_number && <p className="error-message">{errors.contact_number.message}</p>}
                
                <input
                  type="email"
                  {...register("email_id")}
                  placeholder="Email id"
                />
                {errors.email_id && <p className="error-message">{errors.email_id.message}</p>}
                
                <input
                  type="text"
                  {...register("page_name")}
                  readOnly
                  className="page_field"
                />
                
                <input
                  type="text"
                  {...register("disease")}
                  placeholder="Disease(s) (comma separated)"
                  />
                {errors.disease && <p className="error-message">{errors.disease.message}</p>}
                
                {selectedFromList ? (
                  <div className="all-location">
                    <input
                      type="text"
                      className="selectedfrmalllocation"
                      value={formData.address}
                      readOnly
                      placeholder="Selected Location"
                    />
                  </div>
                ) : (
                  <select
                    {...register("address")}
                    className="drop"
                  >
                    <option value="" disabled hidden>
                      Select your Location
                    </option>
                    {locations.map((location, index) => (
                      <option value={location.region_name} key={index}>
                        {location.region_name}
                      </option>
                    ))}
                  </select>
                )}
                
                <div className="locations">
                  {allLocation.map((location, index) => (
                    <div
                      className={`location ${formData.address === location.region_name ? " active" : ""}`}
                      key={index}
                      onClick={() => handleLocationClick(location)}
                    >
                      {location.region_name}
                    </div>
                  ))}
                </div>

                <button type="submit" className="book-now">
                  {loading ? "Booking..." : "Book Free Appointment"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Treatments;
import React, { useState, useEffect } from "react";
import "./Department.css";
import GetinTouch from "../../Components/GetinTouch/GetinTouch";
import DepartmentFAQ from "../../Components/DepartmentFAQ/DepartmentFAQ";
import PatientRating from "../../Components/PatientRating/PatientRating";
import DeptDoctors from "../../Components/DeptDoctors/DeptDoctors";
import DeptHeader from "../../Components/DeptHeader/DeptHeader";
import DeptTreatments from "../../Components/DeptTreatments/DeptTreatments";
import DeptSpecialities from "../../Components/DeptSpecialities/DeptSpecialities";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  patient_name: z.string().min(1, "Patient Name is required"),
  contact_number: z
    .string()
    .regex(/^[0-9]{10}$/, "Contact Number must be a 10-digit number"),
  email_id: z.string().email("Invalid email address"),
  disease: z.string().min(1, "Disease is required"),
  address: z.string().min(1, "Please select your location"),
});

const Departments = () => {
  const api = import.meta.env.VITE_API;

  const navigate = useNavigate();
  const { dname } = useParams();

  const [allLocation, setAllLocation] = useState([]);
  const [selectedFromList, setSelectedFromList] = useState(false);
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const getDeptContent = async () => {
      try {
        const res = await axios.get(
          `${api}/department/get_departmentone/${dname}`
        );
        if (res.data && res.data.data) {
          setMeta(res.data.data);
        } else {
          console.error("Response data is missing or empty");
        }
      } catch (error) {
        console.error("Error fetching department content:", error);
      }
    };

    getDeptContent();
  }, [dname]);

  useEffect(() => {
    const getLocations = async () => {
      try {
        const res = await axios.get(`${api}/region/get_popularregion`);
        if (res.data && Array.isArray(res.data.data)) {
          setAllLocation(res.data.data);
        } else {
          console.error("Invalid response data:", res.data);
        }
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    getLocations();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "disease") {
      const diseases = value
        .split(",")
        .map((disease) => disease.trim())
        .filter((disease) => disease); // Remove empty values
      setValue("disease", diseases); // Update react-hook-form value
    } else {
      setValue(name, value); // Update react-hook-form value
    }
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
        page_name: meta?.department || "",
      };

      const response = await axios.post(
        `${api}/booking/create_booking`,
        requestData
      );

      if (response.status === 200) {
        reset();
        toast.success("Our Team will connect with you soon.");
        navigate("/doctors");
      } else {
        toast.error("Failed to submit data. Please try again.");
      }
    } catch (error) {
      toast.error(
        "An error occurred while submitting form data. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{meta?.meta_name || "Departments"}</title>
        <meta name="description" content={meta?.meta_description || ""} />
        <meta name="keywords" content={meta?.meta_tag?.join(", ") || ""} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="dept">
        <div className="treatment_nav">
          <Header />
          {/* <AboutSearchbar /> */}
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <DeptHeader />
              <DeptDoctors />
              <DeptSpecialities />
              <DeptTreatments />
              <PatientRating />
              <DepartmentFAQ />
              <GetinTouch />
            </div>

            <div className="col-lg-4 sticky-col">
              <div className="dept_side_form">
                <div className="header-form_dept">
                  <h3>
                    Book <span>FREE</span> Doctor <br /> Appointment
                  </h3>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="header-form_getintouch"
                  >
                    <div className="header_form-inputs">
                      <input
                        type="text"
                        {...register("patient_name")}
                        placeholder="Patient Name"
                        onChange={handleInputChange}
                      />
                      {errors.patient_name && (
                        <p className="error-message">
                          {errors.patient_name.message}
                        </p>
                      )}

                      <input
                        type="number"
                        {...register("contact_number")}
                        placeholder="Contact Number"
                        onChange={handleInputChange}
                      />
                      {errors.contact_number && (
                        <p className="error-message">
                          {errors.contact_number.message}
                        </p>
                      )}

                      <input
                        type="email"
                        {...register("email_id")}
                        placeholder="Email"
                        onChange={handleInputChange}
                      />
                      {errors.email_id && (
                        <p className="error-message">
                          {errors.email_id.message}
                        </p>
                      )}

                      <input
                        type="text"
                        {...register("disease")}
                        placeholder="Disease(s) (comma separated)"
                        onChange={handleInputChange}
                      />
                      {errors.disease && (
                        <p className="error-message">
                          {errors.disease.message}
                        </p>
                      )}

                      {selectedFromList ? (
                        <div className="all-location">
                          <input
                            type="text"
                            value={formData.address}
                            readOnly
                            placeholder="Selected Location"
                          />
                        </div>
                      ) : (
                        <select
                          {...register("address")}
                          className="drop"
                          onChange={handleInputChange}
                        >
                          <option value="" disabled hidden>
                            Select your Location
                          </option>
                          {allLocation.map((location, index) => (
                            <option value={location.region_name} key={index}>
                              {location.region_name}
                            </option>
                          ))}
                        </select>
                      )}
                      {errors.address && (
                        <p className="error-message">
                          {errors.address.message}
                        </p>
                      )}

                      <button type="submit" className="d_book">
                        {loading ? "Booking..." : "Book Free Appointment"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Departments;

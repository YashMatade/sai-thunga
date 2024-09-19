import React from "react";
import { BiCheckCircle, BiLocationPlus } from "react-icons/bi";
import { CiLocationArrow1, CiLocationOff } from "react-icons/ci";
import pin from "/pin.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
const styles = {
  container: {
    backgroundColor: "#3B3576",
    padding: "20px",
    textAlign: "center",
    borderRadius: "12px",
  },
  headingContainer: {
    marginBottom: "20px",
  },
  heading: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
    marginTop: "35px",
  },
  subheading: {
    color: "#ccc",
    fontSize: "16px",
  },
  inputGroup: {
    maxWidth: "800px",
    margin: "0 auto",
    borderRadius: "5px",
    overflow: "hidden",
    marginBottom: "-40px",
    border: "1px solid lightgray",
  },
  dropdownButton: {
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    padding: "10px",
    width: "250px",
    border: "0",
  },
  searchInput: {
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
  },
  doctorsAvailable: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    margin: "20px 0 5px",
  },
  bookAppointment: {
    fontSize: "16px",
    color: "#6c757d",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: "8px",
    color: "#6c757d",
  },
};

const DocSearchBar = () => {
  return (
    <>
      <div style={styles.container} className="container">
        <div style={styles.headingContainer}>
          <h2 style={styles.heading}>
            When You Need Answers, Best Doctors Can Help
          </h2>
          <p style={styles.subheading}>Find The Care You Need</p>
        </div>
        <div className="input-group" style={styles.inputGroup}>
          <select name="" id="" className="" style={styles.dropdownButton}>
            <option value="">Select City</option>
            <option value="">Kormangala</option>
            <option value="">Banglore</option>
          </select>
          <input
            type="text"
            className="form-control"
            placeholder="Search By Disease Or Doctor Name"
            aria-label="Search"
            style={styles.searchInput}
          />
        </div>
      </div>
      <div className="text-center mt-5">
        <p style={styles.doctorsAvailable}>
          545 doctors available in Bangalore
        </p>
        <p style={styles.bookAppointment}>
          <BsFillCheckCircleFill style={styles.icon} />
          Book appointment with minimum wait-time & verified doctor's details
        </p>
      </div>
    </>
  );
};

export default DocSearchBar;

import React from "react";
import DocSearchBar from "./DocSearchBar";
import Header from "../../Components/Header/Header";
import DoctorsList from "./DoctorsList";

const Doctors = () => {
  return (
    <div>
      <Header />
      <DocSearchBar />
      <DoctorsList />
    </div>
  );
};

export default Doctors;

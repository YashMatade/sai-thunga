import React from "react";

const BookingForm = () => {
  return (
    <div className="container">
      <div className="card p-4 shadow-sm">
        <h5 className="card-title text-center mb-4">Book Your Consultation</h5>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Patient Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="mb-3">
            <select className="form-select" required>
              <option value="">Select Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
          </div>
          <div className="mb-3">
            <select className="form-select" required>
              <option value="">Select Disease</option>
              <option value="disease1">Disease 1</option>
              <option value="disease2">Disease 2</option>
            </select>
          </div>
          <button type="submit" className="btn btn-danger w-100">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

import React, { useState, useEffect } from 'react';
import './GetinTouch.css';
import axios from 'axios';
import {  toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const GetinTouch = () => {
    const [branchLocations, setBranchLocations] = useState([]);
    const [loading, setLoading] = useState(false);
    const api = import.meta.env.VITE_API;
    const{dname}=useParams()
    console.log(dname,"DeptGEtForm")
    const [locations, setLocation] = useState([]);
    const [alllocation, setAllLocation] = useState([]);
    const [selectedFromList, setSelectedFromList] = useState(false);
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
        const navigate = useNavigate();

    useEffect(() => {
        const getLocations = async () => {
            try {
                const res = await axios.get(`${api}/region/get_popularregion`);
                if (res.data && Array.isArray(res.data.data)) {
                    const locations = res.data.data;
                    setAllLocation(locations);

                    const popular = locations.filter(location => location.popular_region === true);
                    setLocation(popular);
                } else {
                    console.error('Invalid response data:', res.data);
                }
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };

        getLocations();
    }, []);

   


    useEffect(() => {
        const getLocationinfo = async () => {
            const res = await axios.get(`${api}/branches/all_locations`);
            setBranchLocations(res.data.data);
        }

        getLocationinfo();
    }, []);

    const [formData, setFormData] = useState({
        patient_name: '',
        email_id: '',
        contact_number: '',
        address: '',
        disease: '',
    });

    const [diseaseList, setDiseaseList] = useState([]);

    const handleLocationClick = (selectedLocation) => {
        const newAddress = selectedLocation.region_name;

        setFormData({
            ...formData,
            address: newAddress
        });

        setSelectedFromList(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddDisease = () => {
        const trimmedDisease = formData.disease.trim();
        if (trimmedDisease === '') {
            toast.error("Please enter a disease name");
            return;
        }

        if (diseaseList.includes(trimmedDisease)) {
            toast.error("Disease name already exists");
            return;
        }

        setDiseaseList([...diseaseList, trimmedDisease]);
        setFormData({
            ...formData,
            disease: ''
        });
    };

    const handleRemoveDisease = (diseaseToRemove) => {
        setDiseaseList(diseaseList.filter(disease => disease !== diseaseToRemove));
    };


    useEffect(() => {
        const getFilteredDoctors = async () => {
            try {
                const res = await axios.get(`${api}/doctor/verifieddoctor`);
                setDoctors(res.data.data);
            } catch (e) {
                console.log(e, "Fetching Doctors Failed");
            }
        };

        getFilteredDoctors();
    }, []);

    useEffect(() => {
        if (doctors.length > 0 && dname) {
            const filtered = doctors.filter(doctor => 
                doctor?.department_id?.slug === dname
            );
            console.log(filtered,"filtered Doctors")
            setFilteredDoctors(filtered);
        }
    }, [doctors, dname]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!formData.patient_name || !formData.address || !formData.email_id || diseaseList.length === 0) {
                toast.error("Please fill in all fields");
                return;
            }

            const requestData = {
                patient_name: formData.patient_name,
                email_id: formData.email_id,
                contact_number: formData.contact_number,
                address: formData.address,
                disease: diseaseList,
            };

            setLoading(true);
            const response = await axios.post(`${api}/booking/create_booking`, requestData);

            if (response.status === 200) {
                setFormData({
                    patient_name: '',
                    email_id: '',
                    contact_number: '',
                    address: '',
                    disease: '',
                });
                setDiseaseList([]);
                toast.success("Our Team will connect with you soon.");
                navigate('/doctors', { state: { filteredDoctors } });

            } else {
                console.error('Failed to submit data');
                toast.error("Failed to submit data. Please try again.");
            }
        } catch (error) {
            console.error('Error submitting form data', error);
            toast.error("An error occurred while submitting form data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='container'>
            <div className="row">
                <div className=" col-lg-12 col-md-6">
                    <div className="dept_getintouch-header">
                        <h3>Get in Touch</h3>
                        <p>Tell us about your problems and we'll figure out the best treatment option for you.</p>
                    </div>
                    <div className="dept_getintouch-panindia">
                        <h3>Medidocs services are accessible Pan India</h3>
                        <p>Medidocs has taken the latest medical technologies to ensure consistent quality of advanced surgical care in cities of India including {branchLocations.map((location, index) => (<span key={index} className='pan-india'>{location.Branch},</span>))}...
                        </p>
                    </div>
                </div>
                {/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="getintouch-form">
                        <h3>Book <span>FREE</span> Doctor <br /> Appointment</h3>
                        <form onSubmit={handleSubmit} className='header-form_getintouch'>
                            <div className="header_form-inputs">
                                <input type="text" name="patient_name" value={formData.patient_name} onChange={handleInputChange} placeholder='Patient Name' />
                                <input type="text" name="contact_number" value={formData.contact_number} onChange={handleInputChange} placeholder='Contact Number' />
                                <input type="email" name="email_id" value={formData.email_id} onChange={handleInputChange} placeholder='Email id' />
                                
                                <span className="disease-input-group">
                                    <input type="text" name="disease" value={formData.disease} onChange={handleInputChange} placeholder='Add Disease' />
                                    <p  onClick={handleAddDisease} className='add-disease-btn ' style={{cursor:"pointer"}}>+</p>
                                </span>
                                
                                <div className="disease-list">
                                    {diseaseList.map((disease, index) => (
                                        <div key={index} className="disease-item">
                                            <span>{disease}</span>
                                            <p  onClick={() => handleRemoveDisease(disease)} className='remove-disease-btn'>x</p>
                                        </div>
                                    ))}
                                </div>

                                {selectedFromList ? (
                                    <div className="all-location">
                                        <input type="text" className="selectedfrmalllocation" value={formData.address} readOnly placeholder="Selected Location" />
                                    </div>
                                ) : (
                                    <select
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="drop"
                                    >
                                        <option value="" disabled hidden className="">
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
                                    {alllocation.map((location, index) => (
                                        <div
                                            className={`location ${formData.address === location.region_name ? ' active' : ''}`}
                                            key={index}
                                            onClick={() => handleLocationClick(location)}
                                        >
                                            {location.region_name}
                                        </div>
                                    ))}
                                </div>
                                
                                <button type="submit" className='book-now'>{loading ? 'Booking...' : 'Book Free Appointment'}</button>
                            </div>
                        </form>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default GetinTouch;

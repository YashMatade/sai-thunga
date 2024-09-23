import React, { useEffect, useState } from 'react';
import './DeptTreatments.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeptTreatments = () => {
    const { dname } = useParams();
    const api = import.meta.env.VITE_API;
    const [qualityData, setQualityData] = useState(null);
    const [image, setImage] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${api}/department/get_qualitiesbyslug/${dname}`);
                console.log(res,"Qalities")

                if (res.status === 200) {
                    setQualityData(res.data); 
                } else {
                    console.error("API returned an unexpected status:", res.status);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); 
    }, [api, dname]); 

    useEffect(() => {
        const getTreatmentHeaderContentImg = async () => {
            try {
                const res = await axios.get(`${api}/department/get_departmentone/${dname}`);
                if (res && res.data && res.data.data && res.data.data.department_content_image) {
                    setImage(res.data.data.department_content_image);
                } else {
                    console.error("Image is not available in the response");
                    setImage(null);
                }
            } catch (error) {
                console.error(error?.response && error?.response?.name);
            }
        };

        getTreatmentHeaderContentImg();
    }, [api, dname]);

    return (

        <div className="dept_treatments mt-5">
  <div className='container'>
            <div className="row">
                <div className="col-lg-5">
                    {image ? (
                        <div className="content-image">
                            <img src={image} alt="content"  title='content' />
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

                <div className="col-lg-7">
                    <div className="ourtreatments">
                        <h2>{qualityData?.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: qualityData?.description }} style={{textAlign:"j"}}/>
                        <div className="facilities-box">
                            {qualityData?.qualities?.map((facility, index) => (
                                <div className="facility-btn" key={index}>
                                    <button>{facility}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      
    );
};

export default DeptTreatments;

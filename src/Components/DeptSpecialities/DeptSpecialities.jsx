import React, { useEffect, useState } from 'react';
import './DeptSpecialities.css';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

const DeptSpecialities = () => {
  const { dname } = useParams();
  const api = import.meta.env.VITE_API;
  const [data, setData] = useState([]);

  function customSlugify(text) {
    return text
      .toLowerCase()  
      .replace(/ /g, '-')  
      .replace(/[^\w-]+/g, match => match);  
  }

  useEffect(() => {
    const getSpl = async () => {
      try {
        const res = await axios.get(`${api}/treatmentbydepartmentname/${dname}`);
        setData(res?.data?.data);
        
      } catch (e) {
        console.error(e);
      }
    }

    getSpl();
  }, [api, dname]);

  const sanitizeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  }

  return (
    <div className='container'>
      <div className="speciality-container">
        <h3 className='speciality-container_title'>Our Specialities</h3>

        <div className="mobile speciality-box">
          {data.map((special, index) => {
            const slug = customSlugify(special.sub_department_name);
            return (
              <Link to={`/treatment/${special.slug}`} style={{textDecoration:"none"}}>

              <div className="spl-card" key={index}>

                    <div className="spl_dept_image">
                    <img src={special.treatment_image} alt="Treatment" className='spl-card_img' loading='lazy' title="Treatment"  />

                  </div>
                    <div className="details-info">
                      <div className="details-info_con">
                      <h3 className='spl-title'>
                        {special.sub_department_name}
                      </h3>
                      
                      </div>
                      
                     
                     
                      
                    </div>
                </div>
              </Link>

            )
          })}
        </div>
      </div>
    </div>
  );
}

export default DeptSpecialities;

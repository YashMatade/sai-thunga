import React, { useEffect, useState } from 'react';
import './TreatmentContent.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

const TreatmentContent = ({ openModal, closeModal, isModalOpen }) => {
  const { tname } = useParams();
  const [diseaseInfo, setDiseaseInfo] = useState([]);
  const [content, setContent] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false); 
  const [bannerImg, setBannerImg] = useState(''); // Initialize as a string
  const [error, setError] = useState(null);

  const api = import.meta.env.VITE_API;

  useEffect(() => {
    // Fetch disease info
    const getDiseaseInfo = async () => {
      try {
        const res = await axios.get(`${api}/treatmentinfobysubdepartmentname/${tname}`);
        setDiseaseInfo(res.data.data);
      } catch (error) {
        console.error('Error fetching disease info:', error);
      }
    };

    // Fetch content
    const getContent = async () => {
      try {
        const res = await axios.get(`${api}/contentbysubdepartmentname/${tname}`);
        setContent(res.data.data);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    getDiseaseInfo();
    getContent();

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); 
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, [api, tname]);

  useEffect(() => {
    const getTreatmentHeaderContent = async () => {
      try {
        const res = await axios.get(`${api}/department/get_subdepartmentone/${tname}`);
        if (res && res.data && res.data.data) {
          setBannerImg(res.data.data.treatments_banners_slider);
          
        } else {
          console.error("Response data is missing or empty");
        }
      } catch (error) {
        console.error('Error fetching banner images:', error);
      }
    };
    getTreatmentHeaderContent();
  }, [api, tname]);

  return (
    <div className='content-section'>
      <div className="row">
        <div className="treatment-content">
          <div className="t_banner">
            {bannerImg ? (
              <img 
                src={bannerImg} 
                alt="Banner" 
title='Banner'
                loading="lazy" 
              />
            ) : (
              <>
              </>
            )}
          </div>

          <div className="more-info">
            {diseaseInfo?.map((detail, index) => (
              <div key={index} className='more-info-text'>
                <div className="d-name">
                  <h6>Disease Name:</h6>
                  <p>{detail.disease_name}</p>
                </div>
                <div className="s-name">
                  <h6>Surgery Name: </h6>
                  <p>{detail.surgery_name}</p>
                </div>
                <div className="duration">
                  <h6>Duration:</h6>
                  <p>{detail.duration}</p>
                </div>
                <div className="treatedby">
                  <h6>Treated By:</h6>
                  <p>{detail.treated_by}</p>
                </div>
              </div>
            ))}
          </div>

            <div className="content_">
              {content?.map((contentInfo, index) => (
                <div className="content-data" key={index}>
                  <div className="row">
                    {isMobileView || index % 2 === 0 ? (
                      <>
                        <div className="col-lg-8 ">
                          <div className="content_treatment odd_content" >
                            <h3>{contentInfo.question}</h3>
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(contentInfo.answer) }} className='Content_ans'></div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className={isMobileView ? 'treatmentContentimg' : 'treatmentContentimg odd_image_treatment'}>
                            <img src={contentInfo.content_images} alt="content" title='content' className='treatmentcontent-image' loading='lazy' />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-lg-6">
                          <div className={isMobileView ? 'treatmentContentimg odd_image_treatment' : 'treatmentContentimg'}>
                            <img src={contentInfo.content_images} alt="content" title='content' className='treatmentcontent-image' loading='lazy' />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="content_treatment">
                            <h3>{contentInfo.question}</h3>
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(contentInfo.answer) }} className='Content_ans'></div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

          {/* <ConsultwithExperts /> */}
        </div>
      </div>
    </div>
  );
};

export default TreatmentContent;
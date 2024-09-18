import React from 'react';
import './ChooseusSection.css';
import Icon from '/icon.png'; 


import ChooseImg from '/choose.png';
import ChooseBgImg from '/choosebg.png'; 

const ChooseusSection = () => {

  const chooseUsContent = {
    title: "Sai Thunga",
    mainImg:ChooseImg,
    tag: "Why Choose Us?",
    description: "Sai Thunga uses advanced technology to ensure that patient medical records and information are easily accessible and secure. With online booking and tracking options, patients can easily schedule appointments and track their medical care. Furthermore, Sai Thunga places a strong emphasis on social responsibility and community involvement, providing medical care and support to underserved communities through partnerships and outreach programs. Overall, Sai Thunga stands out for its commitment to superior medical care, highly trained staff, innovative technology, and community involvement. And Providing A to Z Medical Services.",
    icons: [
      {
        iconName: "Keep Patients First",
        iconImage: Icon
      },
      {
        iconName: "Advanced Technology",
        iconImage: Icon
      },
      {
        iconName: "Highly Trained Staff",
        iconImage:Icon
      },
      {
        iconName: "Community Involvement",
        iconImage: Icon
      },
      {
        iconName: "Community Involvement",
        iconImage: Icon
      },{
        iconName: "Community Involvement",
        iconImage: Icon
      },
    ]
  };

  return (
    <div className="chooseus-section" style={{ backgroundImage: `url(${ChooseBgImg})` }}>
    <div className="chooseus-content">
      <div className="tag_Sym">
        <div className="tag_">
          
        </div>
      <h6>{chooseUsContent.tag}</h6>

      </div>
          <h3>{chooseUsContent.title}</h3>
          <p className='choose_des'>{chooseUsContent.description}</p>

          <div className="chooseus-icons">
          {chooseUsContent.icons.map((icon, index) => (
            <div className="chooseus-icon-item" key={index}>
              <div className="icon-container">
                <img src={icon.iconImage} alt={icon.iconName} className="icon-image" />
              </div>
              <p>{icon.iconName}</p>
            </div>
          ))}
        </div>
        </div>

       
      
        <div className="choose_image">
          <img src={chooseUsContent.mainImg} alt={chooseUsContent.title} />
        </div>
      </div>

      
  );
};

export default ChooseusSection;




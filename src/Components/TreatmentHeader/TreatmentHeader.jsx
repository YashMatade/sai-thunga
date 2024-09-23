import React,{useState,useEffect} from 'react'
import './TreatmentHeader.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';




const ImageSlider = ({image,title}) => {

   

    

    return (
        <div className="">
               <img
                    src={image}
                    alt={title}
                    className=""
                    title={title}
                    loading='lazy'
                />
        </div>
    );
};

const TreatmentHeader = () => {
    const {tname}=useParams()
    const [showFullDescription, setShowFullDescription] = useState(false);
const api=import.meta.env.VITE_API
    const [headercontent,setheadercontent]=useState([])
    const [countData,setcountData]=useState([])
   const [ctaDatA,setctaData]=useState([])
   const[id,setId]=useState('')
const[image,setImage]=useState('')
   const[LeadForm,setLeadForm]=[{
    
   }]
   


   const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };


    useEffect(() => {
        const getTreatmentHeaderContent = async () => {
            try {
                const res = await axios.get(`${api}/department/get_subdepartmentone/${tname}`);
                if (res && res.data && res.data.data) {
                    setheadercontent(res.data.data);
                    setId(res.data.data._id)
                    setImage(res.data.data.treatment_image)
                    set(res.data.data.department_id)

                    console.log(res.data.data.treatment_image,"treatmentImage")
                    localStorage.setItem("t_id",res.data.data._id)
                } else {
                    console.error("Response data is missing or empty");
                }
            } catch (error) {
                console.error(error?.response && error?.response?.name);
            }
        };
        getTreatmentHeaderContent();
    }, [api,tname]);





    useEffect(() => {
        const getCtaContent = async () => {
            try {
                const res = await axios.get(`${api}/gettreatmentctaiconbytreatment/${tname}`);
                if (res && res.data && res.data.data) {

                    setctaData(res.data.data);
                } else {
                    console.error("Response data is missing or empty");
                }
            } catch (error) {
                console.error(error?.response && error?.response?.name);
            }
        };


    
        getCtaContent();
    }, []);


   


    useEffect(() => {
        const getcountData = async () => {
            try {
                const res = await axios.get(`${api}/gettreatmentheader`);
                if (res && res.data && res.data.data) {
                    setcountData(res.data.data);
                } else {
                    console.error("Response data is missing or empty");
                }
            } catch (e) {
                console.error("Error occurred while fetching data:", e);
                console.error(e?.response && e?.response?.name);
            }
        }
    
        getcountData();
    }, []);
    


   
    

    
  

    


    const Callback = () => {
        const phoneNumber = 6364464508;
        const telUrl = `tel:${phoneNumber}`;
        window.location.href=telUrl
      }


      const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
      };
    
      const renderDescription = () => {
        const rawHTML = headercontent?.sub_department_descriptiion;
        const plainText = showFullDescription ? rawHTML : `${stripHtmlTags(rawHTML).slice(0, 350)}...`;
        return { __html: plainText };
      };
      
  return (
    <div className='container'>
        <div className="row">
            <div className="col">
            <div className="header_content">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-md-6 col-lg-6">
                    <div className="content">
                            <h1 className='treatment-header'>{headercontent.sub_department_name}</h1>
                            {/* <p>{headercontent.sub_dep
                                artment_descriptiion}</p> */}
 <p className='content_header_treatment' style={{textAlign:"justify"}}>
      <span dangerouslySetInnerHTML={renderDescription()} />
      {headercontent?.sub_department_descriptiion?.length > 350 && (
        <span onClick={toggleDescription} className="header-read-more" style={{ marginLeft: '5px', cursor: 'pointer' }}>
          {showFullDescription ? " Show Less" : " Read More"}
        </span>
      )}
    </p>





<button onClick={Callback} className='headerbtn mt-2'>Call Us</button>



                    </div>                  
                    </div> 

                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
    <div className="treatment_image_main">
        <ImageSlider className="" image={image} title={headercontent.sub_department_name}/>
    </div>
</div>
                </div>
            </div>

            </div>

           
        </div>

        <div className="row">
            <div className="col-xxl-12 ">

                <div className="cta-group">
                    {ctaDatA.map((cta,index)=>(
                        <div className="cta_treatment" key={index}>
                            <div className="avatar_img">
                            {/* <span>{cta.icon}</span> */}
                            <img src={cta?.treatment_cta_icon } alt={cta?.treatment_icon_name} loading='lazy' title={cta?.treatment_icon_name} />

                            </div>
                        <p>{cta?.treatment_icon_name}</p>
                        </div>
                       
                    ))}
                </div>
            </div>
        </div>

       
    </div>
  )
}

export default TreatmentHeader
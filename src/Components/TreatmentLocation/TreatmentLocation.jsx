import React, { useEffect, useState } from 'react'
import './TreatmentLocation.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const TreatmentLocation = () => {
    const { tname } = useParams();

    const api=import.meta.env.VITE_API
    const [location,setLocation]=useState([])
    const [headercontent,setheadercontent]=useState([])

    useEffect(() => {
        const getTreatmentHeaderContent = async () => {
            try {
                const res = await axios.get(`${api}/department/get_subdepartmentone/${tname}`);
                if (res && res.data && res.data.data) {
                    setheadercontent(res.data.data);
                } else {
                    console.error("Response data is missing or empty");
                }
            } catch (error) {
                console.error(error?.response && error?.response?.name);
            }
        };
        getTreatmentHeaderContent();
    }, [api,tname]);


    useEffect(()=>{
        const getLocationinfo=async()=>{
const res=await axios.get(`${api}/branches/all_locations`)
setLocation(res.data.data)
        }

        getLocationinfo()
    },[])

    const Locations = [
        "Koramangala",
        "Indiranagar",
        "Whitefield",
        "Electronic City",
        "Jayanagar",
        "Marathahalli",
        "BTM Layout",
        "Hebbal",
        "HSR Layout",
        "Bannerghatta Road",
        "Malleswaram",
        "Basavanagudi"
      ];
      
  return (
    <div className='location-section'>
        <div className="row">
            <div className="col">
                <div className="treatment-location">
                    <h3>{headercontent.sub_department_name || "Treatments"} In Bangalore</h3>

                    <div className="treatment-location_container">
                        {location.map((location,index)=>(
                            <ul key={index}>
                                <li>{location.Branch}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TreatmentLocation
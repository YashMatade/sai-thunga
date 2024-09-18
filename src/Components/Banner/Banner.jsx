import React from 'react'
import './Banner.css'
import Vcard from '/vcard.png'
import Ban from '/bann.png'


const Banner = () => {
  return (
    <div className='home_banner container-fluid'>
        {/* <header className='Home_Banner'>
            <div className="row">
                <div className="col-lg-6">
                <div className="Banner_Contents">
                <h3>Sai Thunga Hospital:<br/><span>Your Health, Our Priority</span></h3>
                <div className="bannerinfo">
                    <div className="banner_info     ">
                    <button>24/7 Emergency Service</button>
                    <button className='cta_Banner'> Virtual healthcare</button>
                    </div>
                    

                    <p>Experience the synergy of AI and medical expertise, leading to innovative solutions and brighter outcomes for patients.</p>
                </div>
            </div>
                </div>

                <div className="col-lg-6">
                <div className="Verify_card"> 
                <div className="Verify_card_con">
                <div className="verify_status">
                <div className="verify_badge">
                    <img src={BAD} alt="" />
                </div>
                <p>Verified</p>

                </div>

                <div className="main_contents_verify">
                    <h3>15y</h3>
                    <p>years of experience</p>
                    <div className="desc_Verify">
                        <p>Experience the synergy of AI and medical expertise, leading to innovative solutions and brighter outcomes for patients.</p>
                    </div>
                    <button>Contact us</button>
                </div>
                </div>
                


                
                <img src={Vcard} alt="" />
            </div>
                </div>
            </div>
            


           
        


        </header> */}


        <img src={Ban} alt="" />
    </div>
  )
}

export default Banner
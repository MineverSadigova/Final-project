import React, { useState, useEffect } from "react";
import FooterImg from '../image/footer/FooterImg'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
const Footer = () => {
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className='footer'>
      <div className='footerSlayd'>
        <Slider {...settings2}>
<div> <img src={FooterImg.frame1} /></div>
<div> <img src={FooterImg.frame2} /></div>
<div> <img src={FooterImg.frame3} /></div>
<div> <img src={FooterImg.frame4} /></div>
<div> <img src={FooterImg.frame5} /></div>
<div> <img src={FooterImg.frame6} /></div>
<div> <img src={FooterImg.frame7} /></div>
<div> <img src={FooterImg.frame8} /></div>
        </Slider>
      </div>

      <div className='footerBox'>
        <div className='footerInfo'>

          <div className='footerLogo'>
            <img src={FooterImg.frame9} />
          </div>

          <div className='footerAdress'>
            <p>Ziya Bunyadov pr. 19-65<br/>
              Dərnəgül Tikinti Bazarı,<br/>
              Bakı, Azərbaycan</p>
          </div>

         <div className='footerElaqe'>
         <div className='footerContact'>
          <ul>
            <li><Link>HAQQIMIZDA</Link></li>
            <li><Link>MƏHSULLAR</Link></li>
            <li><Link>PROYEKTLƏR</Link></li>
            <li><Link>DAYANIQLILIQ</Link></li>
            <li><Link>ƏLAQƏ</Link></li>
          </ul>
          </div>

          <div className='footerLink'>
          <ul>
            <li><Link>FACEBOOK</Link></li>
            <li><Link>INSTAGRAM</Link></li>
            <li><Link>LINKEDIN</Link></li>
          </ul>
          </div>
          
         </div>
        </div>

        <div className='footerNummber'>

          <div className='footerTel'>
            <p>+99455/703130011</p>
          </div>

          <div className='footerEmail'>
            <p>sales@5aconstruction.co</p>
          </div>

        </div>
        
      </div>

    </div>
  )
}

export default Footer
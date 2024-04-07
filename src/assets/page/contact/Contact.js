import React from 'react'
import '../../css/contact/contact.scss';
import contactImg from '../../image/contact/contactImg.png';
import { Helmet } from "react-helmet";
const Contact = () => {
    return (
        <div className='custom_container'>
            <Helmet>
        <title>Əlaqə</title>
        <meta name="description" content="Favelli makaronlari" />
      </Helmet>
            <div className='section-ct'>

                <div className='imageCtc desktopImg'>
                    <img src={contactImg} />
                </div>

                <div className='border-left'>

                    <div className='article-ct'>
                        <h1>BİZİMLƏ ƏLAQƏ</h1>
                    </div>
                    <hr />

                    <div className='article-ct1'>
                        <h5>E-mail</h5>
                        <p>sales@5aconstruction.co</p>
                    </div>
                    <hr />

                    <div className='article-ct1'>
                        <h5>Əlaqə nömrəsi</h5>
                        <p className='salak'>+99455/703130011</p>
                    </div>
                    <hr />

                    <div className='article-ct1'>
                        <h5>Ünvan</h5>
                        <p>Ziya Bunyadov pr. 19-65 <br /> Dərnəgül Tikinti Bazarı,<br /> Bakı, Azərbaycan</p>
                    </div>

                    <div className='mobileImg'><img src={contactImg} /></div>
                </div>
            </div>
        </div>
    )
}

export default Contact
import React from 'react'
import mektebImage from '../../image/school/mektebImage';
import '../../css/mekteb/mekteb.scss';
import { Helmet } from 'react-helmet';
const Mekteb = () => {
  return (
    <div className='custom_container'>
         <Helmet>
        <title>Lahiyələr</title>
        <meta name="description" content="Favelli makaronlari" />
      </Helmet>
        <div className='section-mt1'>
        <h1>Məktəb</h1>
        <img src={mektebImage.mask1}/>
        </div>

        <div className='section-mt2'>
            <div className='imgMt'>
                <img src={mektebImage.mask2}/>
                <img src={mektebImage.mask3}/>
            </div>

            <div className='imgMt'>
                <img src={mektebImage.mask4}/>
                <img src={mektebImage.mask5}/>
            </div>

            <div className='imgMt'>
                <img src={mektebImage.mask6}/>
                <img src={mektebImage.mask7}/>
            </div >

        </div>
    </div>
  )
}

export default Mekteb
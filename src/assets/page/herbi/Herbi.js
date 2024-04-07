import React from 'react'
import '../../css/mekteb/mekteb.scss';
import herbImage from '../../image/herbi/herbImage';
import { Helmet } from 'react-helmet';
const Herbi = () => {
  return (
    <div className='custom_container'>
         <Helmet>
        <title>Lahiyələr</title>
        <meta name="description" content="Favelli makaronlari" />
      </Helmet>
    <div className='section-mt1'>
    <h1>N saylı hərbi hissə</h1>
    <img src={herbImage.mask8}/>
    </div>

    <div className='section-mt2'>
        <div className='imgMt'>
            <img src={herbImage.mask9}/>
            <img src={herbImage.mask10}/>
        </div>

        <div className='imgMt'>
            <img src={herbImage.mask11}/>
            <img src={herbImage.mask12}/>
        </div>

        <div className='imgMt'>
            <img src={herbImage.mask13}/>
            <img src={herbImage.mask14}/>
        </div >

    </div>
</div>
  )
}

export default Herbi
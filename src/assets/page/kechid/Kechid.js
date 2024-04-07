import React from 'react'
import '../../css/mekteb/mekteb.scss'
import kechidImg from '../../image/kechid/kechidImg';
import { Helmet } from 'react-helmet';
const Kechid = () => {
  return (
    <div className='custom_container'>
         <Helmet>
        <title>Lahiyələr</title>
        <meta name="description" content="Favelli makaronlari" />
      </Helmet>
    <div className='section-mt1'>
    <h1>Piyada keçidi</h1>
    <img src={kechidImg.piyada1}/>
    </div>

    <div className='section-mt2'>
        <div className='imgMt'>
            <img src={kechidImg.piyada2}/>
            <img src={kechidImg.piyada3}/>
        </div>

        <div className='imgMt'>
            <img src={kechidImg.piyada4}/>
            <img src={kechidImg.piyada5}/>
        </div>

        <div className='imgMt'>
            <img src={kechidImg.piyada6}/>
            <img src={kechidImg.piyada7}/>
        </div >

    </div>
</div>
  )
}

export default Kechid
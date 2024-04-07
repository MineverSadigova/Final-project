import React from 'react'
import '../../css/home/Home.scss';
import HomeImg from '../../image/home/HomeImg';
import { Helmet } from 'react-helmet';
const Lahiye = () => {
  return (
    <div className='custom_container'> 
      <Helmet>
        <title>Lahiyələr</title>
        <meta name="description" content="Favelli makaronlari" />
      </Helmet>
      <div className='lahiye'>
    <h1>LAYİHƏLƏR</h1>
    </div>
    <div className='article-hm5'>
      
      <div className='projekt'>
        <img src={HomeImg.Mask6} />

        <div>
          <p style={{ padding: "20px 15px" }}><a href='/herbi'>N saylı hərbi hissə</a></p>
          <div className='baki'>
            <span>YER</span>
            <p >Bakı, Azərbaycan</p>
          </div>
        </div>

      </div>

      <div className='projekt'>
        <img src={HomeImg.Mask7} />

        <div>
          <p style={{ padding: "20px 15px" }}><a href='/mekteb'>Məktəb</a></p>
          <div className='baki'>
            <span>YER</span>
            <p >Bakı, Azərbaycan</p>
          </div>
        </div>

      </div>

      <div className='projekt'>
        <img src={HomeImg.Mask8} />

        <div>
          <p style={{ padding: "20px 15px" }}><a href='/kechid'>Piyada keçidi</a></p>
          <div className='baki'>
            <span>YER</span>
            <p >Bakı, Azərbaycan</p>
          </div>
        </div>

      </div>

    </div></div>
  )
}

export default Lahiye
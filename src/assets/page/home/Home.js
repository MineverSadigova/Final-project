import React from 'react';
import HomeImg from '../../../assets/image/home/HomeImg';
import '../../css/home/Home.scss';
import Award1 from '../../icon/home/award1.png';
import Rating1 from '../../icon/home/rating1.png';
import Diamond1 from '../../icon/home/diamond1.png';
import Group33 from '../../icon/home/Group33.png';
import Group34 from '../../icon/home/Group34.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear",
  };
  

  const setting = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className='custom_container'>
  <Helmet>
        <title>Əlaqə</title>
        <meta name="description" content="Favelli makaronlari" />
      </Helmet>
      
      <div className='homeSection'>
        <div className='article-hm1'>
          <div>
            <h1>ŞİRKƏT OLARAQ, BİZİM
              MƏQSƏDİMİZ KEYFİYYƏTİNİZ,
              HƏDƏFİMİZ ETİBARINIZDIR.</h1>

            <div className='mobileImg'>
              <img src={HomeImg.Mask1} />
            </div>
            <p>Türkiyə, Rusiya, Çin, Almanya və Danimarkadan inşaat <br />
              materialları və xırdavat idxalı ilə məşğuluq.</p>

            <button className='btn-click'>Əlaqə saxla</button>
          </div>

          <div className='desktopImg'>
          <img src={HomeImg.Mask1} />
          </div>

        </div>

        <div className='home-slayd'>
         <Slider {...settings}>
          <div> <img src={HomeImg.Frame68} /></div>
         </Slider>
        </div>


        <div className='article-hm2'>
          <div className='desktopImg'><img src={HomeImg.Mask2} /></div>

          <div className='texts'>
            <div>
              <h1>Haqqımızda</h1>
            </div>

            <div>
              <p className='desktopImg'>Şirkət olaraq 2012-ci ildə ilk başda təchizat sahəsində <br />
                fəaliyyətə başldıq. Qısa zamanda, yəni 2016-ci ildə, tikinti <br />
                sahəsində yüksək uğurlar və etibar qazanarıq, bəzi yaşayış <br />
                və qeyri-yaşayış binaların təchizi ilə bərabər tikintisini də biz <br /> etdik.
                Hal-hazırda şirkətimiz idxal ilə də məşğuldur.</p>

                <p className='mobileImg'>Şirkət olaraq 2012-ci ildə ilk başda təchizat sahəsində
                fəaliyyətə başldıq. Qısa zamanda, yəni 2016-ci ildə, tikinti 
                sahəsində yüksək uğurlar və etibar qazanarıq, bəzi yaşayış 
                və qeyri-yaşayış binaların təchizi ilə bərabər tikintisini də biz  etdik.
                Hal-hazırda şirkətimiz idxal ilə də məşğuldur.</p>

              <button className='btn-click'>Ətraflı </button>

            </div>

            <div className='mobileImg'><img src={HomeImg.Mask2} /></div>
          </div>
        </div>

        <div className='homeInfo'>
          <div>
            <h1>200+</h1>
            <p>MƏMNUN MÜŞTƏRİ</p>
          </div>

          <div>
            <h1>10</h1>
            <p>LAHİYƏ SAYI</p>
          </div>
        <hr className='left'/>
       <hr className='center'/>
            <div>
              <h1 >130</h1>
              <p>MƏHSUL ÇEŞİDİ</p>
            </div>

            <div>
              <h1 >16</h1>
              <p>ÖLKƏDƏN MƏHSUL İDXALI</p>
            </div>
          
        </div>

        <div className='article-hm3'>
          <h1>NİYƏ BİZİ <br /> SEÇMƏLİSİNİZ?</h1>

          <div className='choose'>

            <div className='chooseInfo'>
              <img src={Award1} />
              <div>
                <h2><Link>YÜKSƏK KEYFİYYƏT</Link></h2>
                <p>Həm Asiya, həm də Avropanın bir çox ölkələrindən <br />
                  inşaat materialları və xırdavat idxal edir, müştərilərimiz <br /> üçün
                  yüksək keyfiyyətli xidmətlər təklif edirik.</p>
              </div>
            </div>

            <div className='ox'><Link> <img src={Group33} /></Link></div>
          </div>

          <div className='choose'>
            <div className='chooseInfo'>
              <img src={Rating1} />
              <h2><Link>MÜŞTƏRİ YÖNÜMLÜ XİDMƏT</Link></h2>
            </div>
            <div className='ox'><Link> <img src={Group34} /></Link></div>
          </div>

          <div className='choose'>
            <div className='chooseInfo'>
              <img src={Diamond1} />
              <h2><Link>DAVAMLI İNKİŞAF</Link></h2>
            </div>
            <div className='ox'><Link> <img src={Group34} /></Link></div>
          </div>

        </div>

        <div className='article-hm4'>
          <div className='production'>
            <div >
              <h1>BİZİM <br /> MƏHSULLAR</h1>
              <p>Biz bütün məhsullarımız və müştərilərə limitsiz xidmət <br />
                təklifi ilə bazara çıxmağı bacarmış köklü və təcrübəli <br />
                bir qurumuq.</p>
              <button className='btnn-click'>Ətraflı bax </button>
            </div>

            <div className='child'>
              <img src={HomeImg.Mask3} />
              <p>Setka Fasad</p>
              <hr />
            </div>
            <div className='child'>
              <img src={HomeImg.Mask4} />
              <p>Drel</p>
              <hr style={{ width: "334px" }} />
            </div>
            <div className='child'>
              <img src={HomeImg.Mask5} />
              <p>3-lü Priz</p>
              <hr style={{ width: "430px" }} />
            </div>
          </div>
        </div>

        <div className='lahiye'>
        <h1>LAYİHƏLƏR</h1>
           <button className='btn-click'>Ətraflı bax </button>
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

        </div>

      </div>
    </div>
  );
}

export default Home;

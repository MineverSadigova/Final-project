import React from 'react';
import '../../../assets/css/about/about.scss';
import aboutImage from '../../image/about/aboutImage';
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div className='custom_container'>
        <Helmet>
        <title>Haqqımızda</title>
        <meta name="description" content="Favelli makaronlari" />
      </Helmet>
      <div className='aboutSection'>
        <div className='section-ab1'>
          <h1>ŞİRKƏTİMİZ BIR ÇOX ÖLKƏLƏRDƏN <br /> İNŞAAT MATERİALLARI VƏ XIRDAVAT</h1>
          <img src={aboutImage.stack1} />
          <p>Şirkət olaraq 2012-ci ildə ilk başda təchizat sahəsində fəaliyyətə başldıq. Qısa zamanda,<br />
            yəni 2016-ci ildə, tikinti sahəsində yüksək uğurlar və etibar qazanarıq bəzi yaşayış və <br />
            qeyri-yaşayış binaların təchizi ilə bərabər tikintisini də biz etdik. Hal-hazırda şirkətimiz <br />
            idxal ilə də məşğuldur. Həm Asiya, həm də Avropanın bir çox ölkələrindən, Türkiyə,<br />
            Rusiya, Çin, Almanya və Danimarkadan inşaat materialları və xırdavat idxal edir.<br />
            Məqsədimiz şirkət olaraq etibarınızı qazanmaq və önümüzdə daha böyük işlər görməklə <br />
            sizlərə xidmət etməkdir.</p>

        </div>

        <div className=' section-ab2 row'>
          <div className='col-lg-3 col-sm-6 col-12 companyBorder ' >   <h1 className='company'>ŞİRKƏT OLARAQ <br /> ƏSAS <br /> DƏYƏRLƏRİMİZ <br /> BUNLARDIR</h1> </div>
          <div className='number-ab col-lg-3 col-sm-6 col-12'>
            <div className=' align-items-center justify-content-start'>
              <h1 >1</h1>
              <p>Müştəri yönümlü, uzunmüddətli <br />düşüncə və müştərilər üçün dəyər <br /> yaratmaq</p>
            </div>
            
          </div>


          <div className='number-ab col-lg-3 col-sm-6 col-12 '>
            <div className=''>
              <h1>1</h1>
              <p>Müştəri yönümlü, uzunmüddətli <br />düşüncə və müştərilər üçün dəyər <br /> yaratmaq</p>
            </div>
           
          </div>

          <div className='number-ab col-lg-3 col-sm-6 col-12 '>
            <div className=''>
              <h1>1</h1>
              <p>Müştəri yönümlü, uzunmüddətli <br />düşüncə və müştərilər üçün dəyər <br /> yaratmaq</p>
            </div>
           
          </div>



        </div>

        <div className='section-ab3'>
          <div><img src={aboutImage.stack2} /></div>
          <div className='vision'>
            <img src={aboutImage.stack3} />
            <h1>VİZYONUMUZ</h1>
            <p>İnşaat sektorunda etibarlı, məsuliyyətli, fədakar, prinsipial, ən <br />
              çox seçilən təchizatçı ünvanını inkişaf etdirərək, müştəri<br />
              məmnuniyyətini daim artıran, texnoloji inkişafları və yenilikləri <br />
              izləyən, daim yenilənən, sektorda nümunə götürülən və təqib<br />
              edilən bir şirkət olmaq.</p>
          </div>
        </div>

        <div className='section-ab4'>
          <div className='vision'>
            <img src={aboutImage.stack4} />
            <h1>MİSSİZAMIZ</h1>
            <p>Təhlükəsiz, yüksək keyfiyyətli və sərfəli tikinti proyektlərinin <br />
              layihələndirilməsi, tikintisi və başa çatdırılması;<br />
              Müştərilərimizlə razılaşdırılmış iş proqramına riayət etmək;<br />
              bütün bunları həyata keçirərkən 5A Construction işçilərinin <br />
              karyera inkişafına kömək etməkdir.</p>
          </div>
          <div><img src={aboutImage.stack5} /></div>

        </div>

      </div>
    </div>
  )
}

export default About
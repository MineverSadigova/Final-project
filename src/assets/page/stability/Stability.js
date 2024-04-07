import React from 'react'
import '../../css/stability/stability.scss';
import stability1 from '../../image/stability/stability1.png';
import stability2 from '../../image/stability/stability2.png';
import { Helmet } from 'react-helmet';

const Stability = () => {
    return (
        <div className='custom_container'>
              <Helmet>
        <title>Dayanıqlılıq</title>
        <meta name="description" content="Favelli makaronlari" />
      </Helmet>
            <div className=' stabilitySection'>
                <div className='section-st1'>

                    <div className='senaye'>
                        <h1>İNŞAAT SƏNAYESİNDƏ DAVAMLILIQ <br />
                         SİYASƏTİ İLƏ ADDIM-ADDIM <br />GƏLƏCƏYƏ DOĞRU</h1>
                        <img src={stability1} />

                    </div>

                    <div className='sosial'>
                        <div >
                            <p>Biz təbii, sosial və iqtisadi səviyyədə ətraf mühitimizə qarşı <br />
                                məsuliyyətli fəaliyyətin vacibliyinə inanırıq. Biz aşağı karbonlu <br />
                                iqtisadiyyata keçidi asanlaşdırmaq üçün mövcud imkanlardan <br />
                                istifadə edirik. Müasir davamlılıq təşəbbüsü həm yeni binaların <br />
                                tikintisini, həm də mövcud binaların təkmilləşdirilməsini əhatə <br />
                                edən bir yanaşmadır. Davamlı dizayn kimi də tanınan bu <br />
                                yanaşmanın məqsədi binanın həyat dövrü ilə dizayn təcrübələri <br />
                                arasında sinergiya yaratmaqdır.</p>
                        </div>
                        <div>
                            <p>
                                5A Construction şirkəti olaraq davamlılıq siyasətinə tövhəmizi <br />
                                veririk. Məqsədimiz yüksək səviyyəli istehsalçılarla əməkdaşlıq <br />
                                etmək və ətraf mühitə təsirimizi minimuma endirmək üçün <br />
                                proaktiv yanaşma nümayiş etdirməkdir.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='section-st2'>

                    <div className='muhit'>
                        <h1>ƏTRAF MÜHİTƏ QARŞI MƏSULİYYƏTLİ<br />
                         VƏALİYYƏTİN VACİBLİYİNƏ İNANIRIQ</h1>
                        <img src={stability2} />

                    </div>

                    <div className='bacariq'>
                        
                            <p>Şirkətimizin prosesləri, texnologiyanı və bacarıqları özündə <br/>
                             birləşdirən risklərin idarə edilməsi və inzibati infrastrukturu var. <br/>
                             Biz bütün tərəfdaşlarımızın və onların müştərilərinin təhlükəsizliyini, <br/>
                             ehtiyac duyduqları məhsulları və eləcə də bizə etibar etmələri üçün <br/>
                             bütün imkanları təmin edirik</p>
                        
                      
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Stability
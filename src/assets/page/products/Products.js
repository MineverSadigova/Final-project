import React from 'react'
import '../../css/products/products.scss'
import productsImg from '../../image/products/productsImg'
import { Helmet } from 'react-helmet';

const Products = () => {
    return (
        <div className='custom_container'>
              <Helmet>
        <title>Məhsullar</title>
        <meta name="description" content="Favelli makaronlari" />
      </Helmet>
            <div className='sectionPr1'>
                <h1>MƏHSULLARIMIZ</h1>
                <div className='productsImage'>
                    <div>
                        <img src={productsImg.Untitled2} />
                        <p>Elkay Qranit</p>

                    </div>

                    <div>
                        <img src={productsImg.Untitled3} />
                        <p>Elkay Qranit </p>
                    </div>

                </div>
                <div className='limitsiz'>
                    <p >Biz bütün məhsullarımız və müştərilərə limitsiz xidmət təklifi ilə <br />
                        bazara çıxmağı bacarmış köklü və təcrübəli bir qurumuq. Müasir, <br />
                        günbəgün inkişaf edən və müştəri gözləntilərini qarşılamağa çalışan <br />
                        5A Construction müştərilərinə keyfiyyətli və sərfəli məhsullar <br />
                        təqdim etmək prinsipini üzərinə götürüb.</p>
                </div>

            </div>

            <div className='sectionPr2'>
                <div className='productsImage'>
                    <div>
                        <img src={productsImg.Untitled4} />
                        <p>Elektrik Uzadıcı</p>

                    </div>

                    <div>
                        <img src={productsImg.Untitled5} />
                        <p>Rolik</p>

                    </div>

                    <div>
                        <img src={productsImg.Untitled6} />
                        <p>3-lü Priz</p>

                    </div>
                </div>

                <div className='productsImage'>
                    <div>
                        <img src={productsImg.Untitled7} />
                        <p>Elektrik ləvazimatları</p>

                    </div>

                    <div>
                        <img src={productsImg.Untitled8} />
                        <p>Drel</p>

                    </div>

                    <div>
                        <img src={productsImg.Untitled9} />
                        <p>Şüşə Təmizləyən Bıçaq</p>

                    </div>
                </div>

                <div className='idxal'>
                    <p>Məhsullarımız həm Avropa, həm də Asiya ölkələrindən idxal edilir. <br />
                        Təcrübə, qiymət və keyfiyyət baxımından olduğumuz sektorda ən <br />
                        qabaqcıl şirkətlərdən hesab olunuruq. Məhsullarımız haqqında <br />
                        ətraflı məlumatı həm saytımızdan, həm də mağazamıza <br />
                        yaxınlaşaraq əldə edə bilərsiniz.</p>
                </div>


            </div>


            <div className='sectionPr3'>

                <div className='productsImage'>
                    <div>
                        <img src={productsImg.Untitled10} />
                        <p>Bel</p>

                    </div>

                    <div>
                        <img src={productsImg.Untitled11} />
                        <p>İnşaat Arabası</p>

                    </div>

                </div>

                <div className='productsImage'>
                    <div>
                        <img src={productsImg.Untitled12} />
                        <p>Setka Fasad</p>

                    </div>

                    <div>
                        <img src={productsImg.Untitled13} />
                        <p>Şpatel</p>

                    </div>

                </div>
                <div className='productsImage'>
                    <div>
                        <img src={productsImg.Untitled14} />
                        <p>Təkər Araba</p>

                    </div>

                    <div>
                        <img src={productsImg.Untitled15} />
                        <p>Maket Bıçağı</p>

                    </div>

                    <div>
                        <img src={productsImg.Untitled16} />
                        <p>Çəkic</p>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Products
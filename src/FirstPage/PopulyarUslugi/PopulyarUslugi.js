import React from 'react';
import './PopulyarUslugi.css';
import U1 from './img/pu_1.png';
import U2 from './img/pu_2.png';
import U3 from './img/pu_3.png';
import U4 from './img/pu_4.png';
import U5 from './img/pu_5.png';
import U6 from './img/pu_6.png';
const PopulyarUslugi = () => {
    return (
        <div>
            <div className="clearfix"></div>
            <h2>Наши цены<br />На популярные услуги</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="Populyarnye_uslugi col-12 	col-sm-6 col-md-6  col-lg-4">
                        <img src={U1} alt="Популярные услуги_1" />
                    </div>
                    <div className="Populyarnye_uslugi col-12 	col-sm-6 col-md-6  col-lg-4">
                        <img src={U2} alt="Популярные услуги_2" />
                    </div>
                    <div className="Populyarnye_uslugi col-12 	col-sm-6 col-md-6  col-lg-4">
                        <img src={U3} alt="Популярные услуги_3" />
                    </div>
                    <div className="Populyarnye_uslugi col-12 	col-sm-6 col-md-6  col-lg-4">
                        <img src={U4} alt="Популярные услуги_4" />
                    </div>
                    <div className="Populyarnye_uslugi col-12 	col-sm-6 col-md-6  col-lg-4">
                        <img src={U5} alt="Популярные услуги_5" />
                    </div>
                    <div className="Populyarnye_uslugi col-12 	col-sm-6 col-md-6  col-lg-4">
                        <img src={U6} alt="Популярные услуги_6" />
                    </div>

                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    )

}

export default PopulyarUslugi;

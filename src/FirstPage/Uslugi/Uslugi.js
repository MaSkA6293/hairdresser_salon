import React from 'react';
import './Uslugi.css';
import U1 from './img/Uslugi_1.png';
import U2 from './img/Uslugi_2.png';
import U3 from './img/Uslugi_3.png';
import U4 from './img/Uslugi_4.png';
const Uslugi = () => {
    return (
        <div>
            <div className="clearfix"></div>
            <h2>Услуги нашего салона</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="Uslugi col-12 	col-sm-6 col-md-6  col-lg-3">
                        <img src={U1} alt="Услуги_1" />
                    </div>
                    <div className="Uslugi col-12 	col-sm-6 col-md-6  col-lg-3">
                        <img src={U2} alt="Услуги_2" />
                    </div>
                    <div className="Uslugi col-12 	col-sm-6 col-md-6  col-lg-3">
                        <img src={U3} alt="Услуги_3" />
                    </div>
                    <div className="Uslugi col-12 	col-sm-6 col-md-6  col-lg-3">
                        <img src={U4} alt="Услуги_4" />
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>

    )

}

export default Uslugi;

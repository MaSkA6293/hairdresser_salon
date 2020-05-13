import React from 'react';
import './OurPartner.css';
import P1 from './img/L_1.png';
import P2 from './img/L_2.png';
const OurPartner = () => {
    return (
        <div>
            <div className="clearfix"></div>

            <h2>Наши партнеры</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="Partner col-4 	col-sm-6 col-md-4  col-lg-2">
                        <img src={P1} alt="Лейбл_1" />
                    </div>
                    <div className="Partner col-4 	col-sm-6 col-md-4  col-lg-2">
                        <img src={P2} alt="Лейбл_2" />
                    </div>
                    <div className="Partner col-4 	col-sm-6 col-md-4  col-lg-2">
                        <img src={P1} alt="Лейбл_1" />
                    </div>
                    <div className="Partner col-4 	col-sm-6 col-md-4  col-lg-2">
                        <img src={P2} alt="Лейбл_2" />
                    </div>
                    <div className="Partner col-4 	col-sm-6 col-md-4  col-lg-2">
                        <img src={P1} alt="Лейбл_1" />
                    </div>
                    <div className="Partner col-4 	col-sm-6 col-md-4  col-lg-2">
                        <img src={P2} alt="Лейбл_2" />
                    </div>
                </div>
            </div>



            <div className="clearfix"></div>
        </div>

    )
}


export default OurPartner;

import React from 'react';
import { Helmet } from "react-helmet";

import './Ourwork.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import i1 from './img/2_1.png';
import i2 from './img/2_2.png';
import i3 from './img/2_3.png';
import i4 from './img/3_1.png';
import i5 from './img/3_2.png';
import i6 from './img/3_3.png';
import i7 from './img/4_1.png';
import i8 from './img/5_1.png';
import i9 from './img/5_2.png';

const Pageourwork = () => {

    const settings = {
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: false,
        mobileFirst: true,
        dots: true,
    }
    return (
        <div className="slider">

            <Helmet>
                <meta charSet="utf-8" />
                <title>Салон красоты Елена</title>
                <meta name="description"
                    content="Салон красоты Елена. Наши работы." />
                <meta name="Keywords"
                    content="Елена,Парикмахерская Рыбное,Салон красоты Рыбное,Салон красоты, Парикмахерская"></meta>
            </Helmet>
            <Slider {...settings}>
                <div className="slider">
                    <img className="img-responsive" src={i1} alt="our interjer" />
                </div>
                <div>
                    <img className="img-responsive" src={i2} alt="our interjer" />
                </div>
                <div>
                    <img className="img-responsive" src={i3} alt="our interjer" />
                </div>
                <div >
                    <img className="img-responsive" src={i4} alt="our interjer" />
                </div>
                <div >
                    <img className="img-responsive" src={i5} alt="our interjer" />
                </div>
                <div >
                    <img className="img-responsive" src={i6} alt="our interjer" />
                </div>
                <div >
                    <img className="img-responsive" src={i7} alt="our interjer" />
                </div>
                <div >
                    <img className="img-responsive" src={i8} alt="our interjer" />
                </div>
                <div >
                    <img className="img-responsive" src={i9} alt="our interjer" />
                </div>
            </Slider>
        </div>

    )
}


export default Pageourwork;

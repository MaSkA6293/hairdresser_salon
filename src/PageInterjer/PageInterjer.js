import React from 'react';
import { Helmet } from "react-helmet";

import './PageInterjer.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import i1 from './img/interjer_1.png';
import i2 from './img/interjer_2.png';
import i3 from './img/interjer_3.png';
import i4 from './img/interjer_4.png';
import i5 from './img/interjer_5.png';
import i6 from './img/interjer_6.png';
import i7 from './img/interjer_7.png';
import i8 from './img/interjer_8.png';
import i9 from './img/interjer_9.png';

const PageInterjer = () => {
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
    };
    return (
        <div className="slider">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Салон красоты Елена</title>
                <meta name="description"
                    content="Салон красоты Елена. Наш интерьер." />
                <meta name="Keywords"
                    content="Елена,Парикмахерская Рыбное,Салон красоты Рыбное,Салон красоты, Парикмахерская"></meta>
            </Helmet>
            < Slider {...settings}>
                <div>
                    <img className="img-responsive" src={i1} alt="our interjer" />
                </div>
                <div>
                    <img className="img-responsive" src={i2} alt="our interjer" />
                </div>
                <div>
                    <img className="img-responsive" src={i3} alt="our interjer" />
                </div>
                <div>
                    <img className="img-responsive" src={i4} alt="our interjer" />
                </div>
                <div>
                    <img className="img-responsive" src={i5} alt="our interjer" />
                </div>
                <div>
                    <img className="img-responsive" src={i6} alt="our interjer" />
                </div>
                <div>
                    <img className="img-responsive" src={i7} alt="our interjer" />
                </div>
                <div>
                    <img className="img-responsive" src={i8} alt="our interjer" />
                </div>
                <div>
                    <img className="img-responsive" src={i9} alt="our interjer" />
                </div>

            </Slider >
        </div >

    )
}

export default PageInterjer;

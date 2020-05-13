import React from 'react';
import { Helmet } from "react-helmet";

import './Action.css';
import a1 from './img/action_1.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Action = () => {
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
                    content="Акции салона красоты Елена" />
                <meta name="Keywords"
                    content="Елена,Парикмахерская Рыбное,Салон красоты Рыбное,Салон красоты, Парикмахерская"></meta>
            </Helmet>
            < Slider {...settings}>
                <div>
                    <img className="img-responsive" src={a1} alt="action" />
                </div>
            </Slider >
        </div >

    )
}


export default Action;

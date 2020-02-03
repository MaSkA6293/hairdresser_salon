import React, { Component } from 'react';
import './Action.css';
import a1 from './img/action_1.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
class Action extends Component {
    render() {
        var settings = {
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
                < Slider {...settings}>
                    <div>
                        <img className="img-responsive" src={a1} alt="action" />
                    </div>
                </Slider >
            </div >

        )
    }
}

export default Action;

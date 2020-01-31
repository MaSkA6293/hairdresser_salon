import React, { Component } from 'react';
import './header.css';
import ok from './img/ok.png';
import vk from './img/vk.png';
import inst from './img/inst.png';
import elena from './img/elena.png';
import map from './img/map.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const phone = <FontAwesomeIcon icon={faPhone} />
const clock = <FontAwesomeIcon icon={faClock} />
class Header extends Component {
    render() {
        return (
            <div>
                <div className="Golova">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="menu col-12 col-md-8 col-lg-9 " >
                                <a href="Price.php"> Цены</a> |
                                  <a href="otzyvy.php"> Отзывы</a> |
                                    <a href="https://www.instagram.com/elenavitikh/" target="_blank">Мы в Инстаграмм</a>
                            </div>
                            <div className="imagessylki col-12 col-md-4  col-lg-3  ">
                                <a href="https://ok.ru" target="_blank"> <img src={ok} alt="Одноклассники" /></a>
                                <a href="https://vk.com/" target="_blank"> <img src={vk} alt="В контакте" /></a>
                                <a href="https://www.instagram.com/" target="_blank"> <img src={inst} alt="Инстаграмм" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="Block_1 col-12 col-md-6 col-lg-4">
                            <a href="index.php" > <img src={elena} alt='' className="img-fluid" /> </a>
                        </div>
                        <div className="Block_2 col-12 col-md-6 col-lg-4">
                            <i className="fa fa-phone" aria-hidden="true">{phone}</i>+7 (952) 126 15 27<br />
                            <i className="fa fa-phone" aria-hidden="true">{phone}</i>+7 (920) 631 31 41<br />
                            <i className="fa fa-clock-o" aria-hidden="true"></i>{clock}ПН-ВС 09:00-18:00
                             </div>
                        <div className="Block_3 col-12 col-md-12 col-lg-4 col-lg-4">
                            <img src={map} alt='' />Рыбное,<br /> Крымская 13<br />
                            <button id="zapisatsya" type="button" className="btn btn-success" onClick={this.props.openForm}  >Записаться</button>
                        </div>
                    </div>
                </div>
                <div className="clearfix" />
            </div>

        )
    }
}

export default Header;

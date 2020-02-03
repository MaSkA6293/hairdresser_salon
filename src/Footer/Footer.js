import React, { Component } from 'react';
import './Footer.css';
import ok from './img/ok.png';
import vk from './img/vk.png';
import inst from './img/inst.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Iframe from 'react-iframe';
const phone = <FontAwesomeIcon icon={faPhone} />
const clock = <FontAwesomeIcon icon={faClock} />
let nowdata = new Date().getFullYear();
class Footer extends Component {
    render() {
        return (
            <div>
                <div className="clearfix"></div>
                <div className="container-fluid footer">
                    <div className="row">
                        <div className="contakty_foot col-md-5 col-lg-4">
                            <h4>Контакты</h4>
                            <i>{phone}</i>+7 (952) 126 15 27<br />
                            <i>{phone}</i>+7 (920) 631 31 41<br />
                            <i className="fa fa-clock-o" aria-hidden="true">{clock}</i>ПН-ВС 09:00-18:00<br />
                            <div className="imagessylki_footer">
                                <a href="https://www.instagram.com/" target="_blank"> <img src={inst} alt="Инстаграмм" /></a>
                                <a href="https://vk.com/" target="_blank"> <img src={vk} alt="В контакте" /></a>
                                <a href="https://ok.ru" target="_blank"> <img src={ok} alt="Одноклассники" /></a>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="foot_menu  col-md-7 col-lg-3" >
                            <h4>Меню</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><a href="/" title="Главная страница">Главная</a> </li>
                                <li className="list-group-item"><a href="/Interjer" title="Интерьер">Наш интерьер</a></li>
                                <li className="list-group-item"><a href="/Ourwork" title="Наши работы">Наши работы</a></li>
                                <li className="list-group-item"><a href="/Ouraction" title="Акции">Акции</a></li>
                                <li className="list-group-item"><a href="/Jobs" title="Вакансии">Вакансии</a></li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-12 col-lg-4" >
                            <h4>Мы на <span id="Blueletter">G</span>oogle карте</h4>
                            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5479.803019726746!2d39.49748573575251!3d54.72768345477561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4149ff4adb120fd7%3A0xabb56f335e04a841!2z0KHQsNC70L7QvSDQutGA0LDRgdC-0YLRiyDQldC70LXQvdCw!5e0!3m2!1sru!2sru!4v1580551379766!5m2!1sru!2sru"
                                width="450px"
                                height="300px"
                                id="myId"
                                className="Gmap"
                                display="initial"
                                position="relative" />

                        </div>
                    </div>
                </div>


                <div className="clearfix"></div>


                <div className="clearfix"></div>
                <div className="final">  Copyright © "2017 - {nowdata}  <a href="/">Елена - салон красоты Рыбное Крымская 13</a></div>
            </div>

        )
    }
}

export default Footer;

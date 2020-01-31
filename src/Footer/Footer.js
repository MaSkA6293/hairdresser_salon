import React, { Component } from 'react';
import './Footer.css';
import ok from './img/ok.png';
import vk from './img/vk.png';
import inst from './img/inst.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const phone = <FontAwesomeIcon icon={faPhone} />
const clock = <FontAwesomeIcon icon={faClock} />

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="clearfix"></div>
                <div className="container-fluid footer">
                    <div className="row">
                        <div className="contakty_foot col-md-5 col-lg-4">
                            <h4>Контакты</h4>
                            <i className="fa fa-phone" aria-hidden="true">{phone}</i>+7 (952) 126 15 27<br />
                            <i className="fa fa-phone" aria-hidden="true">{phone}</i>+7 (920) 631 31 41<br />
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
                                <li className="list-group-item"><a href="index.php" title="Главная страница">Главная</a> </li>
                                <li className="list-group-item"><a href="nash_interjer.php" title="Интерьер">Наш интерьер</a></li>
                                <li className="list-group-item"><a href="nashi_raboty.php" title="Наши работы">Наши работы</a></li>
                                <li className="list-group-item"><a href="Ubojnoe_predlozhenie.php" title="Акции">Акции</a></li>
                                <li className="list-group-item"><a href="vacansii.php" title="Вакансии">Вакансии</a></li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                        <div className="yandex_map  col-md-12 col-lg-4" >
                            <h4>Мы на <span id="redletter">Я</span>ндекс карте</h4>
                            <script type="text/javascript" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acb4d8a516e60ef0b59c81309abd1b43cf4f013ec27fd039cfc8ad20de9f8299b&amp;width=100%&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
                        </div>
                    </div>
                </div>


                <div className="clearfix"></div>
            </div>

        )
    }
}

export default Footer;

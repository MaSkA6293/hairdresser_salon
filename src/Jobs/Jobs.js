import React from 'react';
import { Helmet } from "react-helmet";

import './Jobs.css';

const Jobs = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Салон красоты Елена</title>
                <meta name="description"
                    content="Салон красоты Елена. Наши работы" />
                <meta name="Keywords"
                    content="Елена,Парикмахерская Рыбное,Салон красоты Рыбное,Салон красоты, Парикмахерская"></meta>
            </Helmet>
            <div className="clearfix"></div>
            <div className="vacansii">Наш большой и очень дружный салон растет и мы открыли набор новых специалистов!<br />
                    Если вы сильный и опытный парикмахер или только делаете первые шаги в бьюти индустрии то обязательно звоните нам!<br />
                    Условия работы обсуждаются индивидуально.<br />
                <i className="fa fa-phone" aria-hidden="true">+7(952)1261527</i>
            </div>
            <div className="vacansii">
                <h2>Вакансии</h2>
                <span id="professiya">Парикмахер</span><br />
                <span>Формат:</span> универсал<br />
                <span>Место работы:</span> г.Рыбное, Крымская 13<br />
                <span>Требования:</span> Профессионализм, коммуникабельность, желание учиться<br />
                <span>Навыки:</span> Классические, модельные: мужская, женская, детская стрижки <br />
                <span>Условия оплаты труда:</span>
                <ul>
                    <li>Сменнный график работы</li>
                    <li>Стабильная заработная плата + % от продаж косметики</li>
                    <li>Оформление по ТК РФ</li>
                    <li>Программа обучения и повышения квалификации</li>
                </ul>
                <hr />
                <span>У нас отличные условия труда для профессионального роста:</span>
                <ul>
                    <li>Молодой коллектив</li>
                    <li>Достойная зарплата</li>
                    <li>Оформление по ТК</li>
                    <li>Возможен гибкий график работы</li>
                </ul>
            </div>
            <div className="clearfix"></div>
        </div>

    )
}


export default Jobs;

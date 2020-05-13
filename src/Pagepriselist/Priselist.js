import React from 'react';
import './Priselist.css';
import { Helmet } from "react-helmet";

const Pagepriselist = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Салон красоты Елена</title>
                <meta name="description"
                    content="Салон красоты Елена. Прайс лист на услуги." />
                <meta name="Keywords"
                    content="Елена,Парикмахерская Рыбное,Салон красоты Рыбное,Салон красоты, Парикмахерская"></meta>
            </Helmet>
            <div className="table_container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className="zagolovok_price">Стрижки</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Женская стрижка (длина волос до 20 см)</td>
                            <td className="price_color">500&#8381;</td>
                        </tr>
                        <tr>
                            <td>Женская стрижка (длина волос от 20 см до 30 см)</td>
                            <td className="price_color">550&#8381;</td>
                        </tr>
                        <tr>
                            <td>Женская стрижка (длина волос от 30 см)</td>
                            <td className="price_color">600&#8381;</td>
                        </tr>
                        <tr>
                            <td>Оформление длины волос одним срезом (кончики)</td>
                            <td className="price_color">300&#8381;</td>
                        </tr>
                        <tr>
                            <td>Мужская стрижка</td>
                            <td className="price_color">300&#8381;</td>
                        </tr>
                        <tr>
                            <td>Мужская стрижка модельная</td>
                            <td className="price_color">400&#8381;</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col" className="zagolovok_price">Окрашивание</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ESTEL окрашивание в один тон (длина волос до 20 см)</td>
                            <td className="price_color">1000&#8381;</td>
                        </tr>
                        <tr>
                            <td>ESTEL окрашивание в один тон (длина волос от 20 см до 30 см)</td>
                            <td className="price_color">1400&#8381;</td>
                        </tr>
                        <tr>
                            <td>ESTEL окрашивание в один тон (длина волос от 30 см)</td>
                            <td className="price_color">1800&#8381;</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col" className="zagolovok_price">Креативное окрашивание (работа без учета краски)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>длина волос до 20 см</td>
                            <td className="price_color">1000&#8381;</td>
                        </tr>
                        <tr>
                            <td>длина волос от 20 см до 30 см</td>
                            <td className="price_color">2000&#8381;</td>
                        </tr>
                        <tr>
                            <td>длина волос от 30 см</td>
                            <td className="price_color">2500&#8381;</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col" className="zagolovok_price">Мелирование</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>длина волос до 20 см</td>
                            <td className="price_color">1000&#8381;</td>
                        </tr>
                        <tr>
                            <td>длина волос от 20 см до 30 см</td>
                            <td className="price_color">1500&#8381;</td>
                        </tr>
                        <tr>
                            <td>длина волос от 30 см</td>
                            <td className="price_color">1500-3000&#8381;</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col" className="zagolovok_price">Биозавивка (стрижка + укладка)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>длина волос до 20 см</td>
                            <td className="price_color">1500&#8381;</td>
                        </tr>
                        <tr>
                            <td>длина волос от 20 см до 30 см</td>
                            <td className="price_color">2000&#8381;</td>
                        </tr>
                        <tr>
                            <td>длина волос от 30 см</td>
                            <td className="price_color">2500&#8381;</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col" className="zagolovok_price">Укладки</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Вечерняя укладка (длина волос до 20 см)</td>
                            <td className="price_color">500&#8381;</td>
                        </tr>
                        <tr>
                            <td>Вечерняя укладка (длина волос от 20 см до 30 см)</td>
                            <td className="price_color">700&#8381;</td>
                        </tr>
                        <tr>
                            <td>Вечерняя укладка (длина волос от 30 см)</td>
                            <td className="price_color">850&#8381;</td>
                        </tr>
                        <tr>
                            <td>Укладка волос на плойку</td>
                            <td className="price_color">300-1000&#8381;</td>
                        </tr>
                        <tr>
                            <td>Французская коса без укладочных средств</td>
                            <td className="price_color">500&#8381;</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col" className="zagolovok_price">Прически</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Вечерняя прическа</td>
                            <td className="price_color">1800-2500&#8381;</td>
                        </tr>
                        <tr>
                            <td>Свадебная прическа</td>
                            <td className="price_color">2500-3500&#8381;</td>
                        </tr>
                        <tr>
                            <td>Детская прическа</td>
                            <td className="price_color">1000-1500&#8381;</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col" className="zagolovok_price">Уход за бровями и ресницами</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Коррекция бровей</td>
                            <td className="price_color">300&#8381;</td>
                        </tr>
                        <tr>
                            <td>Окраска бровей, ресниц</td>
                            <td className="price_color">100&#8381;</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col" className="zagolovok_price">Уходы для волос</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SPA экранирование волос Q3 THERAPY Estel</td>
                            <td className="price_color">350&#8381;</td>
                        </tr>
                        <tr>
                            <td>SPA термокератин Estel Thermokeratin</td>
                            <td className="price_color">500&#8381;</td>
                        </tr>
                        <tr>
                            <td>Смывка для волос Estel Color Off </td>
                            <td className="price_color">1000&#8381;</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col" className="zagolovok_price">Новинки!</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Прикорневой объем волос "Boost up"</td>
                            <td className="price_color">2000-3000&#8381;</td>
                        </tr>
                        <tr>
                            <td>Выпрямление волос</td>
                            <td className="price_color">3500-6000&#8381;</td>
                        </tr>
                        <tr>
                            <td>Смывка для волос Estel Color Off </td>
                            <td className="price_color">1000&#8381;</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col" className="zagolovok_price">Услуги</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Мытье головы</td>
                            <td className="price_color">100&#8381;</td>
                        </tr>
                        <tr>
                            <td>Средства для укладки (мусс, воск, лак)</td>
                            <td className="price_color">100&#8381;</td>
                        </tr>
                        <tr>
                            <td>Окрашивание волос краской клиента (1 коробочка)</td>
                            <td className="price_color">500&#8381;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}


export default Pagepriselist;

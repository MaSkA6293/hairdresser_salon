import React, { useState } from 'react';
import './Write.css';
import validator from 'validator';
const Write = ({ closeWindow, stateform }) => {

    const [errorphonenumber, seterrorphonenumber] = useState('');
    const [errorname, seterrorname] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [showform, setshowform] = useState('block');
    const [timevalue, settimevalue] = useState('09:00');
    const [Flagerror1, setFlagerror1] = useState(true);
    const [Flagerror2, setFlagerror2] = useState(true);
    const [isValidPhone, setisValidPhone] = useState(false);
    // handler time write
    const handleChange = (e) => {
        settimevalue(e.target.value);
    }
    //handler name 2 Разрешено вводить только буквы
    const handleName2 = (e) => {
        var Reg6 = new RegExp("^[A-zА-яЁё]+$");
        if (!Reg6.test(e.key)) {
            e.preventDefault();
        }
    }
    //handler name
    const handleCheckname = (e) => {
        let name = e.target.value;
        if (!name) {
            seterrorname('Введите ваше имя');
            setFlagerror1(true);
        }
        else if (name.length > 3 & name.length < 10) {
            seterrorname('');
            setFlagerror1(false);
        }
        else {
            seterrorname('Имя должно содержать от 4 до 10 символов')
            setFlagerror1(true)
        }
    }
    // handler phone 2
    const handlePhone2 = (e) => {
        let val = e.target.value;
        if (validator.isMobilePhone(val, ['ru-RU'])) {
            // Изменил state
            setisValidPhone(true);
            setFlagerror2(false);
            seterrorphonenumber('');
            ;
        } else {
            seterrorphonenumber('Телефон в формате 8 900 300 20 20');
            setFlagerror2(true)
        }
    }
    // handler phone 1 ввод только цифр
    const handlePhone = (e) => {
        if (!/\d/.test(e.key)) {
            e.preventDefault();
        }
    }
    // handler Submit
    const handleSubmit = (e) => {
        if (!Flagerror1 & !Flagerror2) {
            e.preventDefault();
            alert('Вывод данных в консоль')
            console.log(`Имя: `, e.target.form.name.value);
            console.log(`Телефон: `, e.target.form.telefon.value);
            console.log(`Дата: `, e.target.form.date.value);
            console.log(`Время: `, e.target.form.time.value);
            console.log('Комментарии: ', e.target.form.textarea.value);


        }
        else {
            e.preventDefault();
            if (Flagerror1) {
                seterrorname('Имя должно содержать от 4 до 10 символов')
            }
            else if (Flagerror2) {
                seterrorphonenumber('Телефон в формате 8 900 300 20 20')
            }
        }
    }
    let style = {
        display: stateform,
    };
    return (
        <div>
            <div className="modal-wrapper" style={style} >
                <div className="zapis col-10 col-sm-7 col-md-5 col-lg-5">
                    <form id="form_zapis">
                        <button id="closeform" type="button" className="close" aria-label="Close" onClick={closeWindow}><span aria-hidden="true">&times;</span></button>
                        <div id="zayavka_zagolovok"> Данная форма является ЗАЯВКОЙ </div>
                        <span id="zagolovok2">Для подтверждения факта записи <br />мы Вам обязательно перезвоним!</span>
                        <div className="form-row">
                            <div className="form-group col-sm-12">
                                <label htmlFor='name'>Ваше имя</label>
                                <input type="text" id="name" className="form-control" name="name" placeholder="" onKeyDown={handleName2} onChange={handleCheckname} />
                                <div className="error-box">{errorname}</div>
                            </div>
                            <div className="form-group   col-sm-12  ">
                                <label htmlFor='phone'>Ваш телефон:</label>
                                <input type="tel" className="form-control" id="phone" placeholder="8 (900) 637 22 33" defaultValue={phonenumber} maxLength="11" name="telefon" onKeyPress={handlePhone} onInput={handlePhone2} />
                                <div className="error-box">{errorphonenumber}</div>
                            </div>

                            <div className="form-group col-sm-12">
                                <label htmlFor='data'>Укажите дату  </label>
                                <input id="data" type="date" className="form-control" name="date" />
                            </div>
                            <div className="form-group col-sm-12 ">
                                <label htmlFor='time'>Желаемое время</label>
                                <select id="time" className="form-control" size="1" name="time" value={timevalue} onChange={handleChange}>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                </select>
                            </div>
                            <div className="form-group col-sm-12">
                                <label htmlFor='uslugi'>Какие услуги вас интересуют</label>
                                <textarea id='areatext' className="form-control" rows="3" name="textarea" />

                                <div className="error-box"></div>
                            </div>
                        </div>
                        <input id="Otpravit" type="submit" className="btn btn-primary" onClick={handleSubmit} />
                    </form>
                </div>
                <div className="overlay" onClick={closeWindow}></div>
            </div >
            <div className="modal_ok">
                <div className="message_ok" >
                    <div id="message_text">Форма успешно отправлена<br />В ближайшее время<br />мы свяжемся с вами!</div><br />
                    <button id="uspeshnaya_otpravka" className="btn btn-primary" type="button" >Ок</button>
                </div>
            </div>


        </div >


    )
}

export default Write;
import React, { Component } from 'react';
import './Write.css';
class Write extends Component {
    handleChange = (e) => {
        console.log(e.target);
    }
    handleChangeTextArea = (e) => {
        console.log(e.target);
    }
    render() {
        return (
            <div>
                <div className="modal-wrapper">
                    <div className="zapis col-10 col-sm-7 col-md-5 col-lg-5">
                        <form id="form_zapis">
                            <button id="closeform" type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <div id="zayavka_zagolovok"> Данная форма является ЗАЯВКОЙ </div>
                            <span id="zagolovok2">Для подтверждения факта записи <br />мы Вам обязательно перезвоним!</span>
                            <div className="form-row">
                                <div className="form-group col-sm-12">
                                    <label htmlFor='name'>Ваше имя</label>
                                    <input type="text" id="name" className="form-control" name="name" placeholder="Иван Иванович" />
                                    <div className="error-box"></div>
                                </div>
                                <div className="form-group   col-sm-12  ">
                                    <label htmlFor='phone'>Ваш телефон:</label>
                                    <input type="tel" className="form-control" id="phone" placeholder="Телефон для связи" maxLength="12" name="telefon" />
                                    <div className="error-box"></div>
                                </div>

                                <div className="form-group col-sm-12">
                                    <label htmlFor='data'>Укажите дату  </label>
                                    <input id="data" type="date" className="form-control" name="date" />
                                </div>
                                <div className="form-group col-sm-12 ">
                                    <label htmlFor='time'>Желаемое время</label>
                                    <select id="time" className="form-control" size="1" name="time" value='09:00' onChange={this.handleChange}>
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
                                    <textarea value='message' onChange={this.handleChangeTextArea} />

                                    <div className="error-box"></div>
                                </div>
                            </div>
                            <input id="Otpravit" type="submit" className="btn btn-primary" defaultValue='Send' />
                        </form>
                    </div>
                    <div className="overlay"></div>
                </div>
                <div className="modal_ok">
                    <div className="message_ok" >
                        <div id="message_text">Форма успешно отправлена<br />В ближайшее время<br />мы свяжемся с вами!</div><br />
                        <button id="uspeshnaya_otpravka" className="btn btn-primary" type="button">Ок</button>
                    </div>
                </div>


            </div>


        )
    }
}
export default Write;
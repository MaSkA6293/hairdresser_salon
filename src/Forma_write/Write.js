import React, { Component } from 'react';
import './Write.css';
import validator from 'validator';
class Write extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errorphonenumber: '',
            phonenumber: '',
            showform: 'block',
            timevalue: '09:00',
            Flagerror1: true,
            Flagerror2: true,
        }
    }
    // handler time write
    handleChange = (e) => {
        this.setState({ timevalue: e.target.value });
    }
    //handler name 2 Разрешено вводить только буквы
    handleName2 = (e) => {
        var Reg6 = new RegExp("^[A-zА-яЁё]+$");
        if (!Reg6.test(e.key)) {
            e.preventDefault();
        }
    }
    //handler name
    handleCheckname = (e) => {
        let name = e.target.value;
        if (!name) {
            this.setState({ errorname: 'Введите ваше имя' });
            this.setState({ Flagerror1: true })
        }
        else if (name.length > 3 & name.length < 10) {
            this.setState({ errorname: '' });
            this.setState({ Flagerror1: false });
        }
        else {
            this.setState({ errorname: 'Имя должно содержать от 4 до 10 символов' })
            this.setState({ Flagerror1: true })
        }
    }
    // handler phone 2
    handlePhone2 = (e) => {
        let val = e.target.value;
        if (validator.isMobilePhone(val, ['ru-RU'])) {
            // Изменил state
            this.setState({
                isValidPhone: true,
                Flagerror2: false,
                errorphonenumber: '',
            });
        } else {
            this.setState({
                errorphonenumber: 'Телефон в формате 8 900 300 20 20',
                Flagerror2: true
            })
        }
    }
    // handler phone 1 ввод только цифр
    handlePhone = (e) => {
        if (!/\d/.test(e.key)) {
            e.preventDefault();
        }
    }
    // handler Submit
    handleSubmit = (e) => {
        if (!this.state.Flagerror1 & !this.state.Flagerror2) {
            e.preventDefault();
            console.log(e.target.form.name.value);
            console.log(e.target.form.telefon.value);
            console.log(e.target.form.date.value);
            console.log(e.target.form.time.value);
            console.log(e.target.form.textarea.value);
        }
        else {
            e.preventDefault();
            if (this.state.Flagerror1) {
                this.setState({ errorname: 'Имя должно содержать от 4 до 10 символов' })
            }
            else if (this.state.Flagerror2) {
                this.setState({
                    errorphonenumber: 'Телефон в формате 8 900 300 20 20'
                })
            }
        }
    }
    render() {
        let style = {
            display: this.props.stateform,
        };
        return (
            <div>
                <div className="modal-wrapper" style={style} >
                    <div className="zapis col-10 col-sm-7 col-md-5 col-lg-5">
                        <form id="form_zapis">
                            <button id="closeform" type="button" className="close" aria-label="Close" onClick={this.props.closeWindow}><span aria-hidden="true">&times;</span></button>
                            <div id="zayavka_zagolovok"> Данная форма является ЗАЯВКОЙ </div>
                            <span id="zagolovok2">Для подтверждения факта записи <br />мы Вам обязательно перезвоним!</span>
                            <div className="form-row">
                                <div className="form-group col-sm-12">
                                    <label htmlFor='name'>Ваше имя</label>
                                    <input type="text" id="name" className="form-control" name="name" placeholder="" onKeyDown={this.handleName2} onChange={this.handleCheckname} />
                                    <div className="error-box">{this.state.errorname}</div>
                                </div>
                                <div className="form-group   col-sm-12  ">
                                    <label htmlFor='phone'>Ваш телефон:</label>
                                    <input type="tel" className="form-control" id="phone" placeholder="8 (900) 637 22 33" defaultValue={this.state.phonenumber} maxLength="11" name="telefon" onKeyPress={this.handlePhone} onInput={this.handlePhone2} />
                                    <div className="error-box">{this.state.errorphonenumber}</div>
                                </div>

                                <div className="form-group col-sm-12">
                                    <label htmlFor='data'>Укажите дату  </label>
                                    <input id="data" type="date" className="form-control" name="date" />
                                </div>
                                <div className="form-group col-sm-12 ">
                                    <label htmlFor='time'>Желаемое время</label>
                                    <select id="time" className="form-control" size="1" name="time" value={this.state.timevalue} onChange={this.handleChange}>
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
                            <input id="Otpravit" type="submit" className="btn btn-primary" onClick={this.handleSubmit} />
                        </form>
                    </div>
                    <div className="overlay" onClick={this.props.closeWindow}></div>
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
}
export default Write;
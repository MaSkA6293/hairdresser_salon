import React, { Component } from 'react';
import './nav.css';
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.php" title="Главная">Главная <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="О салоне">
                                О салоне
                    </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="nashi_raboty.php" title="Наши работы">Наши работы</a>
                                <a className="dropdown-item" href="nash_interjer.php" title="Наш интерьер">Наш интерьер</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Ubojnoe_predlozhenie.php" title="Акции">Акцииbbbbbbbbbbbb</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="vacansii.php" title="Вакансии">Вакансии</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Price.php" title="Услуги и цены">Услуги и цены</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Nav;
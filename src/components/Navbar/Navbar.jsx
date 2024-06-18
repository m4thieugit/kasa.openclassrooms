import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

import logo from '../../assets/img/logo.svg';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="App-nav">
                <div className="App-nav-logo">
                <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="App-nav-links">
                <ul className="App-nav-list">
                    <li className="App-nav-list-link">
                        <NavLink to="/" activeClassName="active">Accueil</NavLink>
                    </li>
                    <li className="App-nav-list-link">
                        <NavLink to="/about" activeClassName="active">A propos</NavLink>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;

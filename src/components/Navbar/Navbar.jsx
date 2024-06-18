import { Component } from 'react';
import logo from '../../assets/img/logo.svg';
import './Navbar.scss';

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
                    <a href="/">Accueil</a>
                    </li>
                    <li className="App-nav-list-link">
                    <a href="/about">A propos</a>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;

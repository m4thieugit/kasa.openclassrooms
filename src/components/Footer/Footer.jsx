import { Component } from 'react';
import logo from '../../assets/img/logo-white.svg';
import './Footer.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <footer className="App-footer">
                <div className="App-footer-logo">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="App-footer-description">
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
        );
    }
}

export default Footer;

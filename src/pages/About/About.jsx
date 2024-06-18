import { Component } from 'react';
import './About.scss';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

import AboutBannerBackground from '../../assets/img/about_banner.png';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App-page">
                <header>
                    <Navbar></Navbar>
                    <Banner backgroundImage={AboutBannerBackground} textTitle={''}></Banner>
                </header>
                <Footer></Footer>
            </div>
        );
    }
}

export default About;

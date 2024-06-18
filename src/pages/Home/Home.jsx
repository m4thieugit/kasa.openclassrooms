import { Component } from 'react';
import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

import HomeBannerBackground from '../../assets/img/home_banner.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App-page">
                <header>
                    <Navbar></Navbar>
                    <Banner backgroundImage={HomeBannerBackground} textTitle={'Chez vous, partout et ailleurs'}></Banner>
                </header>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;

import { Component } from 'react';
import './About.scss';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
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
                <main>
                    <div class="App-collapses-container">
                        <Collapse title={'Fiabilité'} text={`Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.`}></Collapse>
                        <Collapse title={'Respect'} text={`La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`}></Collapse>
                        <Collapse title={'Service'} text={`La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`}></Collapse>
                        <Collapse title={'Sécurité'} text={`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`}></Collapse>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        );
    }
}

export default About;

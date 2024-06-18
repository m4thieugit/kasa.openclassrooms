import { Component } from 'react';
import './Page404.scss';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

class Page404 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App-page">
                <header>
                    <Navbar></Navbar>
                </header>
                <main>
                    <div className="App-main-content">
                        <h1 className="App-main-page-title">404</h1>
                        <p className="App-main-page-subtitle">Oups! La page que vous demandez n'existe pas.</p>
                        <a className="App-main-page-back-button" href="/" alt="Retourner à l'accueil">Retourner sur la page d’accueil</a>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        );
    }
}

export default Page404;

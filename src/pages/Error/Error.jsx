import './Error.scss';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function ErrorPage(props) {

    return (
        <div className="App-page">
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <div className="App-main-content">
                    <h1 className="App-main-page-title">500</h1>
                    <p className="App-main-page-subtitle">Oups! Une erreur est survenue.</p>
                    <a className="App-main-page-back-button" href="/" alt="Retourner à l'accueil">Retourner sur la page d’accueil</a>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;

import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './Lodgement.scss';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import data from '../../assets/data/logements.json';

function Lodgement(props) {
    const navigate = useNavigate();
    const { id } = useParams();

    const el = data.find((l) => l.id === id);

    useEffect(() => {
        if (!el) {
            return navigate('/404');
        }
    }, []);

    return (
        <div className="App-page">
            <header>
                <Navbar></Navbar>
                <Carousel pictures={el ? el.pictures : []}></Carousel>
            </header>
            <main>
                <h1>{id}</h1>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Lodgement;

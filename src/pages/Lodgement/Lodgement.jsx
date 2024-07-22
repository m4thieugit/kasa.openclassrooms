import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './Lodgement.scss';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import Tag from '../../components/Tag/Tag';
import Collapse from '../../components/Collapse/Collapse';
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
    }, [el, navigate]);

    if (!el) {
        return;
    }

    return (
        <div className="App-page">
            <header>
                <Navbar></Navbar>
                <Carousel pictures={el ? el.pictures : []}></Carousel>
            </header>
            <main>
                <div className='lodgement-main-content'>
                    <div className='lodgement-title-description'>
                        <h1 className='lodgement-title'>{el.title}</h1>
                        <p className='lodgement-location'>{el.location}</p>
                        <div className='lodgement-tags'>
                            {el.tags.map((tag, i) => 
                                <Tag key={i} name={tag}></Tag>
                            )}
                        </div>
                    </div>
                    <div className='lodgement-description-host-notation'>
                        <div className='lodgement-host'>
                            <h4 className='lodgement-host-name'>{el.host.name}</h4>
                            <img className='lodgement-host-image' src={el.host.picture} alt={el.host.name} />
                        </div>
                        <div className='lodgement-notation'>
                            {(() => {
                                let stars = []
                                for (let i = 0; i < 5; i++) {
                                    if (i < el.rating) {
                                        stars.push(<i className="fa-solid fa-star star star-red" key={i}></i>)
                                    } else {
                                        stars.push(<i className="fa-solid fa-star star star-grey" key={i}></i>)
                                    }
                                }
                                return stars;
                            })()}
                        </div>
                    </div>
                </div>
                <div className='lodgement-description-collapses'>
                    <Collapse title={'Description'} text={el.description}></Collapse>
                    <Collapse title={'Équipements'} text={el.equipments.join('\n')}></Collapse>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Lodgement;

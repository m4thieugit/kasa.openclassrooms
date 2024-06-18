import { Component } from 'react';
import './Locations.scss';

import logements from '../../assets/data/logements.json';

class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logements: [],
        };
    }

    componentDidMount() {
        for (var i = 0; i < logements.length; i++) {
            const logement = logements[i];
            this.state.logements.push(logement);
            this.setState({ logements: this.state.logements });
        }
    }

    render() {
        return (
            <div className="App-main-locations">
                {this.state.logements.map((logement, i) => 
                    <div className="App-main-location" key={i} style={{backgroundImage: 'url(' + logement.cover + ')' }}>
                        <div className='App-main-location-overlay'></div>
                        <h2 className='App-main-location-title'>{logement.title}</h2>
                    </div>
                )}
            </div>
        );
    }
}

export default Locations;

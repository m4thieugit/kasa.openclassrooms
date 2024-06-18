import { Component } from 'react';
import './Locations.scss';
import Location from '../Location/Location';

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
                    <Location key={i} logement={logement}></Location>
                )}
            </div>
        );
    }
}

export default Locations;

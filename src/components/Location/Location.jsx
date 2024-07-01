import { Component } from 'react';
import './Location.scss';

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = { logement: {} };
    }

    componentDidMount() {
        this.setState({ logement: this.props.logement });
    }

    render() {
        return (
            <a className="App-main-location" style={{backgroundImage: 'url(' + this.state.logement.cover + ')' }} href={'/lodgement/' + this.state.logement.id}>
                <div className='App-main-location-overlay'></div>
                <h2 className='App-main-location-title'>{this.state.logement.title}</h2>
            </a>
        );
    }
}

export default Location;

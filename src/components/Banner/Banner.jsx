import { Component } from 'react';
import './Banner.scss';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="App-banner" style={{ backgroundImage: 'url(' + this.props.backgroundImage + ')' }}>
                <div className="App-banner-overlay"></div>
                <div className='App-banner-content'>
                    <h2 className='App-banner-title'>{this.props.textTitle}</h2>
                </div>
            </div>
        );
    }
}

export default Banner;

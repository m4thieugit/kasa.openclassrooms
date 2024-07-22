import { Component } from 'react';
import './Tag.scss';

class Tag extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="App-tag">
                <h4>{this.props.name}</h4>
            </div>
        );
    }
}

export default Tag;

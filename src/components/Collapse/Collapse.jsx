import { Component } from 'react';
import './Collapse.scss';

class Collapse extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { status: 'close' };
    }

    handleClick = () => {
        switch (this.state.status) {
            case 'close':
                this.setState({ status: 'open' });
                break;
            case 'open':
                this.setState({ status: 'close' });
                break;
            default:
                this.setState({ status: 'close' });
                break;
        }
    }

    render() {
        let displayCollapse = false;

        if (this.state.status === 'open') {
            displayCollapse = true;
        }
        return (
            <div className="App-collapse">
                <div className='App-collapse-head'>
                    <div className="App-collapse-title">
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className='App-collapse-button'>
                        <i className="fa-solid fa-chevron-left" onClick={this.handleClick} style={{ transform: displayCollapse ? 'rotate(-90deg)' : 'rotate(90deg)' }}></i>
                    </div>
                </div>
                <div className={displayCollapse ? 'App-collapse-body show' : 'App-collapse-body'}>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Collapse;

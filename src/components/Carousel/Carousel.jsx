import { Component } from 'react';
import './Carousel.scss';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { pictures: [], current_position: 0 };
    }
    
    componentDidMount() {
        this.setState({ pictures: this.props.pictures, current_position: 0 });
    }

    handleClickPrevious = () => {
        this.setState((state) => {
            const new_position = state.current_position - 1 < 0 ? this.props.pictures.length - 1 : state.current_position - 1;
            return { current_position: new_position };
        });
    }

    handleClickNext = () => {
        this.setState((state) => {
            const new_position = state.current_position + 1 >= this.props.pictures.length ? 0 : state.current_position + 1;
            return { current_position: new_position };
        });
    }

    render() {
        let displayButton = false;

        if (this.state.pictures.length > 1) {
            displayButton = true;
        }

        return (
            <div className="App-carousel" style={{ backgroundImage: 'url(' + this.state.pictures[this.state.current_position] + ')' }}>
                <div className="App-carousel-navigation">
                    <div className="App-carousel-navigation-previous">
                        <i className="fa-solid fa-chevron-left" onClick={this.handleClickPrevious} style={{ display: displayButton ? 'block' : 'none' }}></i>
                    </div>
                    <div className="App-carousel-navigation-next">
                        <i className="fa-solid fa-chevron-right" onClick={this.handleClickNext} style={{ display: displayButton ? 'block' : 'none' }}></i>
                    </div>
                </div>
                <div className='App-carousel-pagination'>
                    <p>{this.state.current_position + 1}/{this.state.pictures.length}</p>
                </div>
            </div>
        );
    }
}

export default Carousel;

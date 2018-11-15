import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../header'


class Block3 extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
    }

    handleScroll = (e) => {
        if (e.deltaY < 0) {
            this.props.history.push('/2');
        }
        if (e.deltaY > 0){
            this.props.history.push('/4');
        }
    };

    render() {
        return (
            <main>
                <Header/>
                <div id="left">
                    LOL
                </div>
                <div id="right" className='third'>
                    MEK
                </div>
            </main>
        );
    }
}

export default withRouter(Block3);
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import Header from '../header';


class Block extends Component {

    constructor(props) {
        super(props);
        this.yDown = null;
    }

    componentDidMount() {
        window.addEventListener('wheel', _.throttle(this.handleScroll, 500, {leading: true, trailing: false}));
        window.addEventListener('touchstart', this.handleTouchStart, false);
        window.addEventListener('touchmove', this.handleTouchMove, false)

    }

    handleScroll = (e) => {
        if (e.deltaY < 0) {     //down
            switch (this.props.location.pathname) {
                case '/' :
                    break;
                case '/2':
                    this.props.history.push('/');
                    break;
                case '/3':
                    this.props.history.push('/2');
                    break;
                case '/4':
                    this.props.history.push('/3');
                    break;
                default:
                    this.props.history.push('/')
            }
        }
        if (e.deltaY > 0) {     //up
            switch (this.props.location.pathname) {
            case '/' :
                this.props.history.push('/2');
                break;
            case '/2':
                this.props.history.push('/3');
                break;
            case '/3':
                this.props.history.push('/4');
                break;
            case '/4':
                break;
            default:
                this.props.history.push('/')
        }
        }
    };

    handleTouchStart = (e) => {
        const firstTouch = e.touches[0];
        this.xDown = firstTouch.clientX;
        this.yDown = firstTouch.clientY;
    };

    handleTouchMove = (e) => {
        if ( ! this.xDown || ! this.yDown ) {
            return;
        }

        let yUp = e.touches[0].clientY;

        let yDiff = this.yDown - yUp;

        if ( yDiff > 0 ) {      //up
            switch (this.props.location.pathname) {
                case '/' :
                    this.props.history.push('/2');
                    break;
                case '/2':
                    this.props.history.push('/3');
                    break;
                case '/3':
                    this.props.history.push('/4');
                    break;
                case '/4':
                    break;
                default:
                    this.props.history.push('/')
            }
        } else {                //down
            switch (this.props.location.pathname) {
                case '/' :
                    break;
                case '/2':
                    this.props.history.push('/');
                    break;
                case '/3':
                    this.props.history.push('/2');
                    break;
                case '/4':
                    this.props.history.push('/3');
                    break;
                default:
                    this.props.history.push('/')
            }
            }
        /* reset values */
        this.yDown = null;
    };


    render() {
        return (
            <main>
                <Header/>
                <div id="left">
                    LOL
                </div>
                <div id="right" className={this.props.className}>
                    <div>
                    {this.props.text}
                    </div>
                </div>
            </main>
        );
    }
}

export default withRouter(Block);
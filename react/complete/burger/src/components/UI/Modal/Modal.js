import React, { Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillMount() {
        console.log("[Modal] WillUpdate");
    }

    render() {
        const style = {
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
        };
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} click={this.props.modalClosed}/>
                <div style={style}
                    className={styles.Modal}>{this.props.children}</div>
            </React.Fragment>
        );
    }
}

export default Modal;
import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showDrawer: false});
    }

    sideDrawerOpenHandler = () => {
        this.setState({showDrawer: true});
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar 
                    isAuth={this.props.isAuthenticated}
                    openDrawer={this.sideDrawerOpenHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <main className={styles.content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);
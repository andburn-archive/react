import React, { Component } from 'react';

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
                <Toolbar openDrawer={this.sideDrawerOpenHandler} />
                <SideDrawer 
                    open={this.state.showDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <main className={styles.content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;
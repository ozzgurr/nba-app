import React, { Component } from 'react';
import './Layout.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
  state = {
    showSideNav: false
  }

  toggleSideNav = (action) => {
    this.setState({
      showSideNav: action
    })
  }

  render() {
    return (
      <div>
        <Header
          showSideNav = {this.state.showSideNav}
          onHideSideNav = {() => this.toggleSideNav(false)}
          onOpenSideNav = {() => this.toggleSideNav(true)}
        />
        {this.props.children}
        <Footer></Footer>
      </div>
    )
  }
}

export default Layout;
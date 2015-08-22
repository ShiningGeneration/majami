import React from 'react';
import RouteHandler from 'react-router/lib/components/RouteHandler';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/main.css'

import Button from 'react-bootstrap/lib/Button';
import CollapsibleNav from 'react-bootstrap/lib/CollapsibleNav';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export default class App extends React.Component {

  constructor(prop) {
    super(prop);

    this._enableNavBackMode = this._enableNavBackMode.bind(this);
    this._goBack = this._goBack.bind(this);

    this.state = {
      useBackNav: false,
      ongoingOrders: [],
      expiredOrders: [],
    }
  }

  _setOngoingOrders(ongoingOrders){
    this.setState({
      ongoingOrders: ongoingOrders
    })
  }

  _setExpiredOrders(expiredOrders){
    this.setState({
      expriedOrders: expriedOrders
    })
  }

  _enableNavBackMode(useBackNav) {
    this.setState({
      useBackNav: useBackNav
    });
  }

  _goBack() {
    window.history.back();
  }

  render() {
    let style = {
      container: {
        'margin-top': '50px',
        'padding': '3%'
      }
    };

    let listNav = (
      <nav className='maja-navbar navbar navbar-default navbar-fixed-top'>
        <Button type='button' className='navbar-toggle maja-navbar-toggle'>
          <Glyphicon glyph='menu-hamburger' />
        </Button>
        <div className='maja-navbar-div'>Majami</div>
      </nav>
    );

    let backNav = (
      <nav className='maja-navbar navbar navbar-default navbar-fixed-top'>
        <Button
          type='button'
          className='navbar-toggle maja-navbar-toggle'
          onClick={this._goBack}>
          <Glyphicon glyph='chevron-left' />
        </Button>
        <div className='maja-navbar-div'>Majami</div>
      </nav>
    );

    let useBackNav = this.state.useBackNav;

    return (
      <div>
        {useBackNav ? backNav : listNav}

        <div style={style.container}>
          <RouteHandler enableNavBackMode={this._enableNavBackMode} setOngoingOrders={this._setOngoingOrders} setExpiredOrders={this._setExpiredOrders}/>
        </div>
      </div>
    );
  }

}

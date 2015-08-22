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

    let ordereds_help_me_take = [
      {
        id: 1,
        store: '茶湯會',
        products: [
          { id: 1, name: '翡翠檸檬', amount: 3, price: 49 },
          { id: 2, name: '珍珠奶茶', amount: 2, price: 45 }
        ],
        pickup_addr: "捷運公館站 2 號出口",
        pickup_time: "8/23 13:00"
      },
      {
        id: 2,
        store: '悟饕池上飯包',
        products: [
          { id: 1, name: '排骨飯包', amount: 4, price: 75 },
          { id: 2, name: '焢肉飯包', amount: 5, price: 75 },
        ],
        pickup_addr: "台大正門口",
        pickup_time: "8/23 23:30"
      }
    ];

    let expireds_i_help_take = [
      {
        id: 1,
        store: '50嵐',
        products: [
          { id: 1, name: '文山青茶', amount: 3, price: 20 },
          { id: 2, name: '波霸奶茶', amount: 4, price: 30 }
        ],
        pickup_addr: "捷運公館站 2 號出口",
        pickup_time: "8/21 13:00"
      },
      {
        id: 2,
        store: '楊董燒肉便當店',
        products: [
          { id: 1, name: '雞排飯包', amount: 4, price: 80 },
          { id: 2, name: '招牌飯包', amount: 2, price: 75 },
        ],
        pickup_addr: "台大正門口",
        pickup_time: "8/21 23:30"
      }
    ];

    this.state = {
      useBackNav: false,
      ongoingOrders: ordereds_help_me_take,
      ongoingOrdersIHelpTake: ordereds_help_me_take,
      expiredOrders: expireds_i_help_take,
    }
    this._prependOngoingOrders = this._prependOngoingOrders.bind(this)
    this._prependOngoingOrdersIHelpTake = this._prependOngoingOrdersIHelpTake.bind(this)
    this._prependExpiredOrders = this._prependExpiredOrders.bind(this)
  }

  _prependOngoingOrders(newOrder){
    this.setState({
      ongoingOrders: newOrder.concat(this.state.ongoingOrders)
    })
  }

  _prependOngoingOrdersIHelpTake(newOrder){
    this.setState({
      ongoingOrdersIHelpTake: newOrder.concat(this.state.ongoingOrdersIHelpTake)
    })
  }

  _prependExpiredOrders(expiredOrders){
    this.setState({
      expireOrders: newOrder.concat(this.state.expireOrders)
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
          <RouteHandler enableNavBackMode={this._enableNavBackMode} gstate={this.state} setOngoingOrders={this._prependOngoingOrders} setExpiredOrders={this._prependExpiredOrders} setOngoingOrdersIHelpTake={this._prependOngoingOrdersIHelpTake}/>
        </div>
      </div>
    );
  }

}

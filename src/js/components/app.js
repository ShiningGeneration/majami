import React from 'react';
import RouteHandler from 'react-router/lib/components/RouteHandler';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/main.css'

import CollapsibleNav from 'react-bootstrap/lib/CollapsibleNav';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default class App extends React.Component {

  render() {
    let style = {
      container: {
        padding: '3%'
      }
    };

    return (
      <div>
        <Navbar brand='Majami' toggleNavKey={0} inverse fixedTop>
          <CollapsibleNav eventKey={0}>
            <Nav navbar right>
              <NavItem eventKey={1} href='#account'>帳號</NavItem>
              <NavItem eventKey={2} href='#about'>關於</NavItem>
              <NavItem eventKey={3} href='#logout'>登出</NavItem>
            </Nav>
          </CollapsibleNav>
        </Navbar>

        <div style={style.container}>
          <RouteHandler />
        </div>
      </div>
    );
  }

}

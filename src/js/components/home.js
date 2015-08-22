import React from 'react';

import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';
import TabbedArea from 'react-bootstrap/lib/TabbedArea';
import TabPane from 'react-bootstrap/lib/TabPane';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    let ordereds_help_me_take = [
      {
        id: 1,
        products: [
          { id: 1, name: '珍珠奶茶', amount: 1, price: 100 }
        ],
        pickup_addr: "捷運公館站 2 號出口",
        pickup_time: "8/23 13:00"
      },
      {
        id: 2,
        products: [
          { id: 1, name: '解放茶', amount: 1, price: 600 }
        ],
        pickup_addr: "台大正門口",
        pickup_time: "8/23 23:30"
      }
    ];

    let expireds_help_me_take = [
      {
        id: 1,
        products: [
          { id: 1, name: '茉莉綠茶', amount: 10, price: 100 }
        ],
        pickup_addr: "捷運公館站 2 號出口",
        pickup_time: "8/5 13:00"
      },
      {
        id: 2,
        products: [
          { id: 1, name: '解放茶', amount: 15, price: 600 }
        ],
        pickup_addr: "台大正門口",
        pickup_time: "7/8 23:30"
      }
    ];

    let ordereds_i_help_take = [
      {
        id: 1,
        products: [
          { id: 1, name: '珍珠奶茶', amount: 1, price: 100 }
        ],
        pickup_addr: "捷運公館站 2 號出口",
        pickup_time: "8/23 13:00"
      },
      {
        id: 2,
        products: [
          { id: 1, name: '解放茶', amount: 1, price: 6000 }
        ],
        pickup_addr: "台大正門口",
        pickup_time: "8/23 23:30"
      }
    ];

    let expireds_i_help_take = [
      {
        id: 1,
        products: [
          { id: 1, name: '茉莉綠茶', amount: 10, price: 100 }
        ],
        pickup_addr: "捷運公館站 2 號出口",
        pickup_time: "8/5 13:00"
      },
      {
        id: 2,
        products: [
          { id: 1, name: '解放茶', amount: 15, price: 6000 }
        ],
        pickup_addr: "台大正門口",
        pickup_time: "7/8 23:30"
      }
    ]; 

    this.state = {
      ordereds_i_help_take: ordereds_i_help_take,
      ordereds_help_me_take: ordereds_help_me_take,
      expireds_i_help_take: expireds_i_help_take,
      expireds_help_me_take: expireds_help_me_take,
    };
  }

  componentDidMount() {
    this.props.enableNavBackMode(false);
  }

  render() {
    let orderedItems_help_me_take = this.state.ordereds_help_me_take.map(item => {
      let products = item.products.map(product => {
      let style = {float:"right"};
        return (
          <span key={product.id}>
            {/*FIXME: hardcoded style*/}
            <span>{`${product.name} x${product.amount}`}</span> <span style={style}>{`NTD.${product.price}`}</span>
            <br />
          </span>
        );
      });

      return (
        <ListGroupItem
          key={item.id} header={`訂單 # ${item.id}`}>
            {products}
          <span>{`取貨地點: ${item.pickup_addr}`}</span>
          <br />
          <span>{`取貨時間: ${item.pickup_time}`}</span>
          <span style={{marginRight: '5px', 'float': 'right'}}>
            <Button bsStyle='info' bsSize='xsmall'>拿到了</Button>
          </span>
        </ListGroupItem>
      );
    });
    let orderedItems_i_help_take = this.state.ordereds_i_help_take.map(item => {
      let products = item.products.map(product => {
      let style = {float:"right"};
        return (
          <span key={product.id}>
            {/*FIXME: hardcoded style*/}
            <span>{`${product.name} x${product.amount}`}</span> <span style={style}>{`NTD.${product.price}`}</span>
            <br />
          </span>
        );
      });

      return (
        <ListGroupItem
          key={item.id} header={`訂單 # ${item.id}`}>
            {products}
          <span>{`取貨地點: ${item.pickup_addr}`}</span>
          <br />
          <span>{`取貨時間: ${item.pickup_time}`}</span>
        </ListGroupItem>
      );
    });

    let expiredItems_i_help_take = this.state.expireds_i_help_take.map(item => {
      let products = item.products.map(product => {
      let style = {float:"right"};
        return (
          <span key={product.id}>
            {/*FIXME: hardcoded style*/}
            <span>{`${product.name} x${product.amount}`}</span> <span style={style}>{`NTD.${product.price}`}</span>
            <br />
          </span>
        );
      });

      return (
        <ListGroupItem
          key={item.id} header={`訂單 # ${item.id}`}>
            {products}
          <span>{`取貨地點: ${item.pickup_addr}`}</span>
          <br />
          <span>{`取貨時間: ${item.pickup_time}`}</span>
        </ListGroupItem>
      );
    });
    let expiredItems_help_me_take = this.state.expireds_help_me_take.map(item => {
      let products = item.products.map(product => {
      let style = {float:"right"};
        return (
          <span key={product.id}>
            {/*FIXME: hardcoded style*/}
            <span>{`${product.name} x${product.amount}`}</span> <span style={style}>{`NTD.${product.price}`}</span>
            <br />
          </span>
        );
      });

      return (
        <ListGroupItem
          key={item.id} header={`訂單 # ${item.id}`}>
            {products}
          <span>{`取貨地點: ${item.pickup_addr}`}</span>
          <br />
          <span>{`取貨時間: ${item.pickup_time}`}</span>
        </ListGroupItem>
      );
    });

    return (
      <Grid>
        <Row>
          <Col md={12}>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
          <TabbedArea defaultActiveKey={1} className="half-width-tab">
          <TabPane eventKey={1} tab='幫我帶' >
            <br />
            <Button bsStyle="success" style={{'margin-bottom': '1em', 'width': '100%'}}
              href='#/help-me-take'>+ 訂東西</Button>
            <Panel header={'進行中的訂單'} bsStyle='info'>
              <ListGroup fill>
                {orderedItems_help_me_take}
              </ListGroup>
            </Panel>
            <Panel header={'歷史訂單'} bsStyle='warning'>
              <ListGroup fill>
                {expiredItems_help_me_take}
              </ListGroup>
            </Panel>
          </TabPane>
          <TabPane eventKey={2} tab='我幫帶'>
            <br />
            <Button bsStyle="success" style={{'margin-bottom': '1em', 'width': '100%'}}
              href='#i-help-take'>+ 接任務</Button>
            <Panel header={'進行中的幫帶任務'} bsStyle='info'>
              <ListGroup fill>
                {orderedItems_i_help_take}
              </ListGroup>
            </Panel>
            <Panel header={'已完成的幫帶任務'} bsStyle='warning'>
              <ListGroup fill>
                {expiredItems_i_help_take}
              </ListGroup>
            </Panel>
          </TabPane>
          </TabbedArea>
          </Col>
        </Row>
      </Grid>
    );
  }

}

/*
TODO:
  * Fixed the 進行中 at the bottom
  * Expand the tab width to 50%
  * A add new button
*/

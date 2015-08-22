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

    let expireds_help_me_take = [
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

    let ordereds_i_help_take = [
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
          key={item.id} header={item.store}>
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
          key={item.id} header={item.store}>
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
          key={item.id} header={item.store}>
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
          key={item.id} header={item.store}>
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

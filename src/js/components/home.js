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
  }

  componentDidMount() {
    this.props.enableNavBackMode(false);
  }

  generateItems(ordereds, withGotItButton) {
    let button;
    if (withGotItButton) {
      button = (
        <span style={{marginRight: '5px', 'float': 'right'}}>
          <Button bsStyle='info' bsSize='xsmall'>拿到了</Button>
        </span>
      );
    }
    return ordereds.map(item => {
      let products = item.products.map(product => {
      let style = {float:"right"};
        return (
          <span key={product.id}>
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
          {button}
        </ListGroupItem>
      );
    });
  }

  render() {
    let orderedItems_help_me_take = this.generateItems(this.props.gstate.ongoingOrders, true);
    let orderedItems_i_help_take = this.generateItems(this.props.gstate.ongoingOrdersIHelpTake, false);
    let expiredItems_help_me_take = this.generateItems(this.props.gstate.expiredOrders, true);
    let expiredItems_i_help_take = this.generateItems(this.props.gstate.expiredOrders, false);


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

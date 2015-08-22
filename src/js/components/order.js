import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import Label from 'react-bootstrap/lib/Label';
import Modal from 'react-bootstrap/lib/Modal';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Row from 'react-bootstrap/lib/Row';
import Table from 'react-bootstrap/lib/Table';
import Grid from 'react-bootstrap/lib/Grid';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

var data = [{
  name: "找好茶",
  id: 0,
  content: [{
    id: 0,
    name: "茉莉綠茶",
    option: ['M'],
    price: [20]
  }, {
    id: 1,
    name: "阿薩姆奶茶",
    option: ['M', 'L'],
    price: [15, 20]
  }, {
    id: 2,
    name: "四季春茶",
    option: ['M', 'L'],
    price: [15, 20]
}]}, {
  name: "找奶茶",
  id: 1,
  content: [{
    id: 0,
    name: "奶茶",
    option: ['M', 'L'],
    price: [30, 45]
  }, {
    id: 1,
    name: "焦糖奶茶",
    option: ['M', 'L'],
    price: [35, 50]
  }, {
    id: 2,
    name: "紅茶拿鐵",
    option: ['M', 'L'],
    price: [40, 55]
}]}, {
  name: "找口感",
  id: 2,
  content: [{
    id: 0,
    name: "珍珠紅茶",
    option: ['M', 'L'],
    price: [25, 35]
  }, {
    id: 1,
    name: "珍珠奶茶",
    option: ['M', 'L'],
    price: [30, 45]
  }, {
    id: 2,
    name: "波霸紅茶拿鐵",
    option: ['M', 'L'],
    price: [40, 55]
}]}, {
  name: "找新鮮",
  id: 3,
  content: [{
    id: 0,
    name: "檸檬汁",
    option: ['M', 'L'],
    price: [40, 55]
  }, {
    id: 1,
    name: "金桔檸檬",
    option: ['M', 'L'],
    price: [40, 55]
  }, {
    id: 2,
    name: "8 冰茶",
    option: ['M', 'L'],
    price: [30, 45]
}]}];

export default class Order extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      item: {
        'border': '0',
        'border-radius': '0',
        "padding": "0"
      },
      priceField: {
        'textAlign': 'right'
      },
      plusBtn: {
        'float': 'right'
      },
      minusBtn: {
        'float': 'left'
      },
      optionRow: {
        'padding-bottom': '1em'
      },
      typeName: {
        'margin': "0",
        "border-bottom": "1px solid"
      }
    };

    let genOption = function (obj) {
      let id = obj.id, option = obj.option, price = obj.price;
      return (
        <div key={id}>
          <Row style={style.optionRow}>
            <Col xs={6}>
              <Label>{option}</Label>
            </Col>
            <Col xs={6} style={style.priceField}>
              <Label>{"NT. " + price}</Label>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <Button style={style.minusBtn} bsStyle="primary">
                <Glyphicon glyph='minus' />
              </Button>
            </Col>
            <Col xs={8}>
                <Input defaultValue="0" bsSize="small" type="number" />
            </Col>
            <Col xs={2}>
              <Button style={style.plusBtn} bsStyle="primary">
                <Glyphicon glyph='plus' />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
                <Input placeholder="備註" bsSize="small" type="text" />
            </Col>
          </Row>
        </div>
      );
    };

    let genMenuItem = function (item) {

      let itemName = item.name, itemId = item.id;
      let optionData = new Array();

      for (let i = 0; i < item.price.length; ++i) {
        optionData.push({
          id: i,
          option: i < item.option.length ? item.option[i] : itemName,
          price: item.price[i]
        });
      }

      return (
        <ListGroupItem key={itemId} style={style.item}>
          <Row>
            <Col xs={12}>
              <h4>{itemName}</h4>
            </Col>
          </Row>
          {optionData.map(genOption)}
        </ListGroupItem>
      );
    }


    this.menu = data.map(menu => {
      let content = menu.content;

      return (
        <div key={menu.id}>
          <h2 style={style.typeName}><Glyphicon glyph="triangle-bottom" /> {menu.name}</h2>
          <ListGroup>
            {menu.content.map(genMenuItem)}
          </ListGroup>
        </div>
      );
    });

    return (
      <Grid>
        {this.menu}
      </Grid>
    );
  }

}


import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Input from 'react-bootstrap/lib/Input';
import Label from 'react-bootstrap/lib/Label';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Row from 'react-bootstrap/lib/Row';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let style = {
      firstItem: {
        border: '0',
        borderRadius: '0',
        padding: '0'
      },
      notFirstItem: {
        border: '0',
        borderRadius: '0',
        padding: '0',
        borderTop: '1px solid #ddd'
      },
      priceField: {
        textAlign: 'right'
      },
      plusBtn: {
        float: 'right'
      },
      minusBtn: {
        float: 'left'
      },
      optionRow: {
        paddingBottom: '1em'
      }
    };

    let item = this.props.item;
    let itemName = item.name, itemId = item.id;
    let optionData = new Array();

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

    for (let i = 0; i < item.price.length; ++i) {
      optionData.push({
        id: i,
        option: i < item.option.length ? item.option[i] : itemName,
        price: item.price[i]
      });
    }

    return (
      <ListGroupItem key={itemId} style={itemId == 0 ? style.firstItem : style.notFirstItem}>
        <Row>
          <Col xs={12}>
            <h4>{itemName}</h4>
          </Col>
        </Row>
        {optionData.map(genOption)}
      </ListGroupItem>
    );
  }
}

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      typeName: {
        margin: '0',
        marginBottom: '10px'
      }
    };

    let menu = this.props.menu;
    let itemList = menu.content.map(item => {
      return <MenuItem key={item.id} item={item}></MenuItem>;
    });

    return (
      <div>
        <h2 style={style.typeName}><Glyphicon glyph="triangle-bottom" /> {menu.name}</h2>
        <ListGroup>
          {itemList}
        </ListGroup>
      </div>
    );
  }
}


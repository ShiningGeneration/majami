import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Input from 'react-bootstrap/lib/Input';
import Label from 'react-bootstrap/lib/Label';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Row from 'react-bootstrap/lib/Row';

class NumberField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }

    this.increase = this._increase.bind(this);
    this.decrease = this._decrease.bind(this);
    this.update = this._update.bind(this);
  }

  _increase() {
    this.setState({value: this.state.value + 1});
  }

  _decrease() {
    this.setState({value: this.state.value > 0 ? this.state.value - 1 : 0});
  }

  _update(evt) {
    let val = evt.target.value;
    this.setState({value: val == "" ? 0 : parseInt(val)});
  }

  render() {
    let style = {
      plusBtn: {
        float: 'right'
      },
      minusBtn: {
        float: 'left'
      }
    };

    return (
      <Row>
        <Col xs={2}>
          <Button onClick={this.decrease} style={style.minusBtn} bsStyle="primary">
            <Glyphicon glyph='minus' />
          </Button>
        </Col>
        <Col xs={8}>
          <Input value={this.state.value} onChange={this.update} type="text" bsSize="small" />
        </Col>
        <Col xs={2}>
          <Button onClick={this.increase} style={style.plusBtn} bsStyle="primary">
            <Glyphicon glyph='plus' />
          </Button>
        </Col>
      </Row>
    );
  }


}

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
      optionRow: {
        paddingBottom: '1em'
      }
    };

    let item = this.props.item;
    let itemName = item.name, itemId = item.id;
    let optionData = new Array();
    let self = this;

    let genOption = function (obj) {
      let itemId = obj.itemId, optId = obj.optId, option = obj.option, price = obj.price;
      let refName = ['itm', itemId, optId].join('-');

      return (
        <div key={optId}>
          <Row style={style.optionRow}>
            <Col xs={6}>
              <Label>{option}</Label>
            </Col>
            <Col xs={6} style={style.priceField}>
              <Label>{"NT. " + price}</Label>
            </Col>
          </Row>
          <NumberField ref={refName} />
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
        itemId: itemId,
        optId: i,
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


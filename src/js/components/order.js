import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Input from 'react-bootstrap/lib/Input';

import Menu from './menu';

var data = [{
  name: "找好茶",
  id: 0,
  content: [{
    id: 0,
    name: "特調蜂蜜檸檬",
    option: ['L'],
    price: [45]
  }, {
    id: 1,
    name: "阿薩姆紅茶",
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
    this._submit = this._submit.bind(this);
  }

  componentDidMount() {
    this.props.enableNavBackMode(true);
  }

  _submit() {
    console.log('hi')
    let ongoingOrder = [{
        id: 3,
        store: "清玉",
        products: [
          { id: 3, name: '特調蜂蜜檸檬', amount: 1, price: 45 }
        ],
        pickup_addr: "捷運公館站 3 號出口",
        pickup_time: "8/23 13:25"
    }]

    this.props.setOngoingOrders(ongoingOrder);
    window.location = "#/"
    

  }

  render() {

    let menuList = data.map(menu => {
      return <Menu key={menu.id} menu={menu} />
    });

    //TODO: change this depends on the button clicked
    return (
      <Grid>
        <Input type='select' label='取貨地點'>
          <option value='current'>(目前位置) 7-ELEVEN 辛亥門市</option>
          <option value='favorite1'>7-ELEVEN 敦親門市</option>
          <option value='favorite2'>7-ELEVEN 大台門市</option>
          <option value='favorite3'>7-ELEVEN 溫州門市</option>
        </Input>
        <Input type='select' label='最多等待時間'>
          <option value='current'>10 分鐘</option>
          <option value='favorite1'>15 分鐘</option>
          <option value='favorite2'>20 分鐘</option>
          <option value='favorite3'>25 分鐘</option>
          <option value='favorite4'>30 分鐘</option>
          <option value='favorite5'>40 分鐘</option>
          <option value='favorite6'>50 分鐘</option>
        </Input>
        {menuList}
        <Col style={{padding: "0"}} xs={12}>
          <Button bsStyle="success" block onClick={this._submit}>
            送出
          </Button>
        </Col>
      </Grid>
    );
  }

}


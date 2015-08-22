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

  componentDidMount() {
    this.props.enableNavBackMode(true);
  }

  render() {

    let menuList = data.map(menu => {
      return <Menu key={menu.id} menu={menu} />
    });

    return (
      <Grid>
        <Input type='select' label='取貨地點'>
          <option value='current'>(目前位置)台北市大安區羅斯福路四段1號</option>
          <option value='favorite1'>台北市中正區中山南路7號</option>
          <option value='favorite2'>台北市信義區台北101大樓</option>
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
          <Button bsStyle="success" block>
            送出
          </Button>
        </Col>
      </Grid>
    );
  }

}


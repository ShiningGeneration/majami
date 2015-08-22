import React from 'react';
import RouteHandler from 'react-router/lib/components/RouteHandler';
import 'bootstrap/dist/css/bootstrap.css';

import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';

export default class Pickup extends React.Component {
  render() {
    return (
      <form>
        <Input type='text' label='取貨地點' placeholder='請輸入取貨地點' />
        <Input type='text' label='最多等待時間' placeholder='hh:mm' />
        <Button bsStyle='info' onClick={this.submit}>送出</Button>
      </form>
    );
  }
}

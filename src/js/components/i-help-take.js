import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Input from 'react-bootstrap/lib/Input';
import Row from 'react-bootstrap/lib/Row';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import TabbedArea from 'react-bootstrap/lib/TabbedArea';
import TabPane from 'react-bootstrap/lib/TabPane';
import IHelpTakeMap from './i-help-take-map'

export default class Store extends React.Component {

  constructor(props) {
    super(props);

    let list = (
      <ListGroup>
        <ListGroupItem header='茶湯會 松山店'>
          台北市信義區松山路531號 / 02-2726-2886
          <br />
          <br />
          <span>珍珠奶茶 x5</span>
          <br />
          <span>清香紅茶 x3</span>
          <br />
          <br />
          <Row>
            <Col xs={6}>
              <Button bsStyle='info' bsSize='small' href='' block>詳細資料</Button>
            </Col>
            <Col xs={6}>
              <Button bsStyle='info' bsSize='small' href='' block>接任務</Button>
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem header='池上飯包'>
          中和景新街234號 / 02-2943-2100
          <br />
          <br />
          <span>燒肉飯 x5</span>
          <br />
          <span>雞腿飯 x3</span>
          <br />
          <br />
          <Row>
            <Col xs={6}>
              <Button bsStyle='info' bsSize='small' href='' block>詳細資料</Button>
            </Col>
            <Col xs={6}>
              <Button bsStyle='info' bsSize='small' href='' block>接任務</Button>
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem header='全祥水餃'>
          北市汀州路二段70號 / 03-3391309
          <br />
          <br />
          <span>韭菜水餃 x5</span>
          <br />
          <span>陽春麵 x3</span>
          <br />
          <br />
          <Row>
            <Col xs={6}>
              <Button bsStyle='info' bsSize='small' href='' block>詳細資料</Button>
            </Col>
            <Col xs={6}>
              <Button bsStyle='info' bsSize='small' href='' block>接任務</Button>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    );

    this._handleClick = this._handleClick.bind(this);
    this.state = {
      isSearching: false,
      list: list
    };
  }

  _handleClick() {
    let list = (
      <ListGroup>
        <ListGroupItem header='楊董燒肉便當店'>
          燒肉，雞腿王，排骨
          <br />
          新莊區富國路55號 / 0952668089
          <br />
          <Glyphicon glyph='star' />
          <Glyphicon glyph='star' />
          <Glyphicon glyph='star' />
        </ListGroupItem>
        <ListGroupItem header='太師傅便當專賣店(興中店)'>
          營養便當
          <br />
          高雄市苓雅區興中一路222號 / 07-3345252
          <br />
          <Glyphicon glyph='star' />
          <Glyphicon glyph='star' />
          <Glyphicon glyph='star' />
          <Glyphicon glyph='star' />
        </ListGroupItem>
        <ListGroupItem header='池上飯包'>
          滿200元外送
          <br />
          中和景新街234號 / 02-2943-2100
          <br />
          <Glyphicon glyph='star' />
          <Glyphicon glyph='star' />
          <Glyphicon glyph='star' />
          <Glyphicon glyph='star' />
        </ListGroupItem>
      </ListGroup>
    );

    this.setState({
      isSearching: true
    });

    setTimeout(() => {
      this.setState({
        isSearching: false,
        list: list
      });
    }, 1000);
  }

  componentDidMount() {
    this.props.enableNavBackMode(true);
  }

  render() {
    let isSearching = this.state.isSearching;
    let list = this.state.list;

    return (
      <Row>
        <Col md={4} mdOffset={4}>
          <Input type='text' buttonAfter={
            <Button
              bsStyle='info'
              disabled={isSearching}
              placeholder='便當'
              onClick={!isSearching ? this._handleClick : null}>
                {isSearching ? '搜尋...' : '搜尋'}
            </Button>
          } />
        </Col>
        <div>
          <Col md={10} mdOffset={1}>
            <TabbedArea defaultActiveKey={1} className="half-width-tab">
            <TabPane eventKey={1} tab='清單顯示'>
              {this.state.list}
            </TabPane>
            <TabPane eventKey={2} tab='地圖顯示'>
              <IHelpTakeMap />
            </TabPane>
            </TabbedArea>
          </Col>
        </div>
      </Row>
    );
  }

}

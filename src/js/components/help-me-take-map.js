import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

var map;

// NTUHack main stage
const coords = {
  lat: 25.021769,
  lng: 121.535267
}

// comebuy
const coords_drink1 = {
  lat: 25.0195986,
  lng: 121.5355317
}

// 歇腳亭
const coords_drink2 = {
  lat: 25.0196202,
  lng: 121.5318722
}

// 台一牛奶大王
const coords_drink3 = {
  lat: 25.0187841,
  lng: 121.5344471
}

// 鳳城燒臘粵菜/@25.020227,121.533777
const coords_eat1 = {
  lat: 25.020227,
  lng: 121.533777
}

// 佬墨日出/@25.0213913,121.534088
const coords_eat2 = {
  lat: 25.0213913,
  lng: 121.534088
}

// Coda/@25.0199752,121.5316902
const coords_eat3 = {
  lat: 25.0199752,
  lng: 121.5316902
}

export default class Shopmap extends React.Component {

  onMapCreated() {
    const {Gmaps} = this.refs.Gmaps;
    console.log('onMapCreated', Gmaps.getMap());
    Gmaps.getMap().setOptions({
      disableDefaultUI: true
    });
  }
  
  onCloseClick() {
    console.log('onCloseClick');
  }
 
  onClick(e) {
    console.log('onClick', e);
    switch(e) {
      case 1:
        var r = confirm('我要喝combuy?');
        if (r == true) {
          // transfer to store/product page
        }
        break;
      case 2:
        var r = confirm('我要喝歇腳亭?');
        if (r == true) {
          // transfer to store/product page
        }
        break;
      case 3:
        var r = confirm('我要吃台一牛奶大王?');
        if (r == true) {
          // transfer to store/product page
        }
        break;
      case 4:
        var r = confirm('我要吃鳳城燒臘?');
        if (r == true) {
          // transfer to store/product page
        }
        break;
      case 5:
        var r = confirm('我要吃佬墨日出?');
        if (r == true) {
          // transfer to store/product page
        }
        break;
      case 6:
        var r = confirm('我要吃Coda?');
        if (r == true) {
          // transfer to store/product page
        }
        break;
      default:
        break;
    }
  }

  render() {
    let style = {
      map: {
        height: '100%'
      }
    };

    return (
      <div>
        <Gmaps
          ref='Gmaps'
          width={'800px'}
          height={'600px'}
          lat={coords.lat}
          lng={coords.lng}
          zoom={14}
          loadingMessage={'Be happy'}
          onMapCreated={this.onMapCreated}>
          <Marker
            lat={coords_drink1.lat}
            lng={coords_drink1.lng}
            draggable={true}
            onClick={this.onClick.bind(this, 1)} />
          <Marker
            lat={coords_drink2.lat}
            lng={coords_drink2.lng}
            draggable={true}
            onClick={this.onClick.bind(this, 2)} />
          <Marker
            lat={coords_drink3.lat}
            lng={coords_drink3.lng}
            draggable={true}
            onClick={this.onClick.bind(this, 3)} />
          <Marker
            lat={coords_eat1.lat}
            lng={coords_eat1.lng}
            draggable={true}
            onClick={this.onClick.bind(this, 4)} />
          <Marker
            lat={coords_eat2.lat}
            lng={coords_eat2.lng}
            draggable={true}
            onClick={this.onClick.bind(this, 5)} />
          <Marker
            lat={coords_eat3.lat}
            lng={coords_eat3.lng}
            draggable={true}
            onClick={this.onClick.bind(this, 6)} />
          <InfoWindow
            lat={coords.lat}
            lng={coords.lng}
            content={'我在這!'}
            onCloseClick={this.onCloseClick} />
          <Circle
            lat={coords.lat}
            lng={coords.lng} 
            radius={1000} />
        </Gmaps>
      </div>
    );
  }
}
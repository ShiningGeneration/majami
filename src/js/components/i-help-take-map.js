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
        var r = confirm('幫買combuy?');
        if (r == true) {
          // transfer to store/product page
        }
        break;
      case 2:
        var r = confirm('幫買歇腳亭?');
        if (r == true) {
          // transfer to store/product page
        }
        break;
      case 3:
        var r = confirm('幫買台一牛奶大王?');
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
        height: '100%',
        width: '100%'
      }
    };

    return (
      <div>
        <Gmaps
          style={style.map}
          ref='Gmaps'
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
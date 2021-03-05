import React, { Component } from "react";
import mapboxgl from 'mapbox-gl'

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
    "pk.eyJ1IjoiYXJ0eXciLCJhIjoiY2trZ3Jqdm4xMTZnYjJubW4zb2Q4MGRzMCJ9.SzSoVzR_p3lXN7ebg4f9mQ";
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.3056504, 59.9429126], // LED
      zoom: 10,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
        <div className="map-wrapper">
          <div className="map" ref={this.mapContainer} />
        </div>
    );
  }
}

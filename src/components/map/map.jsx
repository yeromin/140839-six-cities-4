import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapContainer = React.createRef();
  }

  componentDidMount() {
    const {locationArr, zoom, cityCoordinates} = this.props;

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [27, 39]
    });

    const map = leaflet.map(this._mapContainer.current, {
      center: cityCoordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(cityCoordinates, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    locationArr.map((locationItemArr) => {
      leaflet
        .marker(locationItemArr, {icon})
        .addTo(map);
    });
  }

  render() {

    const {htmlclass, width, height} = this.props;

    return (
      <section className={htmlclass} style={{width}}>
        <div id="map" style={{height}} ref={this._mapContainer}></div>
      </section>
    );
  }
}

Map.propTypes = {
  locationArr: PropTypes.arrayOf(PropTypes.array).isRequired,
  htmlclass: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  cityCoordinates: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default Map;

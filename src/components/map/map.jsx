import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapContainer = React.createRef();
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [27, 39]
    });

    const zoom = 13;
    const map = leaflet.map(this._mapContainer.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    const {locationArr} = this.props;
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
  height: PropTypes.string.isRequired
};

export default Map;

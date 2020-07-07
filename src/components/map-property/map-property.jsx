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
      iconUrl: `../../img/pin.svg`,
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

    const {mockDataArr} = this.props;
    mockDataArr.map((mockDataItem) => {
      leaflet
        .marker(mockDataItem.location, {icon})
        .addTo(map);
    });
  }

  render() {
    return (
      <section className="map" style={{width: `100%`}}>
        <div id="map" style={{height: `700px`}} ref={this._mapContainer}></div>
      </section>
    );
  }
}

Map.propTypes = {
  mockDataArr: PropTypes.array.isRequired
};

export default Map;


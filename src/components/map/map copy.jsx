import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRefContainer = React.createRef();
    this.mapp = null;
    this.iconn = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [27, 39]
    });
    this.markers = [];
    // this.renderMap = this.renderMap.bind(this);
  }

  _pinGenerate() {
    const {locationArr} = this.props;

    locationArr.map((locationItem) => {
      console.log(locationItem);
      const mrk = leaflet.marker(locationItem, {icon: this.iconn});
      mrk.addTo(this.map);
      this.markers.push(leaflet.marker);
      // leaflet.addTo(this.mapp);
    });
  }

  _resetMarkers() {
    this.markers = [];
  }

  componentDidMount() {
    // this.renderMap();
    const {zoom, cityCoordinates} = this.props;

    this.mapp = leaflet.map(this._mapRefContainer.current, {
      center: cityCoordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.mapp.setView(cityCoordinates, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.mapp);

    this._pinGenerate();
  }

  componentDidUpdate() {
    this._resetMarkers();
    this._pinGenerate();
  }

  render() {

    const {htmlclass, width, height} = this.props;

    return (
      <section className={htmlclass} style={{width}}>
        <div id="map" style={{height}} ref={this._mapRefContainer}></div>
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

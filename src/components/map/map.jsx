import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {connect} from 'react-redux';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRefContainer = createRef();
    // this._renderMap = this._renderMap.bind(this); // - works even without it
    this.map = null;
    this.markers = null;
  }

  _renderMap() {
    const {zoom, cityCoordinates} = this.props;

    this.map = leaflet.map(this._mapRefContainer.current, {
      center: cityCoordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    if (!this.map) {
      return;
    }

    leaflet
      .tileLayer(`https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`
      })
      .addTo(this.map);

    this.map.setView(cityCoordinates, zoom);
    this._renderMarkers();
  }

  _renderMarkers() {
    const defaultIcon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [27, 39]
    });
    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39]
    });


    const {locationArr, currentHoveredProperty} = this.props;
    locationArr.forEach((locationItemArr) => {
      this.markers = leaflet
        .marker(locationItemArr, {icon: defaultIcon})
        .addTo(this.map);
    });

    if (currentHoveredProperty) {
      this.markers = leaflet
      .marker(this.props.currentHoveredProperty.location, {icon: activeIcon})
      .addTo(this.map);
    }
  }

  componentDidMount() {
    this._renderMap();
  }

  componentDidUpdate(prevProps) {
    this._renderMarkers();

    // move the map to the center of the choosen city
    const {cityCoordinates, zoom} = this.props;
    if (prevProps.cityCoordinates !== cityCoordinates) {
      this.map.setView(cityCoordinates, zoom);
      this._renderMarkers();
    }
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  render() {
    return (
      <div id="map" ref={this._mapRefContainer} style={{minHeight: `590px`, height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  locationArr: PropTypes.arrayOf(PropTypes.array).isRequired,
  cityCoordinates: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  currentHoveredProperty: PropTypes.object,
};

const mapStateToProps = (state) => ({
  currentHoveredProperty: state.card
});

export {Map};
export default connect(mapStateToProps, null)(Map);

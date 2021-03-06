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
  }

  _renderMap() {
    const {zoom, cityCoordinates, currentHoveredProperty} = this.props;


    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [27, 39]
    });
    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39]
    });

    this.map = leaflet.map(this._mapRefContainer.current, {
      center: cityCoordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    if (!this.map) {
      return;
    }

    this.map.setView(cityCoordinates, zoom);

    leaflet
      .tileLayer(`https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`
      })
      .addTo(this.map);

    const {locationArr} = this.props;
    locationArr.forEach((locationItemArr) => {
      leaflet
        .marker(locationItemArr, {icon})
        .addTo(this.map);
    });

    // highlight pin of the hovered property
    if (currentHoveredProperty) {
      leaflet
      .marker(currentHoveredProperty.location, {icon: activeIcon})
      .addTo(this.map);
    }
  }

  componentDidMount() {
    this._renderMap();
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps);
    if (this.map) {
      this.map.remove();
    }
    this._renderMap();
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

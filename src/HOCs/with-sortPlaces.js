import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../Store/reducer';

// this HOC is dedicated to keep the only Business logic
// it will keep the Selected Option
// and will pass it to its Parent
const withSortPlacesHOC = (Component) => {
  class WithSortPlaces extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        selected: props.currentSort
      };

      this.handleSortOptionClick = this.handleSortOptionClick.bind(this);
      // console.log(`withSortPlacesHOC state: `, this.state);
    }

    handleSortOptionClick(option) {
      // console.log(option);
      this.props.changeSorting(option);
    }

    render() {

      return (
        <Component {...this.props} onSortOptionClick={this.handleSortOptionClick}>
        </Component>
      );
    }
  }

  WithSortPlaces.propTypes = {
    changeSorting: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired,
  };

  const mapStateToProps = (state) => ({
    currentSort: state.sort
  });

  const mapDispatchToProps = (dispatch) => ({
    changeSorting(sorting) {
      dispatch(ActionCreator.changeSorting(sorting));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithSortPlaces);
};


export default withSortPlacesHOC;

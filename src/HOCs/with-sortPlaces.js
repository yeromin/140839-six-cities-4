import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {actionCreator} from '../Store/reducer';


const options = [
  {value: `popular`, label: `Popular`},
  {value: `to-high`, label: `Price: low to high`},
  {value: `to-low`, label: `Price: high to low`},
  {value: `top-rated`, label: `Top rated first`},
];

const withSortPlacesHOC = (Component) => {
  class WithSortPlaces extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        selected: {value: `popular`, label: `Popular`},
        isOpened: false
      };

      this.handleSortOptionClick = this.handleSortOptionClick.bind(this);
      this.handleSortSelectClick = this.handleSortSelectClick.bind(this);
      console.log(`withSortPlacesHOC`, props);
    }

    handleSortSelectClick() {
      this.setState(
          (state) => ({
            isOpen: !state.isOpen
          })
      );
    }

    handleSortOptionClick(option) {
      const {changeSorting} = this.props;
      this.setState(
          {
            selected: option,
            isOpen: false
          }
      );
      changeSorting(option.value);
    }

    render() {
      const {selected, isOpen} = this.state;
      const optionsClassName = classnames(
          `places__options places__options--custom`, {
            'places__options--opened': isOpen
          }
      );

      return (
        <Component {...this.props}>

          <span
            onClick={this.handleSortSelectClick}
            className="places__sorting-type"
            tabIndex={0}
          >
            {selected.label}
            <svg className="places__sorting-arrow" width={7} height={4}>
              <use xlinkHref="#icon-arrow-select" />
            </svg>
          </span>
          <ul className={optionsClassName}>
            {options.map((currOption) => (
              <li
                onClick={() => this.handleSortOptionClick(currOption)}
                key={currOption.value}
                className={classnames(`places__option`, {
                  'places__option--active': options.value === selected.value
                })}
                tabIndex={0}
              >{currOption.label}</li>
            ))}
          </ul>
        </Component>
      );
    }
  }

  WithSortPlaces.propTypes = {
    changeSorting: PropTypes.func.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    changeSorting(sorting) {
      dispatch(actionCreator.changeSorting(sorting));
    }
  });

  return connect(null, mapDispatchToProps)(WithSortPlaces);
};


export default withSortPlacesHOC;

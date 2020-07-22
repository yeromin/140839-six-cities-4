import React from 'react';
import PropTypes from 'prop-types';
import {SORT_OFFERS_OPTIONS} from "../../constant_variables";
import classnames from 'classnames';

// keeping here the only one state: isOpened
// for sorting states we're using HOC
class SortPlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
    this.handleSortToggle = this.handleSortToggle.bind(this);
    this.handleSortOptionClick = this.handleSortOptionClick.bind(this);

    // console.log(`SortPlaces props: `, props);
  }

  handleSortToggle() {
    this.setState(
        (state) => ({
          isOpen: !state.isOpen
        })
    );
  }

  handleSortOptionClick(val) {
    this.props.onSortOptionClick(val);
    this.setState({isOpen: false});
  }

  render() {

    const {isOpen} = this.state;
    const {currentSort} = this.props;

    const optionsClassName = classnames(
        `places__options places__options--custom`, {
          'places__options--opened': isOpen
        }
    );

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>

        <span
          onClick={this.handleSortToggle}
          className="places__sorting-type"
          tabIndex={0}
          style={{padding: `5px 15px 5px 7px`, marginLeft: `5px`}}
        >
          {currentSort.label}
          <svg className="places__sorting-arrow" style={{right: `3px`}} width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>

        <ul className={optionsClassName}>
          {SORT_OFFERS_OPTIONS.map((currOption) => (
            <li
              onClick={() => this.handleSortOptionClick(currOption)}
              key={currOption.value}
              className={classnames(`places__option`, {
                'places__option--active': currOption.value === currentSort.value
              })}
              tabIndex={0}
              name={currOption.value}
            >{currOption.label}</li>
          ))}
        </ul>
        {/* <select className="places__sorting-type" id="places-sorting">
          <option className="places__option" value="popular" selected="">Popular</option>
          <option className="places__option" value="to-high">Price: low to high</option>
          <option className="places__option" value="to-low">Price: high to low</option>
          <option className="places__option" value="top-rated">Top rated first</option>
        </select> */}
      </form>
    );
  }
}


SortPlaces.propTypes = {
  onSortOptionClick: PropTypes.func.isRequired,
  currentSort: PropTypes.object.isRequired,
};

export default SortPlaces;

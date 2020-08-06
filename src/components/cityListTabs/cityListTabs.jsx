import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../Store/reducer';
import {ALL_CITIES} from '../../constant_variables';

const CityListTabs = ({currentCity, handleCityClick}) => {

  const toSentenceCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {ALL_CITIES.map((curr, i) => {
            return (
              <li key={i} className="locations__item">
                <a className={
                  `locations__item-link
                  tabs__item
                  ${currentCity.toLowerCase() === curr.toLowerCase() ? `tabs__item--active` : ``}`
                }
                onClick={(e) => {
                  e.preventDefault();
                  handleCityClick(toSentenceCase(curr));
                }}
                href="#">
                  <span>{toSentenceCase(curr)}</span>
                </a>
              </li>
            );
          })}

        </ul>
      </section>
    </div>
  );
};


const mapStateToProps = (state) => ({
  currentCity: state.city
});

const mapDispatchToProps = (dispatch) => ({
  handleCityClick(currCity) {
    dispatch(ActionCreator.changeCity(currCity));
    dispatch(ActionCreator.getOffersList(currCity));
  }
});


CityListTabs.propTypes = {
  currentCity: PropTypes.string.isRequired,
  handleCityClick: PropTypes.func.isRequired
};

export {CityListTabs};
export default connect(mapStateToProps, mapDispatchToProps)(CityListTabs);

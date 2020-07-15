import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {actionCreator} from '../../Store/reducer';

const CityListTabs = ({allAvailableProperties, currentCity, handleCityClick}) => {

  const allCitiesList = allAvailableProperties.map((offer) => offer.city.toUpperCase());
  const allUniqueCitiesList = Array.from(new Set(allCitiesList));
  const toSentenceCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const handleCityClick = (city) => {

  }
  
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {allUniqueCitiesList.map((curr, i) => {
            return (
              <li key={i} className="locations__item">
                <a className={
                  `locations__item-link
                  tabs__item
                  ${currentCity.toLowerCase() === curr.toLowerCase() ? `tabs__item--active` : ``}`
                }
                onClick={(e) => {
                  e.preventDefault();
                  console.log(toSentenceCase(curr));
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

CityListTabs.propTypes = {
  currentCity: PropTypes.string.isRequired,
  handleCityClick: PropTypes.func.isRequired,
  allAvailableProperties: PropTypes.arrayOf(PropTypes.object).isRequired
};


const mapStateToProps = (state) => ({
  currentCity: state.city
});

const mapDispatchToProps = (dispatch) => ({
  handleCityClick(currCity) {
    dispatch(actionCreator.changeCity(currCity));
  }
});


export {CityListTabs};
export default connect(mapStateToProps, mapDispatchToProps)(CityListTabs);

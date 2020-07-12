import React from 'react';
import { PropTypes } from 'prop-types';

const CityListTabs = ({allAvailableProperties, currentCity}) => {

  const allCitiesList = allAvailableProperties.map((offer) => offer.city.toUpperCase());
  const allUniqueCitiesList = Array.from(new Set(allCitiesList));

  // console.log(`CityListTabs allAvailableProperties: `, allAvailableProperties);
  // console.log(`CityListTabs allCities: `, allUniqueCitiesList);
  // console.log(`CityListTabs currentCity: `, currentCity);

  const toSentenceCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

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
                } href="#">
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
  allAvailableProperties: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentCity: PropTypes.string.isRequired
};

export default CityListTabs;

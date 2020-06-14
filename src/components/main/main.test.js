import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import PropTypes from 'prop-types';


const numberFoundPlaces = 3333;
const placeCardName = [
  `MOCK OF place name - Beautiful & luxurious`,
  `MOCK OF place name - Wood and stone place`,
  `MOCK OF place name - apartment at great location`,
  `MOCK OF place name - Beautiful & luxurious`,
  `MOCK OF place name - apartment at great location`
];

describe(`mainTest`, () => {
  it(`Component Main should render the proper Search result page`, () => {
    const mainTree = renderer.create(
        <Main
          numberFoundPlaces={numberFoundPlaces}
          placeCardName={placeCardName}
        />).toJSON();
    expect(mainTree).toMatchSnapshot();
  });
});


Main.propTypes = {
  numberFoundPlaces: PropTypes.number.isRequired,
  placeCardName: PropTypes.arrayOf(PropTypes.string).isRequired
};

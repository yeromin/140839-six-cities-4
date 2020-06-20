import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

const numberFoundPlaces = 3333;
const placeCardName = [
  `MOCK OF place name - Beautiful & luxurious`,
  `MOCK OF place name - Wood and stone place`,
  `MOCK OF place name - apartment at great location`,
  `MOCK OF place name - Beautiful & luxurious`,
  `MOCK OF place name - apartment at great location`
];

// disable console.log wanring
/* eslint-disable-next-line */
const handlePlaceCardTitleClick = () => console.log(`Test click occurred`);

describe(`mainTest`, () => {
  it(`Component Main should render the proper Search result page`, () => {
    const mainTree = renderer.create(
        <Main
          numberFoundPlaces={numberFoundPlaces}
          placeCardName={placeCardName}
          handlePlaceCardTitleClick={handlePlaceCardTitleClick}
        />).toJSON();
    expect(mainTree).toMatchSnapshot();
  });
});

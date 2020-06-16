import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

const numberFoundPlaces = 55;
const placeCardName = [
  `MOCK OF place name - Beautiful & luxurious`,
  `MOCK OF place name - Wood and stone place`,
  `MOCK OF place name - apartment at great location`,
  `MOCK OF place name - Beautiful & luxurious`,
  `MOCK OF place name - apartment at great location`
];

describe(`appTest`, () => {
  it(`Component Main should render the whole App properly`, () => {
    const mainTree = renderer.create(
        <App
          numberFoundPlaces={numberFoundPlaces}
          placeCardName={placeCardName}
        />).toJSON();
    expect(mainTree).toMatchSnapshot();
  });
});

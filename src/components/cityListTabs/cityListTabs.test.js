import React from 'react';
import renderer from 'react-test-renderer';
import {CityListTabs} from './CityListTabs.jsx';

const currentCity = `Amsterdam`;

describe(`CityListTabs_test`, () => {
  it(`Component CityListTabs should render the proper Cities Tabs in Header`, () => {
    const tree = renderer.create(
        <CityListTabs
          currentCity={currentCity}
          handleCityClick={() => {}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

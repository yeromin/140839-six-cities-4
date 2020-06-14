import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './placeCard';

const name = `Mock of Place card`;

describe(`placePlate`, () => {
  it(`Component Place card should render the proper place card`, () => {
    const tree = renderer.create(
        <PlaceCard
          name={name}
        />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

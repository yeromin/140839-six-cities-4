import React from 'react';
import renderer from 'react-test-renderer';
import SortPlaces from './sortPlaces.jsx';
import withSortPlacesHOC from '../../HOCs/with-sortPlaces';

const SortPlacesWrap = withSortPlacesHOC(SortPlaces);

// TODO: to test HOC that is connected to Redux

describe(`sortPlaces_test`, () => {
  it(`Component SortPlaces should render the proper Sort (select) component`, () => {
    const tree = renderer.create(
        <SortPlacesWrap />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

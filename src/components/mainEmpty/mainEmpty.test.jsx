import React from 'react';
import renderer from 'react-test-renderer';
import MainEmpty from './mainEmpty';

describe(`MainEmpty_test`, () => {
  it(`Component MainEmpty should render the No Result Page if there's no offers for the city`, () => {
    const tree = renderer.create(
        <MainEmpty city={`Amsterdam`}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

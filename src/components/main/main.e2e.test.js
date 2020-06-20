import React from 'react';
// import Enzyme, {mount} from 'enzyme';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';
import PropTypes from 'prop-types';

Enzyme.configure({adapter: new Adapter()});


// mount - for nested components
// shallow - does not render nested components

describe(`Main_End2End`, () => {
  it(`Should test if button clicked`, () => {

    // create function for testing
    const handlePlaceCardTitleClick = jest.fn();

    const wrapper = shallow(
        <Main
          numberFoundPlaces={12}
          placeCardName={[`Beautiful apartment`, `Chip place`, `Nice view house`]}
          handlePlaceCardTitleClick={handlePlaceCardTitleClick}
        />
    );

    // get the real target
    const targetBtn = wrapper.find(`.places__found`);

    // targetBtn.props().onClick(); // - this will also work

    // simulate click for shallow:
    targetBtn.simulate(`click`);

    // simulate click for mount:
    // targetBtn.simulate(`click`, {preventDefault() {}});

    // long command:
    // expect(handlePlaceCardTitleClick.mock.calls.length).toBe(1);

    // shortcut:
    expect(handlePlaceCardTitleClick).toHaveBeenCalledTimes(1);
  });
});


Main.propTypes = {
  numberFoundPlaces: PropTypes.number.isRequired,
  placeCardName: PropTypes.arrayOf(PropTypes.string).isRequired,
  handlePlaceCardTitleClick: PropTypes.func.isRequired
};

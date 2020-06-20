import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offerCard.jsx';

Enzyme.configure({adapter: new Adapter()});

const testMockData = {
  price: 190,
  pricePer: `Night`,
  currency: `$`,
  title: `3-star hotel`,
  id: `23423`,
  type: `apartment`,
  rating: 4,
  badge: `Premium`,
  thumbnail: `https://source.unsplash.com/user/hutomoabrianto/260x300`
};

// mount - for nested components
// shallow - does not render nested components

describe(`OfferCard_End2End`, () => {
  it(`Should test if button clicked`, () => {

    // create function for testing
    const handleOfferCardTitleClick = jest.fn();

    const wrapper = shallow(

        <OfferCard
          handleOfferCardTitleClick={handleOfferCardTitleClick}
          // handleOfferCardHover={handleOfferCardHover}
          offerCardMockData={testMockData}
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
    // expect(handleOfferCardTitleClick.mock.calls.length).toBe(1);

    // shortcut:
    expect(handleOfferCardTitleClick).toHaveBeenCalledTimes(1);
  });
});

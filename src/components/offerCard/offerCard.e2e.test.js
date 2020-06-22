import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offerCard.jsx';

Enzyme.configure({adapter: new Adapter()});

const offerCardMockData = [
  {
    badge: `Premium`,
    currency: `$`,
    id: `23423`,
    price: 190,
    pricePer: `Night`,
    rating: 4,
    thumbnail: `https://source.unsplash.com/user/hutomoabrianto/260x300`,
    title: `Apartment in 3-star hotel (#6) Long-Stay discount`,
    type: `apartment`
  }
];
const currentHoveredCard = {
  badge: `Premium`,
  currency: `$`,
  id: `23423`,
  price: 190,
  pricePer: `Night`,
  rating: 4,
  thumbnail: `https://source.unsplash.com/user/hutomoabrianto/260x300`,
  title: `Apartment in 3-star hotel (#6) Long-Stay discount`,
  type: `apartment`
};

describe(`OfferCard_click_End2End`, () => {
  it(`Should test if place title has been clicked & Should test if place plate has been hovered`, () => {

    const handleOfferCardTitleClick = jest.fn();
    const handleOfferCardHover = jest.fn();
    const wrapper = shallow(
        <OfferCard
          onClickOfferCardTitle={handleOfferCardTitleClick}
          handleOfferCardHover={handleOfferCardHover}
          offerCardMockData={offerCardMockData}
        />
    );

    // get the real target
    const targetBtn = wrapper.find(`.place-card__name > a`);
    const placeCard = wrapper.find(`.place-card`);

    targetBtn.simulate(`click`);
    placeCard.simulate(`mouseEnter`);

    expect(handleOfferCardTitleClick).toHaveBeenCalledTimes(1);
    expect(handleOfferCardHover.mock.calls[0][0]).toMatchObject(currentHoveredCard);
  });

});

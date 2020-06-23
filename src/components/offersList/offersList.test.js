import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './offersList.jsx';

const onClickOfferCardTitle = (evt) => {
  evt.preventDefault();
  /* eslint-disable-next-line */ // disable console.log wanring
  console.log(`The REAL function fired!`, evt.target);
};

const mockData = {
  offerCard: [
    {
      price: 190,
      pricePer: `Night`,
      currency: `$`,
      title: `Apartment in 3-star hotel (#6) Long-Stay discount`,
      id: `23423`,
      type: `apartment`,
      rating: 4,
      badge: `Premium`,
      thumbnail: `https://source.unsplash.com/user/hutomoabrianto/260x300`
    },
    {
      price: 100,
      pricePer: `Night`,
      currency: `â‚¬`,
      title: `Einzelzimmer in MÃ¼nchen Innenstadt`,
      id: `56234`,
      type: `apartment`,
      rating: 4.5,
      badge: `Premium`,
      thumbnail: `https://source.unsplash.com/user/hutomoabrianto/260x300`
    },
    {
      price: 200,
      pricePer: `Night`,
      currency: `â‚¬`,
      title: `Cozy room for singles, couples or friends`,
      id: `55234524`,
      type: `house`,
      rating: 3,
      badge: `Premium`,
      thumbnail: `https://source.unsplash.com/user/hutomoabrianto/260x300`
    },
    {
      price: 2500,
      pricePer: `Month`,
      currency: `$`,
      title: `Amazing Apartment âœ¨ Center Munich`,
      id: `4624234`,
      type: `house`,
      rating: 5,
      badge: `LUXURY`,
      thumbnail: `https://source.unsplash.com/user/hutomoabrianto/260x300`
    },
  ]
};

describe(`offersList_test`, () => {
  it(`Component OfferList should render the proper place card`, () => {
    const tree = renderer.create(
        <OffersList
          mockData={mockData}
          onClickOfferCardTitle={onClickOfferCardTitle}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';


const mockData = {
  offersList: {
    amsterdam: {
      city: `Amsterdam`,
      placesFound: 8912,
    },
    paris: {
      city: `Paris`,
      placesFound: 197,
    },
    cologne: {
      city: `Cologne`,
      placesFound: 861,
    },
    brussels: {
      city: `Brussels`,
      placesFound: 881,
    },
    hamburg: {
      city: `Hamburg`,
      placesFound: 2287,
    },
    dusseldorf: {
      city: `Dusseldorf`,
      placesFound: 98
    }
  },

  offerCard: {
    0: {
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
    1: {
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
    2: {
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
    3: {
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
  }
};
const handleOfferCardTitleClick = (evt) => {
  evt.preventDefault();
  /* eslint-disable-next-line */ // disable console.log wanring
  console.log(`The REAL function fired!`, evt.target);
};

describe(`appTest`, () => {
  it(`Component Main should render the whole App properly`, () => {
    const mainTree = renderer.create(
        <App
          mockData={mockData}
          handleOfferCardTitleClick={handleOfferCardTitleClick}
        />).toJSON();
    expect(mainTree).toMatchSnapshot();
  });
});

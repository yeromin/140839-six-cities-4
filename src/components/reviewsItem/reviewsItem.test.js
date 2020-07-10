import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsItem from './reviewsItem.jsx';


const reviews = [
  {
    text: `is the best five star hotel and Ukraine, I spent 10 days during quarantine.
    The front desk staff was absolutely magnificent. Oleksandra and Veronika Gave me first class accommodations, upgraded me to a magnificent room free of charge, always very polite and constantly made sure that my stay was absolutely magnificent.`,
    rating: 5,
    name: `Paul`,
    avatar: `../img/avatar-max.jpg`,
    id: 0,
    date: `October 11 2019`
  },
  {
    text: `Half a year later and still Hilton hotel did not refund the money thats was overcharged. Most likely people like Volcan Amac steal money from customers this way.
    Lovely hotel but reception was rude, lazy and impolite. Check your credit card payment, I was overcharged eur 80 on a eur 400 per night room and despite promises and  credit invoice it was never returned.`,
    rating: 4,
    name: `Angela`,
    avatar: `../img/avatar-angelina.jpg`,
    id: 2,
    date: `September 5 2019`
  }
];

describe(`reviewsItem_test`, () => {
  it(`Component ReviewsItem should render the proper review item`, () => {
    const tree = renderer.create(
        <ReviewsItem
          reviews={reviews}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

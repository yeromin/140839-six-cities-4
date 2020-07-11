import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviewsList.jsx';


const currentItem = {
  city: `amsterdam`,
  price: 100,
  pricePer: `Night`,
  currency: `â‚¬`,
  title: `Einzelzimmer in Munich Innenstadt`,
  id: `56234`,
  type: `apartment`,
  rating: 2.3,
  badge: `Premium`,
  thumbnail: `https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
  images: [
    `https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
    `https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
    `https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
    `https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
    `https://images.unsplash.com/photo-1567225477277-c8162eb4991d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
    `https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
  ],
  bedrooms: 1,
  people: 4,
  facilities: [`Dishwasher`, `Cabel TV`, `Fridge`, `222Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  ownerAvatar: `../img/avatar-angelina.jpg`,
  hostBadge: `superhost`,
  location: [52.369553943508, 4.85309666406198],
  locationNearby: [[52.3909553943508, 4.85309666406198], [52.369553943508, 4.85309666406198], [52.3809553943508, 4.939309666406198]],
  reviews: [
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
  ]
};

describe(`reviewsList_test`, () => {
  it(`Component ReviewsList should render the proper reviews`, () => {
    const tree = renderer.create(
        <ReviewsList
          currentPlaceData={currentItem}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

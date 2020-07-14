import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offerCard.jsx';
import {Link} from 'react-router-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

Enzyme.configure({adapter: new Adapter()});

const offerCardData = [
  {
    city: `amsterdam`,
    price: 190,
    pricePer: `Night`,
    currency: `$`,
    title: `Apartment in 3-star hotel (#6) Long-Stay discount`,
    id: `23423`,
    type: `apartment`,
    rating: 1,
    badge: `Premium`,
    thumbnail: `https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
    images: [
      `https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
      `https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
      `https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
      `https://images.unsplash.com/photo-1533044309907-0fa3413da946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
      `https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80`,
      `https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80`
    ],
    bedrooms: 2,
    people: 3,
    facilities: [`1111Wi-Fi`, `Dishwasher`, `Cabel TV`, `Fridge`],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ownerAvatar: `../img/avatar-angelina.jpg`,
    hostBadge: `superhost`
  }
];

const currentHoveredCard = {
  city: `amsterdam`,
  price: 190,
  pricePer: `Night`,
  currency: `$`,
  title: `Apartment in 3-star hotel (#6) Long-Stay discount`,
  id: `23423`,
  type: `apartment`,
  rating: 1,
  badge: `Premium`,
  thumbnail: `https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
  images: [
    `https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
    `https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
    `https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
    `https://images.unsplash.com/photo-1533044309907-0fa3413da946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
    `https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80`,
    `https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80`
  ],
  bedrooms: 2,
  people: 3,
  facilities: [`1111Wi-Fi`, `Dishwasher`, `Cabel TV`, `Fridge`],
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  ownerAvatar: `../img/avatar-angelina.jpg`,
  hostBadge: `superhost`
};

describe(`OfferCard_hover_e2e`, () => {
  it(`Should test if we get the data of the hovered card`, () => {

    const handleOfferCardTitleClick = jest.fn();
    const handleOfferCardHover = jest.fn();
    const wrapper = mount(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" >
              <OfferCard
                onClickOfferCardTitle={handleOfferCardTitleClick}
                handleOfferCardHover={handleOfferCardHover}
                offerCardData={offerCardData}
              />
            </Route>
          </Switch>
        </BrowserRouter>
    );

    // get the real target
    const OfferCard = wrapper.find(`.place-card`);

    OfferCard.simulate(`mouseEnter`);

    expect(handleOfferCardHover.mock.calls[0][0]).toMatchObject(currentHoveredCard);
  });
});


describe(`OfferCard_click_e2e`, () => {
  it(`Should test if place title Link has the correct URL`, () => {

    const handleOfferCardTitleClick = jest.fn();
    const handleOfferCardHover = jest.fn();
    const wrapper = mount(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" >
              <OfferCard
                onClickOfferCardTitle={handleOfferCardTitleClick}
                handleOfferCardHover={handleOfferCardHover}
                offerCardData={offerCardData}
              />
            </Route>
          </Switch>
        </BrowserRouter>
    );

    // get the real target
    const title = wrapper.find(Link);
    expect(title.props().to).toBe(`dev-property/${encodeURI(offerCardData[0].id)}`);
  });
});

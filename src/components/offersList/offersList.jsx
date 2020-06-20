// component «Offer List»

import React from "react";
import OfferCard from '../offerCard/offerCard.jsx';

class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    // ?????????????????????
    // const placeListData = this.props.mockData.offersList;
    // const placeCardData = this.props.mockData.offerCard;
    // ?????????????????????

    this.handleOfferCardHover = this.handleOfferCardHover.bind(this);
  }

  handleOfferCardHover(currentCard) {
    // disable console.log wanring
    /* eslint-disable-next-line */
    this.setState({
      activeCard: currentCard
    });

    console.log(`Place card hovered from OffersList component`, currentCard);

    // ????????????????????? - what the fuck - some async staff???????
    // console.log(`this.state:`, this.state);
  }


  render() {
    return (

      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>

        <b className="places__found">
          {this.props.mockData.offersList.amsterdam.placesFound} 
          &nbsp;places to stay in&nbsp;
          {this.props.mockData.offersList.amsterdam.city}
        </b>

        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width={7} height={4}>
              <use xlinkHref="#icon-arrow-select" />
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active"tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>

          {/*
        <select class="places__sorting-type" id="places-sorting">
        <option class="places__option" value="popular" selected="">Popular</option>
        <option class="places__option" value="to-high">Price: low to high</option>
        <option class="places__option" value="to-low">Price: high to low</option>
        <option class="places__option" value="top-rated">Top rated first</option>
        </select>
        */}

        </form>
        <div className="cities__places-list places__list tabs__content">

          <OfferCard
            handleOfferCardTitleClick={this.props.handleOfferCardTitleClick}
            handleOfferCardHover={this.handleOfferCardHover}
            offerCardMockData={this.props.mockData.offerCard}
          />

        </div>
      </section>
    );
  }
}

export default OffersList;

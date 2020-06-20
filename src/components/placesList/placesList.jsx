// компонент «Список предложений»
// component «Offer List»

import React from "react";
import PlaceCard from '../placeCard/placeCard.jsx';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

    // ?????????????????????
    // const placeListData = this.props.mockData.placesList;
    // const placeCardData = this.props.mockData.placeOfferCard;
    // ?????????????????????

  }

  // handlePlaceCardHover = () => {
  //   // disable console.log wanring
  //   /* eslint-disable-next-line */
  //   console.log(`Place card hovered`);
  //   this.setState({ showBox: !this.state.showBox });
  // }


  render() {
    return (

      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>

        <b className="places__found"> {/* onClick={this.props.handlePlaceCardTitleClick} */}
          {this.props.mockData.placesList.amsterdam.placesFound} places to stay in {this.props.mockData.placesList.amsterdam.city}
        </b>

        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width={7} height={4}><use xlinkHref="#icon-arrow-select" /></svg>
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

          {Object.keys(this.props.mockData.placeOfferCard).map((placeID) => (
            <PlaceCard
              handlePlaceCardTitleClick={this.props.handlePlaceCardTitleClick}
              handlePlaceCardHover={this.props.handlePlaceCardHover}
              // key={placeID} // - а можно и так :)
              key={this.props.mockData.placeOfferCard[placeID].id}
              placeCardTitle={this.props.mockData.placeOfferCard[placeID].title}
              placeCardPrice={this.props.mockData.placeOfferCard[placeID].price}
              placeCardPricePer={this.props.mockData.placeOfferCard[placeID].pricePer}
              placeCardCurrency={this.props.mockData.placeOfferCard[placeID].currency}
              placeCardID={this.props.mockData.placeOfferCard[placeID].id}
              placeCardType={this.props.mockData.placeOfferCard[placeID].type}
              placeCardRating={this.props.mockData.placeOfferCard[placeID].rating}
              placeCardBadge={this.props.mockData.placeOfferCard[placeID].badge}
              placeCardThumbnail={this.props.mockData.placeOfferCard[placeID].thumbnail}
            />
          ))}

        </div>
      </section>
    );
  }
}

export default PlacesList;

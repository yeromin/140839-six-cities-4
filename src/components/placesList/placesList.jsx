// компонент «Список предложений»
import React from "react";
import PropTypes from 'prop-types';
import PlaceCard from '../placeCard/placeCard.jsx';


class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>

        <b className="places__found" onClick={this.props.onTitleClickTest}>{this.props.placeListData.amsterdam.placesFound} places to stay in {this.props.placeListData.amsterdam.city}</b>

        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>Popular<svg className="places__sorting-arrow" width={7} height={4}><use xlinkHref="#icon-arrow-select" /></svg></span>
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

          {Object.keys(this.props.placeCardData).map((placeID) => (
            <PlaceCard
              // key={placeID} // - а можно и так :)
              key={this.props.placeCardData[placeID].id}
              placeCardTitle={this.props.placeCardData[placeID].title}
              placeCardPrice={this.props.placeCardData[placeID].price}
              placeCardPricePer={this.props.placeCardData[placeID].pricePer}
              placeCardCurrency={this.props.placeCardData[placeID].currency}
              placeCardID={this.props.placeCardData[placeID].id}
              placeCardType={this.props.placeCardData[placeID].type}
              placeCardRating={this.props.placeCardData[placeID].rating}
              placeCardBadge={this.props.placeCardData[placeID].badge}
              placeCardThumbnail={this.props.placeCardData[placeID].thumbnail}
            />
          ))}

        </div>
      </section>
    );
  }
}

PlacesList.propTypes = {
  onTitleClickTest: PropTypes.func.isRequired,

  // place list
  placeListData: PropTypes.objectOf(
      PropTypes.shape({
        city: PropTypes.string.isRequired,
        placesFound: PropTypes.number.isRequired,
      })
  ).isRequired,

  // place item
  placeCardData: PropTypes.objectOf(PropTypes.shape({
    price: PropTypes.number.isRequired,
    pricePer: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    badge: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  })).isRequired

};

export default PlacesList;

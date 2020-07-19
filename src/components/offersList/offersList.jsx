import React from "react";
import OfferCard from '../offerCard/offerCard.jsx';
import PropTypes from 'prop-types';
import SortPlaces from '../sortPlaces/sortPlaces.jsx';
import WithSortPlacesHOC from '../../HOCs/with-sortPlaces';

const SortPlacesWrap = WithSortPlacesHOC(SortPlaces);

class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.handleOfferCardHover = this.handleOfferCardHover.bind(this);

  }

  handleOfferCardHover(currentCard) {
    this.setState({
      activeCard: currentCard
    });
    return currentCard;
  }

  render() {
    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>

        <b className="places__found">
          {this.props.offersListForCurrentCity.length}
          &nbsp;places to stay in&nbsp;
          {this.props.currentCity}
        </b>

        <SortPlacesWrap />

        <div className="cities__places-list places__list tabs__content">

          <OfferCard
            onClickOfferCardTitle={this.props.onClickOfferCardTitle}
            handleOfferCardHover={this.handleOfferCardHover}
            offerCardData={this.props.offersListForCurrentCity}
          />


        </div>
      </section>

    );
  }
}


OffersList.propTypes = {
  onClickOfferCardTitle: PropTypes.func.isRequired,
  offersListForCurrentCity: PropTypes.array,
  currentCity: PropTypes.string.isRequired,
};

export default OffersList;

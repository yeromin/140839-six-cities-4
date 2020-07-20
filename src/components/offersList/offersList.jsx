import React from "react";
import OfferCard from '../offerCard/offerCard.jsx';
import PropTypes from 'prop-types';

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
      <OfferCard
        onClickOfferCardTitle={this.props.onClickOfferCardTitle}
        handleOfferCardHover={this.handleOfferCardHover}
        offerCardData={this.props.offersListForCurrentCity}
      />
    );
  }
}


OffersList.propTypes = {
  onClickOfferCardTitle: PropTypes.func.isRequired,
  offersListForCurrentCity: PropTypes.array
};

export default OffersList;

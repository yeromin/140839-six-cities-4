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
    /* eslint-disable-next-line */ // disable console.log wanring
    console.log(`Place card hovered from OffersList component`, currentCard);
  }

  render() {
    return (
      <OfferCard
        handleOfferCardTitleClick={this.props.handleOfferCardTitleClick}
        handleOfferCardHover={this.handleOfferCardHover}
        offerCardMockData={this.props.mockData.offerCard}
      />
    );
  }
}


OffersList.propTypes = {
  handleOfferCardTitleClick: PropTypes.func.isRequired,
  mockData: PropTypes.shape({
    offerCard: PropTypes.object.isRequired
  })
};

export default OffersList;

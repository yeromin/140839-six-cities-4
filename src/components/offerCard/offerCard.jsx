// component �Offer card�
import React from 'react';


const PlaceCard = (props) => {

  /* eslint-disable react/prop-types */
  const {
    handleOfferCardTitleClick,
    handleOfferCardHover,
    offerCardMockData
  } = props;

  return (
    <React.Fragment>
      {Object.keys(offerCardMockData).map((placeID) => (
        <article
          className="cities__place-card place-card"
          key={offerCardMockData[placeID].id}
          id={offerCardMockData[placeID].id}
          onMouseEnter={ (()=>handleOfferCardHover(offerCardMockData[placeID])) }
        >

          <div className="place-card__mark">
            <span>{offerCardMockData[placeID].badge}</span>
          </div>
          <div className="cities__image-wrapper place-card__image-wrapper">
            <a href="#">
              <img
                className="place-card__image"
                src={offerCardMockData[placeID].thumbnail}
                width={260}
                height={200}
                alt="Place image"/>
            </a>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">
                  {offerCardMockData[placeID].currency}
                  {offerCardMockData[placeID].price}
                </b>
                <span className="place-card__price-text">/&nbsp;{offerCardMockData[placeID].pricePer}</span>
              </div>
              <button className="place-card__bookmark-button button" type="button">
                <svg className="place-card__bookmark-icon" width={18} height={19}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating" data-rating={offerCardMockData[placeID].rating}>
              <div className="place-card__stars rating__stars"><span style={{width: `80%`}} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="#" onClick={handleOfferCardTitleClick}>{offerCardMockData[placeID].title}</a>
            </h2>
            <p className="place-card__type">{offerCardMockData[placeID].type}</p>
          </div>

        </article>
      ))}
    </React.Fragment>

  );
};


export default PlaceCard;

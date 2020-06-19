// ????????? «???????? ???????????»
import React from 'react';

// TODO: ???????-?????????? ?????????
// https://up.htmlacademy.ru/react/4/tasks/11
// task #2

const PlaceCard = (props) => {

  /* eslint-disable react/prop-types */
  const {placeCardTitle,
    placeCardBadge,
    placeCardThumbnail,
    placeCardCurrency,
    placeCardPrice,
    placeCardPricePer,
    placeCardRating,
    placeCardType,
    placeCardID} = props;

  return (
    <article className="cities__place-card place-card" id={placeCardID}>
      <div className="place-card__mark">
        <span>{placeCardBadge}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={placeCardThumbnail} width={260} height={200} alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{placeCardCurrency}{placeCardPrice}</b>
            <span className="place-card__price-text">/&nbsp;{placeCardPricePer}</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating" data-rating={placeCardRating}><div className="place-card__stars rating__stars"><span style={{width: `80%`}} /><span className="visually-hidden">Rating</span></div></div>
        <h2 className="place-card__name"><a href="#">{placeCardTitle}</a></h2>
        <p className="place-card__type">{placeCardType}</p>
      </div>
    </article>
  );
};


export default PlaceCard;

import React from 'react';
import {Link} from 'react-router-dom';

const PlaceCard = (props) => {

  /* eslint-disable react/prop-types */
  const {
    onClickOfferCardTitle,
    handleOfferCardHover,
    offerCardMockData
  } = props;

  return (
    <React.Fragment>
      {(offerCardMockData).map((currItem) => (

        <article
          className="cities__place-card place-card"
          key={currItem.id}
          id={currItem.id}
          onMouseEnter={ (()=>handleOfferCardHover(currItem)) }
        >
          <div className="place-card__mark">
            <span>{currItem.badge}</span>
          </div>
          <div className="cities__image-wrapper place-card__image-wrapper">
            <a href="#">
              <img
                className="place-card__image"
                src={currItem.thumbnail}
                width={260}
                height={200}
                alt="Place image"/>
            </a>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">
                  {currItem.currency}
                  {currItem.price}
                </b>
                <span className="place-card__price-text">/&nbsp;{currItem.pricePer}</span>
              </div>
              <button className="place-card__bookmark-button button" type="button">
                <svg className="place-card__bookmark-icon" width={18} height={19}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars"><span style={{width: `${(Math.round(currItem.rating) * 100) / 5}%`}} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link
                to={`dev-property/${encodeURI(currItem.title)}`}
                // onClick= {onClickOfferCardTitle}
                onClick={ (()=>onClickOfferCardTitle(currItem)) }
              >
                {currItem.title}
              </Link>
              {/* <a href="#" onClick={onClickOfferCardTitle}>{currItem.title}</a> */}
            </h2>
            <p className="place-card__type">{currItem.type}</p>
          </div>

        </article>
      ))}
    </React.Fragment>

  );
};


export default PlaceCard;

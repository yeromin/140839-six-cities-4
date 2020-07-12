import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const PlaceCard = ({
  onClickOfferCardTitle,
  handleOfferCardHover,
  offerCardData,
}) => {
  return (
    <React.Fragment>
      {offerCardData.map((currItem) => {

        const {id, badge, currency, price, pricePer, thumbnail, rating, title, type} = currItem;

        return (<article
          className="cities__place-card place-card"
          key={id}
          id={id}
          onMouseEnter={() => handleOfferCardHover(currItem)}
        >
          <div className="place-card__mark">
            <span>{badge}</span>
          </div>
          <div className="cities__image-wrapper place-card__image-wrapper">
            <a href="#">
              <img
                className="place-card__image"
                src={thumbnail}
                width={260}
                height={200}
                alt="Place image"
              />
            </a>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">
                  {currency}
                  {price}
                </b>
                <span className="place-card__price-text">
                  /&nbsp;{pricePer}
                </span>
              </div>
              <button
                className="place-card__bookmark-button button"
                type="button"
              >
                <svg
                  className="place-card__bookmark-icon"
                  width={18}
                  height={19}
                >
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span
                  style={{
                    width: `${(Math.round(rating) * 100) / 5}%`,
                  }}
                />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link
                to={`dev-property/${encodeURI(id)}`}
                onClick={onClickOfferCardTitle} // click according to task 2
              >
                {title}
              </Link>
            </h2>
            <p className="place-card__type">{type}</p>
          </div>
        </article>);
      })
      }

    </React.Fragment>
  );
};

PlaceCard.propTypes = {
  onClickOfferCardTitle: PropTypes.func,
  handleOfferCardHover: PropTypes.func,
  offerCardData: PropTypes.array.isRequired,
};

PlaceCard.defaultProps = {
  onClickOfferCardTitle: ()=>{}
};

// TODO: handle this func in the <Property /> component
PlaceCard.defaultProps = {
  handleOfferCardHover: ()=>{}
};

export default PlaceCard;

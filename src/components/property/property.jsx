import React from 'react';
import PropTypes from 'prop-types';
import ReviewsList from '../reviewsList/reviewsList.jsx';
import {PROPERTY_CARD_IMG_COUNT} from '../../constant_variables';
import Map from '../map/map.jsx';
import OfferCard from '../offerCard/offerCard.jsx';


const Property = ({match: {params: {id: propertyID}}, mockData: {offerCard: dataArr}}) => {

  // console.log(dataArr);

  const currentItem = dataArr.find(({id}) => id === propertyID);
  // const arrDescription = currentItem.description.split(/(\.)/gi);
  // const arrDescriptionSentenses = arrDescription.filter((val) => {
  //   return val !== `.`;
  // });

  const {id, badge, type, bedrooms, people, hostBadge, ownerAvatar, images, rating, price, pricePer, title, facilities, description, locationNearby, cityCoordinates} = currentItem;

  return (
    <React.Fragment>
      <div>
        <div style={{display: `none`}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
        </div>
        <div className="page">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <a className="header__logo-link" href="main.html">
                    <img className="header__logo" src="../img/logo.svg" alt="6 cities logo" width={81} height={41} />
                  </a>
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          <main className="page__main page__main--property">
            <section className="property">

              <div className="property__gallery-container container">
                <div className="property__gallery">

                  {images.slice(0, PROPERTY_CARD_IMG_COUNT).map((imgSrc, index) => {
                    return (
                      <div key={index} className="property__image-wrapper">
                        <img className="property__image" src={imgSrc} alt="Photo studio" />
                      </div>
                    );
                  })}

                </div>
              </div>


              <div className="property__container container">
                <div className="property__wrapper">
                  <div className="property__mark">
                    <span>{badge}</span>
                  </div>
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {title}
                    </h1>
                    <button className="property__bookmark-button button" type="button">
                      <svg className="property__bookmark-icon" width={31} height={33}>
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: `${(Math.round(rating) * 100) / 5}%`}} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{rating}</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">
                      {type}
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      {bedrooms} Bedrooms
                    </li>
                    <li className="property__feature property__feature--adults">
                      Max {people} adults
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{price}</b>
                    <span className="property__price-text">&nbsp;{pricePer}</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What`s inside</h2>
                    <ul className="property__inside-list">

                      {facilities.map((curr, i) => (
                        <li key={i} className="property__inside-item">
                          {curr}
                        </li>
                      ))}

                    </ul>
                  </div>
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className={`property__avatar-wrapper ${hostBadge === `superhost` ? `property__avatar-wrapper--pro` : null} user__avatar-wrapper`}>
                        <img className="property__avatar user__avatar" src={ownerAvatar} width={74} height={74} alt="Host avatar" />
                      </div>
                      <span className="property__user-name">
                        Angelina
                      </span>
                    </div>
                    <div className="property__description">
                      <p className="property__text">{description}</p>
                    </div>
                  </div>

                  <ReviewsList currentPlaceData={currentItem} />

                </div>
              </div>

              <Map locationArr={locationNearby} htmlclass={`property__map map`} width={`100%`} height={`579px`} zoom={13} cityCoordinates={cityCoordinates}/>

            </section>

            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">

                  <OfferCard
                    offerCardData={dataArr.slice(0, 3)}
                  />

                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};


Property.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  mockData: PropTypes.shape({
    offerCard: PropTypes.array.isRequired
  })
};

export default Property;

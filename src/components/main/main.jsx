import React from 'react';
import PropTypes from 'prop-types';
import OffersList from '../offersList/offersList.jsx';
import Map from '../map/map.jsx';
import CityListTabs from '../cityListTabs/cityListTabs.jsx';
import {connect} from 'react-redux';
import MainEmpty from '../mainEmpty/mainEmpty.jsx';

const sortOffers = (sortType, offers) => {

  // make a copy of the original array.
  // TODO: do not rerender Map!!!
  const preparedOffers = offers.slice(0);
  switch (sortType) {
    case `popular`:
      return preparedOffers;

    case `low-to-high`:
      return preparedOffers.sort((a, b) => a.price - b.price);

    case `high-to-low`:
      return preparedOffers.sort((a, b) => a.price - b.price).reverse();

    case `top-rated-first`:
      return preparedOffers.sort((a, b) => a.rating - b.rating).reverse();

    default:
      return preparedOffers;
  }
};

const Main = (props) => {
  const {onClickOfferCardTitle, currentSortedOffersArray, currentSortValue} = props;
  const locationArr = currentSortedOffersArray.map((curr) => curr.location);

  return (
    <React.Fragment>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
            />
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            />
          </symbol>
        </svg>
      </div>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width={81}
                    height={41}
                  />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a
                      className="header__nav-link header__nav-link--profile"
                      href="#"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>

          <CityListTabs />

          {currentSortedOffersArray.length < 1 ? <MainEmpty city={props.currentCity} /> :
            <div className="cities">
              <div className="cities__places-container container">

                <OffersList
                  offersListForCurrentCity={currentSortedOffersArray}
                  onClickOfferCardTitle={onClickOfferCardTitle}
                  currentCity={props.currentCity}
                  currentSortValue={currentSortValue}
                />

                <section className={`map`} style={{width: `50%`, height: `100vh`}}>
                  <Map
                    locationArr={locationArr}
                    cityCoordinates={currentSortedOffersArray[0].cityCoordinates}
                    zoom={12}
                  />
                </section>

              </div>
            </div>
          }

        </main>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  onClickOfferCardTitle: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  currentSortValue: PropTypes.string.isRequired,
  currentSortedOffersArray: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => {
  return {
    currentCity: state.city,
    currentSortValue: state.sort.value,
    currentSortedOffersArray: sortOffers(state.sort.value, state.offersCityList)
  };
};

export {Main};
export default connect(mapStateToProps, null)(Main);

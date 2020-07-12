import mockData from '../mocks/offers';
import {INIT_CITY_FOR_THE_APP} from '../constant_variables';

// VARIABLES FOR THE INITIAL STATE OF THE APP
const getOffersForCity = (city) => {
  return mockData.offerCard.filter(
      (offer) => (offer.city).toLowerCase() === city.toLowerCase()
  );
};
const initialCityOffers = getOffersForCity(INIT_CITY_FOR_THE_APP);
const allCitiesAvailable = mockData.offerCard.map((offer) => offer.city.toUpperCase());
const citiesAvailable = Array.from(new Set(allCitiesAvailable));

const initialState = {
  city: INIT_CITY_FOR_THE_APP,
  offersList: initialCityOffers
};


// ACTIONS
const actionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS_FOR_THE_CITY`,
};

const actionCreator = {
  changeCity: (city = initialState.city) => {
    return {
      type: actionType.CHANGE_CITY,
      payload: city
    };
  },

  getOffersList: (city) => {
    return {
      type: actionType.GET_OFFERS,
      payload: getOffersForCity(city)
    };
  }
};


// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_CITY:
      return Object.assign(state, {
        city: action.payload
      });
    case actionType.GET_OFFERS:
      return Object.assign(state, {
        offersCityList: action.payload
      });
  }

  return state;
};

export {reducer, actionType, actionCreator};

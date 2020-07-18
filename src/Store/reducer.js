import mockData from '../mocks/offers';
import {INIT_CITY_FOR_THE_APP} from '../constant_variables';


// INITIAL STATE OF THE APP
const getOffersForCity = (city) => {
  return mockData.offerCard.filter(
      (offer) => (offer.city).toLowerCase() === city.toLowerCase()
  );
};

const initialState = {
  city: INIT_CITY_FOR_THE_APP,
  offersCityList: getOffersForCity(INIT_CITY_FOR_THE_APP),
  sort: `Popular`
};


// ACTIONS
const actionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS_FOR_CURRENT_CITY`,
  CHANGE_PLACES_SORT: `CHANGE_PLACES_SORT`
};

const actionCreator = {
  changeCity: (city = initialState.city) => {
    return {
      type: actionType.CHANGE_CITY,
      payload: city
    };
  },

  getOffersList: (city = initialState.city) => {
    return {
      type: actionType.GET_OFFERS,
      payload: getOffersForCity(city)
    };
  },

  changeSorting: (sort) => ({
    type: actionType.CHANGE_PLACES_SORT,
    payload: sort
  })
};


// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });

    case actionType.GET_OFFERS:
      return Object.assign({}, state, {
        offersCityList: action.payload
      });

    case actionType.CHANGE_PLACES_SORT:
      console.log(state);
      return Object.assign({}, state, {
        sort: action.payload
      });

  }
  return state;
};

export {reducer, actionType, actionCreator};

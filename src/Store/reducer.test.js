import {reducer, actionType, actionCreator} from "./reducer.js";
import mockData from '../mocks/offers';
import {INIT_CITY_FOR_THE_APP} from '../constant_variables';

const initCity = INIT_CITY_FOR_THE_APP;

const getOffersForCity = (city) => {
  return mockData.offerCard.filter(
      (offer) => (offer.city).toLowerCase() === city.toLowerCase()
  );
};

const offersCityList = getOffersForCity(INIT_CITY_FOR_THE_APP);


describe(`reducers_test`, () => {
  it(`Reducer returns the initial state if there's no parameters`, () => {
    expect(
        reducer(undefined, {}))
        .toEqual({city: initCity, offersCityList});
  });

  it(`Reducer changes the city according to the parameter passed`, () => {
    expect(
        reducer(
            {city: `Paris`, offersCityList},
            {type: actionType.CHANGE_CITY, payload: `Paris`}))
        .toEqual({
          city: `Paris`,
          offersCityList}
        );
  });

  it(`Reducer changes property list according to the parameter passed`, () => {
    expect(
        reducer(
            {city: `Paris`, offersCityList: getOffersForCity(`Paris`)},
            {type: actionType.GET_OFFERS_CITY_LIST, payload: getOffersForCity(`Paris`)}))
        .toEqual({
          city: `Paris`,
          offersCityList: getOffersForCity(`Paris`)
        });
  });

});

describe(`actions_test`, () => {
  it(`actionCreator.changeCity() returns correct data by action`, () => {
    expect(actionCreator.changeCity(`Paris`)).toEqual({
      type: actionType.CHANGE_CITY,
      payload: `Paris`,
    });
  });

  it(`actionCreator.changeCity() returns correct data by action without any parameter (by default)`, () => {
    expect(actionCreator.changeCity()).toEqual({
      type: actionType.CHANGE_CITY,
      payload: initCity,
    });
  });

  it(`actionCreator.getOffersList() returns correct data by action`, () => {
    expect(actionCreator.getOffersList(`Amsterdam`)).toEqual({
      type: actionType.GET_OFFERS,
      payload: getOffersForCity(`Amsterdam`)
    });
  });

  it(`actionCreator.getOffersList() returns correct data by action without any parameter (by default)`, () => {
    expect(actionCreator.getOffersList()).toEqual({
      type: actionType.GET_OFFERS,
      payload: getOffersForCity(`Amsterdam`)
    });
  });
  
});

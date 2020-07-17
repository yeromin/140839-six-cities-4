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

  // it(`Reducer changes the city by a given parameter`, () => {
  //   expect(
  //       reducer(
  //           {city: `Paris`, offersCityList},
  //           {type: actionType.CHANGE_CITY, payload: `Amsterdam`}))
  //       .toEqual({
  //         city: `Amsterdam`,
  //         offersCityList}
  //       );
  // });

  // it(`Reducer changes property list according to the parameter passed`, () => {
  //   expect(
  //       reducer(
  //           {city: `Paris`, offersCityList: offersCityListForParis},
  //           {type: actionType.GET_OFFERS_CITY_LIST, payload: offersCityListForParis}))
  //       .toEqual({
  //         city: `Paris`,
  //         offersCityListForParis
  //       });
  // });

});

describe(`actions_test`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(actionCreator.changeCity(`Amsterdam`)).toEqual({
      type: actionType.CHANGE_CITY,
      payload: `Amsterdam`,
    });
  });

  it(`Action creator for change city returns correct action without city`, () => {
    expect(actionCreator.changeCity()).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Paris`,
    });
  });
});

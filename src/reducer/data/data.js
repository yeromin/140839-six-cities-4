// import {INIT_CITY_FOR_THE_APP, SORT_OFFERS_OPTIONS} from '../../constant_variables';


const initialState = {
  places: [],
  isLoading: false
  // city: INIT_CITY_FOR_THE_APP,
  // sort: SORT_OFFERS_OPTIONS[0],
};

const ActionType = {
  LOAD_PLACES: `LOAD_PLACES`,
  IS_LOADING: `IS_LOADING`,
};

const ActionCreator = {
  loadPlaces: (places) => {
    // console.log(`ActionCreator loadPlaces:`, places);
    return {
      type: ActionType.LOAD_PLACES,
      payload: places
    };
  },
  setLoading: (isLoading) => {
    return {
      type: ActionType.IS_LOADING,
      payload: isLoading
    };
  }
};

// thunk:
const Operation = {
  loadPlaces: () => (dispatch, getState, api) => {

    dispatch(ActionCreator.setLoading(true));
    dispatch(ActionCreator.loadPlaces());

    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadPlaces(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === ActionType.LOAD_PLACES) {
    return Object.assign({}, state, {
      places: action.payload,
    });
  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};

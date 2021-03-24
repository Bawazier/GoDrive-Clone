import {createStore} from 'redux';

const initialState = {
  origin_address: '',
  origin_location: {},
  origin_name: '',
  destination_address: '',
  destination_location: {},
  destination_name: '',

  product_type: '',
  product_location: {},
  product_name: '',
  product_price: '',
  product_est: '',
  product_rating: '',
  product_plate: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORIGIN': {
      return {
        ...state,
        origin_address: action.payload.origin_address,
        origin_location: action.payload.origin_location,
        origin_name: action.payload.origin_name,
      };
    }
    case 'SET_DESTINATION': {
      return {
        ...state,
        destination_address: action.payload.destination_address,
        destination_location: action.payload.destination_location,
        destination_name: action.payload.destination_name,
      };
    }
  }
};

const store = createStore(reducer, initialState);

export default store;

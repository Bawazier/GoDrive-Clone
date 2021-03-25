import {createStore} from 'redux';

const initialState = {
  origin_address: '',
  origin_location: {},
  origin_name: '',
  destination_address: '',
  destination_location: {},
  destination_name: '',

  order_product: '',
  order_fund: '',
  order_price: '',
  order_tax: '',
  order_est: '',
  order_point: '',
  order_code: '',
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
    case 'SET_ORDER': {
      return {
        ...state,
        order_product: action.payload.order_product,
        order_fund: action.payload.order_fund,
        order_price: action.payload.order_price,
        order_tax: action.payload.order_tax,
        order_est: action.payload.order_est,
        order_point: action.payload.order_point,
        order_code: action.payload.order_code,
      };
    }
  }
};

const store = createStore(reducer, initialState);

export default store;

export default {
  setOrigin: payload => ({
    type: 'SET_ORIGIN',
    payload,
  }),
  setDestination: payload => ({
    type: 'SET_DESTINATION',
    payload,
  }),
  setOrder: payload => ({
    type: 'SET_ORDER',
    payload,
  }),
};

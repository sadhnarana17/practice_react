import { createStore } from 'redux';

const initialState = {
  mobileNavVisible: false,
  isVideoVisible: false,
  videoPlayed: false,
  isEmailInputValid: true,
  wasEmailSent: false,
  routeName: '/',
};

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return {
        ...state,
        mobileNavVisible: !state.mobileNavVisible,
      };
    case 'VIDEO':
      if (!state.videoPlayed && action.isVisible) {
        return {
          ...state,
          videoPlayed: true,
        };
      }
      return state;
    case 'EMAIL_VALIDATION':
      return {
        ...state,
        isEmailInputValid: action.isValid,
        wasEmailSent: action.wasSent,
      };
    case 'ROUTE_CHANGE':
      return {
        ...state,
        routeName: action.routeName,
      };
    default:
      return state;
  }
});

export default store;

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGGING_IN':
      return {
        ...state,
        user: null,
        isLoading: true,
        haserror: false,
      };
    case 'AUTHENTICATED':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        haserror: false
      };
    case 'REJECTED':
      return {
        ...state,
        user: null,
        isLoading: false,
        haserror: true
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isLoading: false,
        haserror: false
      };

    default:
      return state;
  }
};


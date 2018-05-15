const initialState = {
  name: 'Xing',
  age: 28
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_OUT":
      state = {
        ...initialState
      }
      break;
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      }
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      }
      break;
    default:
      return state;
  }
  return state;
}

export default userReducer;
const userReducer = (state = {
  name: 'Xing',
  age: 28
}, action) => {
  switch (action.type) {
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
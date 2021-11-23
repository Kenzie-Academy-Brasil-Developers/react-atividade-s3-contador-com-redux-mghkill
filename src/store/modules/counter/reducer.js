import actionsTypes from "./actionsTypes";
const reducerCounter = (state = 0, action) => {
  const { ADD_COUNTER, SUB_COUNTER } = actionsTypes;
  switch (action.type) {
    case ADD_COUNTER:
      return (state = state + action.number);
    case SUB_COUNTER:
      if (state > 0) {
        return (state = state - action.number);
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default reducerCounter;

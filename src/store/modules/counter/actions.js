import actionsTypes from "./actionsTypes";
const { ADD_COUNTER, SUB_COUNTER } = actionsTypes;

export const addCounter = (number) => {
  return {
    type: ADD_COUNTER,
    number,
  };
};
export const subCounter = (number) => {
  return {
    type: SUB_COUNTER,
    number,
  };
};

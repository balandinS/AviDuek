import { RESET_POSITION_ELEMENT, SET_POSITION_ELEMENT } from "../action/types";
const initialState = {
  x: 1,
  y: 1,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSITION_ELEMENT:
      return { ...state, ...payload };
    case RESET_POSITION_ELEMENT:
      return {...state, x: 0, y: 0}
    default:
      return state;
  }
};

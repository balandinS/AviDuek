import * as TYPE from "../action/types";

export default (state = "", { type, payload }) => {
  switch (type) {
    case TYPE.FETCH_IMAGE:
      return payload;
    case 'CLEAN_UP': 
     return ''
    default:
      return state;
  }
};

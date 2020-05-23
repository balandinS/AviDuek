import * as TYPE from "../action/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case TYPE.FETCH_GALLERY:
      return payload;
    default:
      return state;
  }
};

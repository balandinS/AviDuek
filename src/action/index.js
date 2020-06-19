import * as TYPE from "./types";
import { fetch, fetchImage } from "../utils";
export const toggleMenuBar = (dispatch) => {
  return {
    type: TYPE.TOGGLE_MENUBAR
  };
};
export const fetchGallery = (param) => async (dispatch) => {
  const gallery = await fetch("gallery");
  dispatch({
    type: TYPE.FETCH_GALLERY,
    payload: [...gallery]
  });
};
export const fetchProducts = (param) => async (dispatch) => {
  const products = await fetch(param);
  dispatch({
    type: TYPE.FETCH_PRODUCTS,
    payload: [...products]
  });
};

export const fetchImg = (path, id) => async dispatch => {
  const payload = await fetchImage(path,id)
  dispatch({
    type: TYPE.FETCH_IMAGE,
    payload
  })
}

export const setPositionElement = element => {
   return {
     type: TYPE.SET_POSITION_ELEMENT,
     payload: {
       x: element.x,
       y: element.y
     }
   }
}


export const resetPositionElement = () => {
  return {
    type: TYPE.RESET_POSITION_ELEMENT,
  }
}

export const hideToUp = () => {
  return {
    type: TYPE.HIDE_TO_UP
  }
}

export const displayToUp = () => {
  return {
    type: TYPE.DISPLAY_TO_UP
  }
}
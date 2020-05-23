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
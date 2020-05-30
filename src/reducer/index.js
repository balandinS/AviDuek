import {combineReducers} from 'redux'
import menuBarIsOpen from './menubarIsopenReducer';
import products from './productsReducer';
import gallery from './galleryReducer';
import selectedImage from './selectedImageReducer';
import positionElement from './elementPositionReducer'
export default combineReducers({
    menuBarIsOpen,
    products,
    gallery,
    selectedImage,
    positionElement
})
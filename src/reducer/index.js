import {combineReducers} from 'redux'
import menuBarIsOpen from './menubarIsopenReducer';
import products from './productsReducer';
import gallery from './galleryReducer';
import selectedImage from './selectedImageReducer'
export default combineReducers({
    menuBarIsOpen,
    products,
    gallery,
    selectedImage
})
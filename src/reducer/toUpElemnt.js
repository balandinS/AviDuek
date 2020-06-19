import { HIDE_TO_UP, DISPLAY_TO_UP } from '../action/types'


export default (state = false, { type, payload }) => {
    switch (type) {

    case HIDE_TO_UP:
        return false // display: none
    case DISPLAY_TO_UP:
        return true //dipslay: flex
    default:
        return state
    }
}

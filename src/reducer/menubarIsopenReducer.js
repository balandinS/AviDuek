import  * as TYPE  from "../action/types";
export default  (state = false, {type}) => {
    switch (type) {
        case TYPE.TOGGLE_MENUBAR:
         return !state
        default:
          return  state;
    }
}
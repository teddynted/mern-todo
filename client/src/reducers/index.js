import { ADD_TODO, DELETE_TODO, UPDATE_TODO, LIST_TODOS } from '../actions/index';

/* 
  The reducer is a pure function that takes the previous state and an action, 
  and returns the next state. 
*/
export default function( state = [], action ) {
    switch(action.type){
      case ADD_TODO:
        return { ...state, todo: action.payload };
      case DELETE_TODO:
        return { ...state, todo: action.payload };
      case  UPDATE_TODO:
        return { ...state, todo: action.payload };
      case LIST_TODOS:
        return { ...state, list: action.payload };
      default:
        return state;
    }
}
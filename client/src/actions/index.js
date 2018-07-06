import axios from 'axios';

/* Define Action Types */
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const LIST_TODOS = 'LIST_TODOS';
export const UPDATE_TODO = 'UPDATE_TODO';

/* Create a todo */
export function addTodo( task ){
   const request = axios.post('/create', task );
   return {
      type: ADD_TODO,
      payload: request
   }
}

/* List todos */
export function listTodos(){
   const request = axios.get('/read');
   return {
      type: LIST_TODOS,
      payload: request
   }
}

/* Update a todo by record  */
export function updateTodo( _id, status ){
   const request = axios.put('/update', { params : { _id: _id, status: status } } );
   return {
      type: UPDATE_TODO,
      payload: request
   }
}

/* Delete todo by record id */
export function deleteTodo( _id ){
   const request = axios.delete('/delete', { params : { _id: _id } } );
   return {
      type: DELETE_TODO,
      payload: request
   }
}
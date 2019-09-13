import * as types from '../constants/ActionTypes';

let idCounter = 0;
// eslint-disable-next-line no-return-assign
export const addTodo = (text) => ({
  type: types.ADD_TODO,
  text,
  id: (idCounter += 1),
});
export const completeTodo = (id) => ({ type: types.COMPLETE_TODO, id });
export const changeFilter = (filter) => ({
  type: types.CHANGE_FILTER,
  filter,
});
export const deleteTodo = (id) => ({ type: types.DELETE_TODO, id });
export const deleteAllTodos = () => {
  idCounter = 0;
  return { type: types.DELETE_ALL_TODOS };
};

import Immutable from 'immutable';

import {
  VisibilityFilters,
  COMPLETE_TODO,
  ADD_TODO,
  SET_VISIBILITY_FILTER
} from './actions';

export function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action = null) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export function todos(state = Immutable.List(), action = null) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = Immutable.Map({text: action.text, completed: false});
      return state.push(newTodo);
    case COMPLETE_TODO:
      return state.get(action.index).set('completed', true);
    default:
      return state;
  }
}

import * as ActionTypes from '../constants/ActionTypes';
import * as _ from 'lodash';

const defaultState = {
  title: 'Home',
};

export default function(state = defaultState, action) {
  switch (action.type) {
  case ActionTypes.TITLE_CHANGED:
  // TODO: check if lodash is used elsewhere or replace _.extend with polyfill (babel generates one).
    return _.extend(state, {title: action.text});
  default:
    return state;
  }
}

import { combineReducers } from 'redux';
import * as constants from '../constants/app_constants';

const initial = (
  state =
    { passage: "", stageOne: true },
  action
) => {
  switch ( action.type ) {
    case constants.ADD_PASSAGE:
      return Object.assign({}, state, {
        passage: action.passage,
        stageOne: false
      });
    default:
      return state;
  }
};

const change = (
  state = {
    passage: ""
  },
  action
) => {
  switch ( action.type ) {
    case constants.CHANGE_PASSAGE:
      return Object.assign({}, state, {
        passage: action.passage
      });
    default:
      return state;
  }
}

const compareLogic = ( initial, change ) => {
  let initialArr = initial.split(" ");
  let changeArr = change.split(" ");
  let finalArr = [];

  for ( let i = 0; i < initialArr.length; i++ ) {
    // issues with new line characters
    // how to put together a series of comma changes?
    if ( initialArr[i] !== changeArr[i] ) {
      finalArr.push(
        {
          initial: initialArr[i],
          change: changeArr[i],
        }
      )
    }
  }
  return finalArr;
}

const compare = (
  state = {
    comparison: [],
    stageThree: false
  },
  action
) => {
  switch ( action.type ) {
    case constants.COMPARE_PASSAGES:
      return Object.assign({}, state, {
        comparison: compareLogic( action.initialPassage, action.changePassage ),
        stageThree: true
      });
    default:
      return state;
  }
}

export const passageApp = combineReducers({
  initial: initial,
  change: change,
  compare: compare
});
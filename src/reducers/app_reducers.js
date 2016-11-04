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

const formatArray = ( string ) => {
  for ( let i = 0; i < string.length; i++ ) {
    if ( string[i] === "\n" ) {
      string = string.replace(string[i], " ");
    }
  }

  return string.split(" ");
}

const compareLogic = ( initial, change ) => {
  let initialArr = formatArray( initial );
  let changeArr = formatArray( change );
  let finalArr = [];

  for ( let i = 0; i < initialArr.length; i++ ) {
    // how to put together a series of comma changes?
    if ( initialArr[i] !== changeArr[i] ) {
      if ( initialArr[i].includes(",") && !changeArr[i].includes(",") ){
        finalArr.push(
          {
            initial: initialArr[i] + " " + initialArr[i+1],
            change: changeArr[i] + " " + changeArr[i+1],
          }
        )
      } else {
        finalArr.push(
          {
            initial: initialArr[i],
            change: changeArr[i],
          }
        )
      }
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
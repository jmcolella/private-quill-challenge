import * as constants from '../constants/app_constants';

export function initialPassage ( input ) {
  return {
    type: constants.ADD_PASSAGE,
    passage: input
  }
};

export function changeInitialPassage ( input ) {
  return {
    type: constants.CHANGE_PASSAGE,
    passage: input
  }
}

export function comparePassages ( initial, change ) {
  return {
    type: constants.COMPARE_PASSAGES,
    initialPassage: initial,
    changePassage: change
  }
}
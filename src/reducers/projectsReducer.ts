import * as actionTypes from '../actions/actionTypes';
import { IProjectProps } from '../types';
import initialApplicationState from './initialState';

export default (state: IProjectProps[] = initialApplicationState.projectList
                , action: {type: string, projectList: IProjectProps[]}) => {
  switch ( action.type ) {
    case actionTypes.LOAD_PROJECTS_SUCCESS:
      return action.projectList

    default:
      return state;
  }
};

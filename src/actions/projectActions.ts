import { Action, Dispatch } from 'redux';

import * as actionTypes from './actionTypes';

import { IProjectProps } from '../types';

import { currentProjects } from '../data/projectData';

export const loadProjectsSuccess = (projectList: IProjectProps[]) => {
  return {
    type: actionTypes.LOAD_PROJECTS_SUCCESS, projectList
  }
};

export const loadProjects = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(loadProjectsSuccess(currentProjects));
  };
}

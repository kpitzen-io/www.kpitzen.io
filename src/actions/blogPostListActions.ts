import { Action, Dispatch } from 'redux';

import blogPostsData from '../data/blogPostData';
import * as actionTypes from './actionTypes';

// object is about as bad as any
export const loadBlogPostsSuccess = (blogPosts: object) => actionTypes.createAction(actionTypes.LOAD_BLOG_POSTS_SUCCESS, blogPosts);

export const loadBlogPostFileNames = (fileNames: string[]) => actionTypes.createAction(actionTypes.LOAD_BLOG_POST_FILES_FOUND, fileNames);

export const LoadBlogPostActions = {
  loadBlogPostsSuccess,
  loadBlogPostFileNames,
}

export type LoadBlogPostActions = actionTypes.ActionsUnion<typeof LoadBlogPostActions>;

export const loadBlogPosts = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(loadBlogPostsSuccess(blogPostsData));
  }
}

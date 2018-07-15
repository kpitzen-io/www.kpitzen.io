import { Action, Dispatch } from 'redux';

import blogPostsData from '../data/blogPostData';

import * as actionTypes from './actionTypes';


export const loadBlogPostsSuccess = (blogPosts: object) => {
  return {
    type: actionTypes.LOAD_BLOG_POSTS_SUCCESS, blogPosts
  }
};

export const loadBlogPosts = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(loadBlogPostsSuccess(blogPostsData));
  }
}

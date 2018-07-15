import * as actionTypes from '../actions/actionTypes';
import { IBlogPost } from '../types';
import initialApplicationState from './initialState';

export default (state: IBlogPost[] = initialApplicationState.blogPosts
                , action: {type: string, blogPosts: IBlogPost[]}) => {
  switch ( action.type ) {
    case actionTypes.LOAD_BLOG_POSTS_SUCCESS:
      return action.blogPosts

    default:
      return state;
  }
};

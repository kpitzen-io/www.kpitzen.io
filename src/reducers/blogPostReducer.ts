import * as actionTypes from '../actions/actionTypes';
import { IRenderedBlogPost } from '../types';
import initialApplicationState from './initialState';

export default (state: IRenderedBlogPost = initialApplicationState.blogPost
                , action: {type: string, blogPost: IRenderedBlogPost, blogPostMeta: object}): IRenderedBlogPost => {
  switch ( action.type ) {
    case actionTypes.LOAD_BLOG_POST_SUCCESS:
      return action.blogPost
    default:
      return state;
  }
};

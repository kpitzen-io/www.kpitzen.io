import * as actionTypes from '../actions/actionTypes';
import { IBlogPost } from '../types';
import initialApplicationState from './initialState';
import { LoadBlogPostActions } from '../actions/blogPostListActions';

export default (state: IBlogPost[] = initialApplicationState.blogPosts
                , action: LoadBlogPostActions) => {
  switch ( action.type ) {
    case actionTypes.LOAD_BLOG_POSTS_SUCCESS:
      return action.payload
    case actionTypes.LOAD_BLOG_POST_FILES_FOUND: {
      return state.map(blogPost => ({
        ...blogPost,
        fileFound: action.payload.indexOf(blogPost.source) >= 0
      }));
    }
    default:
      return state;
  }
};

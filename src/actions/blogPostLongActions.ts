import { Action, Dispatch } from 'redux';

import blogPostsData from '../data/blogPostData';

import * as types from '../types';

import * as actionTypes from './actionTypes';


// const readMarkdownFile = (filepath: string) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filepath, (error, data) => {
//       if (error) {
//         reject(error)
//       } else {
//         resolve(data.toString('utf-8'))
//       }
//     });
//   })
// }

export const loadBlogPostSuccess = (blogPosts: types.IBlogPost[], blogPostTitle: string) => {
  // const blogPostMeta: types.IBlogPost[] = blogPosts.filter(blogPost => blogPost.filename === blogPostTitle);
  // const blogPostData = readMarkdownFile(blogPostMeta[0].source)
  return {
    type: actionTypes.LOAD_BLOG_POST_SUCCESS, blogPost: true
  }
};

export const loadBlogPosts = (title: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(loadBlogPostSuccess(blogPostsData, title));
  }
}

export const LoadBlogPostAction = (title: string) => {
  return loadBlogPostSuccess(blogPostsData, title);
}

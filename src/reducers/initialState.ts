import * as types from '../types';

interface IApplicationState {
  blogPosts: types.IBlogPost[],
  projectList: types.IProjectProps[],
  blogPost: types.IRenderedBlogPost,
}

const initialApplicationState: IApplicationState = {
  blogPosts: [],
  projectList: [],
  blogPost: {
    blogPost: ''
  },
}

export default initialApplicationState;

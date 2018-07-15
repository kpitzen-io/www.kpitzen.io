import * as types from '../types';

interface IApplicationState {
  blogPosts: types.IBlogPost[],
  projectList: types.IProjectProps[]
}

const initialApplicationState: IApplicationState = {
  blogPosts: [],
  projectList: []
}

export default initialApplicationState;

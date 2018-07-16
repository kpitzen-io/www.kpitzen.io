import { combineReducers } from 'redux';
import blogPost from './blogPostReducer';
import blogPosts from './blogPostsReducer';
import projectList from './projectsReducer';

const rootReducer = combineReducers({
  blogPosts,
  projectList,
  blogPost
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

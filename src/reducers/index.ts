import { combineReducers } from 'redux';
import blogPosts from './blogPostsReducer';
import projectList from './projectsReducer';

const rootReducer = combineReducers({
  blogPosts,
  projectList
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

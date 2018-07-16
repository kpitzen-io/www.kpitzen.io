import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { loadBlogPosts, loadBlogPostFileNames } from './actions/blogPostListActions';
import { loadProjects } from './actions/projectActions';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const store = configureStore(undefined);
store.dispatch<any>(loadBlogPosts());
store.dispatch<any>(loadProjects());

// @ts-ignore Comes from webpack
const context = require.context('!file-loader!./assets/pages', true, /index.md/);
// tslint:disable-next-line
console.log(context.keys());

store.dispatch<any>(loadBlogPostFileNames(context.keys()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

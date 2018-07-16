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
const context = require.context('!file-loader!./pages', true, /index.md/);

store.dispatch<any>(loadBlogPostFileNames(context.keys()));

// alert(context.keys());
// now do require('file-loader')

// // @ts-ignore
// import(`!file-loader!./pages/${blogPostName}/index.md`).then( src =>  {
//   alert(src);
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

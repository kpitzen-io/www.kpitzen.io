import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import BlogPage from './components/blog/BlogPage';
import BlogPageLong from './components/blog/BlogPostLong';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { HomePage } from './components/home/HomePage';

// import { Graph } from './components/GraphComponent';

// import logo from './logo.svg';

interface IAppState {
  ajaxCallsInProgress: number;
}

interface IAppProps {
  loading?: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact={true} path="/" component={ HomePage } />
          <Route exact={true} path="/blog" component={ BlogPage } />
          <Route path="/blog/:id" component={ BlogPageLong } />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: IAppState, ownProps: IAppProps) => {
  return {
    loading: state.ajaxCallsInProgress > 0
  }
}

export default connect<{}, {}, IAppProps>(mapStateToProps, {})(App);

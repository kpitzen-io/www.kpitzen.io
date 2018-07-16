import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { LoadBlogPostAction } from '../../actions/blogPostLongActions';
import { RootState } from '../../reducers';
import { IRenderedBlogPost } from '../../types';

interface IBlogPostLongProps {
  blogPost: IRenderedBlogPost;
  match: {
    params: {
      id: string
    }
  },
  loadBlogPost: (id: string) => void;
}

interface IBlogPostLongState {
  id?: string;
  content?: string;
}

class BlogPostLong extends React.Component<IBlogPostLongProps, IBlogPostLongState> {
  constructor(props: IBlogPostLongProps) {
    super(props);

    this.state = {};

    const { id } = props.match.params;

    this.loadDynamicData(id);
  }

  public componentDidUpdate(prevProps: IBlogPostLongProps, prevState: IBlogPostLongState) {
    const { id } = this.props.match.params;
    if (id !== this.state.id) {
      this.loadDynamicData(id);
    }
  }

  public render() {
    return(
      <article>
        <ReactMarkdown source={this.state.content || ''} />
      </article>
    );
  }

  public loadDynamicData = async (id: string) => {
    // tslint:disable-next-line
    // debugger;
    const url: string = await import(/* webpackMode: lazy */ `!file-loader!../../assets/pages/${id}/index.md`);
    // tslint:disable-next-line
    console.log(url);
    // tslint:disable-next-line
    // debugger;
    const response = await fetch(url);
    // tslint:disable-next-line
    // debugger;
    // tslint:disable-next-line
    console.log(response);
    const content = await response.text();
    // tslint:disable-next-line
    // debugger;    
    // tslint:disable-next-line
    console.log(content);
    this.setState({ id, content });
  };
}

const mapStateToProps = (state: RootState) => {
  return {
    blogPost: state.blogPost
  }
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    loadBlogPost: (id: string) => {
      dispatch(LoadBlogPostAction(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostLong);

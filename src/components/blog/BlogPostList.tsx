import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../reducers';
import { IBlogPost } from '../../types';
import BlogPostShort from './BlogPostShort';

interface IBlogPostListProps {
  blogPostList: IBlogPost[];
}

const mapStateToProps = (state: RootState) => {
  return {
    blogPostList: state.blogPosts
  }
};


class BlogPostList extends React.Component<IBlogPostListProps> {
  constructor(props: IBlogPostListProps) {
      super(props);
  }

  public render() {
    return(
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>Recent Blog Posts</h2>
          </header>
          <div className="flex flex-2">
            <ul>
              {this.props.blogPostList.map(blogPost => <BlogPostShort key={blogPost.filename} {...blogPost} />)}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(BlogPostList);

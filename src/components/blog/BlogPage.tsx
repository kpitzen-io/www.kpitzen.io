import * as React from 'react';

import { Banner, IBannerProps } from '../common/Banner';

import BlogPostList from './BlogPostList'


const blogPageBannerText: IBannerProps = {
  headerText: "Kyle Pitzen's Blog",
  paragraphText: "A series of ramblings"
}


export class BlogPage extends React.Component {
  public render() {
    return (
      <div>
        <Banner {...blogPageBannerText} />
        <BlogPostList shortList={false} />
      </div>
    );
  }
}

export default BlogPage;

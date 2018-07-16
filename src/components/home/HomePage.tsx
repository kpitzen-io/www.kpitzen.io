import * as React from 'react';

import BlogPostList from '../blog/BlogPostList';
import { Banner, IBannerProps } from '../common/Banner';
import ProjectList from '../project/ProjectList';

const homePageBannerText: IBannerProps = {
  headerText: "Kyle Pitzen Development",
  paragraphText: "Object Oriented, Functional, Scalable"
}

export const HomePage = () => {
  return (
    <div>
      <Banner {...homePageBannerText}/>
      <ProjectList />
      <BlogPostList />
    </div>
  );
};

import * as React from 'react';

import BlogPostList from '../blog/BlogPostList';
import { Banner } from '../common/Banner';
import ProjectList from '../project/ProjectList';


export const HomePage = () => {
  return (
    <div>
      <Banner />
      <ProjectList />
      <BlogPostList />
    </div>
  );
};

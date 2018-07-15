import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import { IBlogPost } from '../../types';

const BlogPostShort = (props: IBlogPost) => {
  return(
    <article key={props.filename}>
      <div className="image fit"/>
      <header>
        <h3>{props.title}</h3>
      </header>
      <ReactMarkdown source={props.source} />
    </article>
  )
};

export default BlogPostShort;

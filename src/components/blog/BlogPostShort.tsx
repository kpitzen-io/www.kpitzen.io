import * as React from 'react';

import { IBlogPost } from '../../types';

import { Link } from 'react-router-dom';

const BlogPostShort = (props: IBlogPost) => {
  return(
    <article key={props.filename}>
      <div className="image fit"/>
      <header>
        <h3>{props.title}</h3>
      </header>
      <p>{props.abbText}</p>
      <footer>
        <Link className="button special" to={{pathname:'/blog/' + props.filename}}>More</Link>
      </footer>
    </article>
  )
};

export default BlogPostShort;

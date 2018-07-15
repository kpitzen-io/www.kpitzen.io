import * as React from 'react';

import { IProjectProps } from '../../types';

export const Project = (props: IProjectProps) => {
  return (
    <article key={ props.key }>
      <header>
        <h3>Current Project:<br /> {props.name}</h3>
      </header>
      <p>{ props.description }</p>
      <footer>
        <a href={ props.moreUrl } className="button special">More</a>
      </footer>
    </article>
  );
};

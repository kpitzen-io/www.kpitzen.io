import * as React from 'react';

export interface IBannerProps {
  headerText: string;
  paragraphText: string;
}

export const Banner = (props: IBannerProps) => {
  return (
    <section id="banner">
      <h1>{props.headerText}</h1>
      <p>{props.paragraphText}</p>
    </section>
  );
}

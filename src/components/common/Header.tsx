import * as React from 'react';

import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header id="header">
      <div className="inner">
        <Link className="logo" to="/">KPitzen</Link>
        <nav id="nav">
          <Link to="/">Home</Link>
          <a href="https://github.com/kpitzen">GitHub</a>
          <a href="https://gitlab.com/kpitzen">GitLab</a>
          <Link to="/blog">Blog</Link>
        </nav>
        <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars" /></a>
        <nav id="navPanel">
          <Link className="navPanel" to="/">Home</Link>
          <a className="navPanel" href="https://github.com/kpitzen">GitHub</a>
          <a className="navPanel" href="https://gitlab.com/kpitzen">GitLab</a>
          <Link className="navPanel" to="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

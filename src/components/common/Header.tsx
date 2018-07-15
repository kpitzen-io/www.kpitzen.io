import * as React from 'react';

export const Header = () => {
  return (
    <header id="header">
      <div className="inner">
        <a href="index.html" className="logo">KPitzen</a>
        <nav id="nav">
          <a href="#">Home</a>
          <a href="https://github.com/kpitzen">GitHub</a>
          <a href="https://blog.kpitzen.io/">Blog</a>
        </nav>
        <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars" /></a>
      </div>
    </header>
  );
};

import * as React from 'react';

export const Footer = () => {
  return(
    <footer id="footer">
    <div className="inner">
      <div className="flex">
        <ul className="icons">
          <li><a href="https://www.facebook.com/kyle.pitzen" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="https://twitter.com/slobbishbody" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="https://www.linkedin.com/in/kyle-pitzen-5066386a/" className="icon fa-linkedin"><span className="label">linkedIn</span></a></li>
          <li><a href="https://www.github.com/kpitzen" className="icon fa-github"><span className="label">GitHub</span></a></li>
          <li><a href="https://www.instagram.com/slobbishbody" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>
      </div>
    </div>
    </footer>
  );
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

class Aside extends Component{
  render() {
    return (
      <div className="menu">
        <h1 className="menu-logo"><a>Megazine</a></h1>
        <nav className="menu-link">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/photo">photo</Link></li>
          </ul>
        </nav>
        <div className="menu-footer">
          <p>
            <small>&copy;
              Copyright &copy; 2019 All rights reserved | This template is made by
              <a href="https://rionugroho.com" target="_blank">Rionugroho</a>
            </small>
          </p>
          <ul>
            <li><a><i className="icon-facebook2"></i></a></li>
            <li><a><i className="icon-twitter2"></i></a></li>
            <li><a><i className="icon-instagram"></i></a></li>
            <li><a><i className="icon-linkedin2"></i></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Aside;

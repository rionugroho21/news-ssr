import React, { Component } from 'react';

import './styles.scss';

import bgImg from '../../../assets/minimalist-house.jpg';

class Landing extends Component {
  render() {
    return (
      <div className="landing" style={{ backgroundImage: `url(${bgImg})` }} />
    );
  }
}

export default Landing;

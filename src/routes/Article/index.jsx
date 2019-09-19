import React, { Component } from 'react';

import './styles.scss';

class Article extends Component {
  render() {
    return (
      <div className="article">
        <div className="article-grid">
          <div class="articlebox">
            <p class="articlebox-tag"><span>Architecture</span></p>
            <h2><a href="#">Wired Mesh Installation Shapes an Open Air Museum in Italy</a></h2>
          </div>
          <div class="articlebox">
            <p class="articlebox-tag"><span>Architecture</span></p>
            <h2><a href="#">SBP Creates Two Winning Bridge Designs for China's Tianfu Airport City</a></h2>
          </div>
          <div class="articlebox">
            <p class="articlebox-tag"><span>Architecture</span></p>
            <h2><a href="#">Snøhetta Develop Master Plan for Ford Motor Company in Michigan</a></h2>
          </div>
          <div class="articlebox">
            <p class="articlebox-tag"><span>Architecture</span></p>
            <h2><a href="#">Outer Space 2019 Winners Announced</a></h2>
          </div>
          <div class="articlebox">
            <p class="articlebox-tag"><span>Architecture</span></p>
            <h2><a href="#">Christensen & Co Design New Learning Spaces in Copenhagen</a></h2>
          </div>
          <div class="articlebox">
            <p class="articlebox-tag"><span>Architecture</span></p>
            <h2><a href="#">Wooden Wave Pavilion by Paul Cocksedge Opens at 2019 London Design Festival</a></h2>
          </div>
          <div class="articlebox">
            <p class="articlebox-tag"><span>Architecture</span></p>
            <h2><a href="#">Winners Announced for a School Made from Recycled Plastic in Mexico</a></h2>
          </div>
        </div>

      </div>
    );
  }
}

export default Article;

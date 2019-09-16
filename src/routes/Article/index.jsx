import React, { Component } from 'react';

import './styles.scss';

class Article extends Component {
  render() {
    return (
      <div className="article">
        <div className="article-grid">
          <div class="articlebox">
            <p class="articlebox-tag"><span>Fashion</span></p>
            <h2><a href="#">Makeup tutorial tips in the month of January 2018</a></h2>
          </div>
          <div class="articlebox">
            <p class="articlebox-tag"><span>Fashion</span></p>
            <h2><a href="#">Makeup tutorial tips in the month of January 2018</a></h2>
          </div>
          <div class="articlebox">
            <p class="articlebox-tag"><span>Fashion</span></p>
            <h2><a href="#">Makeup tutorial tips in the month of January 2018</a></h2>
          </div>
          <div class="articlebox">
            <p class="articlebox-tag"><span>Fashion</span></p>
            <h2><a href="#">Makeup tutorial tips in the month of January 2018</a></h2>
          </div>
          <div class="articlebox">
            <p class="articlebox-tag"><span>Fashion</span></p>
            <h2><a href="#">Makeup tutorial tips in the month of January 2018</a></h2>
          </div>
        </div>

      </div>
    );
  }
}

export default Article;

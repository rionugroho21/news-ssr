import React, { Component } from 'react';
import { object } from 'prop-types'
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

import Aside from '../Aside';

class Layout extends Component{
  static propTypes = {
    route: object
  };

  head(){
    return(
      <Helmet>
        <title>News SSR</title>

      </Helmet>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.head()}
        <Aside />
        <div className="content">
          {renderRoutes(this.props.route.routes)}
        </div>
      </React.Fragment>
    )
  }
}

export default Layout;

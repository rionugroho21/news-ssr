import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from './routes';

class App extends PureComponent {
  render() {
    return (
      renderRoutes(routes)
    );
  }
}

export default App;

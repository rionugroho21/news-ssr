import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
//import { MemoryRouter } from 'react-router'

import routes from './routes';

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
      // <div className="coba">afdasdfadsfdasfas</div>
    );
  }
}

export default App;

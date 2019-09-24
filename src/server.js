import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { MemoryRouter } from 'react-router';
import bodyParser from 'body-parser';
import { Helmet } from 'react-helmet';

import App from './App';

const BUILD_DIR = path.resolve(__dirname, '../build');

const app = express();
const port = 8181;

app.use(bodyParser.json());
app.use(express.static(BUILD_DIR));

app.get('*', (req, res) => {
  const context = {}

  const component = renderToString(
    <StaticRouter location={req.url} context={context}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  const html = `
  <!doctype html>
    <html>
    <head>
      ${helmet.title.toString()}
      <link rel="stylesheet" media="screen" href="./main.css" crossorigin="anonymous" />
    </head>
    <body>
    <div id="root">
      ${component}
    </div>
    <script src="./bundle.js"></script>
  </body>
  </html>`

  res.send(html)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

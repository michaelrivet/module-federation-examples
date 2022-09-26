// import { ThemeProvider } from '@sproutsocial/racine';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Heading from 'remote1/Heading';

const Button = React.lazy(() => import('remote1/Button'));
const Remote1App = React.lazy(() => import('remote1/App'));
const Remote2App = React.lazy(() => import('remote2/App'));

const App = () => {
  return (
    // <ThemeProvider theme='light'>
      <Router>
        <div>
          <div
            style={{
              margin: '10px',
              padding: '10px',
              textAlign: 'center',
              backgroundColor: 'greenyellow',
            }}
          >
            <h1>HOST</h1>
            HOST ONLY SUPPORTS LIVE RELOAD. GO TO http://localhost:3001 to try out HMR
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/button">Button</Link>
              </li>
              <li>
                <Link to="/heading">Heading</Link>
              </li>
              <li>
                <Link to="/app1">App 1</Link>
              </li>
              <li>
                <Link to="/app2">App 2</Link>
              </li>
            </ul>
          </nav>
          <Suspense fallback={'loading...'}>
            <Switch>
              <Route path="/button">
                <Button />
              </Route>
              <Route path="/heading">
                <Heading />
              </Route>
              <Route path="/app1">
                <Remote1App />
              </Route>
            </Switch>
              <Route path="/app2">
                <Remote2App />
              </Route>
          </Suspense>
        </div>
      </Router>
    // </ThemeProvider>
  );
};

export default App;

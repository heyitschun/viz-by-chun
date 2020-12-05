import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Avocado } from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/avocado" component={Avocado} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

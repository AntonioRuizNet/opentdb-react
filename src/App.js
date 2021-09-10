import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import Browse from './pages/Browse';
import NotFound from './pages/NotFound';

//Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Browse} />
        <Route exact path="/browse" component={Browse} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

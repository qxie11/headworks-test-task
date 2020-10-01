import React from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/Main';
import Registration from './pages/Registration';
import AboutMe from './pages/AboutMe';
import Nav from './pages/Nav';

const App = () => (
  <>
    <Route exact path="/" component={Main} />
    <Route path="/" component={Nav} />
    <Route path="/registration" component={Registration} />
    <Route path="/about" component={AboutMe} />
  </>
);

export default App;

import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TaskPage from './pages/TaskPage';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">AboutPage</NavLink>
          </li>
          <li>
            <NavLink to="/task">TaskPage</NavLink>
          </li>
        </ul>
        <hr />
        <Route render={({ location } ) => {
          console.log(location);
          return (
            <TransitionGroup>
              <CSSTransition
                timeout={300}
                classNames="fade"
                appear={true}
                key={location.key}
              >
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/task" component={TaskPage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )
        }} />
      </div>
    );
  }
}

export default App;

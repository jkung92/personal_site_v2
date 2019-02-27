import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route
            exact
            path="/projects"
            render={props => <Projects {...props} />}
          />
          <Route exact path="/contact" render={() => <Contact />} />

          {/* Redirects if no route exists */}
          <Route render={() => <Home />} />
        </Switch>
      </main>
    );
  }
}

export default Routes;

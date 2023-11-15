import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '../Components/Home/Home';
import { About } from '../Components/About/About';
import { Projects } from '../Components/Projects/Projects';
import Resume from '../Components/Portfolio/Resume';
import { Contact } from '../Components/Contact/Contact';

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

export default Routes;

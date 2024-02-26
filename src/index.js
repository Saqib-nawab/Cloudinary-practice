// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import upload from './components/Upload';
import secureupload from './components/Secure-upload';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/upload" component={upload} />
        <Route path="/secure-upload" component={secureupload} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


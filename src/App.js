import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store';

import About from './About';
import Home from './Home';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import {Card} from 'material-ui/Card';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider>
            <div>
              <Toolbar>
                <ToolbarTitle text="Timer App" />

                <ul>
                  <FlatButton><Link to="/">Home</Link></FlatButton>
                  <FlatButton><Link to="/about">About</Link></FlatButton>
                </ul>

              </Toolbar>
              <Card style={ { margin: 50, padding: 50 } }>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
              </Card>
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;

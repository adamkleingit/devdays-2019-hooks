import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { TasksProvider } from "./tasks.store";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { About } from "./About";
import { Home } from "./Home";
import { Header } from "./Header";
import { Card } from "material-ui/Card";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <TasksProvider>
            <div>
              <Header />
              <Card style={{ margin: 50, padding: 50 }}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </Card>
            </div>
          </TasksProvider>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;

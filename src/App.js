import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {NoMatch} from "./NoMatch";
import {Layout} from "./Components/Layout";
import {NavigationBar} from "./Components/NavigationBar"
import {Jumbotron} from "./Components/Jumbotron";

function App() {
  return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
  );
}

export default App;

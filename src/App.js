import React, { Component } from 'react';
// import { Router, Route } from 'react-router-dom'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import "antd/dist/antd.css";
// import { Button } from 'antd'
import Home from './views/Home'
import Footer from './views/Footer'
class App extends Component {
  state = {
    loading: false
  }
  aaa = () => {
    console.log(111)
  }
  render() {
    return (
      <Router>
        <Home>
          <Switch>
            <Route path="/aaa" component={Footer} />
            <Route path="/" render={() => (
              <Switch>
                <Redirect to="/home"></Redirect>
              </Switch>
            )} />
          </Switch>
        </Home>
      </Router>
    );
  }
}

export default App;

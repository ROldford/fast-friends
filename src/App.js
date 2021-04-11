// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Layout from "./components/layout";
import {
    BrowserRouter, Switch, Route
} from 'react-router-dom'
import Quiz from "./components/quiz";
// import {Text} from "rebass";
import Splash from "./components/splash";

const App = () => (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*      className="App-link"*/}
      {/*      href="https://reactjs.org"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <BrowserRouter>
          <Layout>
              <Switch>
                  <Route path="/quiz"><Quiz /></Route>
                  <Route path="/"><Splash /></Route>
              </Switch>
          </Layout>
      </BrowserRouter>
    </div>
)

export default App;

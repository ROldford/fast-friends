// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Layout from "./components/layout";
import {
    BrowserRouter, Switch, Route, Link
} from 'react-router-dom'
import Quiz from "./components/quiz";
import {Text} from "rebass";

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
              <p><Link to="/">Home</Link></p>
              <p><Link to="/quiz">Quiz</Link></p>
              <p><Link to="/test2">Test 2</Link></p>
              <Switch>
                  <Route path="/quiz"><Quiz /></Route>
                  <Route path="/test2"><Test2 /></Route>
                  <Route path="/"><Home /></Route>
              </Switch>
          </Layout>
      </BrowserRouter>
    </div>
)

const Home = () => (
    <Text fontSize={[ 3, 4, 5 ]} color='primary'>
        Home Page
    </Text>
)

// const Test1 = () => (
//     <h2>Test 1</h2>
// )

const Test2 = () => (
    <h2>Test 2</h2>
)

export default App;

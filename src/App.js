// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Layout from "./components/layout";
import {
    BrowserRouter, Switch, Route, Link
} from 'react-router-dom'
import { Label } from '@rebass/forms';
import { Button, Heading } from 'rebass';

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
              <p><Link to="/test1">Test 1</Link></p>
              <p><Link to="/test2">Test 2</Link></p>
              <Switch>
                  <Route path="/test1"><Test1 /></Route>
                  <Route path="/test2"><Test2 /></Route>
                  <Route path="/"><Home /></Route>
              </Switch>
          </Layout>
      </BrowserRouter>
    </div>
)

function QuestionAnswer(props) {
  return (
    <div>
      <Label>
        {props.questionAnswer.question}
      </Label>
      <Button variant='primary' color="" onClick={props.onClickAnswerA}>
        <Label>{props.questionAnswer.answerA}</Label>
      </Button>
      <Button variant='primary' onClick={props.onClickAnswerB}>
        <Label>{props.questionAnswer.answerB}</Label>
      </Button>
      <Button variant='primary' onClick={props.onClickAnswerC}>
        <Label>{props.questionAnswer.answerC}</Label>
      </Button>
    </div>
  )
};

function DisplayResponses(props) {
  return (
    <ul>
      {
        props.answers.map((item) => (<li>{item}</li>))
      }
    </ul>

  )
};

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currIdx: 0
    };
    this.questionAnswers = [
      {
        question: 'What’s your favourite place to dance?',
        answerA: 'At a concert',
        answerB: 'In the club',
        answerC: 'I don’t do dancing',
      },
      {
        question: 'If you ran into your teacher outside of school what would you do?',
        answerA: 'Say hi, and chat',
        answerB: 'Run',
        answerC: 'Pretend you don’t see them',
      },
    ];
    this.selectedAnswers = [];
  };

  handleClickAnswer(i, answer) {
    switch(answer) {
      case 'A':
        this.selectedAnswers.push(this.questionAnswers[i].answerA);
        break;
      case 'B':
        this.selectedAnswers.push(this.questionAnswers[i].answerB);
        break
      default:
        this.selectedAnswers.push(this.questionAnswers[i].answerC);
        break;
    }
    this.setState({
      currIdx: this.state.currIdx + 1,
    });
  };

  renderedComponent() {
    if (this.state.currIdx >= this.questionAnswers.length) {
      return (
        <DisplayResponses answers={this.selectedAnswers}/>
      )
    }
    return (
      <QuestionAnswer
        questionAnswer={this.questionAnswers[this.state.currIdx]}
        onClickAnswerA={() => this.handleClickAnswer(this.state.currIdx, 'A')}
        onClickAnswerB={() => this.handleClickAnswer(this.state.currIdx, 'B')}
        onClickAnswerC={() => this.handleClickAnswer(this.state.currIdx, 'C')}
      />
    )
  }

  render() {
    return (
      <div>
        <Heading>
          Fast Friends
        </Heading>
        {
          this.renderedComponent()
        }
      </div>
    )
  };
}

const Home = () => (
    <h2>Home Page</h2>
)

const Test1 = () => (
    <h2>Test 1</h2>
)

const Test2 = () => (
    <h2>Test 2</h2>
)

export default App;

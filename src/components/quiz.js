import {Button, Heading} from "rebass";
import { Label } from '@rebass/forms';
import React from "react";

function QuestionAnswer(props) {
    return (
        <div>
            <Label>
                {props.questionAnswer.question}
            </Label>
            <Button variant='primary' onClick={props.onClickAnswerA}>
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
}

function DisplayResponses(props) {
    return (
        <ul>
            {
                props.answers.map((item) => (<li>{item}</li>))
            }
        </ul>

    )
}

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
                {/*<Heading>*/}
                {/*    Fast Friends*/}
                {/*</Heading>*/}
                {
                    this.renderedComponent()
                }
            </div>
        )
    };
}

export default Quiz;

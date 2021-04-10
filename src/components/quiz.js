import {Button, Heading} from "rebass";
import { Label } from '@rebass/forms';
import React from "react";

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
            {
                question: 'What is the boogeyman afraid of?',
                answerA: 'Inflation',
                answerB: 'Taxes',
                answerC: 'Public speaking',
            },
            {
                question: 'Death by a thousand...?',
                answerA: 'Paper cuts',
                answerB: 'Baseballs',
                answerC: 'Mosquito bites',
            },
            {
                question: 'What is the secret to a happy life?',
                answerA: 'Friends and family',
                answerB: 'Financial wealth and health',
                answerC: 'Taking this quiz',
            },

            {
                question: 'Where do you like to travel?',
                answerA: 'Europe and Asia',
                answerB: 'North and South America',
                answerC: 'Other',
            },
            {
                question: 'Coke or Pepsi?',
                answerA: 'Coke',
                answerB: 'Pepsi',
                answerC: 'Other',
            },
            {
                question: 'Should pineapple be on pizza?',
                answerA: 'Most definitely',
                answerB: "No, that's disgusting",
                answerC: "I don't eat pizza",
            },
            {
                question: "Why can't penguins fly?",
                answerA: "Because they're lazy",
                answerB: "Because they don't have any wings",
                answerC: "They fly when no ones watching",
            },
            {
                question: "Starbucks or Tim Hortons?",
                answerA: "Starbucks",
                answerB: "Tim Hortons",
                answerC: "Other",
            },

            {
                question: "Which accent do you like the most?",
                answerA: "Australian",
                answerB: "British",
                answerC: "Other",
            },
            {
                question: "Best artist of all time?",
                answerA: "Michelangelo",
                answerB: "Picasso",
                answerC: "Vincent van Gogh",
            },
            {
                question: "Someone returns your lost wallet. What do you do?",
                answerA: "Say thanks!",
                answerB: "Give them a finder's reward",
                answerC: "Take the wallet",
            },
            {
                question: "When you're in a relationship, two weeks away from your partner is..?",
                answerA: "A pleasant break",
                answerB: "I miss them so much!",
                answerC: "Good riddance",
            },
            {
                question: "Loyalty is..?",
                answerA: "A given",
                answerB: "Not required, but nice to have",
                answerC: "Never 100%",
            },

            {
                question: "You notice that your pants are getting tight. What do you do?",
                answerA: "Buy new pants",
                answerB: "Lose weight",
                answerC: "Suck your belly in",
            },
            {
                question: "Something you'd want in your fridge..?",
                answerA: "Ranch Sauce",
                answerB: "Garlic aioli",
                answerC: "Sriracha",
            },
            {
                question: "How do you know if your house is haunted?",
                answerA: "Creaking floors at night",
                answerB: "Doors opening",
                answerC: "Bleeding walls",
            },
            {
                question: "Dogs or cats",
                answerA: "Dogs",
                answerB: "Cats",
                answerC: "Other",
            },
            {
                question: "I like to sleep on my..?",
                answerA: "Side",
                answerB: "Back",
                answerC: "Stomach",
            },
            {
                question: "My favorite ice cream flavour is..?",
                answerA: "Chocolate",
                answerB: "Vanilla",
                answerC: "Other",
            },

            {
                question: "I can speak ___ language(s).",
                answerA: "1",
                answerB: "2",
                answerC: ">2",
            },
            {
                question: "If I won the lottery I would..?",
                answerA: "Retire",
                answerB: "Donate to charity",
                answerC: "Bitcoin",
            },
            {
                question: "What superpower would you rather have?",
                answerA: "Mind reader",
                answerB: "Time travel",
                answerC: "Telekinesis",
            },

            {
                question: "Favourite chocolate?",
                answerA: "Milk chocolate",
                answerB: "Dark chocolate",
                answerC: "White chocolate",
            },

            {
                question: "Are you double jointed",
                answerA: "Yes",
                answerB: "No",
                answerC: "Other",
            },

            {
                question: "Hamburgers or hot dogs",
                answerA: "Hamburgers",
                answerB: "Hot dogs",
                answerC: "Other",
            },
            {
                question: "If you are on a road trip and lost..",
                answerA: "I'd stop and ask for directions",
                answerB: "Keep going and hope for the best",
                answerC: "I know where I'm going!",
            },
            {
                question: "Have you ever gotten a speeding ticket?",
                answerA: "Yes many",
                answerB: "Only one",
                answerC: "I've never been caught",
            },
            {
                question: "How do you know when someones getting old?",
                answerA: "T-shirt tucked in",
                answerB: "socks and sandals",
                answerC: "wearing pants really high",
            },

            {
                question: "Favourite colour?",
                answerA: "Red",
                answerB: "Blue",
                answerC: "Other",
            },
            {
                question: "Best place for a drink?",
                answerA: "The bar",
                answerB: "The club",
                answerC: "At home",
            },
            {
                question: "You're the type of person ot have a backup plan for a backup plan",
                answerA: "True",
                answerB: "False",
                answerC: "Other",
            },
            {
                question: "You work well under pressure.",
                answerA: "True",
                answerB: "False",
                answerC: "Other",
            },
            {
                question: "You enjoy going to art museums",
                answerA: "True",
                answerB: "False",
                answerC: "Other",
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

export default Quiz;

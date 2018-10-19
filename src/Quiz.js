import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'
let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) { //maybe défini la main class et l'initialise a la question index 1
        super(props)
        this.state = { quiz_position: 1 }
    } 
    showNextQuestion() { //fonction qui permet de passer a la question suivante this.index +1 
        this.setState((state) => {
            return { quiz_position: state.quiz_position + 1 }
        })
    }
    handleResetClick(){
this.setState({quiz_position:1})
    }
    render() {
        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length) //test si on arrive a la fin des questions
        //const isQuizEnd=true
        return (

            <div>

                {isQuizEnd ? <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}/> : //si les questions sont finis appelez la classe QuizEnd
                    < QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
                        showNextQuestionHandler={this.showNextQuestion.bind(this)}
                    />}
            </div>
        )
    }

}
export default Quiz
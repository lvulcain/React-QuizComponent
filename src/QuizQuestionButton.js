import React, { Component } from "react";


class QuizQuestionButton extends Component {
    handleClick(){ //fonction qui sert à indiquer quel évènement va se produire au click
this.props.clickHandler(this.props.button_text) //appel la fonction handleClick de la classe supérieur Quizquestion
                                                //qui va permettre de changer de question quand l'utilisateur clique sur la bonne question
    }
    render() {
        return (
            <li>
                <button onClick={this.handleClick.bind(this)} >
                {this.props.button_text} {/*récupère le text passé par la classe supérieur qui est quizquestion, qui passe le text des answer_options*/}
                </button>
            </li>
        )
    }
}

export default QuizQuestionButton
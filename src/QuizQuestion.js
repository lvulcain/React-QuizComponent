import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    constructor(props){
        super(props)
        this.state={incorrectAnswer:false}
    }
    handleClick(buttonText){
        if(buttonText===this.props.quiz_question.answer){ //cette fonction va permettre de vérifier si le bouton cliqué correspond à la réponse donnée dans le json file
            this.setState({incorrectAnswer:false})
            this.props.showNextQuestionHandler()
        }else{
            this.setState({incorrectAnswer:true})
        }
    }
render(){
    return(<main>

        <section>
            <p>{this.props.quiz_question.instruction_text}{/*affiche la question, le texte est passé par la classe supérieur Quiz, où le dossier json est appelé*/}
            </p> 
            </section>
            <section className="buttons">
            <ul>
                {this.props.quiz_question.answer_options.map((answer_options,index)=>{ //le mappage permet d'itérer dans la liste des answer_options et ainsi retourner un nouveau boutton à chaque answer option trouver
                    return <QuizQuestionButton key={index} button_text={answer_options}
                    clickHandler={this.handleClick.bind(this)} //appel la fonction click de cette classe
                    />
                })}
                
            </ul>
            </section>
            {this.state.incorrectAnswer ?<p className='error'>Sorry that's not right</p> : null}
            </main>)
}

}
export default QuizQuestion
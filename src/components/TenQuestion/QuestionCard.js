import React from 'react';
import he from 'he';

//shuffle the array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

class QuestionCard extends React.Component {
  state={isAnswered:false, answerList:[], booleanList:['True','False']};

  componentDidMount() {
    let tempList = this.props.question.incorrect_answers;;
    tempList.push(this.props.question.correct_answer);
    this.setState({answerList:shuffle(tempList)});
  }

  checkAnswer= (event) => {
    if(event.target.textContent === he.decode(this.props.question.correct_answer)) {
      event.target.className = 'card__answer card__answer--true';
    } else {
      event.target.className = 'card__answer card__answer--false';
    }
    this.setState({isAnswered:true});
  }

  render() {
    const {question} = this.props;
    if(!question) {
      return <div>Loading data ... </div>
    } else {
      const displayList = (array) => {
        return array.map( (answer) => {
          return <button key={answer} className="card__answer" onClick={this.checkAnswer}>{he.decode(answer)}</button>
        })
      }

      if(question.type === "multiple") {
        return(
          <div className="card">
            <div className="card__question">{he.decode(question.question)}</div>
            <div className="card__answer-list">
              {displayList(this.state.answerList)}
            </div>

            { //display answer after click buttons
              this.state.isAnswered? (
                <div>
                  Cheat: {question.correct_answer}
                </div>
              ):<React.Fragment></React.Fragment>
            }
            <br />
          </div>
        );
      }

      if(question.type === "boolean") {
        return(
          <div className="card">
            <div className="card__question">{question.question}</div>
            <div className="card__answer-list">
              {displayList(this.state.booleanList)}
            </div>
            <br />
            { //display answer after click buttons
              this.state.isAnswered? (
                <div>
                  Cheat: {question.correct_answer}
                </div>
              ):<React.Fragment></React.Fragment>
            }
          </div>
        );
      }
    };
  }
};

export default QuestionCard;

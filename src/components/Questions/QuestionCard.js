import React from 'react';
import _ from 'lodash';

//shuffle the array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

//use to convert special character to sign - exmaple: &ldquo; => “
function convert(str)
{
  str = str.replace(new RegExp("&#039;",'g'),"'");
  str = str.replace(new RegExp("&ldquo;",'g'),"“");
  str = str.replace(new RegExp("&rdquo;",'g'),"”");

  return _.unescape(str);
}

class QuestionCard extends React.Component {
  state={isAnswered:false, answerList:[], booleanList:['True','False']};

  componentDidMount() {
    let tempList = this.props.question.incorrect_answers;;
    tempList.push(this.props.question.correct_answer);
    this.setState({answerList:shuffle(tempList)});
  }

  checkAnswer= (event) => {
    if(event.target.textContent === convert(this.props.question.correct_answer)) {
      event.target.className += ' card__answer--true';
      this.props.addScore();
    } else {
      event.target.className += ' card__answer--false';
    }
    this.setState({isAnswered:true});
  };


  render() {
    const {question} = this.props;
    if(!question) {
      return <div>Loading data ... </div>
    } else {
      const displayList = (array) => {
        return array.map( (answer) => {
          if(!this.state.isAnswered) {
            return <button key={answer} className="card__answer" onClick={this.checkAnswer}>{convert(answer)}</button>
          }
          else {
            return <button key={answer} className="card__answer" disabled onClick={this.checkAnswer}>{convert(answer)}</button>
          }
        })
      }

      if(question.type === "multiple") {
        return(
          <div className="card">
            <div className="card__question">{convert(question.question)}</div>
            <div className="card__answer-list">
              {displayList(this.state.answerList)}
            </div>

            { //display answer after click buttons
              this.state.isAnswered? (
                <div>
                  Answer: {convert(question.correct_answer)}
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
            <div className="card__question">{convert(question.question)}</div>
            <div className="card__answer-list">
              {displayList(this.state.booleanList)}
            </div>
            <br />
            { //display answer after click buttons
              this.state.isAnswered? (
                <div>
                  Answer: {convert(question.correct_answer)}
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

import React from 'react';
import APIs from '../api';

import QuestionList from './QuestionList';
import ScoreBoard from './ScoreBoard';
import Modal from './Modal';
import Menu from './Menu';

class Questions extends React.Component {
  //only display question when isSubmit is true
  //numAnswer is number of question that user answer
  //difficulty will be included inside the APi call
  //isSubmit and isError to determine the text to display on front page
  state= {questions:[],score:0,numAnswer:0,difficulty:null,isSubmit:false,isError:false};

  getQuestions = async () => {
    try {
      const response = await APIs.get('./', {
        params: {
          amount:10,
          difficulty:this.state.difficulty
        }
      });
      //check if response is successful
      if(response.status === 200) {
        this.setState({questions:response.data.results,score:0,numAnswer:0,isSubmit:true,isError:false})
      }
    } catch (err) {
      this.setState({questions:[],score:0,numAnswer:0,isSubmit:false,isError:true})
    }
  }

  //input will be a text for which difficulty to load (easy, medium, hard)
  changeDifficulty = (event) => {
    //console.log(event.target.value);
    this.setState({difficulty:event.target.value});
    this.getQuestions();
  }


  addScore = () => {
    this.setState({score:this.state.score + 1});
  }

  addNumAnswer = () => {
    this.setState({numAnswer:this.state.numAnswer + 1});
  }

  render() {
        //set up message in case the this site can't reach server
        let message;
        if(this.state.isError) {
          message = 'There is an issue with the server, please try again later';
        } else {
          message = 'Please choose a difficulty to display the questions. Enjoy!';
        }
        //console.log(message)
        return(
          <div className="App">
            <ScoreBoard score={this.state.score}/>
            <Menu getQuestions={this.getQuestions} changeDifficulty={this.changeDifficulty}/>
            {this.state.isSubmit?
              <QuestionList list={this.state.questions} addScore={this.addScore} addNumAnswer={this.addNumAnswer}/>:
              <React.Fragment>
                <div className="init-message">{message}</div>
              </React.Fragment>
            }
            {this.state.numAnswer >= 10 && <Modal correctAnswers={this.state.score} getQuestions={this.getQuestions}/>
            }
          </div>
    )
  };
};

export default Questions;

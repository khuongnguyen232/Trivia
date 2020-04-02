import React from 'react';
import APIs from '../api';

import QuestionList from './QuestionList';
import ScoreBoard from './ScoreBoard';
import Menu from './Menu';

class Questions extends React.Component {
  //only display question when isSubmit is true
  state= {questions:[], score:0,difficulty:null,isSubmit:false};

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
        this.setState({questions:response.data.results,isSubmit:true,score:0})
      }
    } catch (err) {
      console.log(err);
    }
  }

  //input will be a text for which difficulty to load (easy, medium, hard)
  changeDifficulty = (event) => {
    //console.log(event.target.value);
    this.setState({difficulty:event.target.value});
  }


  addScore = () => {
    this.setState({score:this.state.score + 1});
  }

  render() {
    return(
      <div className="App">
        <ScoreBoard score={this.state.score}/>
        <Menu getQuestions={this.getQuestions} changeDifficulty={this.changeDifficulty}/>
        <QuestionList list={this.state.questions} addScore={this.addScore}/>
      </div>
    );
  };
};

export default Questions;

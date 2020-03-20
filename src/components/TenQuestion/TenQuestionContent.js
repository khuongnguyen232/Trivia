import React from 'react';
import APIs from '../api';

import QuestionList from './QuestionList';
import ScoreBoard from '../Score/ScoreBoard';

class TenQuestionContent extends React.Component {
  state= {questions:[], score:0};

  getQuestions = async () => {
    try {
      const response = await APIs.get('./', {
        params: {
          amount:10
        }
      });

      //check if response is successful
      if(response.status === 200) {
        this.setState({questions:response.data.results})
      }
    } catch (err) {
      console.log(err);
    }
  }

  addScore = () => {
    this.setState({score:this.state.score + 1});
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return(
      <div>
        <ScoreBoard score={this.state.score}/>
        <QuestionList list={this.state.questions} addScore={this.addScore}/>
      </div>
    );
  };
};

export default TenQuestionContent;

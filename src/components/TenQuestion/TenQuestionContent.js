import React from 'react';
import APIs from '../api';

import QuestionList from './QuestionList';

class TenQuestionContent extends React.Component {
  state= {questions:[]};

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

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return(
      <div>
        <QuestionList list={this.state.questions}/>
      </div>
    );
  };
};

export default TenQuestionContent;

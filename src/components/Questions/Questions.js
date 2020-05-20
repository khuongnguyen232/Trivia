import React from 'react';
import APIs from '../api';

import QuestionList from './QuestionList';
import ScoreBoard from './ScoreBoard';
import Menu from './Menu';

class Questions extends React.Component {
  //only display question when isSubmit is true
  state= {questions:[], score:0,difficulty:null,isSubmit:false,isError:false};

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
      this.setState({questions:[],score:0,isSubmit:false,isError:true})
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
        //set up message in case the this site can't reach server
        let message;
        if(this.state.isError) {
          message = 'There is an issue with the server, please try again later';
        } else {
          message = 'Please choose a difficulty and click "Load Questions" button to display the questions. Enjoy!';
        }
        console.log(message)
        return(
          <div className="App">
            <ScoreBoard score={this.state.score}/>
            <Menu getQuestions={this.getQuestions} changeDifficulty={this.changeDifficulty}/>
            {this.state.isSubmit?
              <QuestionList list={this.state.questions} addScore={this.addScore}/>:
              <div className="init-message">{message}</div>
            }
          </div>
    )
  };
};

export default Questions;

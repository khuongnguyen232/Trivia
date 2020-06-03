import React from 'react';

const Modal = ({correctAnswers, getQuestions}) => {
  return (
    <div className="modal__background">
      <div className="modal__section">
        <div className="modal__title">
          {correctAnswers>5?<div>Yay</div>:<div>Aww</div>}
        </div>
        <div className="modal__text">
          {correctAnswers>5?
            <div>Congratulation! Click the button to win more times</div>
            :<div>Too bad! But you can try again later</div>
          }
        </div>
        {/*click this button to refresh the questions*/}
        <div className="modal__button">
          <button onClick={getQuestions}>Load new questions</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;

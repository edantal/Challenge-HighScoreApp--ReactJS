import React, { useReducer, useState, useEffect } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import MetaBar from './components/MetaBar';
import ScoreBtn from './components/ScoreBtn';
import Form from './components/Form';
import Success from './components/Success';
import Message from './components/Message';

export const ACTIONS = {
  SET_SCORE: 'set-score',
  RESET_SCORE: 'reset',
  SET_ERROR: 'set-error',
  SET_SUCCESS: 'set-success',
}

function App() {
  const [form_result, dispatchForm] = useReducer(formReducer, {
    msg: '',
    show_msg: false,
    success: false,
    json: {}
  });
  const [score, dispatchScore] = useReducer(scoreReducer, 0);
  const [clicks, setClicks] = useState(0);

  function setScore() {
    const new_score = Math.floor(Math.random() * 200) - 100;
    if(new_score !== 0) {
      return new_score;
    }
    setScore();
  }

  useEffect(() => {
    setClicks(prevClicks => prevClicks + 1);
  }, [score]);
  
  function scoreReducer(score, action) {
    switch(action.type) {
      case ACTIONS.SET_SCORE:
        return setScore();
      case ACTIONS.RESET_SCORE:
        return 0;
      default:
        return score;
    }
  }

  function formReducer(form_result, action) {
    switch(action.type) {
      case ACTIONS.SET_ERROR:
        return {
          msg: action.payload,
          show_msg: true
        };
      case ACTIONS.SET_SUCCESS:
        return {
          msg: '',
          show_msg: false,
          success: true,
          json: action.payload
        };
      default:
        return form_result;
    }
  }

  return (
    <div className="App">
      <Header title="High Score App" desc="Click the start button to get your score" />

      <div className="container">

        {!form_result.success ? (
          <>
            <MetaBar score={score} clicks={clicks} />
            <ScoreBtn score={score} clicks={clicks} dispatch={dispatchScore} />
            <Form score={score} clicks={clicks} dispatch={dispatchForm} />
          </>
        ) : (
          <Success results={form_result.json} />
        )}

      </div>

      <Footer copy="High Score App" />
      <Message show_msg={form_result.show_msg} msg={form_result.msg} />
    </div>
  );
}

export default App;

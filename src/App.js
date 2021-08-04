import React, { useReducer } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import MetaBar from './components/MetaBar';
import ScoreBtn from './components/ScoreBtn';
import Form from './components/Form';
import Success from './components/Success';
import Message from './components/Message';

export const ACTIONS = {
  SET_SCORE:    'set-score',
  RESET_SCORE:  'reset-score',
  SET_FIELD:    'set-field',
  SET_ERROR:    'set-error',
  SET_SUCCESS:  'set-success',
  RESET_ALL:    'reset-all'
}

function App() {
  const initialState = {
    score: 0,
    clicks: 0,
    name: '',
    msg: '',
    show_msg: false,
    success: false,
    result: {}
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { score, clicks, name, msg, show_msg, success, result } = state;

  function setScore() {
    const new_score = Math.floor(Math.random() * 200) - 100;
    return (new_score === 0) ? setScore() : new_score;
  }

  function appReducer(state, action) {
    switch (action.type) {
      case ACTIONS.SET_SCORE: {
        return {
          score: setScore(),
          clicks: action.payload
        };
      }
      case ACTIONS.RESET_SCORE: {
        return {
          score: 0,
          clicks: 0,
          name: ''
        };
      }
      case ACTIONS.SET_FIELD: {
        return {
          ...state,
          name: action.payload
        };
      }
      case ACTIONS.SET_ERROR: {
        return {
          msg: action.payload,
          show_msg: true
        };
      }
      case ACTIONS.SET_SUCCESS: {
        return {
          name: action.payload.name,
          msg: 'Your score was submitted successfully!',
          show_msg: true,
          success: true,
          result: action.payload
        };
      }
      case ACTIONS.RESET_ALL: {
        return initialState;
      }
      default:
        return state;
    }
  }

  return (
    <div className="App">
      <Header title="High Score App" desc="Click the start button to get your score" />

      <div className="container">

        {!success ? (
          <>
            <MetaBar score={score} clicks={clicks} />
            <ScoreBtn score={score} clicks={clicks} dispatch={dispatch} />
            <Form score={score} clicks={clicks} name={name} dispatch={dispatch} />
          </>
        ) : (
          <Success result={result} dispatch={dispatch} />
        )}

      </div>

      <Footer copy="High Score App" />
      <Message show_msg={show_msg} msg={msg} success={success} />
    </div>
  );
}

export default App;

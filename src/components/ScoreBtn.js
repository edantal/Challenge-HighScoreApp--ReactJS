import React from 'react';
import { ACTIONS } from '../App.js';

export default function ScoreBtn({ score, clicks, dispatch }) {
  return (
    <button
      className="btn score__btn"
      onClick={() => {
        dispatch({
          type: ACTIONS.SET_SCORE
        })
      }}
      disabled={clicks < 10 ? false : true}
      title={clicks < 10 ? `You have ${10 - clicks} remaining clicks` : `You've reached the limit of 10 clicks`}
    >
      { (score === 0) ? 'Start' : 'Try Again' }
    </button>
  )
}
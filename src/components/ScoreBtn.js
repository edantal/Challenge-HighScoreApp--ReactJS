import React from 'react';
import { ACTIONS } from '../App.js';

export default function ScoreBtn({ score = 0, clicks = 0, dispatch }) {
  return (
    <button
      className="btn score__btn btn--pulse"
      aria-label="Get score"
      onClick={() => {
        dispatch({
          type: ACTIONS.SET_SCORE,
          payload: clicks + 1
        })
      }}
      disabled={clicks < 10 ? false : true}
      title={clicks < 10 ? `You have ${10 - clicks} remaining clicks` : `You've reached the limit of 10 clicks`}
    >
      { (score === 0) ? 'GO!' : (clicks < 10) ? 'Try Again' : 'Game Over' }
    </button>
  )
}
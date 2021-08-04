import React from 'react';
import { ACTIONS } from '../App.js';

export default function Success({ result, dispatch }) {
  return (
    <div className="success">
      <h2 className="success__msg">{`Good job, ${result.name}! Here are your results:`}</h2>
      <div className="success__stats">
        <p className="success__stat">Score: <span className="tag">{result.score}</span></p>
        <p className="success__stat">Click count: <span className="tag">{result.clicks}</span></p>
      </div>

      <button
        className="btn__cta"
        onClick={() => {
          dispatch({
            type: ACTIONS.RESET_ALL
          })
        }}
      >
        Play again
      </button>
    </div>
  )
}

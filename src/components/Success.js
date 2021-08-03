import React from 'react';

export default function Success({ restartApp, vals }) {
  return (
    <div className="success">
      <h2 className="success__msg">Your score was submitted successfully!</h2>
      <p className="success__stat">Name: <span className="tag">{vals.name}</span></p>
      <p className="success__stat">Score: <span className="tag">{vals.score}</span></p>
      <p className="success__stat">Click count: <span className="tag">{vals.clicks}</span></p>

      <button onClick={restartApp} className="btn__cta">Play again</button>
    </div>
  )
}

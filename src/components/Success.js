import React from 'react';

export default function Success({ results }) {
  return (
    <div className="success">
      <h2 className="success__msg">Your score was submitted successfully!</h2>
      <p className="success__stat">Name: <span className="tag">{results.name}</span></p>
      <p className="success__stat">Score: <span className="tag">{results.score}</span></p>
      <p className="success__stat">Click count: <span className="tag">{results.clicks}</span></p>

      <button className="btn__cta">Play again</button>
    </div>
  )
}

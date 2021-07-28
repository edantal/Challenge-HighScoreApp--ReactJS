import React from 'react';

export default function Success({ vals }) {
  return (
    <div className="success">
      <h2>Your score was submitted successfully!</h2>
      <p>Name: <span>{vals.name}</span></p>
      <p>Score: <span>{vals.score}</span></p>
      <p>Click count: <span>{vals.clicks}</span></p>
    </div>
  )
}

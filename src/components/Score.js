import React from 'react';

export default function Score({ handleScore, score, clicks }) {
  return (
    <button
      className="btn"
      onClick={handleScore}
      disabled={clicks < 10 ? false : true}
      title={clicks < 10 ? `You have ${10 - clicks} remaining clicks` : `You've reached the limit of 10 clicks`}
    >
      { (score === 0) ? 'Get your score' : `Your score is: ${score}` }
    </button>
  )
}

import React from 'react';

export default function Score({ handleScore, score, clicks }) {
  return (
    <>
      <aside className="score__meta">
        <div className="score__meta-stat">
          Current Score:<span className="tag">{score}</span>
        </div>
        <div className="score__meta-stat">
          Remaining clicks:<span className={`tag ${clicks < 10 ? '' : ' tag--limit'}`}>{10 - clicks}</span>
        </div>
      </aside>

      <button
        className="btn score__btn"
        onClick={handleScore}
        disabled={clicks < 10 ? false : true}
        title={clicks < 10 ? `You have ${10 - clicks} remaining clicks` : `You've reached the limit of 10 clicks`}
      >
        { (score === 0) ? 'Start' : 'Try Again' }
      </button>
    </>
  )
}

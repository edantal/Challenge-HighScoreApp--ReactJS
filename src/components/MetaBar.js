import React from 'react'

export default function MetaBar({ score, clicks }) {
  return (
    <aside className="score__meta">
      <div className="score__meta-stat">
        Current Score:<span className="tag">{score}</span>
      </div>
      <div className="score__meta-stat">
        Remaining clicks:<span className={`tag ${clicks < 10 ? '' : ' tag--limit'}`}>{10 - clicks}</span>
      </div>
    </aside>
  )
}

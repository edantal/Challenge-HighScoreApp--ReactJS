import React, { useState, useEffect } from 'react';
import { ACTIONS } from '../App.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Leaderboard({ showLeaderboard, onFetchLeaderboard, dispatch }) {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await onFetchLeaderboard();
      setLeaderboard(data);
    })();
  }, [onFetchLeaderboard]);

  return (
    <>
      <button
        className={`leaderboard__btn ${showLeaderboard ? 'leaderboard__btn--close' : ''}`}
        aria-label="Toggle leaderboard"
        onClick={() => {
        dispatch({
          type: ACTIONS.TOGGLE_LEADERBOARD,
          payload: !showLeaderboard
        })
      }}>
        <FontAwesomeIcon icon={ showLeaderboard ? faTimes : faCrown } />
      </button>

      <div className={`overlay ${showLeaderboard ? 'overlay--active' : ''}`}></div>
      <aside className={`leaderboard ${showLeaderboard ? 'leaderboard--active' : ''}`}>
        <div className="leaderboard__head">
          <FontAwesomeIcon icon={ faCrown } />
          <h2>Leaderboard</h2>
        </div>
        <div className="leaderboard__body">
          <ol className="leaderboard__list">
            { leaderboard.filter((item) => {
                return item.score > 0
              })
              .slice(0, 10)
              .sort(function(a, b) {
                let keyA = a.score,
                  keyB = b.score;
                if (keyA < keyB) return 1;
                if (keyA > keyB) return -1;
                return 0;
              })
              .map(item => {
                return (
                  <li key={ item.id } className="leaderboard__item">
                    <mark>{ item.name }</mark>
                    <small>{ item.score } <span>Clicks: { item.clicks }</span></small>
                  </li>
                )
              }) 
            }
          </ol>
        </div>
      </aside>
    </>
  )
}

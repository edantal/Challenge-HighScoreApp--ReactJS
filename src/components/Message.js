import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Message({ showMsg, msg, success }) {
  return (
    <div className={`msg ${showMsg ? 'msg--active' : ''} ${success ? 'msg--success' : 'msg--error'}`}>
      <div className="msg__box">
        <p className="msg__text">
          <FontAwesomeIcon icon={ success ? faCheckCircle : faExclamationCircle } /> {msg}
        </p>
      </div>
    </div>
  )
}
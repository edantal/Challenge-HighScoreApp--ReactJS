import React from 'react';
// import useForm from '../utils/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export default function Message({ show_msg, msg }) {
  return (
    <div className={`msg ${show_msg ? 'msg--active' : ''}`}>
      <div className="msg__box">
        <p className="msg__text">
          <FontAwesomeIcon icon={faExclamationCircle} /> {msg}
        </p>
      </div>
    </div>
  )
}
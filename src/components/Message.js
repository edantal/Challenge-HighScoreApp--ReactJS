import React from 'react';
// import useForm from '../utils/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export default function Message() {
  return (
    <div className="msg">
      <div className="msg__box">
        <p className="msg__text">
          <FontAwesomeIcon icon={faExclamationCircle} /> test
        </p>
      </div>
    </div>
  )
}

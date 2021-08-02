import React from 'react';
import Score from './Score';
import useForm from '../utils/useForm';
import validate from '../utils/validateForm';

export default function Form({ submitForm }) {
  const { handleScore, handleChange, handleSubmit, vals, errs} = useForm(
    submitForm,
    validate
  );

  return (
      <form onSubmit={handleSubmit} className="form" noValidate>
        <Score handleScore={handleScore} score={vals.score} clicks={vals.clicks} />
        {errs.clicks && <p className="err">{errs.clicks}</p>}

        <div className="form__input">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Enter your name"
            value={vals.name}
            onChange={handleChange}
          />
          {errs.name && <p className="err">{errs.name}</p>}
        </div>
        <div className="form__btns">
          <button className="btn__cta" type="Submit">Submit</button>
          <button className="btn__cta">Start over</button>
        </div>
      </form>
  )
}

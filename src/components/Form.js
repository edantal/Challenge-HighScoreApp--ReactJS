import React from 'react';
import Score from './Score';
import useForm from '../utils/useForm';
import validate from '../utils/validateForm';

export default function Form({ submitForm }) {
  const { handleScore, handleChange, handleSubmit, handleReset, vals, formErrs } = useForm(
    submitForm,
    validate
  );

  return (
      <form onSubmit={handleSubmit} className="form" noValidate>
        <Score handleScore={handleScore} score={vals.score} clicks={vals.clicks} />
        {formErrs.clicks && <p className="err">{formErrs.clicks}</p>}

        <div className="form__input">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Enter your name"
            value={vals.name}
            onChange={handleChange}
          />
          {formErrs.name && <p className="err">{formErrs.name}</p>}
        </div>
        <div className="form__btns">
          <button className="btn__cta" type="Submit">Submit</button>
          <button className="btn__cta" onClick={handleReset}>Start over</button>
        </div>
      </form>
  )
}

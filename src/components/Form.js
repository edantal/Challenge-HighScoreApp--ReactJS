import React from 'react';
import { useForm } from 'react-hook-form';
import content from '../static'; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ACTIONS } from '../App.js';

const schema = yup.object().shape({
  name: yup.string().required('Please fill in your name'),
});

export default function Form({ score, clicks, dispatch }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({score, clicks, ...data})
    };
    fetch('https://httpbin.org/post', req)
      .then((response) => {
        if(response.ok) {
          return response.json();
        } else {
          dispatch({
            type: ACTIONS.SET_ERROR,
            payload: `Server error: Something went wrong.`
          })
        }
      })
      .then((responseJson) => {
        dispatch({
          type: ACTIONS.SET_SUCCESS,
          payload: responseJson.json
        })
      })
      .catch((error) => {
        dispatch({
          type: ACTIONS.SET_ERROR,
          payload: `Server error: ${error.message}`
        })
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>
      {content.inputs.map((input, key) => {
        return (
          <div key={key} className="form__input">
            <input
              type={input.type}
              name={input.name}
              className="input"
              placeholder={input.placeholder}
              {...register(input.name)}
            />
            {errors[input.name]?.message && <p className="form__error">{errors[input.name]?.message}</p>}
          </div>
        );
      })}
      <div className="form__btns">
        <button className="btn__cta" type="Submit">Submit</button>
        <button
          className="btn__cta"
          onClick={() => {
            dispatch({
              type: ACTIONS.RESET_SCORE
            })
          }}
        >
          Start over
        </button>
      </div>
    </form>
  )
}

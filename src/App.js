import React, { useState, useCallback } from 'react';
import './App.css';
import Form from './components/Form';
import Success from './components/Success';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [vals, setOnSuccess] = useState({
    name: '',
    clicks: 0,
    score: 0,
  });
  
  const submitForm = useCallback((vals) => {
    setOnSuccess({
      ...vals,
      name: vals.name,
      clicks: vals.clicks,
      score: vals.score
    });
    // console.log(vals);
    setIsSubmitted(true);
  }, [setIsSubmitted]);

  return (
    <div className="App">
      <h1>High Score App</h1>
      <div className="container">
        {!isSubmitted ? (
          <Form submitForm={submitForm} />
        ) : (
          <Success vals={vals} />
        )}

      </div>
    </div>
  );
}

export default App;

import React, { useState, useCallback } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
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
      <Header />
      <div className="container">
        {!isSubmitted ? (
          <Form submitForm={submitForm} />
        ) : (
          <Success vals={vals} />
        )}

      </div>
      <Footer />
    </div>
  );
}

export default App;
